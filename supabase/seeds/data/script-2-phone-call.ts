import type { SeedScript } from '../types'

/**
 * 简单剧本 2: 《电话》
 * - 场次: 3场
 * - 角色: 2人
 * - 用途: 简单对话测试
 */
export const script2PhoneCall: SeedScript = {
  title: "电话",
  description: "一个关于勇气和邀约的简短故事",
  author: "示例作者",
  genre: "都市生活",
  logline: "一通电话，改变两个人的关系",
  characters: [
    {
      name: "张三",
      description: "28岁，程序员，性格内向，暗恋小李已久"
    },
    {
      name: "小李",
      description: "27岁，产品经理，性格开朗"
    }
  ],
  content: {
    type: 'doc',
    content: [
      {
        type: 'scene',
        content: [
          { type: 'text', text: '第一场 - 办公室 - 白天' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '现代化的开放式办公室，员工们各自忙碌。张三坐在工位上，面前放着电话，手里捏着一张写着号码的纸条。他看了看四周，确认没人注意自己。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '张三',
          parenthetical: '深呼吸，鼓起勇气'
        },
        content: [
          { type: 'text', text: '好吧，就现在。不就是个电话吗，有什么好紧张的。' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '他拿起电话，手指颤抖着按下号码。' }
        ]
      },

      {
        type: 'scene',
        content: [
          { type: 'text', text: '第二场 - 分屏（办公室/小李的工位） - 同一时间' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '画面分为两半，左边是张三，右边是小李。小李的电话响了，她拿起电话。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '小李',
          parenthetical: '接起电话'
        },
        content: [
          { type: 'text', text: '喂？你好。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '张三',
          parenthetical: '声音有些紧张'
        },
        content: [
          { type: 'text', text: '喂，小李吗？我是...我是张三，就是隔壁组的那个...' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '小李',
          parenthetical: '笑着'
        },
        content: [
          { type: 'text', text: '我知道是你，张三。上次团建我们一起唱歌的那个。有什么事吗？' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '张三',
          parenthetical: '紧张地咽了口口水'
        },
        content: [
          { type: 'text', text: '对，对。那个...我这周末想去看那个新上映的电影，听说很不错，不知道你有没有时间...' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '张三说完后紧张地等待回应，手心冒汗。画面右侧，小李愣了一下，然后露出了温暖的笑容。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '小李',
          parenthetical: '温柔地'
        },
        content: [
          { type: 'text', text: '你是想邀请我一起去看吗？' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '张三',
          parenthetical: '声音有点抖'
        },
        content: [
          { type: 'text', text: '是的，如果你愿意的话...如果不行也没关系，我就是...' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '小李',
          parenthetical: '打断，开心地'
        },
        content: [
          { type: 'text', text: '好啊，我很乐意。周六下午怎么样？' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '张三愣住了，没想到会这么顺利。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '张三',
          parenthetical: '激动地'
        },
        content: [
          { type: 'text', text: '真的吗？太好了！那我们周六下午两点，电影院门口见？' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '小李'
        },
        content: [
          { type: 'text', text: '好的，一言为定。那就这样，再见！' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '张三'
        },
        content: [
          { type: 'text', text: '再见！' }
        ]
      },

      {
        type: 'scene',
        content: [
          { type: 'text', text: '第三场 - 办公室 - 连续' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '张三挂断电话，整个人瘫坐在椅子上，然后猛地站起来，握紧拳头。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '张三',
          parenthetical: '小声地，激动地'
        },
        content: [
          { type: 'text', text: '她答应了！她真的答应了！' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '旁边同事奇怪地看了他一眼，张三赶紧坐下，但脸上的笑容藏不住。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '张三',
          parenthetical: '自言自语'
        },
        content: [
          { type: 'text', text: '看来这个周末会很有意思...' }
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
}
