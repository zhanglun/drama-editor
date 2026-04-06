package main

import (
	"log"

	"github.com/drama-editor/server/internal/config"
	"github.com/drama-editor/server/internal/database"
	"github.com/drama-editor/server/internal/handlers"
	"github.com/drama-editor/server/internal/services"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	if err := godotenv.Load(); err != nil {
		log.Println("No .env file found, using environment variables")
	}

	cfg := config.Load()

	if err := database.Connect(cfg); err != nil {
		log.Fatal("Failed to connect to database:", err)
	}

	if err := database.Migrate(); err != nil {
		log.Fatal("Failed to migrate database:", err)
	}

	if cfg.Environment == "production" {
		gin.SetMode(gin.ReleaseMode)
	}

	router := gin.Default()

	router.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000", "http://localhost:3001", "http://localhost:3002"},
		AllowMethods:     []string{"GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
	}))

	scriptService := services.NewScriptService()
	characterService := services.NewCharacterService()
	versionService := services.NewVersionService()
	variantService := services.NewVariantService()

	scriptHandler := handlers.NewScriptHandler(scriptService)
	characterHandler := handlers.NewCharacterHandler(characterService)
	versionHandler := handlers.NewVersionHandler(versionService)
	variantHandler := handlers.NewVariantHandler(variantService)

	api := router.Group("/api")
	{
		scripts := api.Group("/scripts")
		{
			scripts.GET("", scriptHandler.List)
			scripts.GET("/:id", scriptHandler.Get)
			scripts.POST("", scriptHandler.Create)
			scripts.PUT("/:id", scriptHandler.Update)
			scripts.PATCH("/:id", scriptHandler.Patch)
			scripts.DELETE("/:id", scriptHandler.Delete)
		}

		versions := api.Group("/scripts/:id/versions")
		{
			versions.GET("", versionHandler.List)
			versions.GET("/:id", versionHandler.Get)
			versions.POST("", versionHandler.Create)
			versions.DELETE("/:id", versionHandler.Delete)
		}

		variants := api.Group("/scripts/:id/variants")
		{
			variants.GET("", variantHandler.List)
			variants.GET("/:vid", variantHandler.Get)
			variants.POST("", variantHandler.Create)
			variants.PUT("/:vid", variantHandler.Update)
			variants.DELETE("/:vid", variantHandler.Delete)

			variants.POST("/:vid/links", variantHandler.AddLinks)
			variants.DELETE("/:vid/links/:sceneId", variantHandler.RemoveLink)
		}

		characters := api.Group("/scripts/:id/characters")
		{
			characters.GET("", characterHandler.List)
			characters.GET("/:cid", characterHandler.Get)
			characters.POST("", characterHandler.Create)
			characters.PUT("/:cid", characterHandler.Update)
			characters.DELETE("/:cid", characterHandler.Delete)
		}

		canvas := api.Group("/scripts/:id/canvas")
		{
			canvas.GET("", variantHandler.GetCanvasState)
			canvas.PUT("", variantHandler.SaveCanvasState)
		}

		export := api.Group("/export")
		{
			export.GET("/scripts/:id/pdf", scriptHandler.ExportPDF)
			export.GET("/scripts/:id/docx", scriptHandler.ExportDOCX)
			export.GET("/scripts/:id/txt", scriptHandler.ExportTXT)
		}
	}

	log.Printf("Server starting on port %s", cfg.Port)
	if err := router.Run(":" + cfg.Port); err != nil {
		log.Fatal("Failed to start server:", err)
	}
}
