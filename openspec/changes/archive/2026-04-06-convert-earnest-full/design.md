## Context

需要验证并确保 Oscar Wilde 的《不可儿戏》剧本包含完整的三幕内容。源文本来自 Project Gutenberg (https://www.gutenberg.org/files/844/844-h/844-h.htm)，包含 3 幕，约 20,000 词。

## Goals / Non-Goals

**Goals:**
- 验证当前 seed 文件包含完整的 3 幕内容
- 如有遗漏，补全缺失的对白、场景和角色
- 确保与现有 TipTap 节点类型兼容

**Non-Goals:**
- 不修改原始文本内容
- 不重新转换已有内容（仅补全缺失部分）

## Decisions

**1. 验证策略**
- 对比当前 seed 文件与 Gutenberg 原文
- 检查每幕的场景数量和对白数量
- 识别并补全缺失的内容

**2. 节点类型映射**
- 遵循现有的转换模式
- 保持与 Hamlet 和 Doll's House 一致的结构

## Risks / Trade-offs

**完整性风险** → 当前文件 30KB，需要验证是否包含所有 3 幕
**格式一致性风险** → 补全内容需要与现有格式保持一致
