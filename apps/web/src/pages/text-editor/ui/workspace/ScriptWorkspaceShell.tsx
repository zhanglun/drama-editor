import * as Tabs from '@radix-ui/react-tabs'
import type { ReactNode } from 'react'
import type { ScriptWorkspaceTab } from '../../model'

interface ScriptWorkspaceShellProps {
  activeTab: ScriptWorkspaceTab
  onTabChange: (tab: ScriptWorkspaceTab | string) => void
  sidebar: ReactNode
  header: ReactNode
  editPane: ReactNode
  previewPane: ReactNode
}

export function ScriptWorkspaceShell({
  activeTab,
  onTabChange,
  sidebar,
  header,
  editPane,
  previewPane,
}: ScriptWorkspaceShellProps) {
  return (
    <div className="flex h-[calc(100vh-10rem)] min-h-[720px] overflow-hidden rounded-[28px] border border-[#2c2428] bg-[#120f10] shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
      <aside className="w-[280px] shrink-0 border-r border-white/8">
        {sidebar}
      </aside>

      <Tabs.Root
        value={activeTab}
        onValueChange={onTabChange}
        className="flex min-w-0 flex-1 flex-col"
      >
        {header}

        <div className="border-b border-white/8 px-5">
          <Tabs.List className="flex gap-1 py-3">
            <Tabs.Trigger
              value="edit"
              className="rounded-full px-4 py-2 text-sm text-[#9d9499] transition data-[state=active]:bg-[#2c2227] data-[state=active]:text-white"
            >
              剧本编辑
            </Tabs.Trigger>
            <Tabs.Trigger
              value="preview"
              className="rounded-full px-4 py-2 text-sm text-[#9d9499] transition data-[state=active]:bg-[#2c2227] data-[state=active]:text-white"
            >
              剧本预览
            </Tabs.Trigger>
          </Tabs.List>
        </div>

        <div className="min-h-0 flex-1 bg-[#120f10] p-5">
          <Tabs.Content value="edit" className="h-full outline-none">
            {editPane}
          </Tabs.Content>
          <Tabs.Content value="preview" className="h-full outline-none">
            {previewPane}
          </Tabs.Content>
        </div>
      </Tabs.Root>
    </div>
  )
}
