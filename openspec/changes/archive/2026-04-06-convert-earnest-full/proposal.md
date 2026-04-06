## Why

当前《不可儿戏》(The Importance of Being Earnest) seed 数据可能不完整，需要验证并确保包含完整的三幕内容。作为 Oscar Wilde 的经典喜剧，这个剧本对于测试剧本编辑器在喜剧体裁、多角色对话场景下的表现至关重要。

## What Changes

- 验证并补全《不可儿戏》完整剧本（3 幕，约 20,000 词）
- 确保所有对白、舞台指示和场景描述都转换为 TipTap JSON 格式
- 扩展角色列表，包含所有 9 个主要角色
- 保持与现有 TipTap JSON 格式的一致性

## Capabilities

### New Capabilities

- `earnest-full-content`: 完整版《不可儿戏》TipTap JSON 内容，包含所有 3 幕的完整对白和舞台指示

### Modified Capabilities

无（这是内容补全，不修改现有功能）

## Impact

**代码文件：**
- `supabase/seeds/data/script-6-importance-being-earnest.ts` - 验证并可能补全内容（当前 ~30KB）

**数据库：**
- 运行 `pnpm seed` 后，确保数据库中的《不可儿戏》剧本包含完整内容
- 需要配合 `update-seed-logic` change 来支持更新已存在的剧本

**性能影响：**
- 喜剧体裁的剧本结构测试
- 多角色快速对话场景的渲染性能验证
