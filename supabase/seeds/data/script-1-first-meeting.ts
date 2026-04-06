import type { SeedScript } from '../types'

/**
 * 简单剧本 1: 《初次见面》
 * - 场次: 2场
 * - 角色: 2人
 * - 用途: 最基础的测试，快速验证功能
 */
export const script1FirstMeeting: SeedScript = {
  title: "初次见面",
  description: "公园里的一次偶遇，开启了一段友谊",
  author: "示例作者",
  genre: "生活片段",
  logline: "两个陌生人在公园长椅上因为一本书而相识",
  characters: [
    {
      name: "小李",
      description: "25岁，性格温和，喜欢阅读"
    },
    {
      name: "小王",
      description: "24岁，开朗热情，喜欢交友"
    }
  ],
  content: {
    type: 'doc',
    content: [
      {
        type: 'scene',
        content: [
          { type: 'text', text: '第一场 - 公园长椅 - 上午' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '晴朗的上午，阳光透过树叶洒在公园的小路上。公园里人不多，偶尔有晨跑的人经过。小李独自坐在长椅上，手里拿着一本书，时不时看一眼手机上的时间。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '小李',
          parenthetical: '自言自语，有些紧张'
        },
        content: [
          { type: 'text', text: '还有五分钟...希望她能来。' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '小李继续看书，但明显心不在焉，时不时抬头看向公园入口的方向。' }
        ]
      },

      {
        type: 'scene',
        content: [
          { type: 'text', text: '第二场 - 同一地点 - 连续' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '小王从远处走来，手里拿着和小李手里一样封面的书。她环顾四周，看到了长椅上的小李，犹豫了一下，然后走了过去。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '小王',
          parenthetical: '礼貌地'
        },
        content: [
          { type: 'text', text: '请问，这里有人吗？' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '小李抬起头，看到了小王手里的书，眼睛亮了一下。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '小李',
          parenthetical: '有些惊讶'
        },
        content: [
          { type: 'text', text: '没有，请坐。（停顿）你也看这本书？' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '小王',
          parenthetical: '坐下，兴奋地'
        },
        content: [
          { type: 'text', text: '是的！这是我第三次读了，每次都有新的发现。你呢？' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '小李',
          parenthetical: '露出笑容'
        },
        content: [
          { type: 'text', text: '我也是第三次。这本书真的太棒了，特别是关于...（两人开始热烈讨论）' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '阳光渐渐变得温暖，两人聊得越来越投机，不时发出笑声。镜头慢慢拉远。' }
        ]
      },
      {
        type: 'transition',
        content: [
          { type: 'text', text: '淡出' }
        ]
      }
    ]
  }
}
