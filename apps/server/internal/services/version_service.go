package services

import (
	"github.com/drama-editor/server/internal/database"
	"github.com/drama-editor/server/internal/models"
)

type VersionService struct{}

func NewVersionService() *VersionService {
	return &VersionService{}
}

func (s *VersionService) List(scriptID string) ([]models.ScriptVersion, error) {
	var versions []models.ScriptVersion
	if err := database.GetDB().Where("script_id = ?", scriptID).Order("version_number ASC").Find(&versions).Error; err != nil {
		return nil, err
	}
	return versions, nil
}

func (s *VersionService) Get(id string) (*models.ScriptVersion, error) {
	var version models.ScriptVersion
	if err := database.GetDB().Where("id = ?", id).First(&version).Error; err != nil {
		return nil, err
	}
	return &version, nil
}

func (s *VersionService) Create(scriptID string, req models.CreateVersionRequest) (*models.ScriptVersion, error) {
	 versions, err := s.List(scriptID)
    if err != nil {
        return nil, err
    }

    versionNumber := 1
    if len(versions) > 0 {
        versionNumber = versions[len(versions)-1].VersionNumber + 1
    }

    version := models.ScriptVersion{
        ScriptID:      scriptID,
        VersionNumber: versionNumber,
        Content:       req.Content,
        ChangeSummary: req.ChangeSummary,
    }

    if err := database.GetDB().Create(&version).Error; err != nil {
        return nil, err
    }

    return &version, nil
}

func (s *VersionService) Delete(id string) error {
    return database.GetDB().Where("id = ?", id).Delete(&models.ScriptVersion{}).Error
}
