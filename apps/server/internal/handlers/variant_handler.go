package handlers

import (
	"net/http"

	"github.com/drama-editor/server/internal/models"
	"github.com/drama-editor/server/internal/services"
	"github.com/gin-gonic/gin"
)

type VariantHandler struct {
	service *services.VariantService
}

func NewVariantHandler(service *services.VariantService) *VariantHandler {
	return &VariantHandler{service: service}
}

func (h *VariantHandler) List(c *gin.Context) {
	scriptID := c.Param("id")

	variants, err := h.service.List(scriptID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, variants)
}

func (h *VariantHandler) Get(c *gin.Context) {
	vid := c.Param("vid")

	variant, err := h.service.Get(vid)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Variant not found"})
		return
	}

	c.JSON(http.StatusOK, variant)
}

func (h *VariantHandler) Create(c *gin.Context) {
	var req models.CreateVariantRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	variant, err := h.service.Create(req.CharacterID, req)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusCreated, variant)
}

func (h *VariantHandler) Update(c *gin.Context) {
	vid := c.Param("vid")

	var req models.UpdateVariantRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	variant, err := h.service.Update(vid, req)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, variant)
}

func (h *VariantHandler) Delete(c *gin.Context) {
	vid := c.Param("vid")
	cascade := c.Query("cascade") == "true"

	if err := h.service.Delete(vid, cascade); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.Status(http.StatusNoContent)
}

func (h *VariantHandler) GetTree(c *gin.Context) {
	characterID := c.Query("character_id")
	if characterID == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "character_id query parameter is required"})
		return
	}

	variants, err := h.service.GetTree(characterID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, variants)
}

func (h *VariantHandler) AddLinks(c *gin.Context) {
	vid := c.Param("vid")

	var req models.LinkSceneRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := h.service.AddLinks(vid, req.SceneIDs); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.Status(http.StatusNoContent)
}

func (h *VariantHandler) RemoveLink(c *gin.Context) {
	vid := c.Param("vid")
	sceneID := c.Param("sceneId")

	if err := h.service.RemoveLink(vid, sceneID); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.Status(http.StatusNoContent)
}

func (h *VariantHandler) GetSceneLinks(c *gin.Context) {
	vid := c.Param("vid")

	links, err := h.service.GetSceneLinks(vid)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, links)
}

func (h *VariantHandler) GetCanvasState(c *gin.Context) {
	scriptID := c.Param("id")

	state, err := h.service.LoadCanvasState(scriptID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, state)
}

func (h *VariantHandler) SaveCanvasState(c *gin.Context) {
	scriptID := c.Param("id")

	var state models.CanvasStateResponse
	if err := c.ShouldBindJSON(&state); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := h.service.SaveCanvasState(scriptID, state); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.Status(http.StatusNoContent)
}
