package services

import (
	"encoding/json"
	"fmt"

	"github.com/drama-editor/server/internal/database"
	"github.com/drama-editor/server/internal/models"
	"gorm.io/gorm"
	"gorm.io/gorm/clause"
)

type VariantService struct{}

func NewVariantService() *VariantService {
	return &VariantService{}
}

func (s *VariantService) List(scriptID string) ([]models.VariantResponse, error) {
	var characters []models.Character
	if err := database.GetDB().Where("script_id = ?", scriptID).Find(&characters).Error; err != nil {
		return nil, err
	}

	characterIDs := make([]string, len(characters))
	for i, c := range characters {
		characterIDs[i] = c.ID
	}

	var variants []models.CharacterVariant
	if len(characterIDs) > 0 {
		if err := database.GetDB().Where("character_id IN ?", characterIDs).Find(&variants).Error; err != nil {
			return nil, err
		}
	}

	childCountMap := map[string]int{}
	for _, v := range variants {
		if v.ParentVariantID != nil {
			childCountMap[*v.ParentVariantID]++
		}
	}

	variantSceneMap := map[string][]string{}
	if len(variants) > 0 {
		variantIDs := make([]string, len(variants))
		for i, v := range variants {
			variantIDs[i] = v.ID
		}
		var variantScenes []models.VariantScene
		if err := database.GetDB().Where("variant_id IN ?", variantIDs).Find(&variantScenes).Error; err != nil {
			return nil, err
		}
		for _, vs := range variantScenes {
			variantSceneMap[vs.VariantID] = append(variantSceneMap[vs.VariantID], vs.SceneID)
		}
	}

	result := make([]models.VariantResponse, 0, len(variants))
	for _, v := range variants {
		result = append(result, models.VariantResponse{
			CharacterVariant: v,
			SceneIDs:         variantSceneMap[v.ID],
			ChildCount:       childCountMap[v.ID],
		})
	}

	return result, nil
}

func (s *VariantService) Get(id string) (*models.VariantResponse, error) {
	var variant models.CharacterVariant
	if err := database.GetDB().Where("id = ?", id).First(&variant).Error; err != nil {
		return nil, err
	}

	var variantScenes []models.VariantScene
	database.GetDB().Where("variant_id = ?", id).Find(&variantScenes)

	sceneIDs := make([]string, 0, len(variantScenes))
	for _, vs := range variantScenes {
		sceneIDs = append(sceneIDs, vs.SceneID)
	}

	var childCount int64
	database.GetDB().Model(&models.CharacterVariant{}).Where("parent_variant_id = ?", id).Count(&childCount)

	return &models.VariantResponse{
		CharacterVariant: variant,
		SceneIDs:         sceneIDs,
		ChildCount:       int(childCount),
	}, nil
}

func (s *VariantService) Create(characterID string, req models.CreateVariantRequest) (*models.CharacterVariant, error) {
	var character models.Character
	if err := database.GetDB().Where("id = ?", characterID).First(&character).Error; err != nil {
		return nil, fmt.Errorf("character not found: %w", err)
	}

	if req.ParentVariantID != nil {
		var parent models.CharacterVariant
		if err := database.GetDB().Where("id = ? AND character_id = ?", *req.ParentVariantID, characterID).First(&parent).Error; err != nil {
			return nil, fmt.Errorf("parent variant not found or does not belong to this character: %w", err)
		}
	}

	variant := models.CharacterVariant{
		CharacterID:     characterID,
		ParentVariantID: req.ParentVariantID,
		Name:            req.Name,
		Description:     req.Description,
		ImageURL:        req.ImageURL,
		Traits:          req.Traits,
		Color:           req.Color,
		CanvasPosition:  req.CanvasPosition,
	}

	if variant.Traits == nil {
		variant.Traits = models.JSONBMap{}
	}
	if variant.CanvasPosition == nil {
		variant.CanvasPosition = models.JSONBMap{"x": 0, "y": 0}
	}

	if err := database.GetDB().Create(&variant).Error; err != nil {
		return nil, err
	}

	return &variant, nil
}

func (s *VariantService) Update(id string, req models.UpdateVariantRequest) (*models.CharacterVariant, error) {
	var variant models.CharacterVariant
	if err := database.GetDB().Where("id = ?", id).First(&variant).Error; err != nil {
		return nil, err
	}

	updates := map[string]interface{}{}
	if req.Name != "" {
		updates["name"] = req.Name
	}
	if req.Description != "" {
		updates["description"] = req.Description
	}
	if req.ImageURL != "" {
		updates["image_url"] = req.ImageURL
	}
	if req.Color != "" {
		updates["color"] = req.Color
	}
	if req.Traits != nil {
		updates["traits"] = req.Traits
	}
	if req.CanvasPosition != nil {
		updates["canvas_position"] = req.CanvasPosition
	}

	if len(updates) > 0 {
		if err := database.GetDB().Model(&variant).Updates(updates).Error; err != nil {
			return nil, err
		}
	}

	return &variant, nil
}

