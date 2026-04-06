package services

import (
	"github.com/drama-editor/server/internal/database"
	"github.com/drama-editor/server/internal/models"
)

type CharacterService struct{}

func NewCharacterService() *CharacterService {
	return &CharacterService{}
}

func (s *CharacterService) List(scriptID string) ([]models.Character, error) {
	var characters []models.Character
	if err := database.GetDB().Where("script_id = ?", scriptID).Find(&characters).Error; err != nil {
		return nil, err
	}
	return characters, nil
}

func (s *CharacterService) Get(id string) (*models.Character, error) {
	var character models.Character
	if err := database.GetDB().Where("id = ?", id).First(&character).Error; err != nil {
		return nil, err
	}
	return &character, nil
}

func (s *CharacterService) Create(scriptID string, req models.CreateCharacterRequest) (*models.Character, error) {
	character := models.Character{
		ScriptID:    scriptID,
		Name:        req.Name,
		Description: req.Description,
		AvatarURL:   req.AvatarURL,
	}

	if err := database.GetDB().Create(&character).Error; err != nil {
		return nil, err
	}

	return &character, nil
}

func (s *CharacterService) Update(id string, req models.UpdateCharacterRequest) (*models.Character, error) {
	var character models.Character
	if err := database.GetDB().Where("id = ?", id).First(&character).Error; err != nil {
		return nil, err
	}

	updates := map[string]interface{}{}
	if req.Name != "" {
		updates["name"] = req.Name
	}
	if req.Description != "" {
		updates["description"] = req.Description
	}
	if req.AvatarURL != "" {
		updates["avatar_url"] = req.AvatarURL
	}
	if req.Color != "" {
		updates["color"] = req.Color
	}
	if req.CanvasPosition != nil {
		updates["canvas_position"] = req.CanvasPosition
	}

	if err := database.GetDB().Model(&character).Updates(updates).Error; err != nil {
		return nil, err
	}

	return &character, nil
}

func (s *CharacterService) Delete(id string) error {
	return database.GetDB().Where("id = ?", id).Delete(&models.Character{}).Error
}
