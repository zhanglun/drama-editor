import { config } from 'dotenv'
import { resolve } from 'path'

// 加载 .env.local 文件
config({ path: resolve(process.cwd(), '.env.local') })

import { createClient } from '@supabase/supabase-js'
import { seedScripts } from './index'
import type { SeedScript } from './types'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ 缺少环境变量:')
  console.error('   - SUPABASE_URL:', supabaseUrl ? '✓' : '✗')
  console.error('   - SUPABASE_SERVICE_ROLE_KEY:', supabaseServiceKey ? '✓' : '✗')
  console.error('\n请在 .env.local 文件中配置这些环境变量')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

// 模块级变量，由 main() 设置
let isForce = false

async function checkScriptExists(title: string): Promise<string | null> {
  const { data, error } = await supabase
    .from('scripts')
    .select('id')
    .eq('title', title)
    .maybeSingle()
  
  if (error) {
    console.error(`   ⚠️  检查剧本时出错:`, error)
    return null
  }
  
  return data?.id || null
}

async function seedScript(scriptData: SeedScript, index: number) {
  console.log(`\n${'='.repeat(50)}`)
  console.log(`📝 [${index + 1}/${seedScripts.length}] 处理剧本: ${scriptData.title}`)
  console.log(`   风格: ${scriptData.genre || '未指定'}`)
  console.log(`   角色: ${scriptData.characters.length}人`)
  console.log('='.repeat(50))
  
  const existingId = await checkScriptExists(scriptData.title)
  
  if (existingId && !isForce) {
    console.log(`   ⏭️  ${scriptData.title} 已存在，跳过创建 (ID: ${existingId})`)
    return { status: 'skipped' } as const
  }

  if (isForce && existingId) {
    return await updateScript(scriptData, existingId)
  }
  
  console.log(`   📥 创建新剧本...`)
  
  const { data: script, error: scriptError } = await supabase
    .from('scripts')
    .insert({
      title: scriptData.title,
      description: scriptData.description,
      content: {
        ...scriptData.content,
        metadata: {
          author: scriptData.author,
          genre: scriptData.genre,
          logline: scriptData.logline,
          notes: scriptData.notes
        }
      }
    })
    .select()
    .single()
  
  if (scriptError || !script) {
    console.error(`   ❌ 创建剧本失败:`, scriptError)
    throw scriptError
  }
  
  console.log(`   ✅ 剧本已创建 (ID: ${script.id})`)
  
  if (scriptData.characters.length > 0) {
    console.log(`   📥 创建 ${scriptData.characters.length} 个角色...`)
    
    const charactersToInsert = scriptData.characters.map(char => ({
      script_id: script.id,
      name: char.name,
      description: char.description,
      avatar_url: char.avatar_url || null
    }))
    
    const { data: characters, error: charError } = await supabase
      .from('characters')
      .insert(charactersToInsert)
      .select()
    
    if (charError) {
      console.error(`   ⚠️  创建角色时出错:`, charError)
    } else {
      console.log(`   ✅ 已创建 ${characters.length} 个角色: ${characters.map(c => c.name).join(', ')}`)
    }
  }
  
  console.log(`   📥 创建初始版本...`)
  const { error: versionError } = await supabase
    .from('script_versions')
    .insert({
      script_id: script.id,
      version_number: 1,
      content: script.content,
      change_summary: '初始版本'
    })
  
  if (versionError) {
    console.error(`   ⚠️  创建版本时出错:`, versionError)
  } else {
    console.log(`   ✅ 已创建初始版本 (版本 1)`)
  }
  
  return { status: 'created' as const, id: script.id }
}

async function updateScript(scriptData: SeedScript, existingId: string | null) {
  if (!existingId) {
    console.log(`   📥 剧本不存在，改为创建新剧本...`)
    return null
  }

  console.log(`   🔄 更新剧本 (ID: ${existingId})...`)

  const newContent = {
    ...scriptData.content,
    metadata: {
      author: scriptData.author,
      genre: scriptData.genre,
      logline: scriptData.logline,
      notes: scriptData.notes
    }
  }

  const { error: updateError } = await supabase
    .from('scripts')
    .update({
      title: scriptData.title,
      description: scriptData.description,
      content: newContent
    })
    .eq('id', existingId)

  if (updateError) {
    console.error(`   ❌ 更新剧本内容失败:`, updateError)
    throw updateError
  }
  console.log(`   ✅ 剧本内容已更新`)

  const { error: deleteCharsError } = await supabase
    .from('characters')
    .delete()
    .eq('script_id', existingId)

  if (deleteCharsError) {
    console.error(`   ⚠️  删除旧角色时出错:`, deleteCharsError)
  }

  if (scriptData.characters.length > 0) {
    const charactersToInsert = scriptData.characters.map(char => ({
      script_id: existingId,
      name: char.name,
      description: char.description,
      avatar_url: char.avatar_url || null
    }))

    const { data: characters, error: charError } = await supabase
      .from('characters')
      .insert(charactersToInsert)
      .select()

    if (charError) {
      console.error(`   ⚠️  创建角色时出错:`, charError)
    } else {
      console.log(`   ✅ 已更新 ${characters.length} 个角色`)
    }
  }

  const { data: maxVersion } = await supabase
    .from('script_versions')
    .select('version_number')
    .eq('script_id', existingId)
    .order('version_number', { ascending: false })
    .limit(1)
    .maybeSingle()

  const nextVersion = (maxVersion?.version_number || 0) + 1

  const { error: versionError } = await supabase
    .from('script_versions')
    .insert({
      script_id: existingId,
      version_number: nextVersion,
      content: newContent,
      change_summary: `种子数据更新 (版本 ${nextVersion})`
    })

  if (versionError) {
    console.error(`   ⚠️  创建版本时出错:`, versionError)
  } else {
    console.log(`   ✅ 已创建版本 ${nextVersion}`)
  }

  return { status: 'updated' as const, id: existingId }
}

