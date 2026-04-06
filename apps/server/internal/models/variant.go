package models

import (
	"database/sql/driver"
	"encoding/json"
	"errors"
	"time"
)

type JSONBMap map[string]any

func (m JSONBMap) Value() (driver.Value, error) {
	if m == nil {
		return "{}", nil
	}
	return json.Marshal(m)
}

func (m *JSONBMap) Scan(value interface{}) error {
	if value == nil {
		*m = JSONBMap{}
		return nil
	}

	var bytes []byte
	switch v := value.(type) {
	case []byte:
		bytes = v
	case string:
		bytes = []byte(v)
	default:
		return errors.New("type assertion to []byte or string failed")
	}

	return json.Unmarshal(bytes, m)
}

type CharacterVariant struct {
	ID              string    `gorm:"type:uuid;default:uuid_generate_v4();primaryKey" json:"id"`
	CharacterID     string    `gorm:"type:uuid;not null;index" json:"character_id"`
	ParentVariantID *string   `gorm:"type:uuid;index" json:"parent_variant_id,omitempty"`
	Name            string    `gorm:"type:varchar(100);not null" json:"name"`
	Description     string    `gorm:"type:text" json:"description,omitempty"`
	ImageURL        string    `gorm:"type:text" json:"image_url,omitempty"`
	Traits          JSONBMap  `gorm:"type:jsonb;default:'{}'" json:"traits,omitempty"`
	Color           string    `gorm:"type:varchar(7)" json:"color,omitempty"`
	CanvasPosition  JSONBMap  `gorm:"type:jsonb;default:'{\"x\": 0, \"y\": 0}'" json:"canvas_position,omitempty"`
	CreatedAt       time.Time `gorm:"autoCreateTime" json:"created_at"`
	UpdatedAt       time.Time `gorm:"autoUpdateTime" json:"updated_at"`
}

func (CharacterVariant) TableName() string {
	return "character_variants"
}

type VariantScene struct {
	VariantID string    `gorm:"type:uuid;not null" json:"variant_id"`
	SceneID   string    `gorm:"type:varchar(255);not null" json:"scene_id"`
	CreatedAt time.Time `gorm:"autoCreateTime" json:"created_at"`
}

func (VariantScene) TableName() string {
	return "variant_scenes"
}

type CreateVariantRequest struct {
	CharacterID     string   `json:"character_id" binding:"required"`
	Name            string   `json:"name" binding:"required"`
	Description     string   `json:"description"`
	ImageURL        string   `json:"image_url"`
	ParentVariantID *string  `json:"parent_variant_id"`
	Traits          JSONBMap `json:"traits"`
	Color           string   `json:"color"`
	CanvasPosition  JSONBMap `json:"canvas_position"`
}

type UpdateVariantRequest struct {
	Name           string   `json:"name"`
	Description    string   `json:"description"`
	ImageURL       string   `json:"image_url"`
	Traits         JSONBMap `json:"traits"`
	Color          string   `json:"color"`
	CanvasPosition JSONBMap `json:"canvas_position"`
}

type LinkSceneRequest struct {
	SceneIDs []string `json:"scene_ids" binding:"required,min=1"`
}

type VariantResponse struct {
	CharacterVariant
	SceneIDs   []string `json:"scene_ids,omitempty"`
	ChildCount int      `json:"child_count,omitempty"`
}

type CanvasStateResponse struct {
	Nodes    []CanvasNode   `json:"nodes"`
	Viewport CanvasViewport `json:"viewport"`
}

type CanvasNode struct {
	ID       string `json:"id"`
	Type     string `json:"type"`
	Position struct {
		X float64 `json:"x"`
		Y float64 `json:"y"`
	} `json:"position"`
}

type CanvasViewport struct {
	X    float64 `json:"x"`
	Y    float64 `json:"y"`
	Zoom float64 `json:"zoom"`
}
