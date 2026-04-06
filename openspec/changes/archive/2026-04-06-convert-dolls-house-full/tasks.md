## 1. 数据准备

- [x] 1.1 从 Project Gutenberg (https://www.gutenberg.org/files/2542/2542-h/2542-h.htm) 获取《玩偶之家》完整原文
- [x] 1.2 梳理完整的角色列表（8 个角色）

## 2. 内容转换

- [x] 2.1 转换 Act I 的全部对白、舞台指示到 TipTap JSON 格式
- [x] 2.2 转换 Act II 的全部对白、舞台指示到 TipTap JSON 格式
- [x] 2.3 转换 Act III 的全部对白、舞台指示到 TipTap JSON 格式

## 3. 文件整合

- [x] 3.1 将完整角色列表写入 `script-8-a-dolls-house.ts` 的 characters 数组
- [x] 3.2 将所有转换后的 TipTap JSON 内容组装到 `content` 字段
- [x] 3.3 确保 TypeScript 编译无错误

## 4. 验证

- [x] 4.1 运行 `pnpm seed --force` 确认数据更新成功
- [x] 4.2 在编辑器中打开《玩偶之家》验证 3 幕完整内容
