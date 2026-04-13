import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { CharacterCanvasPage } from './pages/CharacterCanvasPage'
import { HomePage } from './pages/HomePage'
import { ScriptsPage } from './pages/ScriptsPage'
import { NewScriptPage } from './pages/NewScriptPage'
import { ScriptEditorPage } from './pages/ScriptEditorPage'
import { VersionsPage } from './pages/VersionsPage'
import { DiffPage } from './pages/DiffPage'
import { TextEditorPage } from './pages/TextEditorPage'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-8">
                <Link to="/" className="text-xl font-bold text-primary-600">
                  Drama Editor
                </Link>
                <nav className="flex space-x-4">
                  <Link
                    to="/scripts"
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                  >
                    剧本列表
                  </Link>
                  <Link
                    to="/scripts/new"
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                  >
                    新建剧本
                  </Link>
                  <Link
                    to="/text-editor"
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                  >
                    文本编辑
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/scripts" element={<ScriptsPage />} />
            <Route path="/scripts/new" element={<NewScriptPage />} />
            <Route path="/scripts/:id" element={<ScriptEditorPage />} />
            <Route path="/scripts/:id/versions" element={<VersionsPage />} />
            <Route path="/scripts/:id/versions/:versionId/diff" element={<DiffPage />} />
            <Route path="/scripts/:id/characters/canvas" element={<CharacterCanvasPage />} />
            <Route path="/text-editor" element={<TextEditorPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
