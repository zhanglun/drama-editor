# 种子数据使用指南

这个目录包含了用于开发的示例剧本数据，帮助你快速开始使用 Drama Editor。

## 🚀 快速开始

### 1. 配置环境变量

创建 `.env.local` 文件（如果还没有）：

```bash
cp .env.example .env.local
```

编辑 `.env.local`，填入你的 Supabase 凭证：

```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

### 2. 安装依赖

```bash
pnpm install
```

### 3. 运行种子数据脚本

```bash
pnpm seed
```

## 📚 种子数据内容

### 简单剧本（用于快速测试）

#### 1. 《初次见面》 ⭐
- **场次**: 2场
- **角色**: 2人（小李、小王）
- **风格**: 生活片段
- **用途**: 最基础的测试，快速验证功能
- **内容**: 公园长椅上的一次偶遇，开启了一段友谊

#### 2. 《电话》 ⭐⭐
- **场次**: 3场
- **角色**: 2人（张三、小李）
- **风格**: 都市生活
- **用途**: 简单对话测试
- **内容**: 一通电话，改变两个人的关系

### 复杂剧本（用于全面测试）

#### 3. 《偶遇》 ⭐⭐⭐
- **场次**: 7场
- **角色**: 4人（小明、小红、服务员、路人）
- **风格**: 都市爱情
- **内容**: 咖啡厅里的一次偶遇，开启了一段浪漫的故事
- **测试点**: 多场景切换、角色互动、情感发展

#### 4. 《时光信箱》 ⭐⭐⭐⭐
- **场次**: 8场
- **角色**: 3人（小雨、奶奶、邮递员）
- **风格**: 奇幻爱情，跨时空
- **内容**: 一个神奇的信箱，连接了不同时空的人
- **测试点**: 跨时空叙事、多时间线、奇幻元素

#### 5. 《谈判专家》 ⭐⭐⭐⭐⭐
- **场次**: 10场
- **角色**: 6人（李总、王助理、张经理、陈董、刘顾问、赵秘书）
- **风格**: 职场剧
- **内容**: 商务谈判桌上的智慧博弈
- **测试点**: 多角色、复杂对话、职场术语、心理博弈

## 🛡️ 安全保证

### ✅ 脚本会做
- 检查剧本标题是否已存在
- 存在则跳过，不重复创建
- 不存在则创建新剧本 + 角色 + 初始版本
- 可以安全地多次运行（幂等性）

### ❌ 脚本不会做
- 删除任何现有数据
- 更新已存在的剧本
- 创建重复的剧本
- 修改现有角色或版本

## 📖 使用场景

### 新开发者加入项目

```bash
# 1. 克隆项目
git clone <repo-url>
cd drama-editor

# 2. 安装依赖
pnpm install

# 3. 配置环境变量
cp .env.example .env.local
# 编辑 .env.local，填入 Supabase 凭证

# 4. 运行种子数据
pnpm seed

# 5. 启动开发服务器
pnpm dev
```

### 测试新功能

当你需要测试编辑器功能时，可以直接使用已有的种子剧本：

1. 打开应用
2. 选择任意一个示例剧本
3. 测试你的功能

### 添加新的种子数据

1. 在 `supabase/seeds/data/` 目录下创建新的剧本文件
2. 在 `supabase/seeds/index.ts` 中导入新的剧本
3. 运行 `pnpm seed`

## 🔧 高级用法

### 检查现有数据

你可以直接查看数据库来检查种子数据：

```sql
-- 查看所有剧本
SELECT title, genre, created_at FROM scripts;

-- 查看某个剧本的角色
SELECT name, description 
FROM characters 
WHERE script_id = (SELECT id FROM scripts WHERE title = '偶遇');

-- 查看剧本版本
SELECT version_number, change_summary, created_at 
FROM script_versions 
WHERE script_id = (SELECT id FROM scripts WHERE title = '偶遇');
```

### 清空种子数据

如果你想清空所有种子数据（⚠️ 危险操作）：

```sql
-- 删除所有版本
DELETE FROM script_versions;

-- 删除所有角色
DELETE FROM characters;

-- 删除所有剧本
DELETE FROM scripts;
```

然后重新运行 `pnpm seed`

## 📝 剧本数据格式

种子数据使用 TipTap 的 JSON 格式，基本结构：

```typescript
{
  type: 'doc',
  content: [
    {
      type: 'scene',
      content: [
        { type: 'text', text: '第一场 - 地点 - 时间' }
      ]
    },
    {
      type: 'action',
      content: [
        { type: 'text', text: '场景描述...' }
      ]
    },
    {
      type: 'dialogue',
      attrs: {
        character: '角色名',
        parenthetical: '情绪/动作'
      },
      content: [
        { type: 'text', text: '对白内容' }
      ]
    },
    {
      type: 'transition',
      content: [
        { type: 'text', text: '切至' }
      ]
    }
  ]
}
```

## ⚠️ 注意事项

1. **环境变量安全**
   - 不要将 `.env.local` 提交到 Git
   - Service Role Key 具有完全权限，请妥善保管
   - 仅在开发环境使用种子数据脚本

2. **幂等性**
   - 脚本可以多次运行
   - 不会创建重复数据
   - 不会修改现有数据

3. **数据完整性**
   - 每个剧本会自动创建关联的角色
   - 每个剧本会自动创建初始版本（版本 1）
   - 所有操作都在事务中执行

## 🐛 常见问题

### Q: 运行脚本报错 "缺少环境变量"
A: 检查 `.env.local` 文件是否正确配置了 `SUPABASE_URL` 和 `SUPABASE_SERVICE_ROLE_KEY`

### Q: 脚本运行但数据库没有数据
A: 
1. 检查 Supabase 项目是否正常运行
2. 检查 Service Role Key 是否正确
3. 检查数据库表是否存在（运行过 migration）

### Q: 想要重新开始，如何清空数据？
A: 参考"高级用法"中的 SQL 命令清空数据，然后重新运行 `pnpm seed`

### Q: 可以修改种子数据吗？
A: 可以！直接编辑 `supabase/seeds/data/` 下的文件，然后：
- 如果剧本已存在，需要先在数据库中删除
- 或者修改剧本标题（会创建为新剧本）

## 📞 获取帮助

如果遇到问题：
1. 检查控制台错误信息
2. 查看本文档的"常见问题"部分
3. 检查 Supabase 项目状态