func (s *VariantService) Delete(id string, cascade bool) error {
	var variant models.CharacterVariant
	if err := database.GetDB().Where("id = ?", id).First(&variant).Error; err != nil {
		return err
	}

	return database.GetDB().Transaction(func(tx *gorm.DB) error {
		if cascade {
			descendantIDs, err := s.findDescendantIDs(tx, id)
			if err != nil {
				return err
			}
			allIDs := append(descendantIDs, id)

			if err := tx.Where("variant_id IN ?", allIDs).Delete(&models.VariantScene{}).Error; err != nil {
				return err
			}
			if err := tx.Where("id IN ?", allIDs).Delete(&models.CharacterVariant{}).Error; err != nil {
				return err
			}
		} else {
			if err := tx.Model(&models.CharacterVariant{}).Where("parent_variant_id = ?", id).
				Update("parent_variant_id", nil).Error; err != nil {
				return err
			}
			if err := tx.Where("variant_id = ?", id).Delete(&models.VariantScene{}).Error; err != nil {
				return err
			}
			if err := tx.Where("id = ?", id).Delete(&models.CharacterVariant{}).Error; err != nil {
				return err
			}
		}
		return nil
	})
}

func (s *VariantService) GetTree(characterID string) ([]models.VariantResponse, error) {
	var variants []models.CharacterVariant
	if err := database.GetDB().Where("character_id = ?", characterID).
		Order("created_at ASC").Find(&variants).Error; err != nil {
		return nil, err
	}

	childCountMap := map[string]int{}
	for _, v := range variants {
		if v.ParentVariantID != nil {
			childCountMap[*v.ParentVariantID]++
		}
	}

	variantIDs := make([]string, len(variants))
	for i, v := range variants {
		variantIDs[i] = v.ID
	}

	variantSceneMap := map[string][]string{}
	if len(variantIDs) > 0 {
		var variantScenes []models.VariantScene
		database.GetDB().Where("variant_id IN ?", variantIDs).Find(&variantScenes)
		for _, vs := range variantScenes {
			variantSceneMap[vs.VariantID] = append(variantSceneMap[vs.VariantID], vs.SceneID)
		}
	}

	result := make([]models.VariantResponse, 0, len(variants))
	for _, v := range variants {
		result = append(result, models.VariantResponse{
			CharacterVariant: v,
			SceneIDs:         variantSceneMap[v.ID],
			ChildCount:       childCountMap[v.ID],
		})
	}

	return result, nil
}

func (s *VariantService) AddLinks(variantID string, sceneIDs []string) error {
	links := make([]models.VariantScene, 0, len(sceneIDs))
	for _, sceneID := range sceneIDs {
		links = append(links, models.VariantScene{
			VariantID: variantID,
			SceneID:   sceneID,
		})
	}

	return database.GetDB().Clauses(clause.OnConflict{DoNothing: true}).Create(&links).Error
}

func (s *VariantService) RemoveLink(variantID string, sceneID string) error {
	return database.GetDB().Where("variant_id = ? AND scene_id = ?", variantID, sceneID).
		Delete(&models.VariantScene{}).Error
}

func (s *VariantService) GetSceneLinks(variantID string) ([]models.VariantScene, error) {
	var links []models.VariantScene
	if err := database.GetDB().Where("variant_id = ?", variantID).Find(&links).Error; err != nil {
		return nil, err
	}
	return links, nil
}

func (s *VariantService) SaveCanvasState(scriptID string, state models.CanvasStateResponse) error {
	stateJSON, err := json.Marshal(state)
	if err != nil {
		return fmt.Errorf("failed to marshal canvas state: %w", err)
	}

	return database.GetDB().Model(&models.Script{}).Where("id = ?", scriptID).
		Update("canvas_state", string(stateJSON)).Error
}

func (s *VariantService) LoadCanvasState(scriptID string) (*models.CanvasStateResponse, error) {
	var script models.Script
	if err := database.GetDB().Select("id, canvas_state").Where("id = ?", scriptID).First(&script).Error; err != nil {
		return nil, err
	}

	if script.CanvasState == nil {
		return &models.CanvasStateResponse{
			Nodes:    []models.CanvasNode{},
			Viewport: models.CanvasViewport{X: 0, Y: 0, Zoom: 1},
		}, nil
	}

	var state models.CanvasStateResponse
	stateBytes, err := json.Marshal(script.CanvasState)
	if err != nil {
		return nil, fmt.Errorf("failed to re-marshal canvas state: %w", err)
	}
	if err := json.Unmarshal(stateBytes, &state); err != nil {
		return nil, fmt.Errorf("failed to unmarshal canvas state: %w", err)
	}

	return &state, nil
}

func (s *VariantService) findDescendantIDs(tx *gorm.DB, variantID string) ([]string, error) {
	var ids []string
	rows, err := tx.Raw(`
		WITH RECURSIVE variant_tree AS (
			SELECT id FROM character_variants WHERE parent_variant_id = ?
			UNION ALL
			SELECT cv.id FROM character_variants cv JOIN variant_tree vt ON cv.parent_variant_id = vt.id
		)
		SELECT id FROM variant_tree
	`, variantID).Rows()
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	for rows.Next() {
		var id string
		if err := rows.Scan(&id); err != nil {
			return nil, err
		}
		ids = append(ids, id)
	}
	return ids, nil
}
