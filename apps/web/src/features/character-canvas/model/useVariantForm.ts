import { useEffect, useState } from 'react'
import { getVariant, updateVariant } from '../api'
import type { VariantResponse } from '../../../shared/types'

interface UseVariantFormReturn {
  variant: VariantResponse | null
  isLoading: boolean
  isSaving: boolean
  error: string | null
  name: string
  description: string
  imageUrl: string
  color: string
  traits: Record<string, unknown>
  sceneIds: string[]
  setName: (name: string) => void
  setDescription: (description: string) => void
  setImageUrl: (url: string) => void
  setColor: (color: string) => void
  setTraits: (traits: Record<string, unknown>) => void
  handleSave: () => Promise<void>
  reloadVariant: () => Promise<void>
}

export function useVariantForm(scriptId: string, variantId: string): UseVariantFormReturn {
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

  return {
    variant,
    isLoading,
    isSaving,
    error,
    name,
    description,
    imageUrl,
    color,
    traits,
    sceneIds,
    setName,
    setDescription,
    setImageUrl,
    setColor,
    setTraits,
    handleSave,
    reloadVariant,
  }
}
