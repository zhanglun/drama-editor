## Context

代码库采用 FSD (Feature-Sliced Design) 架构，当前处于重构过渡期。在架构迁移过程中发现代码库存在大量预存的 TypeScript 类型错误（30+ 个），主要集中在：

- **实体层**：selectors 引用不存在的 store，index 导出不存在的成员
- **API 层**：返回类型不一致，部分函数返回 `ApiResponse<T>`，部分返回裸类型
- **Store 层**：API 调用与类型定义不匹配

当前状态：
- `pnpm build` 失败
- `pnpm typecheck` 报告 30+ 个错误
- 阻塞了后续的架构迁移工作

约束：
- 不能改变业务逻辑
- 必须保持 API 接口不变
- 必须通过所有现有的功能验证

## Goals / Non-Goals

**Goals:**
1. 修复所有 TypeScript 类型错误，使 `pnpm build` 和 `pnpm typecheck` 通过
2. 统一 API 层的返回类型为 `ApiResponse<T>`
3. 对齐 Store 层与 API 层的类型定义
4. 补充缺失的实体导出和 selectors
5. 为后续架构迁移扫清障碍

**Non-Goals:**
1. 不改变业务逻辑或功能行为
2. 不重构代码结构（那是另一个任务）
3. 不引入新的依赖
4. 不修改 API 接口

## Decisions

### 决策 1: 统一 API 返回类型为 `ApiResponse<T>`

**理由**：
- 代码库已有 `ApiResponse<T>` 类型定义（`shared/types/common.ts`）
- 部分 API 函数已使用此类型，保持一致性
- 便于错误处理和类型推断

**替代方案**：
- ❌ 返回裸类型 - 无法携带错误信息，不符合现有模式
- ❌ 使用 `Promise<Result<T, E>>` - 需要引入新的 Result 类型，增加复杂度
- ✅ **统一使用 `ApiResponse<T>`** - 已有定义，部分代码已使用

**实施**：
1. 所有 API 函数返回 `Promise<ApiResponse<T>>`
2. Store 层调用 API 后，检查 `response.error`，提取 `response.data`

### 决策 2: 修复 Selectors 引用

**问题**：
- `character/model/selectors.ts` 引用不存在的 `useCharacterStore`
- `version/model/selectors.ts` 引用不存在的 `useVersionStore`

**解决方案**：
1. 检查是否存在对应的 store（`character/model/store.ts`、`version/model/store.ts`）
2. 如果存在，修复导入路径
3. 如果不存在，删除 selectors 或创建最小化的 store

**实施**：
- `character/model/store.ts` 已存在但为空实现 → 创建基础 store
- `version/model/store.ts` 已存在但为空实现 → 创建基础 store

### 决策 3: 修复实体导出

**问题**：
- `entities/index.ts` 导出不存在的成员（`useCharacterStore`, `Character`, `CharacterList` 等）

**解决方案**：
- 检查每个实体是否有对应的导出
- 如果有，修复导入路径
- 如果没有，删除导出或创建缺失的模块

**原则**：只导出实际存在的内容，不预先导出未来可能创建的模块

### 决策 4: 修复 Store 层 API 调用

**问题**：
- `script/model/store.ts` 中 `createScript` 调用 `api.createScript(title)`
- 但 API 期望 `{ title: string }` 对象
- API 返回 `ApiResponse<Script>`，但 store 期望 `Script`

**解决方案**：
```typescript
// 之前（错误）
const script = await api.createScript(title)

// 之后（正确）
const response = await api.createScript({ title })
if (response.error) throw new Error(response.error)
const script = response.data
```

## Risks / Trade-offs

### 风险 1: 修复过程中引入新错误
**影响**: 中等  
**概率**: 低  
**缓解措施**:
- 每次修复后立即运行 `pnpm typecheck`
- 保持修改最小化，只修复类型错误
- 使用 git 分支隔离变更

### 风险 2: 破坏现有功能
**影响**: 高  
**概率**: 低  
**缓解措施**:
- 只修改类型定义，不改变运行时逻辑
- 修复后运行功能验证
- 保持 API 接口不变

### Trade-off 1: 完整性 vs 最小化
**权衡**: 是创建完整的 store 实现，还是创建最小化的占位符？  
**决策**: 创建最小化的占位符 store，满足类型检查即可。完整实现在后续任务中完成。

### Trade-off 2: 一致性 vs 兼容性
**权衡**: 是统一所有 API 为 `ApiResponse<T>`，还是保持部分旧代码不变？  
**决策**: 统一所有 API 为 `ApiResponse<T>`，保持一致性。

## Migration Plan

### 阶段 1: 实体层修复 (30分钟)
1. 修复 `character/model/selectors.ts`
2. 修复 `version/model/selectors.ts`
3. 修复 `entities/index.ts` 导出
4. 运行 `pnpm typecheck` 验证

### 阶段 2: API 层修复 (30分钟)
1. 修复 `script/api/create-script.ts` 返回类型
2. 修复 `version/api/create-version.ts` 返回类型
3. 修复 `script/api/get-scripts.ts` 导出
4. 运行 `pnpm typecheck` 验证

### 阶段 3: Store 层修复 (30分钟)
1. 修复 `script/model/store.ts` API 调用
2. 确保所有 store 正确处理 `ApiResponse<T>`
3. 运行 `pnpm typecheck` 验证

### 阶段 4: 验证 (15分钟)
1. 运行 `pnpm typecheck` - 确认无错误
2. 运行 `pnpm build` - 确认构建成功
3. 运行功能验证 - 确认无功能回归

### 回滚策略
- 每个阶段在独立 git commit 中完成
- 如果某个阶段失败，可快速回滚到上一个 commit
- 保留完整的修改记录

## Open Questions

1. **Character 和 Version Store 的完整实现** - 当前只创建最小化占位符，是否需要完整实现？
   - **建议**: 暂不实现，在后续任务中根据实际需求完成

2. **Auth 相关错误** - `useAuth` hook 不存在，是否需要在本任务中修复？
   - **建议**: 如果影响构建，则修复；否则留待后续

3. **Canvas 类型错误** - 节点类型不匹配，是否需要在本任务中修复？
   - **建议**: 如果影响构建，则修复；否则留待后续
