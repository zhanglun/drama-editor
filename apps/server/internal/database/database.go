package database

import (
	"log"

	"github.com/drama-editor/server/internal/config"
	"github.com/drama-editor/server/internal/models"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

var DB *gorm.DB

func Connect(cfg *config.Config) error {
	var err error

	logLevel := logger.Info
	if cfg.Environment == "production" {
		logLevel = logger.Warn
	}

	DB, err = gorm.Open(postgres.Open(cfg.GetDSN()), &gorm.Config{
		Logger: logger.Default.LogMode(logLevel),
	})
	if err != nil {
		return err
	}

	sqlDB, err := DB.DB()
	if err != nil {
		return err
	}

	sqlDB.SetMaxIdleConns(10)
	sqlDB.SetMaxOpenConns(100)

	log.Println("Database connected successfully")
	return nil
}

func Migrate() error {
	err := DB.Exec("CREATE EXTENSION IF NOT EXISTS \"uuid-ossp\"").Error
	if err != nil {
		log.Printf("Warning: could not create uuid-ossp extension: %v", err)
	}

	err = DB.AutoMigrate(
		&models.Script{},
		&models.Character{},
		&models.ScriptVersion{},
		&models.CharacterVariant{},
		&models.VariantScene{},
	)
	if err != nil {
		return err
	}

	log.Println("Database migration completed successfully")
	return nil
}

func GetDB() *gorm.DB {
	return DB
}
