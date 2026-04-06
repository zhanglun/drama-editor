import type { SeedScript } from '../types'

/**
 * 复杂剧本 1: 《偶遇》
 * - 场次: 7场
 * - 角色: 4人
 * - 风格: 现代都市爱情
 */
export const script3Encounter: SeedScript = {
  title: "偶遇",
  description: "一个发生在咖啡厅的浪漫短剧，讲述两个陌生人因为一本书而相遇的故事",
  author: "示例作者",
  genre: "都市爱情",
  logline: "一本遗落的书，让两个陌生人的生活产生了交集",
  characters: [
    {
      name: "小明",
      description: "25岁，程序员，喜欢读书，性格内向但内心丰富"
    },
    {
      name: "小红",
      description: "24岁，设计师，活泼开朗，对生活充满热情"
    },
    {
      name: "服务员",
      description: "咖啡厅服务员"
    },
    {
      name: "路人",
      description: "咖啡厅的顾客"
    }
  ],
  content: {
    type: 'doc',
    content: [
      {
        type: 'scene',
        content: [
          { type: 'text', text: '第一场 - 咖啡厅 - 下午' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '咖啡厅内，阳光透过玻璃窗洒进来，营造出温暖的氛围。轻柔的爵士乐在空气中流淌。小明独自坐在角落的位置，面前放着一本《百年孤独》和一杯已经凉了的咖啡。他专注地看着书，偶尔在笔记本上写写画画。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '服务员',
          parenthetical: '走近小明'
        },
        content: [
          { type: 'text', text: '先生，需要续杯吗？' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '小明',
          parenthetical: '抬头，有些走神'
        },
        content: [
          { type: 'text', text: '啊...不用了，谢谢。' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '小明看了看手机，继续低头看书。这时，咖啡厅的门被推开，小红急匆匆地走了进来，手里抱着几本设计书和一叠文件。' }
        ]
      },

      {
        type: 'scene',
        content: [
          { type: 'text', text: '第二场 - 咖啡厅吧台 - 连续' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '小红走到吧台前点单，环顾四周寻找座位。咖啡厅里人不少，只剩几个空位。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '小红',
          parenthetical: '对服务员'
        },
        content: [
          { type: 'text', text: '一杯拿铁，谢谢。' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '她注意到角落里的小明，目光停留在他手中的书上。犹豫了一下，她拿起咖啡，朝小明走去。' }
        ]
      },

      {
        type: 'scene',
        content: [
          { type: 'text', text: '第三场 - 小明的桌旁 - 连续' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '小红',
          parenthetical: '试探性地'
        },
        content: [
          { type: 'text', text: '不好意思，请问...那是《百年孤独》吗？' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '小明抬起头，有些惊讶地看着面前这个陌生的女孩。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '小明',
          parenthetical: '略显局促'
        },
        content: [
          { type: 'text', text: '是的...你也喜欢马尔克斯？' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '小红',
          parenthetical: '眼睛发亮'
        },
        content: [
          { type: 'text', text: '非常喜欢！这是我第三次读了，每次都有新的感悟。能坐这儿吗？其他位置都满了。' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '小明的表情明显放松下来，露出了一丝微笑，指了指对面的椅子。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '小明'
        },
        content: [
          { type: 'text', text: '当然可以，请坐。' }
        ]
      },

      {
        type: 'scene',
        content: [
          { type: 'text', text: '第四场 - 咖啡厅 - 傍晚' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '时间流逝，窗外的阳光渐渐变成了金色的晚霞。小明和小红依然坐在桌旁，桌上摆着两杯已经见底的咖啡，周围散落着书籍和笔记本。两人聊得正欢，不时发出笑声。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '小红',
          parenthetical: '笑着'
        },
        content: [
          { type: 'text', text: '所以我一直觉得，设计就像写故事一样，每一个元素都应该有其存在的意义。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '小明',
          parenthetical: '认真地点头'
        },
        content: [
          { type: 'text', text: '代码也是一样。好的代码就像好的文学作品，简洁、优雅、富有韵律。' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '两人相视而笑。小红看了看手机上的时间，表情变得有些遗憾。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '小红'
        },
        content: [
          { type: 'text', text: '时间过得真快，我得走了，还有个设计稿要赶。' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '她开始收拾桌上的东西。小明看着她，似乎想说什么，但又有些犹豫。' }
        ]
      },

      {
        type: 'scene',
        content: [
          { type: 'text', text: '第五场 - 咖啡厅门口 - 连续' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '小红站起身，小明也跟着站起来。两人走向门口。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '小明',
          parenthetical: '鼓起勇气'
        },
        content: [
          { type: 'text', text: '那个...我们还能再见面吗？' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '小红停下脚步，转过头看着小明，露出温暖的微笑。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '小红'
        },
        content: [
          { type: 'text', text: '当然可以。每个周末下午我都在这里。' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '她从包里掏出一张名片，递给小明。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '小红'
        },
        content: [
          { type: 'text', text: '这是我的联系方式。下次我们可以聊聊别的书。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '小明',
          parenthetical: '接过名片，欣喜地'
        },
        content: [
          { type: 'text', text: '好！我...我会联系的。' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '小红挥手告别，转身离开。小明站在门口，目送她消失在街角。' }
        ]
      },

      {
        type: 'scene',
        content: [
          { type: 'text', text: '第六场 - 小明公寓 - 晚上' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '小明回到家，坐在书桌前，手里拿着小红的名片，反复看着。桌上摆着《百年孤独》和笔记本。他拿起手机，打开微信，输入又删除，删除又输入。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '小明',
          parenthetical: '自言自语'
        },
        content: [
          { type: 'text', text: '发还是不发...会不会太唐突了...' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '经过一番挣扎，他终于按下发送键，然后把手机扔到一边，用双手捂住脸。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '小明',
          parenthetical: '小声地'
        },
        content: [
          { type: 'text', text: '发出去了...（看了一眼手机）咦，她回复了？这么快？' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '他拿起手机，看到小红的回复，脸上露出幸福的笑容。' }
        ]
      },

      {
        type: 'scene',
        content: [
          { type: 'text', text: '第七场 - 咖啡厅 - 周末下午' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '又是一个阳光明媚的下午，同样的咖啡厅。小明比约定时间早到了半小时，已经点好了两杯咖啡。他紧张地看着门口，不时整理衣服。' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '门被推开，小红走了进来。她看到了小明，开心地挥手。小明站起来，露出灿烂的笑容。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '小红',
          parenthetical: '走近'
        },
        content: [
          { type: 'text', text: '你来得真早！' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '小明',
          parenthetical: '腼腆地'
        },
        content: [
          { type: 'text', text: '我也刚到。（递过咖啡）给你点的拿铁。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '小红',
          parenthetical: '接过咖啡'
        },
        content: [
          { type: 'text', text: '谢谢！对了，我带了本新书，我觉得你会喜欢...' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '两人坐下，开始新的对话。镜头慢慢拉远，阳光洒在他们身上，温暖而美好。' }
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
