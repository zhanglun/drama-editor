import { useState, useRef, useCallback, useMemo } from 'react'
import Editor, { type OnMount, type BeforeMount } from '@monaco-editor/react'
import * as Tabs from '@radix-ui/react-tabs'
import { Upload, FileText, Pencil, Eye } from 'lucide-react'
import mammoth from 'mammoth'
import { ScriptPreview } from './text-editor/ScriptPreview'
import {
  ACTION_LINE_HIGHLIGHT_REGEX,
  ACTION_LINE_STATS_REGEX,
  AUDIO_EVENT_REGEX,
  DIALOGUE_CHARACTER_HIGHLIGHT_REGEX,
  DIALOGUE_LINE_STATS_REGEX,
  EPISODE_HEADER_CN_REGEX,
  EPISODE_HEADER_EN_REGEX,
  EPISODE_HEADER_SEASON_REGEX,
  FULLWIDTH_BRACKET_NOTE_REGEX,
  SCENE_HEADER_HIGHLIGHT_REGEX,
  SECTION_HEADER_REGEX,
  SQUARE_BRACKET_NOTE_REGEX,
  STAGE_DIRECTION_INLINE_REGEX,
  UI_EVENT_REGEX,
} from './text-editor/script-syntax'

const WORD_REGEX = /[\u4e00-\u9fff]|[a-zA-Z]+/g
const WHITESPACE_REGEX = /\s/g
const CHARS_PER_MINUTE = 500

function countWords(text: string): number {
  const matches = text.match(WORD_REGEX)
  return matches ? matches.length : 0
}

function countCharsNoWhitespace(text: string): number {
  return text.replace(WHITESPACE_REGEX, '').length
}

function countDialogue(text: string): number {
  let total = 0
  DIALOGUE_LINE_STATS_REGEX.lastIndex = 0
  let match = DIALOGUE_LINE_STATS_REGEX.exec(text)
  while (match !== null) {
    total += countWords(match[1])
    match = DIALOGUE_LINE_STATS_REGEX.exec(text)
  }
  return total
}

function countAction(text: string): number {
  let total = 0
  ACTION_LINE_STATS_REGEX.lastIndex = 0
  let match = ACTION_LINE_STATS_REGEX.exec(text)
  while (match !== null) {
    total += countWords(match[1])
    match = ACTION_LINE_STATS_REGEX.exec(text)
  }
  return total
}

function formatMinutes(minutes: number): string {
  if (minutes < 1) return '不到1分钟'
  if (minutes < 60) return `约${Math.round(minutes)}分钟`
  const hours = Math.floor(minutes / 60)
  const mins = Math.round(minutes % 60)
  return mins > 0 ? `约${hours}小时${mins}分钟` : `约${hours}小时`
}

