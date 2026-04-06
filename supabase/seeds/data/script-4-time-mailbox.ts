import type { SeedScript } from '../types'

/**
 * 复杂剧本 2: 《时光信箱》
 * - 场次: 8场
 * - 角色: 3人
 * - 风格: 奇幻爱情，跨时空
 */
export const script4TimeMailbox: SeedScript = {
  title: "时光信箱",
  description: "一个神奇的信箱，连接了不同时空的人，展开了一段跨越时间的对话",
  author: "示例作者",
  genre: "奇幻爱情",
  logline: "一封信，两个时空，一段跨越岁月的对话",
  characters: [
    {
      name: "小雨",
      description: "22岁，大学生，温柔善良，喜欢写信"
    },
    {
      name: "奶奶",
      description: "70岁，小雨的奶奶，慈祥睿智"
    },
    {
      name: "邮递员",
      description: "神秘的邮递员，似乎知道时光信箱的秘密"
    }
  ],
  content: {
    type: 'doc',
    content: [
      {
        type: 'scene',
        content: [
          { type: 'text', text: '第一场 - 老房子阁楼 - 白天' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '充满阳光的老式阁楼，到处堆放着旧物。小雨正在整理奶奶的遗物，打开一个尘封已久的箱子。箱子里装满了旧信件、照片和一本日记。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '小雨',
          parenthetical: '轻声念着'
        },
        content: [
          { type: 'text', text: '"时光信箱，可以把信寄给过去或未来的人..." 奶奶，这是什么意思？' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '她翻看着日记，发现了一张旧照片，照片上是一个绿色的老式邮筒，旁边站着年轻的奶奶。照片背面写着："1965年，时光信箱"。' }
        ]
      },

      {
        type: 'scene',
        content: [
          { type: 'text', text: '第二场 - 街角 - 黄昏' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '小雨拿着照片，按照日记中的地址来到一条老街。街道两旁是民国时期的建筑，落日的余晖给一切镀上了金色。她在街角发现了那个绿色的邮筒，和照片上一模一样。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '小雨',
          parenthetical: '惊讶地'
        },
        content: [
          { type: 'text', text: '真的存在...（抚摸邮筒）奶奶，你真的用过它吗？' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '邮递员骑着老式自行车从远处过来，停在她身边。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '邮递员',
          parenthetical: '神秘地微笑'
        },
        content: [
          { type: 'text', text: '找到了？' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '小雨',
          parenthetical: '被吓了一跳'
        },
        content: [
          { type: 'text', text: '你是谁？你怎么知道我在找什么？' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '邮递员'
        },
        content: [
          { type: 'text', text: '我是这里的邮递员。这个信箱很特别，它能把信送到你想送到的任何时间。但记住，每个人只能用一次。' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '邮递员递给她一张信纸和一个信封，然后骑车离开了。小雨站在原地，若有所思。' }
        ]
      },

      {
        type: 'scene',
        content: [
          { type: 'text', text: '第三场 - 小雨房间 - 夜晚' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '小雨坐在书桌前，面前摆着那张信纸。台灯的光温柔地照亮房间。她拿起笔，犹豫了很久，开始写信。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '小雨',
          parenthetical: '边写边念'
        },
        content: [
          { type: 'text', text: '"亲爱的奶奶，我是小雨。我知道这可能听起来很不可思议，但我找到了你日记里提到的时光信箱..."' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '她停下笔，眼泪开始流下来。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '小雨',
          parenthetical: '哽咽地'
        },
        content: [
          { type: 'text', text: '奶奶，我好想你...有太多话想对你说，可你走得太突然了...' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '她擦干眼泪，继续写信。' }
        ]
      },

      {
        type: 'scene',
        content: [
          { type: 'text', text: '第四场 - 街角邮筒 - 清晨' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '清晨的街道还很安静，小雨来到邮筒前，手里紧紧攥着那封信。她在信封上写下了："1975年，李奶奶收"。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '小雨',
          parenthetical: '深呼吸'
        },
        content: [
          { type: 'text', text: '奶奶，希望你能收到这封信...' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '她把信投进邮筒，邮筒发出一阵柔和的光芒，然后恢复正常。小雨惊讶地看着这一切。' }
        ]
      },

      {
        type: 'scene',
        content: [
          { type: 'text', text: '第五场 - 老式庭院 - 1975年，白天' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '画面切换到1975年。年轻的奶奶（30岁左右）坐在庭院里，正在缝衣服。邮递员（和现代是同一个人，样貌未变）骑着自行车过来。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '邮递员'
        },
        content: [
          { type: 'text', text: '李同志，有你的信。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '奶奶',
          parenthetical: '惊讶地'
        },
        content: [
          { type: 'text', text: '给我的？谁会给我写信？' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '她接过信，看到信封上的字迹，愣住了。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '奶奶',
          parenthetical: '喃喃自语'
        },
        content: [
          { type: 'text', text: '这字迹...怎么会...（打开信）' }
        ]
      },

      {
        type: 'scene',
        content: [
          { type: 'text', text: '第六场 - 老式庭院 - 1975年，连续' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '奶奶读完信，泪流满面。她站起身，走进屋里，拿出纸笔开始回信。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '奶奶',
          parenthetical: '边写边念'
        },
        content: [
          { type: 'text', text: '"亲爱的小雨，奶奶收到你的信了。奶奶很惊讶，但更多的是感动。原来，未来的你会这样想我..."' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '她停下笔，擦了擦眼泪，继续写道。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '奶奶'
        },
        content: [
          { type: 'text', text: '奶奶要告诉你一个秘密，关于时光信箱的秘密...还有，奶奶给你的建议...' }
        ]
      },

      {
        type: 'scene',
        content: [
          { type: 'text', text: '第七场 - 小雨房间 - 现代，夜晚' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '小雨坐在书桌前，已经过去了三天。她几乎要放弃希望时，邮递员敲响了她的门。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '邮递员',
          parenthetical: '递过一封信'
        },
        content: [
          { type: 'text', text: '有你的回信。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '小雨',
          parenthetical: '激动地接过信'
        },
        content: [
          { type: 'text', text: '真的有回信！奶奶真的收到了！' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '她颤抖着手打开信，看到熟悉的字迹，泪水夺眶而出。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '小雨',
          parenthetical: '边读边哭'
        },
        content: [
          { type: 'text', text: '奶奶...我收到了...我收到了你的回信...' }
        ]
      },

      {
        type: 'scene',
        content: [
          { type: 'text', text: '第八场 - 街角邮筒 - 黄昏' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '小雨站在时光信箱前，手里拿着奶奶的回信。她读完信后，脸上露出了释然的笑容。她把信小心地收好，转身准备离开。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '小雨',
          parenthetical: '对着邮筒，温柔地'
        },
        content: [
          { type: 'text', text: '谢谢你，让我有机会和奶奶说再见。还有...奶奶，我会听你的话，勇敢地活下去。' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '邮递员又出现了，站在不远处看着她。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '邮递员',
          parenthetical: '微笑'
        },
        content: [
          { type: 'text', text: '信送到了？' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '小雨',
          parenthetical: '感激地'
        },
        content: [
          { type: 'text', text: '送到了。谢谢你。这个信箱...以后还会帮助其他人吗？' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '邮递员',
          parenthetical: '神秘地'
        },
        content: [
          { type: 'text', text: '只要有人需要，它就会在这里。有些话，需要跨越时间才能说出口。' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '夕阳西下，小雨微笑着离开。镜头停留在那个绿色的时光信箱上，它静静地伫立在那里，等待着下一个需要它的人。' }
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
