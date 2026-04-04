package handlers

import (
	"net/http"

	"github.com/drama-editor/server/internal/models"
	"github.com/drama-editor/server/internal/services"
	"github.com/gin-gonic/gin"
)

type VersionHandler struct {
	service *services.VersionService
}

func NewVersionHandler(service *services.VersionService) *VersionHandler {
	return &VersionHandler{service: service}
}

func (h *VersionHandler) List(c *gin.Context) {
	scriptID := c.Param("id")

	versions, err := h.service.List(scriptID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, versions)
}

func (h *VersionHandler) Get(c *gin.Context) {
	id := c.Param("id")

	version, err := h.service.Get(id)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Version not found"})
		return
	}

	c.JSON(http.StatusOK, version)
}

func (h *VersionHandler) Create(c *gin.Context) {
	scriptID := c.Param("id")

	var req models.CreateVersionRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	version, err := h.service.Create(scriptID, req)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusCreated, version)
}

func (h *VersionHandler) Delete(c *gin.Context) {
	id := c.Param("id")

	if err := h.service.Delete(id); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.Status(http.StatusNoContent)
}
