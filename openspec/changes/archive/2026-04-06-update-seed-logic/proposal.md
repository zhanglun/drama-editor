## Why

当前 seed-runner.ts 只支持幂等插入（检查标题是否存在，存在则跳过），不支持更新已存在的剧本。这导致当剧本内容需要更新时（如补全完整版本），必须手动删除数据库记录或修改标题才能重新插入。开发者需要一个便捷的方式来更新已存在的 seed 数据。

## What Changes

- 修改 `seed-runner.ts` 支持更新已存在的剧本
- 添加命令行参数 `--force` 或 `--update` 来强制更新已存在的剧本
- 保留原有的幂等插入逻辑（默认行为不变）
- 更新已存在剧本时，同步更新角色列表和创建新版本

## Capabilities

### New Capabilities

- `seed-update-mode`: seed 脚本支持更新模式，通过命令行参数 `--force` 或 `--update` 触发

### Modified Capabilities

- `seed-idempotent-insert`: 修改现有的幂等插入逻辑，增加更新模式支持

## Impact

**代码文件：**
- `supabase/seeds/seed-runner.ts` - 添加更新逻辑和命令行参数解析
- `package.json` - 可能需要添加新的 npm script（如 `seed:update` 或 `seed:force`）

**数据库：**
- 使用 `--force` 参数时，已存在的剧本将被更新而不是跳过
- 更新时会删除旧角色并插入新角色列表
- 更新时会创建新的版本记录（版本号 +1）

**向后兼容性：**
- 默认行为不变（幂等插入，存在则跳过）
- 只有显式使用 `--force` 或 `--update` 参数时才会更新
- **BREAKING**: 更新模式会删除旧角色并重新插入，角色 ID 会改变
