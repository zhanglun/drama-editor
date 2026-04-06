## 1. 数据准备

- [x] 1.1 从 Project Gutenberg (https://www.gutenberg.org/files/1524/1524-h/1524-h.htm) 获取《哈姆雷特》完整原文
- [x] 1.2 梳理完整的角色列表（30+ 个角色），确保包含所有有台词的角色

## 2. 内容转换

- [x] 2.1 转换 Act I（5 场）的全部对白、舞台指示到 TipTap JSON 格式
- [x] 2.2 转换 Act II（2 场）的全部对白、舞台指示到 TipTap JSON 格式
- [x] 2.3 转换 Act III（4 场）的全部对白、舞台指示到 TipTap JSON 格式
- [x] 2.4 转换 Act IV（7 场）的全部对白、舞台指示到 TipTap JSON 格式
- [x] 2.5 转换 Act V（2 场）的全部对白、舞台指示到 TipTap JSON 格式

## 3. 文件整合

- [x] 3.1 将完整角色列表写入 `script-7-hamlet.ts` 的 characters 数组
- [x] 3.2 将所有转换后的 TipTap JSON 内容组装到 `content` 字段
- [x] 3.3 确保 TypeScript 编译无错误（`npx tsx --eval "import './supabase/seeds/data/script-7-hamlet'"`）

## 4. 验证

- [ ] 4.1 运行 `pnpm seed --force` 确认哈姆雷特数据更新成功
- [ ] 4.2 在编辑器中打开《哈姆雷特》验证 20 个场景全部显示
- [ ] 4.3 验证角色面板显示所有主要角色
