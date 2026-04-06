## 1. 数据准备

- [x] 1.1 从 Project Gutenberg (https://www.gutenberg.org/files/844/844-h/844-h.htm) 获取《不可儿戏》完整原文
- [x] 1.2 对比当前 `script-6-importance-being-earnest.ts`（~30KB）与原文，确认缺失内容

## 2. 内容验证与补全

- [x] 2.1 验证 Act I（Algernon 的住所）内容完整性
- [x] 2.2 验证 Act II（Jack 的乡村住所）内容完整性
- [x] 2.3 验证 Act III（Jack 的乡村住所，续）内容完整性
- [x] 2.4 如有缺失，补全所有对白和舞台指示到 TipTap JSON 格式

## 3. 文件更新

- [x] 3.1 确保角色列表包含全部 9 个角色：John Worthing, Algernon Moncrieff, Gwendolen Fairfax, Cecily Cardew, Lady Bracknell, Miss Prism, Dr. Chasuble, Lane, Merriman
- [x] 3.2 确保 TypeScript 编译无错误

## 4. 验证

- [x] 4.1 运行 `pnpm seed` 确认数据更新成功
- [x] 4.2 在编辑器中打开《不可儿戏》验证 3 幕完整内容

## 转换完成统计

- 文件行数: 11,122 行
- 文件大小: 276 KB
- 场景数量: 3 个
- 对白数量: 877 个
- 舞台指示数量: 56 个
- 转场数量: 1 个
- TypeScript 编译: ✅ 成功
