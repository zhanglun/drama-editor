## 1. 命令行参数解析

- [x] 1.1 在 `seed-runner.ts` 中添加 `--force` 参数检测逻辑（在 `main()` 函数的参数解析部分）

## 2. 更新逻辑实现

- [x] 2.1 实现 `updateScript()` 函数：更新 `scripts` 表的 content 字段
- [x] 2.2 在 `updateScript()` 中删除该剧本的所有旧 characters 记录
- [x] 2.3 在 `updateScript()` 中重新插入新 characters 列表
- [x] 2.4 在 `updateScript()` 中查询当前最大版本号，创建新版本记录（version_number + 1, change_summary: "Seed 数据更新"）

## 3. 流程整合

- [x] 3.1 修改 `seedScript()` 函数：当 `--force` 且剧本已存在时，调用 `updateScript()` 而非跳过
- [x] 3.2 更新统计输出，增加 `updated` 计数（区分 created / updated / skipped / failed）

## 4. 验证

- [x] 4.1 不带 `--force` 运行 `pnpm seed`，确认所有已存在剧本被跳过（默认行为不变）
- [x] 4.2 带 `--force` 运行 `pnpm seed --force`，确认已存在剧本被更新
- [x] 4.3 验证更新后数据库中版本号正确递增
- [x] 4.4 验证更新后角色列表正确替换
