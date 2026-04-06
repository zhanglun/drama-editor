## Why

当前《玩偶之家》(A Doll's House) seed 数据是简化版本，不包含完整的三幕内容。作为 Henrik Ibsen 的经典现实主义戏剧，这个剧本对于测试剧本编辑器在现实主义题材、长对白、情感戏剧张力场景下的表现至关重要。

## What Changes

- 将《玩偶之家》完整剧本（3 幕，约 15,000 词）转换为 TipTap JSON 格式
- 更新 `supabase/seeds/data/script-8-a-dolls-house.ts` 文件，包含所有对白、舞台指示和场景描述
- 扩展角色列表，包含所有 8 个主要角色
- 保持与现有 TipTap JSON 格式的一致性

## Capabilities

### New Capabilities

- `dolls-house-full-content`: 完整版《玩偶之家》TipTap JSON 内容，包含所有 3 幕的完整对白和舞台指示

### Modified Capabilities

无（这是新增内容，不修改现有功能）

## Impact

**代码文件：**
- `supabase/seeds/data/script-8-a-dolls-house.ts` - 将从简化版本更新为完整剧本文件（预计 ~50KB）

**数据库：**
- 运行 `pnpm seed` 后，数据库中的《玩偶之家》剧本内容将包含完整的 3 幕内容
- 需要配合 `update-seed-logic` change 来支持更新已存在的剧本

**性能影响：**
- 现实主义戏剧的长对白场景渲染测试
- 情感戏剧张力场景的编辑体验验证
- 多幕剧的结构导航功能测试
