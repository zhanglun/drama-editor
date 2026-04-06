## Why

当前《哈姆雷特》seed 数据仅包含 3 个示例场景，无法充分测试剧本编辑器在大型、复杂剧本上的表现。开发者需要完整的公有领域剧本来验证编辑器的性能、滚动体验、内容加载和版本管理功能。

## What Changes

- 将《哈姆雷特》完整剧本（5 幕 20 场，约 30,000 词）转换为 TipTap JSON 格式
- 更新 `supabase/seeds/data/script-7-hamlet.ts` 文件，包含所有对白、舞台指示和场景描述
- 扩展角色列表，包含所有 30+ 个角色
- 保持与现有 TipTap JSON 格式的一致性（scene, dialogue, action, transition 节点类型）

## Capabilities

### New Capabilities

- `hamlet-full-content`: 完整版《哈姆雷特》TipTap JSON 内容，包含所有 5 幕 20 场的完整对白和舞台指示

### Modified Capabilities

无（这是新增内容，不修改现有功能）

## Impact

**代码文件：**
- `supabase/seeds/data/script-7-hamlet.ts` - 将从小型示例文件更新为完整剧本文件（预计 ~100KB）

**数据库：**
- 运行 `pnpm seed` 后，数据库中的《哈姆雷特》剧本内容将从 ~3KB 增加到 ~100KB
- 需要配合 `update-seed-logic` change 来支持更新已存在的剧本

**性能影响：**
- 前端加载和渲染大型剧本的性能测试
- TipTap 编辑器在 100KB+ 内容下的性能表现验证
- 版本历史功能的存储和对比性能验证
