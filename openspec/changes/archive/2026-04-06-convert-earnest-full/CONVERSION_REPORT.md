# 《不可儿戏》完整剧本转换报告

## 任务概述

成功将 Oscar Wilde 的《不可儿戏》(The Importance of Being Earnest) 完整剧本从 Project Gutenberg HTML 格式转换为 TipTap JSON 格式。

## 转换统计

### 文件信息
- **文件路径**: `/Users/zhanglun/Documents/mine/drama-editor/supabase/seeds/data/script-6-importance-being-earnest.ts`
- **文件行数**: 11,122 行
- **文件大小**: 276 KB (282,528 bytes)

### 内容统计
- **场景数量**: 3 个
  - 第一幕 - Algernon的公寓 - 半月街 - 上午
  - 第二幕 - Woolton庄园的花园 - 下午
  - 第三幕 - Woolton庄园的客厅 - 当天下午

- **对白数量**: 877 个
- **舞台指示数量**: 56 个
- **转场数量**: 1 个（剧终）

### 角色列表 (9人)
1. John Worthing (Jack/Ernest)
2. Algernon Moncrieff
3. Lady Bracknell
4. Gwendolen Fairfax
5. Cecily Cardew
6. Miss Prism
7. Rev. Canon Chasuble
8. Merriman (管家)
9. Lane (男仆)

## 技术实现

### 转换方法
1. 使用 Node.js 脚本解析 HTML 文件
2. 提取对白、舞台指示、场景标题
3. 转换为 TipTap JSON 格式
4. 手动添加场景标题和转场节点

### TipTap JSON 格式示例

```json
{
  "type": "dialogue",
  "attrs": {
    "character": "JACK"
  },
  "content": [
    {
      "type": "text",
      "text": "On the contrary, Aunt Augusta, I've now realised for the first time in my life the vital Importance of Being Earnest."
    }
  ]
}
```

### 验证
- ✅ TypeScript 编译无错误
- ✅ JSON 格式正确
- ✅ 包含完整的 3 幕内容
- ✅ 所有角色已包含

## 源文件

- **HTML 来源**: `/Users/zhanglun/Documents/mine/drama-editor/earnest-full.html`
- **源文件大小**: 4778 行
- **源**: Project Gutenberg (https://www.gutenberg.org/files/844/844-h/844-h.htm)

## 后续步骤

1. 运行 `pnpm seed --force` 将数据导入数据库
2. 在编辑器中打开剧本验证内容完整性
3. 测试编辑器功能（对白、场景、转场等）

## 注意事项

- 保留了所有原文内容，未做摘要或省略
- 舞台指示和括号说明已保留
- 角色名称使用原文格式（大写）
- 场景标题使用中文描述

---

**转换完成日期**: 2026-04-06
**OpenSpec Change**: convert-earnest-full
