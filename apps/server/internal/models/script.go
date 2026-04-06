package models

import (
	"database/sql/driver"
	"encoding/json"
	"errors"
	"time"

	"gorm.io/gorm"
)

type Script struct {
	ID          string         `gorm:"type:uuid;default:uuid_generate_v4();primaryKey" json:"id"`
	Title       string         `gorm:"type:varchar(255);not null" json:"title"`
	Description string         `gorm:"type:text" json:"description,omitempty"`
	Content     ScriptContent  `gorm:"type:jsonb" json:"content,omitempty"`
	CanvasState JSONBMap       `gorm:"type:jsonb" json:"canvas_state,omitempty"`
	CreatedAt   time.Time      `gorm:"autoCreateTime" json:"created_at"`
	UpdatedAt   time.Time      `gorm:"autoUpdateTime" json:"updated_at"`
	DeletedAt   gorm.DeletedAt `gorm:"index" json:"deleted_at,omitempty"`
	Author      string         `gorm:"type:varchar(255)" json:"author,omitempty"`
	Genre       string         `gorm:"type:varchar(100)" json:"genre,omitempty"`
	Logline     string         `gorm:"type:text" json:"logline,omitempty"`
	Notes       string         `gorm:"type:text" json:"notes,omitempty"`
}

type Character struct {
	ID             string    `gorm:"type:uuid;default:uuid_generate_v4();primaryKey" json:"id"`
	ScriptID       string    `gorm:"type:uuid;not null;index" json:"script_id"`
	Name           string    `gorm:"type:varchar(255);not null" json:"name"`
	Description    string    `gorm:"type:text" json:"description,omitempty"`
	AvatarURL      string    `gorm:"type:text" json:"avatar_url,omitempty"`
	Traits         JSONBMap  `gorm:"type:jsonb;default:'{}'" json:"traits,omitempty"`
	Color          string    `gorm:"type:varchar(7);default:'#6366f1'" json:"color,omitempty"`
	CanvasPosition JSONBMap  `gorm:"type:jsonb;default:'{\"x\": 0, \"y\": 0}'" json:"canvas_position,omitempty"`
	CreatedAt      time.Time `gorm:"autoCreateTime" json:"created_at"`
}

type ScriptVersion struct {
	ID            string        `gorm:"type:uuid;default:uuid_generate_v4();primaryKey" json:"id"`
	ScriptID      string        `gorm:"type:uuid;not null;index" json:"script_id"`
	VersionNumber int           `gorm:"not null" json:"version_number"`
	Content       ScriptContent `gorm:"type:jsonb" json:"content"`
	ChangeSummary string        `gorm:"type:text" json:"change_summary,omitempty"`
	CreatedAt     time.Time     `gorm:"autoCreateTime" json:"created_at"`
}

type ScriptContent struct {
	Type    string       `json:"type"`
	Content []ScriptNode `json:"content"`
}

type ScriptNode struct {
	Type    string         `json:"type"`
	Content []ScriptNode   `json:"content,omitempty"`
	Text    string         `json:"text,omitempty"`
	Attrs   map[string]any `json:"attrs,omitempty"`
}

func (sc ScriptContent) Value() (driver.Value, error) {
	return json.Marshal(sc)
}

func (sc *ScriptContent) Scan(value interface{}) error {
	bytes, ok := value.([]byte)
	if !ok {
		return errors.New("type assertion to []byte failed")
	}
	return json.Unmarshal(bytes, sc)
}

type CreateScriptRequest struct {
	Title       string        `json:"title" binding:"required"`
	Description string        `json:"description"`
	Content     ScriptContent `json:"content"`
}

type UpdateScriptRequest struct {
	Title       string        `json:"title"`
	Description string        `json:"description"`
	Content     ScriptContent `json:"content"`
	Author      string        `json:"author"`
	Genre       string        `json:"genre"`
	Logline     string        `json:"logline"`
	Notes       string        `json:"notes"`
}

type CreateCharacterRequest struct {
	Name        string `json:"name" binding:"required"`
	Description string `json:"description"`
	AvatarURL   string `json:"avatar_url"`
}

type UpdateCharacterRequest struct {
	Name           string   `json:"name"`
	Description    string   `json:"description"`
	AvatarURL      string   `json:"avatar_url"`
	Color          string   `json:"color"`
	CanvasPosition JSONBMap `json:"canvas_position"`
}

type CreateVersionRequest struct {
	Content       ScriptContent `json:"content" binding:"required"`
	ChangeSummary string        `json:"change_summary"`
}
