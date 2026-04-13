## Why

代码库存在 **30+ 个 TypeScript 类型错误**，导致 `pnpm build` 失败。这些错误主要分布在实体层（entities）、API 层和 Store 层，严重影响了代码质量和开发效率。在继续架构迁移（FSD）之前，必须先修复这些预存的类型错误，确保代码库健康。

## What Changes

修复所有预存的 TypeScript 类型错误，主要包括：

- **实体层修复**：
  - 修复 `character/model/selectors.ts` - 引用不存在的 `useCharacterStore`
  - 修复 `version/model/selectors.ts` - 引用不存在的 `useVersionStore`
  - 修复 `entities/index.ts` - 导出不存在的成员
  - 补充缺失的实体导出

- **API 层修复**：
  - 修复 `script/api/create-script.ts` - 返回类型 `ApiResponse<Script>` 与调用方期望的 `Script` 不匹配
  - 修复 `version/api/create-version.ts` - 返回类型不正确
  - 修复 `script/api/get-scripts.ts` - 错误的导出
  - 统一 API 返回类型为 `ApiResponse<T>`

- **Store 层修复**：
  - 修复 `script/model/store.ts` - API 调用与类型定义不匹配
  - 确保 store 正确处理 `ApiResponse<T>` 类型

- **其他修复**：
  - 移除未使用的导入和变量
  - 修复类型不匹配的参数

## Capabilities

### New Capabilities

无新功能引入。

### Modified Capabilities

- `entity-type-safety`: 修复实体层的类型安全问题，确保 selectors、exports 类型正确
- `api-type-consistency`: 统一 API 层的返回类型，确保所有 API 函数返回 `ApiResponse<T>`
- `store-type-alignment`: 对齐 Store 层与 API 层的类型定义

## Impact

- **影响代码**：
  - `src/entities/character/` - selectors 和 index
  - `src/entities/version/` - selectors 和 index
  - `src/entities/script/` - API 函数和 store
  - `src/entities/index.ts` - 顶层导出

- **影响范围**：中等 - 涉及 4 个实体的类型修复，但不会改变业务逻辑

- **依赖关系**：无外部依赖变更

- **系统影响**：
  - 修复后 `pnpm build` 将成功
  - 修复后 `pnpm typecheck` 将无错误
  - 为后续 FSD 架构迁移扫清障碍
