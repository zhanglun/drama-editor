import type { SeedScript } from '../types'

/**
 * 复杂剧本 3: 《谈判专家》
 * - 场次: 10场
 * - 角色: 6人
 * - 风格: 职场剧，多角色博弈
 */
export const script5Negotiator: SeedScript = {
  title: "谈判专家",
  description: "一场高风险的商务谈判，智慧与心理的博弈",
  author: "示例作者",
  genre: "职场剧",
  logline: "当千万合同遇上公司危机，谈判桌上的每一步都是生死博弈",
  characters: [
    {
      name: "李总",
      description: "45岁，公司总经理，沉稳睿智，谈判经验丰富"
    },
    {
      name: "王助理",
      description: "28岁，李总的得力助手，心思缜密"
    },
    {
      name: "张经理",
      description: "35岁，市场部经理，年轻气盛，急于表现"
    },
    {
      name: "陈董",
      description: "55岁，投资方董事长，城府极深"
    },
    {
      name: "刘顾问",
      description: "40岁，陈董的法律顾问，精明干练"
    },
    {
      name: "赵秘书",
      description: "30岁，陈董的秘书，细心周到"
    }
  ],
  content: {
    type: 'doc',
    content: [
      {
        type: 'scene',
        content: [
          { type: 'text', text: '第一场 - 公司会议室 - 上午' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '宽敞明亮的会议室，落地窗外是城市的天际线。李总坐在主位，翻看着手中的文件。王助理在整理资料，张经理来回踱步，显得很紧张。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '张经理',
          parenthetical: '焦虑地'
        },
        content: [
          { type: 'text', text: '李总，这次谈判真的太重要了。如果我们拿不到陈董的投资，公司可能撑不过这个季度。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '李总',
          parenthetical: '平静地'
        },
        content: [
          { type: 'text', text: '我知道。正因为重要，我们更需要冷静。张经理，坐下。' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '张经理坐下，但还是显得不安。王助理递给李总一杯水。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '王助理',
          parenthetical: '低声'
        },
        content: [
          { type: 'text', text: '李总，陈董那边传来消息，他们十点准时到。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '李总',
          parenthetical: '看表'
        },
        content: [
          { type: 'text', text: '还有半小时。王助理，再确认一遍我们的底线。' }
        ]
      },

      {
        type: 'scene',
        content: [
          { type: 'text', text: '第二场 - 公司大厅 - 上午' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '陈董一行人从电梯里走出来。刘顾问走在陈董右侧，赵秘书拎着公文包跟在后面。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '刘顾问',
          parenthetical: '看手机'
        },
        content: [
          { type: 'text', text: '陈董，我已经看过了他们的财务报表，现金流确实紧张，但他们的技术专利很有价值。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '陈董',
          parenthetical: '意味深长地'
        },
        content: [
          { type: 'text', text: '技术有价值，但管理团队...我们走着看。这次谈判，我要压价30%。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '赵秘书',
          parenthetical: '提醒'
        },
        content: [
          { type: 'text', text: '陈董，李总他们来接了。' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '李总带领团队走过来，双方握手寒暄。' }
        ]
      },

      {
        type: 'scene',
        content: [
          { type: 'text', text: '第三场 - 会议室 - 上午' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '双方分坐在会议桌两侧。气氛略显紧张。赵秘书打开笔记本电脑准备记录。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '陈董',
          parenthetical: '开门见山'
        },
        content: [
          { type: 'text', text: '李总，我就直说了。你们需要资金，我们看好你们的技术。但我看了你们的财报，风险不小啊。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '李总',
          parenthetical: '微笑'
        },
        content: [
          { type: 'text', text: '陈董说得对，我们确实需要资金。但您也知道，我们的技术专利在行业里是领先的。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '张经理',
          parenthetical: '插话，急切地'
        },
        content: [
          { type: 'text', text: '是的！我们的技术在三个国际展会上都获奖了，市场前景非常好！' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '李总微微皱眉，看了张经理一眼。张经理意识到自己太急了，有些尴尬地低下头。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '刘顾问',
          parenthetical: '抓住机会'
        },
        content: [
          { type: 'text', text: '技术是好，但市场转化率呢？我看到你们过去两年的销售数据，增长很慢。' }
        ]
      },

      {
        type: 'scene',
        content: [
          { type: 'text', text: '第四场 - 会议室 - 中午' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '谈判已经进行了两个小时。桌上摆着咖啡和茶点，但几乎没人动过。气氛越来越紧张。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '陈董',
          parenthetical: '强硬地'
        },
        content: [
          { type: 'text', text: '李总，我的条件很清楚：投资两千万，占股40%。这是我的底线。' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '李总和王助理对视一眼。这个条件远超他们的预期，几乎是掠夺性的。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '李总',
          parenthetical: '镇定地'
        },
        content: [
          { type: 'text', text: '陈董，40%太多了。我们也有其他投资人在谈，条件比这优惠得多。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '刘顾问',
          parenthetical: '尖锐地'
        },
        content: [
          { type: 'text', text: '其他投资人？李总，我们做过调查，目前没有其他投资人在和你们实质性接触。' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '李总表情未变，但心里一紧。对方显然做了充分准备。' }
        ]
      },

      {
        type: 'scene',
        content: [
          { type: 'text', text: '第五场 - 走廊 - 中午' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '李总提出休息十分钟。他和团队走到走廊上，张经理已经急得满头大汗。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '张经理',
          parenthetical: '压低声音，焦急地'
        },
        content: [
          { type: 'text', text: '李总，他们知道了！他们什么都知道了！我们根本没有其他投资人！' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '王助理',
          parenthetical: '冷静分析'
        },
        content: [
          { type: 'text', text: '李总，40%确实太多了，但如果拒绝他们，我们可能真的撑不下去。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '李总',
          parenthetical: '沉思'
        },
        content: [
          { type: 'text', text: '他们太强势，说明他们确实想要我们的技术。这反而是我们的筹码。王助理，帮我回忆一下，我们的专利还有多久到期？' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '王助理',
          parenthetical: '眼睛一亮'
        },
        content: [
          { type: 'text', text: '核心专利还有12年！李总，您是想...' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '李总',
          parenthetical: '露出微笑'
        },
        content: [
          { type: 'text', text: '对。我们还有一张牌。' }
        ]
      },

      {
        type: 'scene',
        content: [
          { type: 'text', text: '第六场 - 会议室 - 下午' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '谈判继续。李总的状态明显不同了，更加自信从容。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '李总',
          parenthetical: '平静地'
        },
        content: [
          { type: 'text', text: '陈董，我理解您的顾虑。但我也要坦诚告诉您，我们的核心专利还有12年有效期。这期间，任何公司想要在这个领域发展，都绕不开我们。' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '陈董的表情微微变化。刘顾问快速在电脑上查看着什么。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '刘顾问',
          parenthetical: '有些紧张'
        },
        content: [
          { type: 'text', text: '陈董...（低声）他说得对，我们的技术路线确实避不开他们的专利。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '李总',
          parenthetical: '继续'
        },
        content: [
          { type: 'text', text: '所以，陈董，这不是单方面的选择。您需要我们的技术，就像我们需要您的资金一样。这是合作，不是收购。' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '会议室里陷入沉默。陈董看着李总，眼神变得复杂。' }
        ]
      },

      {
        type: 'scene',
        content: [
          { type: 'text', text: '第七场 - 会议室 - 下午' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '经过短暂的私下商议，陈董一方重新回到谈判桌。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '陈董',
          parenthetical: '语气缓和了一些'
        },
        content: [
          { type: 'text', text: '李总，你是个谈判高手。我承认，我们确实需要你们的技术。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '李总',
          parenthetical: '谦虚地'
        },
        content: [
          { type: 'text', text: '陈董过奖了。我们只是想找到双赢的方案。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '陈董',
          parenthetical: '思考'
        },
        content: [
          { type: 'text', text: '这样吧，我让一步：两千万，25%股份。但我有一个条件。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '李总'
        },
        content: [
          { type: 'text', text: '请说。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '陈董'
        },
        content: [
          { type: 'text', text: '我要一个董事会席位，并且对重大决策有否决权。' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '李总和王助理快速交换了一个眼神。' }
        ]
      },

      {
        type: 'scene',
        content: [
          { type: 'text', text: '第八场 - 走廊 - 下午' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '又一次休息。这次张经理反而冷静下来了。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '张经理',
          parenthetical: '分析'
        },
        content: [
          { type: 'text', text: '李总，25%可以接受。但否决权...这会限制我们的决策自由度。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '王助理',
          parenthetical: '补充'
        },
        content: [
          { type: 'text', text: '而且董事会席位意味着他们会深度介入公司运营。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '李总',
          parenthetical: '思考'
        },
        content: [
          { type: 'text', text: '但这也是机会。陈董的资源和人脉，对我们开拓市场很有帮助。否决权可以接受，但我们需要限定范围。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '张经理',
          parenthetical: '不解'
        },
        content: [
          { type: 'text', text: '限定范围？' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '李总',
          parenthetical: '微笑'
        },
        content: [
          { type: 'text', text: '对。否决权只限于融资、并购、重大人事变动。日常运营，他们不能干预。' }
        ]
      },

      {
        type: 'scene',
        content: [
          { type: 'text', text: '第九场 - 会议室 - 傍晚' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '窗外已经亮起了城市的灯光。谈判进入最后阶段。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '李总',
          parenthetical: '郑重地'
        },
        content: [
          { type: 'text', text: '陈董，我们的方案是：两千万，25%股份，您可以获得董事会席位。否决权限于融资、并购和重大人事变动。日常运营管理权仍在我方。' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '陈董沉思了一会儿，看了看刘顾问，刘顾问微微点头。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '陈董',
          parenthetical: '终于露出笑容'
        },
        content: [
          { type: 'text', text: '李总，你很聪明，也很务实。我接受你的方案。' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '所有人都松了一口气。赵秘书开始起草协议。' }
        ]
      },

      {
        type: 'scene',
        content: [
          { type: 'text', text: '第十场 - 公司门口 - 晚上' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '谈判结束，双方握手告别。夜幕下的城市灯火辉煌。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '陈董',
          parenthetical: '真诚地'
        },
        content: [
          { type: 'text', text: '李总，期待我们的合作。我相信你，也相信你们的团队。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '李总'
        },
        content: [
          { type: 'text', text: '谢谢陈董的信任。我们不会让您失望的。' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '陈董一行人离开。张经理兴奋得几乎跳起来。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '张经理',
          parenthetical: '激动地'
        },
        content: [
          { type: 'text', text: '李总！我们成功了！我们做到了！' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '王助理',
          parenthetical: '感慨'
        },
        content: [
          { type: 'text', text: '真没想到，最后居然谈成了。李总，您太厉害了。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '李总',
          parenthetical: '平静地，但眼中也有欣慰'
        },
        content: [
          { type: 'text', text: '这不是我一个人的功劳，是我们整个团队的努力。今晚大家辛苦了，明天我们开始新的征程。' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '三人站在公司门口，看着远去的陈董的车，又看了看身后灯火通明的公司大楼。李总拍了拍两位年轻人的肩膀。' }
        ]
      },
      {
        type: 'dialogue',
        attrs: {
          character: '李总',
          parenthetical: '坚定地'
        },
        content: [
          { type: 'text', text: '走吧，我们还有很多事要做。' }
        ]
      },
      {
        type: 'action',
        content: [
          { type: 'text', text: '三人转身走进大楼。镜头拉远，城市的夜景尽收眼底，无数灯火中，这一栋楼的灯光格外明亮。' }
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
