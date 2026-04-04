package handlers

import (
	"net/http"

	"github.com/drama-editor/server/internal/models"
	"github.com/drama-editor/server/internal/services"
	"github.com/gin-gonic/gin"
)

type CharacterHandler struct {
	service *services.CharacterService
}

func NewCharacterHandler(service *services.CharacterService) *CharacterHandler {
	return &CharacterHandler{service: service}
}

func (h *CharacterHandler) List(c *gin.Context) {
	scriptID := c.Param("id")

	characters, err := h.service.List(scriptID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, characters)
}

func (h *CharacterHandler) Get(c *gin.Context) {
	id := c.Param("id")

	character, err := h.service.Get(id)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Character not found"})
		return
	}

	c.JSON(http.StatusOK, character)
}

func (h *CharacterHandler) Create(c *gin.Context) {
	scriptID := c.Param("id")

	var req models.CreateCharacterRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	character, err := h.service.Create(scriptID, req)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusCreated, character)
}

func (h *CharacterHandler) Update(c *gin.Context) {
	id := c.Param("id")

	var req models.UpdateCharacterRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	character, err := h.service.Update(id, req)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, character)
}

func (h *CharacterHandler) Delete(c *gin.Context) {
	id := c.Param("id")

	if err := h.service.Delete(id); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.Status(http.StatusNoContent)
}