async function getStats() {
  const [scriptsResult, charactersResult, versionsResult] = await Promise.all([
    supabase.from('scripts').select('id', { count: 'exact', head: true }),
    supabase.from('characters').select('id', { count: 'exact', head: true }),
    supabase.from('script_versions').select('id', { count: 'exact', head: true })
  ])
  
  return {
    scripts: scriptsResult.count || 0,
    characters: charactersResult.count || 0,
    versions: versionsResult.count || 0
  }
}

async function main() {
  const args = process.argv.slice(2)
  isForce = args.includes('--force') || args.includes('--update')
  const isCheckOnly = args.includes('--check') || args.includes('-c')
  
  console.log('\n🌱 Drama Editor 种子数据脚本')
  console.log('='.repeat(50))
  if (isForce) {
    console.log('   🔄 强制模式 - 更新已存在的剧本')
  } else if (isCheckOnly) {
    console.log('   📊 检查模式 - 仅显示状态，不执行插入')
  } else {
    console.log('   📦 智能模式 - 检查并插入缺失的数据')
  }
  
  console.log(`📦 准备处理 ${seedScripts.length} 个示例剧本:\n`)
  seedScripts.forEach((script, i) => {
    console.log(`   ${i + 1}. ${script.title} (${script.genre || '未分类'})`)
  })
  
  const beforeStats = await getStats()
  console.log(`\n📊 当前数据库状态:`)
  console.log(`   - 剧本: ${beforeStats.scripts}`)
  console.log(`   - 角色: ${beforeStats.characters}`)
  console.log(`   - 版本: ${beforeStats.versions}`)
  
  if (isCheckOnly) {
    console.log('\n✅ 检查完成\n')
    return
  }
  
  console.log('\n' + '='.repeat(50))
  console.log('🚀 开始处理种子数据...')
  console.log('='.repeat(50))
  
  const results = {
    created: 0,
    updated: 0,
    skipped: 0,
    failed: 0
  }
  
  for (let i = 0; i < seedScripts.length; i++) {
    try {
      const result = await seedScript(seedScripts[i], i)
      if (result.status === 'created') {
        results.created++
      } else if (result.status === 'updated') {
        results.updated++
      } else {
        results.skipped++
      }
    } catch (error) {
      results.failed++
      console.error(`\n❌ 处理剧本失败:`, error)
    }
  }
  
  const afterStats = await getStats()
  
  console.log('\n' + '='.repeat(50))
  console.log('✅ 种子数据处理完成！')
  console.log('='.repeat(50))
  console.log('\n📊 处理结果:')
  console.log(`   - 新建: ${results.created} 个`)
  console.log(`   - 更新: ${results.updated} 个`)
  console.log(`   - 跳过: ${results.skipped} 个`)
  console.log(`   - 失败: ${results.failed} 个`)
  
  console.log('\n📊 数据库变化:')
  console.log(`   - 剧本: ${beforeStats.scripts} → ${afterStats.scripts} (+${afterStats.scripts - beforeStats.scripts})`)
  console.log(`   - 角色: ${beforeStats.characters} → ${afterStats.characters} (+${afterStats.characters - beforeStats.characters})`)
  console.log(`   - 版本: ${beforeStats.versions} → ${afterStats.versions} (+${afterStats.versions - beforeStats.versions})`)
  
  if (results.created > 0) {
    console.log('\n🎉 新的种子数据已添加！现在可以开始使用应用了。')
  } else if (results.skipped === seedScripts.length) {
    console.log('\n💡 所有种子数据已存在，无需重复创建。')
  }
  
  console.log('\n' + '='.repeat(50) + '\n')
}

main().catch(error => {
  console.error('\n❌ 种子数据脚本执行失败:', error)
  process.exit(1)
})
