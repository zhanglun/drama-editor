package services

import (
	"github.com/drama-editor/server/internal/database"
    "github.com/drama-editor/server/internal/models"
)

type ScriptService struct{}

func NewScriptService() *ScriptService {
    return &ScriptService{}
}

func (s *ScriptService) List() ([]models.Script, error) {
    var scripts []models.Script
    if err := database.GetDB().Find(&scripts).Error; err != nil {
        return nil, err
    }
    return scripts, nil
}

func (s *ScriptService) Get(id string) (*models.Script, error) {
    var script models.Script
    if err := database.GetDB().Where("id = ?", id).First(&script).Error; err != nil {
        return nil, err
    }
    return &script, nil
}

func (s *ScriptService) Create(req models.CreateScriptRequest) (*models.Script, error) {
    script := models.Script{
        Title:       req.Title,
        Description: req.Description,
        Content:     req.Content,
    }

    if err := database.GetDB().Create(&script).Error; err != nil {
        return nil, err
    }

    return &script, nil
}

func (s *ScriptService) Update(id string, req models.UpdateScriptRequest) (*models.Script, error) {
    var script models.Script
    if err := database.GetDB().Where("id = ?", id).First(&script).Error; err != nil {
        return nil, err
    }

    updates := map[string]interface{}{}
    if req.Title != "" {
        updates["title"] = req.Title
    }
    if req.Description != "" {
        updates["description"] = req.Description
    }
    if req.Content.Type != "" {
        updates["content"] = req.Content
    }
    if req.Author != "" {
        updates["author"] = req.Author
    }
    if req.Genre != "" {
        updates["genre"] = req.Genre
    }
    if req.Logline != "" {
        updates["logline"] = req.Logline
    }
    if req.Notes != "" {
        updates["notes"] = req.Notes
    }

    if err := database.GetDB().Model(&script).Updates(updates).Error; err != nil {
        return nil, err
    }

    if err := database.GetDB().Where("id = ?", id).First(&script).Error; err != nil {
        return nil, err
    }

    return &script, nil
}

func (s *ScriptService) Patch(id string, req *models.UpdateScriptRequest) (*models.Script, error) {
    var script models.Script
    if err := database.GetDB().Where("id = ?", id).First(&script).Error; err != nil {
        return nil, err
    }

    updates := map[string]interface{}{}
    if req.Title != "" {
        updates["title"] = req.Title
    }
    if req.Description != "" {
        updates["description"] = req.Description
    }
    if req.Content.Type != "" {
        updates["content"] = req.Content
    }
    if req.Author != "" {
        updates["author"] = req.Author
    }
    if req.Genre != "" {
        updates["genre"] = req.Genre
    }
    if req.Logline != "" {
        updates["logline"] = req.Logline
    }
    if req.Notes != "" {
        updates["notes"] = req.Notes
    }

    if len(updates) == 0 {
        return &script, nil
    }

    if err := database.GetDB().Model(&script).Updates(updates).Error; err != nil {
        return nil, err
    }

    if err := database.GetDB().Where("id = ?", id).First(&script).Error; err != nil {
        return nil, err
    }

    return &script, nil
}

func (s *ScriptService) Delete(id string) error {
    return database.GetDB().Where("id = ?", id).Delete(&models.Script{}).Error
}

func (s *ScriptService) GetContentForExport(id string) (string, error) {
    script, err := s.Get(id)
    if err != nil {
        return "", err
    }

    return s.contentToText(script.Content), nil
}

func (s *ScriptService) contentToText(content models.ScriptContent) string {
    var text string
    for _, node := range content.Content {
        text += s.nodeToText(node) + "\n"
    }
    return text
}

func (s *ScriptService) nodeToText(node models.ScriptNode) string {
    if node.Text != "" {
        return node.Text
    }

    var text string
    for _, child := range node.Content {
        text += s.nodeToText(child)
    }

    switch node.Type {
    case "heading":
        return "\n" + text + "\n"
    case "paragraph":
        return text + "\n"
    default:
        return text
    }
}
