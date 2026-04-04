# ScriptList 搜索和排序功能实现说明

## 概述

`ScriptList` 组件已经完整实现了搜索和排序功能，这些功能在将组件集成到 `ScriptsPage` 后自动可用。

## 搜索功能实现

### 实现位置
文件：`apps/web/src/components/ScriptList/ScriptList.tsx`

### 搜索字段
- **标题 (title)**: 剧本标题的模糊匹配
- **描述 (description)**: 剧本描述的模糊匹配
- **内容 (content)**: 剧本文本内容的模糊匹配

### 实现代码
```typescript
const [searchQuery, setSearchQuery] = useState('')

const filteredAndSortedScripts = useMemo(() => {
  let filtered = scripts

  if (searchQuery.trim()) {
    const query = searchQuery.toLowerCase()
    filtered = scripts.filter(script => {
      const titleMatch = script.title.toLowerCase().includes(query)
      const descriptionMatch = script.description?.toLowerCase().includes(query) || false

      let contentMatch = false
      if (script.content?.content) {
        const contentText = script.content.content
          .map(node => node.text || '')
          .join(' ')
          .toLowerCase()
        contentMatch = contentText.includes(query)
      }

      return titleMatch || descriptionMatch || contentMatch
    })
  }
  // ... 排序逻辑
  return sorted
}, [scripts, sortBy, sortOrder, searchQuery])
```

### 搜索特性
1. **实时搜索**: 使用 `onChange` 事件触发，无需按回车
2. **不区分大小写**: 统一转换为小写进行比较
3. **模糊匹配**: 使用 `includes()` 方法支持部分匹配
4. **多字段搜索**: 同时搜索标题、描述和内容
5. **性能优化**: 使用 `useMemo` 缓存计算结果

### UI 展示
- 搜索框位于列表顶部
- 显示搜索结果数量（"X of Y scripts"）
- 空搜索结果显示友好提示
- 提供 "Clear search" 按钮

## 排序功能实现

### 实现位置
文件：`apps/web/src/components/ScriptList/ScriptList.tsx`

### 排序字段
- **title**: 按标题字母顺序
- **updated_at**: 按最后修改时间（默认）
- **created_at**: 按创建时间

### 实现代码
```typescript
type SortBy = 'title' | 'updated_at' | 'created_at'
type SortOrder = 'asc' | 'desc'

const [sortBy, setSortBy] = useState<SortBy>('updated_at')
const [sortOrder, setSortOrder] = useState<SortOrder>('desc')

const handleSortChange = (newSortBy: SortBy) => {
  if (sortBy === newSortBy) {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
  } else {
    setSortBy(newSortBy)
    setSortOrder('desc')
  }
}

const sorted = [...filtered].sort((a, b) => {
  let comparison = 0

  if (sortBy === 'title') {
    comparison = a.title.localeCompare(b.title)
  } else if (sortBy === 'updated_at') {
    comparison = new Date(a.updated_at).getTime() - new Date(b.updated_at).getTime()
  } else if (sortBy === 'created_at') {
    comparison = new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
  }

  return sortOrder === 'asc' ? comparison : -comparison
})
```

### 排序特性
1. **默认排序**: 按修改时间降序（最新修改的在前）
2. **方向切换**: 点击同一排序字段时切换升序/降序
3. **字段切换**: 切换排序字段时默认使用降序
4. **标题排序**: 使用 `localeCompare` 支持国际化
5. **时间排序**: 转换为时间戳进行精确比较

### UI 交互
- 三个排序按钮：Title、Modified、Created
- 当前排序字段高亮显示（indigo-100 背景）
- 排序方向图标：
  - 升序：向上箭头
  - 降序：向下箭头
  - 未选中：双向箭头（灰色）
- 活动排序字段的箭头使用 indigo-600 颜色

## 性能优化

### useMemo 缓存
```typescript
const filteredAndSortedScripts = useMemo(() => {
  // 搜索和排序逻辑
}, [scripts, sortBy, sortOrder, searchQuery])
```

只在依赖项变化时重新计算，避免不必要的渲染。

### 前端过滤
- 所有搜索和排序在前端执行
- 避免频繁的后端 API 调用
- 适合当前数据量较小的场景

## 状态管理

### 搜索状态
```typescript
const [searchQuery, setSearchQuery] = useState('')
```

### 排序状态
```typescript
const [sortBy, setSortBy] = useState<SortBy>('updated_at')
const [sortOrder, setSortOrder] = useState<SortOrder>('desc')
```

## 集成到 ScriptsPage

在 `App.tsx` 中：
```typescript
function ScriptsPage() {
  return <ScriptList />
}
```

`ScriptList` 组件自带所有搜索和排序功能，无需额外配置。

## 测试要点

### 搜索功能测试
1. ✅ 输入搜索词，验证实时过滤
2. ✅ 测试标题搜索
3. ✅ 测试描述搜索
4. ✅ 测试内容搜索
5. ✅ 测试大小写不敏感
6. ✅ 测试空搜索结果显示
7. ✅ 测试清除搜索功能

### 排序功能测试
1. ✅ 测试按标题排序
2. ✅ 测试按修改时间排序
3. ✅ 测试按创建时间排序
4. ✅ 测试升序/降序切换
5. ✅ 测试排序 UI 交互
6. ✅ 验证默认排序（修改时间降序）

## 总结

`ScriptList` 组件的搜索和排序功能已经完整实现，包括：
- ✅ 多字段搜索（标题、描述、内容）
- ✅ 实时搜索
- ✅ 大小写不敏感
- ✅ 三种排序字段
- ✅ 升序/降序切换
- ✅ 友好的 UI 交互
- ✅ 性能优化（useMemo）
- ✅ 空状态处理

这些功能在将 `ScriptList` 集成到 `ScriptsPage` 后立即可用，无需额外开发工作。
