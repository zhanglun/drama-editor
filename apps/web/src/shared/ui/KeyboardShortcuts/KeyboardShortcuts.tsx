import { HelpCircle } from 'lucide-react'
import * as Tooltip from '@radix-ui/react-tooltip'

const SHORTCUTS = [
  { category: '编辑', items: [
    { key: 'Ctrl/Cmd + S', description: '保存剧本' },
    { key: 'Ctrl/Cmd + B', description: '粗体' },
    { key: 'Ctrl/Cmd + I', description: '斜体' },
    { key: 'Ctrl/Cmd + Z', description: '撤销' },
    { key: 'Ctrl/Cmd + Shift + Z', description: '重做' },
  ]},
  { category: '插入元素', items: [
    { key: '点击工具栏', description: '插入场景' },
    { key: '点击工具栏', description: '插入对白' },
    { key: '点击工具栏', description: '插入动作' },
    { key: '点击工具栏', description: '插入转场' },
  ]},
]

interface KeyboardShortcutsHelpProps {
  className?: string
}

export function KeyboardShortcutsHelp({ className }: KeyboardShortcutsHelpProps) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button
            className={`inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 p-2 ${className}`}
          >
            <HelpCircle className="h-5 w-5" />
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="z-50 overflow-hidden rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-md animate-in fade-in-0 zoom-in-95"
            sideOffset={5}
          >
            <div className="w-80">
              <h3 className="font-semibold mb-2 text-base">键盘快捷键</h3>
              {SHORTCUTS.map(category => (
                <div key={category.category} className="mb-3 last:mb-0">
                  <h4 className="text-xs font-medium text-gray-500 mb-1">{category.category}</h4>
                  <div className="space-y-1">
                    {category.items.map(item => (
                      <div key={item.key} className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">{item.description}</span>
                        <kbd className="px-2 py-0.5 text-xs font-mono bg-gray-100 rounded border border-gray-200">
                          {item.key}
                        </kbd>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <Tooltip.Arrow className="fill-white" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}

interface ShortcutTooltipProps {
  children: React.ReactNode
  shortcut: string
  description: string
}

export function ShortcutTooltip({ children, shortcut, description }: ShortcutTooltipProps) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          {children}
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="z-50 overflow-hidden rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-900 shadow-md animate-in fade-in-0 zoom-in-95"
            sideOffset={5}
          >
            <div className="flex items-center gap-2">
              <span>{description}</span>
              <kbd className="px-1.5 py-0.5 text-xs font-mono bg-gray-100 rounded border border-gray-200">
                {shortcut}
              </kbd>
            </div>
            <Tooltip.Arrow className="fill-white" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