export function TextEditorPage() {
  const [content, setContent] = useState<string>('')
  const [fileName, setFileName] = useState<string>('')
  const [activeTab, setActiveTab] = useState<string>('edit')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const stats = useMemo(() => {
    const wordCount = countWords(content)
    const charCountNoSpace = countCharsNoWhitespace(content)
    const dialogueWords = countDialogue(content)
    const actionWords = countAction(content)
    const total = dialogueWords + actionWords
    const dialogueRatio = total > 0 ? Math.round((dialogueWords / total) * 100) : 0
    const readingMinutes = wordCount / CHARS_PER_MINUTE
    const shootingMinutes = wordCount / CHARS_PER_MINUTE

    return {
      wordCount,
      charCountNoSpace,
      dialogueRatio,
      readingTime: formatMinutes(readingMinutes),
      shootingTime: formatMinutes(shootingMinutes),
      hasDialogue: total > 0,
    }
  }, [content])

  const handleBeforeMount: BeforeMount = useCallback((monaco) => {
    monaco.languages.register({ id: 'chinese-plaintext' })
    monaco.languages.setMonarchTokensProvider('chinese-plaintext', {
      unicode: true,
      tokenizer: {
        root: [
          [EPISODE_HEADER_CN_REGEX, 'episode-header'],
          [EPISODE_HEADER_EN_REGEX, 'episode-header'],
          [EPISODE_HEADER_SEASON_REGEX, 'episode-header'],

          [SECTION_HEADER_REGEX, 'section-header'],

          [SCENE_HEADER_HIGHLIGHT_REGEX, 'scene-header'],

          [ACTION_LINE_HIGHLIGHT_REGEX, 'action'],

          [AUDIO_EVENT_REGEX, 'audio-event'],
          [UI_EVENT_REGEX, 'ui-event'],
          [SQUARE_BRACKET_NOTE_REGEX, 'bracket-note'],
          [FULLWIDTH_BRACKET_NOTE_REGEX, 'bracket-note'],
          [STAGE_DIRECTION_INLINE_REGEX, 'stage-direction'],

          [DIALOGUE_CHARACTER_HIGHLIGHT_REGEX, 'character'],
        ],
      },
    })

    monaco.editor.defineTheme('script-dark', {
      base: 'vs-dark',
      inherit: true,
      rules: [
        { token: 'episode-header', foreground: 'E879F9', fontStyle: 'bold' },
        { token: 'section-header', foreground: '67E8F9', fontStyle: 'bold' },
        { token: 'scene-header', foreground: 'C084FC', fontStyle: 'bold' },
        { token: 'character', foreground: 'FACC15', fontStyle: 'bold' },
        { token: 'action', foreground: '4ADE80' },
        { token: 'audio-event', foreground: '60A5FA', fontStyle: 'italic' },
        { token: 'ui-event', foreground: 'F472B6', fontStyle: 'italic' },
        { token: 'stage-direction', foreground: 'FB923C', fontStyle: 'italic' },
        { token: 'bracket-note', foreground: '94A3B8', fontStyle: 'italic' },
      ],
      colors: {},
    })
  }, [])

  const handleEditorMount: OnMount = useCallback(() => {}, [])

  const handleFileUpload = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const extension = file.name.split('.').pop()?.toLowerCase()

    if (extension === 'txt') {
      const text = await file.text()
      setContent(text)
      setFileName(file.name)
    } else if (extension === 'docx') {
      const arrayBuffer = await file.arrayBuffer()
      const result = await mammoth.extractRawText({ arrayBuffer })
      setContent(result.value)
      setFileName(file.name)
    }

    setActiveTab('edit')
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }, [])

  const handleUploadClick = useCallback(() => {
    fileInputRef.current?.click()
  }, [])

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center space-x-6">
          {fileName && (
            <div className="flex items-center space-x-1 text-gray-300 text-sm">
              <FileText className="w-4 h-4" />
              <span>{fileName}</span>
            </div>
          )}
        </div>

        <div className="flex items-center space-x-4 text-gray-400 text-xs">
          <span>字数 <span className="text-gray-200 font-medium">{stats.wordCount}</span></span>
          <span className="text-gray-600">|</span>
          <span>去空格字符 <span className="text-gray-200 font-medium">{stats.charCountNoSpace}</span></span>
          <span className="text-gray-600">|</span>
          <span>对白占比 <span className="text-gray-200 font-medium">{stats.hasDialogue ? `${stats.dialogueRatio}%` : '-'}</span></span>
          <span className="text-gray-600">|</span>
          <span>阅读时间 <span className="text-gray-200 font-medium">{stats.readingTime}</span></span>
          <span className="text-gray-600">|</span>
          <span>拍摄时间 <span className="text-gray-200 font-medium">{stats.shootingTime}</span></span>
        </div>

        <button
          type="button"
          onClick={handleUploadClick}
          className="flex items-center space-x-2 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors"
        >
          <Upload className="w-4 h-4" />
          <span>上传文件</span>
        </button>

        <input
          ref={fileInputRef}
          type="file"
          accept=".txt,.docx"
          onChange={handleFileUpload}
          className="hidden"
        />
      </div>

      <Tabs.Root value={activeTab} onValueChange={setActiveTab} className="flex flex-col flex-1 overflow-hidden">
        <Tabs.List className="flex bg-gray-900 border-b border-gray-700 px-4">
          <Tabs.Trigger
            value="edit"
            className="flex items-center space-x-1.5 px-4 py-2 text-sm text-gray-400 hover:text-gray-200 transition-colors data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-blue-500"
          >
            <Pencil className="w-3.5 h-3.5" />
            <span>编辑</span>
          </Tabs.Trigger>
          <Tabs.Trigger
            value="preview"
            className="flex items-center space-x-1.5 px-4 py-2 text-sm text-gray-400 hover:text-gray-200 transition-colors data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-blue-500"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>预览</span>
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="edit" className="flex-1 overflow-hidden">
          <Editor
            height="100%"
            language="chinese-plaintext"
            theme="script-dark"
            value={content}
            onChange={(value) => setContent(value ?? '')}
            onMount={handleEditorMount}
            beforeMount={handleBeforeMount}
            options={{
              wordWrap: 'on',
              minimap: { enabled: false },
              fontSize: 14,
              lineNumbers: 'on',
              automaticLayout: true,
              scrollBeyondLastLine: false,
              padding: { top: 16 },
              unicodeHighlight: { ambiguousCharacters: false, invisibleCharacters: false },
            }}
          />
        </Tabs.Content>

        <Tabs.Content value="preview" className="flex-1 overflow-hidden bg-gray-100">
          <ScriptPreview content={content} />
        </Tabs.Content>
      </Tabs.Root>
    </div>
  )
}
