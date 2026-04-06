## Context

需要将 Henrik Ibsen 的《玩偶之家》完整剧本从 Project Gutenberg 格式转换为 TipTap JSON 格式。当前 seed 文件是简化版本，需要替换为完整的 3 幕内容（约 15,000 词）。

**数据源：** https://www.gutenberg.org/files/2542/2542-h/2542-h.htm

## Goals / Non-Goals

**Goals:**
- 转换《玩偶之家》完整剧本到 TipTap JSON 格式
- 包含所有 3 幕的完整内容
- 包含所有 8 个主要角色
- 保持 TipTap JSON 格式一致性

**Non-Goals:**
- 不修改 TipTap 编辑器核心功能
- 不实现自动转换工具
- 不翻译内容（保持英文原文）

## Decisions

### 1. 转换策略

**决策：** 手动编写 TypeScript 文件，逐场转换

**理由：**
- 与 Hamlet 和 Earnest 保持一致的转换方式
- 手动转换确保准确性

### 2. 角色列表

**决策：** 包含 8 个主要角色

**主要角色：**
Nora, Torvald (Helmer), Mrs. Linde, Krogstad, Doctor Rank, The Nurse (Anne Marie), The Children, The Porter

### 3. 内容结构

**决策：** 使用 TipTap 标准节点类型（scene, dialogue, action, transition）

## Risks / Trade-offs

**[风险 1] 文件体积**
- 风险：完整版约 50KB
- 缓解：在可接受范围内

**[风险 2] 现实主义戏剧特点**
- 风险：Ibsen 的现实主义戏剧有长对白，可能影响渲染性能
- 缓解：这是测试目的，可以暴露性能问题

## Migration Plan

1. 从 Project Gutenberg 下载《玩偶之家》完整文本
2. 逐幕转换到 TipTap JSON 格式
3. 更新 `script-8-a-dolls-house.ts` 文件
4. 运行 `pnpm seed --force` 更新数据库
5. 在编辑器中验证内容完整性
