package handlers

import (
	"net/http"

	"github.com/drama-editor/server/internal/models"
	"github.com/drama-editor/server/internal/services"
	"github.com/gin-gonic/gin"
)

type ScriptHandler struct {
	service *services.ScriptService
}

func NewScriptHandler(service *services.ScriptService) *ScriptHandler {
	return &ScriptHandler{service: service}
}

func (h *ScriptHandler) List(c *gin.Context) {
	scripts, err := h.service.List()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, scripts)
}

func (h *ScriptHandler) Get(c *gin.Context) {
	id := c.Param("id")

	script, err := h.service.Get(id)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Script not found"})
		return
	}

	c.JSON(http.StatusOK, script)
}

func (h *ScriptHandler) Create(c *gin.Context) {
	var req models.CreateScriptRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	script, err := h.service.Create(req)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusCreated, script)
}

func (h *ScriptHandler) Update(c *gin.Context) {
	id := c.Param("id")

	var req models.UpdateScriptRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	script, err := h.service.Update(id, req)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, script)
}

func (h *ScriptHandler) Patch(c *gin.Context) {
	id := c.Param("id")

	var req models.UpdateScriptRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

    script, err := h.service.Patch(id, &req)
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
        return
    }

    c.JSON(http.StatusOK, script)
}

func (h *ScriptHandler) Delete(c *gin.Context) {
	id := c.Param("id")

	if err := h.service.Delete(id); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.Status(http.StatusNoContent)
}

func (h *ScriptHandler) ExportPDF(c *gin.Context) {
	id := c.Param("id")

	content, err := h.service.GetContentForExport(id)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.Header("Content-Type", "application/pdf")
	c.Header("Content-Disposition", "attachment; filename=script.pdf")
	c.String(http.StatusOK, content)
}

func (h *ScriptHandler) ExportDOCX(c *gin.Context) {
	id := c.Param("id")

	content, err := h.service.GetContentForExport(id)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.Header("Content-Type", "application/vnd.openxmlformats-officedocument.wordprocessingml.document")
	c.Header("Content-Disposition", "attachment; filename=script.docx")
	c.String(http.StatusOK, content)
}

func (h *ScriptHandler) ExportTXT(c *gin.Context) {
	id := c.Param("id")

	content, err := h.service.GetContentForExport(id)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.Header("Content-Type", "text/plain; charset=utf-8")
	c.Header("Content-Disposition", "attachment; filename=script.txt")
	c.String(http.StatusOK, content)
}
