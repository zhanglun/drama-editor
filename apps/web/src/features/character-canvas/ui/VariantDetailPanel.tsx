import { useEffect, useState } from 'react'
import { X, Save, Loader2 } from 'lucide-react'
import { getVariant, updateVariant } from '../api'
import { TraitsEditor } from './TraitsEditor'
import { SceneLinkPanel } from './SceneLinkPanel'
import type { VariantResponse } from '../../../shared/types'

interface VariantDetailPanelProps {
  scriptId: string
  variantId: string
  onClose: () => void
}

export function VariantDetailPanel({ scriptId, variantId, onClose }: VariantDetailPanelProps) {
  const [variant, setVariant] = useState<VariantResponse | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [color, setColor] = useState('#6366f1')
  const [traits, setTraits] = useState<Record<string, unknown>>({})
  const [sceneIds, setSceneIds] = useState<string[]>([])

  useEffect(() => {
    const fetchVariant = async () => {
      setIsLoading(true)
      setError(null)
      
      const response = await getVariant(scriptId, variantId)
      
      if (response.error) {
        setError(response.error)
        setIsLoading(false)
        return
      }
      
      if (response.data) {
        const data = response.data
        setVariant(data)
        setName(data.name || '')
        setDescription(data.description || '')
        setImageUrl(data.image_url || '')
        setColor(data.color || '#6366f1')
        setTraits(data.traits || {})
        setSceneIds(data.scene_ids || [])
      }
      
      setIsLoading(false)
    }
    
    fetchVariant()
  }, [scriptId, variantId])

  const reloadVariant = async () => {
    const response = await getVariant(scriptId, variantId)
    if (response.data) {
      setVariant(response.data)
      setSceneIds(response.data.scene_ids || [])
    }
  }

  const handleSave = async () => {
    if (!name.trim()) {
      setError('名称不能为空')
      return
    }
    
    setIsSaving(true)
    setError(null)
    
    const response = await updateVariant(scriptId, variantId, {
      name: name.trim(),
      description: description.trim() || undefined,
      image_url: imageUrl.trim() || undefined,
      color,
      traits,
    })
    
    if (response.error) {
      setError(response.error)
      setIsSaving(false)
      return
    }
    
    if (response.data) {
      setVariant(response.data)
    }
    
    setIsSaving(false)
  }

  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin text-indigo-600 mx-auto" />
          <p className="mt-2 text-sm text-gray-500">加载中...</p>
        </div>
      </div>
    )
  }

  if (error && !variant) {
    return (
      <div className="h-full flex items-center justify-center p-6">
        <div className="text-center">
          <div className="text-red-400 mb-4">
            <X className="w-12 h-12 mx-auto" />
          </div>
          <p className="text-sm text-red-600">{error}</p>
          <button
            onClick={onClose}
            className="mt-4 text-sm text-gray-600 hover:text-gray-900 underline"
          >
            关闭
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="h-full flex flex-col bg-white">
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 truncate flex-1">
          {variant?.name || '编辑形象'}
        </h2>
        <button
          onClick={onClose}
          className="ml-2 p-1 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="关闭"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {error && (
          <div className="px-4 py-3 bg-red-50 border-b border-red-100">
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}

        <div className="px-4 py-3 space-y-3">
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">
            基本信息
          </div>
          
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              名称
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-transparent"
              placeholder="形象名称"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              描述
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-transparent resize-none"
              placeholder="形象描述"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              图片 URL
            </label>
            <input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-transparent"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              颜色
            </label>
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="w-8 h-8 rounded border-0 cursor-pointer"
              />
              <span className="text-sm text-gray-600 font-mono">{color}</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100" />

        <div className="px-4 py-3">
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-3">
            属性特征
          </div>
          <TraitsEditor
            traits={traits}
            onChange={setTraits}
          />
        </div>

        <div className="border-t border-gray-100" />

        <div className="px-4 py-3">
          <SceneLinkPanel
            scriptId={scriptId}
            variantId={variantId}
            currentSceneIds={sceneIds}
            onLinksChange={reloadVariant}
          />
        </div>

        <div className="h-16" />
      </div>

      <div className="border-t border-gray-200 p-4 bg-white">
        <button
          onClick={handleSave}
          disabled={isSaving}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isSaving ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>保存中...</span>
            </>
          ) : (
            <>
              <Save className="w-4 h-4" />
              <span>保存</span>
            </>
          )}
        </button>
      </div>
    </div>
  )
}
