import { LayoutGrid } from 'lucide-react'
import { useCharacterList } from './hooks'

export function CharacterPanel() {
  const {
    characters,
    newCharacterName,
    setNewCharacterName,
    editingId,
    editingName,
    setEditingName,
    handleAddCharacter,
    handleEditCharacter,
    handleSaveEdit,
    handleDeleteCharacter,
    handleKeyDown,
    currentScript,
    navigate,
  } = useCharacterList()

  if (!currentScript) {
    return (
      <div className="p-4 text-gray-500 text-center">
        请先选择一个剧本
      </div>
    )
  }

  return (
    <div className="h-full flex flex-col bg-white border-l border-gray-200">
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">角色列表</h3>
          <p className="text-sm text-gray-500 mt-1">
            共 {characters.length} 个角色
          </p>
        </div>
        <button
          onClick={() => {
            if (currentScript) {
              navigate(`/scripts/${currentScript.id}/characters/canvas`)
            }
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 rounded-md transition-colors"
          title="画布视图"
        >
          <LayoutGrid className="w-4 h-4" />
          <span>画布视图</span>
        </button>
      </div>

      <div className="p-4 border-b border-gray-200">
        <div className="flex gap-2">
          <input
            type="text"
            value={newCharacterName}
            onChange={(e) => setNewCharacterName(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e, 'add')}
            placeholder="添加新角色..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <button
            onClick={handleAddCharacter}
            disabled={!newCharacterName.trim()}
            className="px-4 py-2 bg-primary-600 text-white rounded-md text-sm hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            添加
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {characters.length === 0 ? (
          <div className="p-4 text-center text-gray-500 text-sm">
            暂无角色
          </div>
        ) : (
          <ul className="divide-y divide-gray-200">
            {characters.map((character: string, index: number) => (
              <li key={character} className="px-4 py-3 hover:bg-gray-50">
                {editingId === index ? (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={editingName}
                      onChange={(e) => setEditingName(e.target.value)}
                      onKeyDown={(e) => handleKeyDown(e, 'save', index)}
                      onBlur={() => handleSaveEdit(index)}
                      autoFocus
                      className="flex-1 px-2 py-1 border border-primary-500 rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">
                      {character}
                    </span>
                    <div className="flex gap-1">
                      <button
                        onClick={() => handleEditCharacter(index)}
                        className="p-1 text-gray-400 hover:text-primary-600"
                        title="编辑"
                      >
                        ✏️
                      </button>
                      <button
                        onClick={() => handleDeleteCharacter(index)}
                        className="p-1 text-gray-400 hover:text-red-600"
                        title="删除"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
