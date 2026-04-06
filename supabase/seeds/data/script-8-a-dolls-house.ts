import type { SeedScript } from '../types'

export const script8ADollsHouse: SeedScript = {
  title: "玩偶之家",
  description: "亨利克·易卜生的经典戏剧，讲述娜拉从家庭玩偶到独立女性的觉醒过程",
  author: "Henrik Ibsen",
  genre: "现代戏剧",
  logline: "娜拉在圣诞节的忙碌中，突然发现丈夫即将成为银行经理，她意味着经济压力的结束。她秘密即将曝光...",
  notes: "公有领域作品，可自由使用",
  characters: [
    { name: "Nora", description: "Helmer的妻子（主角）" },
    { name: "Torvald Helmer", description: "Nora的丈夫，律师，银行经理" },
    { name: "Mrs Linde", description: "Nora的老朋友（克里斯汀）" },
    { name: "Krogstad", description: "银行职员，律师" },
    { name: "Doctor Rank", description: "Helmer家的老朋友" },
    { name: "Anne", description: "保姆" },
    { name: "Maid", description: "女仆" },
    { name: "Porter", description: "搬运工" },
  ],
  content: {
    type: 'doc',
    content: [
  {
    "type": "scene",
    "attrs": {
      "id": "act-1"
    },
    "content": [
      {
        "type": "text",
        "text": "ACT I"
      }
    ]
  },
  {
    "type": "action",
    "content": [
      {
        "type": "text",
        "text": "[SCENE.—A room furnished comfortably and tastefully, but not extravagantly. At the back, a door to the right leads to the entrance-hall, another to the left leads to Helmer's study. Between the doors stands a piano. In the middle of the left-hand wall is a door, and beyond it a window. Near the window are a round table, arm-chairs and a small sofa. In the right-hand wall, at the farther end, another door; and on the same side, nearer the footlights, a stove, two easy chairs and a rocking-chair; between the stove and the door, a small table. Engravings on the walls; a cabinet with china and other small objects; a small book-case with well-bound books. The floors are carpeted, and a fire burns in the stove. It is winter."
      }
    ]
  },
  {
    "type": "action",
    "content": [
      {
        "type": "text",
        "text": "A bell rings in the hall; shortly afterwards the door is heard to open. Enter NORA, humming a tune and in high spirits. She is in outdoor dress and carries a number of parcels; these she lays on the table to the right. She leaves the outer door open after her, and through it is seen a PORTER who is carrying a Christmas Tree and a basket, which he gives to the MAID who has opened the door.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Hide the Christmas Tree carefully, Helen. Be sure the children do not see it until this evening, when it is dressed. [To the PORTER, taking out her purse.] How much?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "PORTER"
    },
    "content": [
      {
        "type": "text",
        "text": "Sixpence."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "There is a shilling. No, keep the change. [The PORTER thanks her, and goes out. NORA shuts the door. She is laughing to herself, as she takes off her hat and coat. She takes a packet of macaroons from her pocket and eats one or two; then goes cautiously to her husband's door and listens.] Yes, he is in. [Still humming, she goes to the table on the right.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "[calls out from his room]. Is that my little lark twittering out there?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[busy opening some of the parcels]. Yes, it is!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Is it my little squirrel bustling about?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "When did my squirrel come home?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Just now. [Puts the bag of macaroons into her pocket and wipes her mouth.] Come in here, Torvald, and see what I have bought."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Don't disturb me. [A little later, he opens the door and looks into the room, pen in hand.] Bought, did you say? All these things? Has my little spendthrift been wasting money again?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes but, Torvald, this year we really can let ourselves go a little. This is the first Christmas that we have not needed to economise."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Still, you know, we can't spend money recklessly."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, Torvald, we may be a wee bit more reckless now, mayn't we? Just a tiny wee bit! You are going to have a big salary and earn lots and lots of money."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, after the New Year; but then it will be a whole quarter before the salary is due."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Pooh! we can borrow until then."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Nora! [Goes up to her and takes her playfully by the ear.] The same little featherhead! Suppose, now, that I borrowed fifty pounds today, and you spent it all in the Christmas week, and then on New Year's Eve a slate fell on my head and killed me, and—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[putting her hands over his mouth]. Oh! don't say such horrid things."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Still, suppose that happened,—what then?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "If that were to happen, I don't suppose I should care whether I owed money or not."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, but what about the people who had lent it?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "They? Who would bother about them? I should not know who they were."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "That is like a woman! But seriously, Nora, you know what I think about that. No debt, no borrowing. There can be no freedom or beauty about a home life that depends on borrowing and debt. We two have kept bravely on the straight road so far, and we will go on the same way for the short time longer that there need be any struggle."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[moving towards the stove]. As you please, Torvald."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "[following her]. Come, come, my little skylark must not droop her wings. What is this! Is my little squirrel out of temper? [Taking out his purse.] Nora, what do you think I have got here?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[turning round quickly]. Money!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "There you are. [Gives her some money.] Do you think I don't know what a lot is wanted for housekeeping at Christmas-time?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[counting]. Ten shillings—a pound—two pounds! Thank you, thank you, Torvald; that will keep me going for a long time."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Indeed it must."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, yes, it will. But come here and let me show you what I have bought. And all so cheap! Look, here is a new suit for Ivar, and a sword; and a horse and a trumpet for Bob; and a doll and dolly's bedstead for Emmy,—they are very plain, but anyway she will soon break them in pieces. And here are dress-lengths and handkerchiefs for the maids; old Anne ought really to have something better."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "And what is in this parcel?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[crying out]. No, no! you mustn't see that until this evening."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Very well. But now tell me, you extravagant little person, what would you like for yourself?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "For myself? Oh, I am sure I don't want anything."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, but you must. Tell me something reasonable that you would particularly like to have."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "No, I really can't think of anything—unless, Torvald—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Well?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[playing with his coat buttons, and without raising her eyes to his]. If you really want to give me something, you might—you might—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Well, out with it!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[speaking quickly]. You might give me money, Torvald. Only just as much as you can afford; and then one of these days I will buy something with it."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "But, Nora—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Oh, do! dear Torvald; please, please do! Then I will wrap it up in beautiful gilt paper and hang it on the Christmas Tree. Wouldn't that be fun?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "What are little people called that are always wasting money?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Spendthrifts—I know. Let us do as you suggest, Torvald, and then I shall have time to think what I am most in want of. That is a very sensible plan, isn't it?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "[smiling]. Indeed it is—that is to say, if you were really to save out of the money I give you, and then really buy something for yourself. But if you spend it all on the housekeeping and any number of unnecessary things, then I merely have to pay up again."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Oh but, Torvald—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "You can't deny it, my dear little Nora. [Puts his arm round her waist.] It's a sweet little spendthrift, but she uses up a deal of money. One would hardly believe how expensive such little persons are!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "It's a shame to say that. I do really save all I can."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "[laughing]. That's very true,—all you can. But you can't save anything!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[smiling quietly and happily]. You haven't any idea how many expenses we skylarks and squirrels have, Torvald."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "You are an odd little soul. Very like your father. You always find some new way of wheedling money out of me, and, as soon as you have got it, it seems to melt in your hands. You never know where it has gone. Still, one must take you as you are. It is in the blood; for indeed it is true that you can inherit these things, Nora."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Ah, I wish I had inherited many of papa's qualities."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "And I would not wish you to be anything but just what you are, my sweet little skylark. But, do you know, it strikes me that you are looking rather—what shall I say—rather uneasy today?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Do I?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "You do, really. Look straight at me."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[looks at him]. Well?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "[wagging his finger at her]. Hasn't Miss Sweet Tooth been breaking rules in town today?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "No; what makes you think that?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Hasn't she paid a visit to the confectioner's?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "No, I assure you, Torvald—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Not been nibbling sweets?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "No, certainly not."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Not even taken a bite at a macaroon or two?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "No, Torvald, I assure you really—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "There, there, of course I was only joking."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[going to the table on the right]. I should not think of going against your wishes."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "No, I am sure of that; besides, you gave me your word— [Going up to her.] Keep your little Christmas secrets to yourself, my darling. They will all be revealed tonight when the Christmas Tree is lit, no doubt."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Did you remember to invite Doctor Rank?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "No. But there is no need; as a matter of course he will come to dinner with us. However, I will ask him when he comes in this morning. I have ordered some good wine. Nora, you can't think how I am looking forward to this evening."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "So am I! And how the children will enjoy themselves, Torvald!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "It is splendid to feel that one has a perfectly safe appointment, and a big enough income. It's delightful to think of, isn't it?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "It's wonderful!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Do you remember last Christmas? For a full three weeks beforehand you shut yourself up every evening until long after midnight, making ornaments for the Christmas Tree, and all the other fine things that were to be a surprise to us. It was the dullest three weeks I ever spent!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "I didn't find it dull."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "[smiling]. But there was precious little result, Nora."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Oh, you shouldn't tease me about that again. How could I help the cat's going in and tearing everything to pieces?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Of course you couldn't, poor little girl. You had the best of intentions to please us all, and that's the main thing. But it is a good thing that our hard times are over."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, it is really wonderful."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "This time I needn't sit here and be dull all alone, and you needn't ruin your dear eyes and your pretty little hands—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[clapping her hands]. No, Torvald, I needn't any longer, need I! It's wonderfully lovely to hear you say so! [Taking his arm.] Now I will tell you how I have been thinking we ought to arrange things, Torvald. As soon as Christmas is over—[A bell rings in the hall.] There's the bell. [She tidies the room a little.] There's some one at the door. What a nuisance!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "If it is a caller, remember I am not at home."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MAID"
    },
    "content": [
      {
        "type": "text",
        "text": "[in the doorway]. A lady to see you, ma'am,—a stranger."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Ask her to come in."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MAID"
    },
    "content": [
      {
        "type": "text",
        "text": "[to HELMER]. The doctor came at the same time, sir."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Did he go straight into my room?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MAID"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, sir."
      }
    ]
  },
  {
    "type": "action",
    "content": [
      {
        "type": "text",
        "text": "[HELMER goes into his room. The MAID ushers in Mrs Linde, who is in travelling dress, and shuts the door.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "[in a dejected and timid voice]. How do you do, Nora?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[doubtfully]. How do you do—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "You don't recognise me, I suppose."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "No, I don't know—yes, to be sure, I seem to—[Suddenly.] Yes! Christine! Is it really you?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, it is I."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Christine! To think of my not recognising you! And yet how could I—[In a gentle voice.] How you have altered, Christine!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, I have indeed. In nine, ten long years—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Is it so long since we met? I suppose it is. The last eight years have been a happy time for me, I can tell you. And so now you have come into the town, and have taken this long journey in winter—that was plucky of you."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "I arrived by steamer this morning."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "To have some fun at Christmas-time, of course. How delightful! We will have such fun together! But take off your things. You are not cold, I hope. [Helps her.] Now we will sit down by the stove, and be cosy. No, take this armchair; I will sit here in the rocking-chair. [Takes her hands.] Now you look like your old self again; it was only the first moment—You are a little paler, Christine, and perhaps a little thinner."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "And much, much older, Nora."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Perhaps a little older; very, very little; certainly not much. [Stops suddenly and speaks seriously.] What a thoughtless creature I am, chattering away like this. My poor, dear Christine, do forgive me."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "What do you mean, Nora?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[gently]. Poor Christine, you are a widow."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes; it is three years ago now."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, I knew; I saw it in the papers. I assure you, Christine, I meant ever so often to write to you at the time, but I always put it off and something always prevented me."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "I quite understand, dear."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "It was very bad of me, Christine. Poor thing, how you must have suffered. And he left you nothing?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "No."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "And no children?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "No."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Nothing at all, then."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Not even any sorrow or grief to live upon."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[looking incredulously at her]. But, Christine, is that possible?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "[smiles sadly and strokes her hair]. It sometimes happens, Nora."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "So you are quite alone. How dreadfully sad that must be. I have three lovely children. You can't see them just now, for they are out with their nurse. But now you must tell me all about it."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "No, no; I want to hear about you."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "No, you must begin. I mustn't be selfish today; today I must only think of your affairs. But there is one thing I must tell you. Do you know we have just had a great piece of good luck?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "No, what is it?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Just fancy, my husband has been made manager of the Bank!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Your husband? What good luck!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, tremendous! A barrister's profession is such an uncertain thing, especially if he won't undertake unsavoury cases; and naturally Torvald has never been willing to do that, and I quite agree with him. You may imagine how pleased we are! He is to take up his work in the Bank at the New Year, and then he will have a big salary and lots of commissions. For the future we can live quite differently—we can do just as we like. I feel so relieved and so happy, Christine! It will be splendid to have heaps of money and not need to have any anxiety, won't it?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, anyhow I think it would be delightful to have what one needs."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "No, not only what one needs, but heaps and heaps of money."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "[smiling]. Nora, Nora, haven't you learned sense yet? In our schooldays you were a great spendthrift."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[laughing]. Yes, that is what Torvald says now. [Wags her finger at her.] But \"Nora, Nora\" is not so silly as you think. We have not been in a position for me to waste money. We have both had to work."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "You too?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes; odds and ends, needlework, crotchet-work, embroidery, and that kind of thing. [Dropping her voice.] And other things as well. You know Torvald left his office when we were married? There was no prospect of promotion there, and he had to try and earn more than before. But during the first year he over-worked himself dreadfully. You see, he had to make money every way he could, and he worked early and late; but he couldn't stand it, and fell dreadfully ill, and the doctors said it was necessary for him to go south."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "You spent a whole year in Italy, didn't you?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes. It was no easy matter to get away, I can tell you. It was just after Ivar was born; but naturally we had to go. It was a wonderfully beautiful journey, and it saved Torvald's life. But it cost a tremendous lot of money, Christine."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "So I should think."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "It cost about two hundred and fifty pounds. That's a lot, isn't it?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, and in emergencies like that it is lucky to have the money."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "I ought to tell you that we had it from papa."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Oh, I see. It was just about that time that he died, wasn't it?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes; and, just think of it, I couldn't go and nurse him. I was expecting little Ivar's birth every day and I had my poor sick Torvald to look after. My dear, kind father—I never saw him again, Christine. That was the saddest time I have known since our marriage."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "I know how fond you were of him. And then you went off to Italy?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes; you see we had money then, and the doctors insisted on our going, so we started a month later."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "And your husband came back quite well?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "As sound as a bell!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "But—the doctor?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "What doctor?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "I thought your maid said the gentleman who arrived here just as I did, was the doctor?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, that was Doctor Rank, but he doesn't come here professionally. He is our greatest friend, and comes in at least once every day. No, Torvald has not had an hour's illness since then, and our children are strong and healthy and so am I. [Jumps up and claps her hands.] Christine! Christine! it's good to be alive and happy!—But how horrid of me; I am talking of nothing but my own affairs. [Sits on a stool near her, and rests her arms on her knees.] You mustn't be angry with me. Tell me, is it really true that you did not love your husband? Why did you marry him?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "My mother was alive then, and was bedridden and helpless, and I had to provide for my two younger brothers; so I did not think I was justified in refusing his offer."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "No, perhaps you were quite right. He was rich at that time, then?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "I believe he was quite well off. But his business was a precarious one; and, when he died, it all went to pieces and there was nothing left."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "And then?—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Well, I had to turn my hand to anything I could find—first a small shop, then a small school, and so on. The last three years have seemed like one long working-day, with no rest. Now it is at an end, Nora. My poor mother needs me no more, for she is gone; and the boys do not need me either; they have got situations and can shift for themselves."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "What a relief you must feel if—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "No, indeed; I only feel my life unspeakably empty. No one to live for anymore. [Gets up restlessly.] That was why I could not stand the life in my little backwater any longer. I hope it may be easier here to find something which will busy me and occupy my thoughts. If only I could have the good luck to get some regular work—office work of some kind—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "But, Christine, that is so frightfully tiring, and you look tired out now. You had far better go away to some watering-place."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "[walking to the window]. I have no father to give me money for a journey, Nora."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[rising]. Oh, don't be angry with me!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "[going up to her]. It is you that must not be angry with me, dear. The worst of a position like mine is that it makes one so bitter. No one to work for, and yet obliged to be always on the lookout for chances. One must live, and so one becomes selfish. When you told me of the happy turn your fortunes have taken—you will hardly believe it—I was delighted not so much on your account as on my own."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "How do you mean?—Oh, I understand. You mean that perhaps Torvald could get you something to do."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, that was what I was thinking of."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "He must, Christine. Just leave it to me; I will broach the subject very cleverly—I will think of something that will please him very much. It will make me so happy to be of some use to you."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "How kind you are, Nora, to be so anxious to help me! It is doubly kind in you, for you know so little of the burdens and troubles of life."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "I—? I know so little of them?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "[smiling]. My dear! Small household cares and that sort of thing!—You are a child, Nora."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[tosses her head and crosses the stage]. You ought not to be so superior."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "No?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "You are just like the others. They all think that I am incapable of anything really serious—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Come, come—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "—that I have gone through nothing in this world of cares."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "But, my dear Nora, you have just told me all your troubles."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Pooh!—those were trifles. [Lowering her voice.] I have not told you the important thing."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "The important thing? What do you mean?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "You look down upon me altogether, Christine—but you ought not to. You are proud, aren't you, of having worked so hard and so long for your mother?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Indeed, I don't look down on anyone. But it is true that I am both proud and glad to think that I was privileged to make the end of my mother's life almost free from care."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "And you are proud to think of what you have done for your brothers?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "I think I have the right to be."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "I think so, too. But now, listen to this; I too have something to be proud and glad of."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "I have no doubt you have. But what do you refer to?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Speak low. Suppose Torvald were to hear! He mustn't on any account—no one in the world must know, Christine, except you."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "But what is it?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Come here. [Pulls her down on the sofa beside her.] Now I will show you that I too have something to be proud and glad of. It was I who saved Torvald's life."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "\"Saved\"? How?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "I told you about our trip to Italy. Torvald would never have recovered if he had not gone there—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, but your father gave you the necessary funds."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[smiling]. Yes, that is what Torvald and all the others think, but—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "But—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Papa didn't give us a shilling. It was I who procured the money."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "You? All that large sum?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Two hundred and fifty pounds. What do you think of that?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "But, Nora, how could you possibly do it? Did you win a prize in the Lottery?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[contemptuously]. In the Lottery? There would have been no credit in that."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "But where did you get it from, then? Nora [humming and smiling with an air of mystery]. Hm, hm! Aha!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Because you couldn't have borrowed it."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Couldn't I? Why not?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "No, a wife cannot borrow without her husband's consent."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[tossing her head]. Oh, if it is a wife who has any head for business—a wife who has the wit to be a little bit clever—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "I don't understand it at all, Nora."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "There is no need you should. I never said I had borrowed the money. I may have got it some other way. [Lies back on the sofa.] Perhaps I got it from some other admirer. When anyone is as attractive as I am—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "You are a mad creature."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Now, you know you're full of curiosity, Christine."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Listen to me, Nora dear. Haven't you been a little bit imprudent?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[sits up straight]. Is it imprudent to save your husband's life?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "It seems to me imprudent, without his knowledge, to—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "But it was absolutely necessary that he should not know! My goodness, can't you understand that? It was necessary he should have no idea what a dangerous condition he was in. It was to me that the doctors came and said that his life was in danger, and that the only thing to save him was to live in the south. Do you suppose I didn't try, first of all, to get what I wanted as if it were for myself? I told him how much I should love to travel abroad like other young wives; I tried tears and entreaties with him; I told him that he ought to remember the condition I was in, and that he ought to be kind and indulgent to me; I even hinted that he might raise a loan. That nearly made him angry, Christine. He said I was thoughtless, and that it was his duty as my husband not to indulge me in my whims and caprices—as I believe he called them. Very well, I thought, you must be saved—and that was how I came to devise a way out of the difficulty—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "And did your husband never get to know from your father that the money had not come from him?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "No, never. Papa died just at that time. I had meant to let him into the secret and beg him never to reveal it. But he was so ill then—alas, there never was any need to tell him."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "And since then have you never told your secret to your husband?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Good Heavens, no! How could you think so? A man who has such strong opinions about these things! And besides, how painful and humiliating it would be for Torvald, with his manly independence, to know that he owed me anything! It would upset our mutual relations altogether; our beautiful happy home would no longer be what it is now."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Do you mean never to tell him about it?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[meditatively, and with a half smile]. Yes—someday, perhaps, after many years, when I am no longer as nice-looking as I am now. Don't laugh at me! I mean, of course, when Torvald is no longer as devoted to me as he is now; when my dancing and dressing-up and reciting have palled on him; then it may be a good thing to have something in reserve—[Breaking off.] What nonsense! That time will never come. Now, what do you think of my great secret, Christine? Do you still think I am of no use? I can tell you, too, that this affair has caused me a lot of worry. It has been by no means easy for me to meet my engagements punctually. I may tell you that there is something that is called, in business, quarterly interest, and another thing called payment in installments, and it is always so dreadfully difficult to manage them. I have had to save a little here and there, where I could, you understand. I have not been able to put aside much from my housekeeping money, for Torvald must have a good table. I couldn't let my children be shabbily dressed; I have felt obliged to use up all he gave me for them, the sweet little darlings!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "So it has all had to come out of your own necessaries of life, poor Nora?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Of course. Besides, I was the one responsible for it. Whenever Torvald has given me money for new dresses and such things, I have never spent more than half of it; I have always bought the simplest and cheapest things. Thank Heaven, any clothes look well on me, and so Torvald has never noticed it. But it was often very hard on me, Christine—because it is delightful to be really well dressed, isn't it?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Quite so."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Well, then I have found other ways of earning money. Last winter I was lucky enough to get a lot of copying to do; so I locked myself up and sat writing every evening until quite late at night. Many a time I was desperately tired; but all the same it was a tremendous pleasure to sit there working and earning money. It was like being a man."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "How much have you been able to pay off in that way?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "I can't tell you exactly. You see, it is very difficult to keep an account of a business matter of that kind. I only know that I have paid every penny that I could scrape together. Many a time I was at my wits' end. [Smiles.] Then I used to sit here and imagine that a rich old gentleman had fallen in love with me—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "What! Who was it?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Be quiet!—that he had died; and that when his will was opened it contained, written in big letters, the instruction: \"The lovely Mrs Nora Helmer is to have all I possess paid over to her at once in cash.\""
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "But, my dear Nora—who could the man be?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Good gracious, can't you understand? There was no old gentleman at all; it was only something that I used to sit here and imagine, when I couldn't think of any way of procuring money. But it's all the same now; the tiresome old person can stay where he is, as far as I am concerned; I don't care about him or his will either, for I am free from care now. [Jumps up.] My goodness, it's delightful to think of, Christine! Free from care! To be able to be free from care, quite free from care; to be able to play and romp with the children; to be able to keep the house beautifully and have everything just as Torvald likes it! And, think of it, soon the spring will come and the big blue sky! Perhaps we shall be able to take a little trip—perhaps I shall see the sea again! Oh, it's a wonderful thing to be alive and be happy. [A bell is heard in the hall.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "[rising]. There is the bell; perhaps I had better go."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "No, don't go; no one will come in here; it is sure to be for Torvald."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "SERVANT"
    },
    "content": [
      {
        "type": "text",
        "text": "[at the hall door]. Excuse me, ma'am—there is a gentleman to see the master, and as the doctor is with him—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Who is it?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "[at the door]. It is I, Mrs Helmer. [Mrs LINDE starts, trembles, and turns to the window.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[takes a step towards him, and speaks in a strained, low voice]. You? What is it? What do you want to see my husband about?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "Bank business—in a way. I have a small post in the Bank, and I hear your husband is to be our chief now—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Then it is—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "Nothing but dry business matters, Mrs Helmer; absolutely nothing else."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Be so good as to go into the study, then. [She bows indifferently to him and shuts the door into the hall; then comes back and makes up the fire in the stove.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Nora—who was that man?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "A lawyer, of the name of Krogstad."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Then it really was he."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Do you know the man?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "I used to—many years ago. At one time he was a solicitor's clerk in our town."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, he was."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "He is greatly altered."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "He made a very unhappy marriage."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "He is a widower now, isn't he?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "With several children. There now, it is burning up. [Shuts the door of the stove and moves the rocking-chair aside.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "They say he carries on various kinds of business."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Really! Perhaps he does; I don't know anything about it. But don't let us think of business; it is so tiresome."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "DOCTOR RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "[comes out of HELMER'S study. Before he shuts the door he calls to him]. No, my dear fellow, I won't disturb you; I would rather go in to your wife for a little while. [Shuts the door and sees Mrs LINDE.] I beg your pardon; I am afraid I am disturbing you too."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "No, not at all. [Introducing him]. Doctor Rank, Mrs Linde."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "I have often heard Mrs Linde's name mentioned here. I think I passed you on the stairs when I arrived, Mrs Linde?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, I go up very slowly; I can't manage stairs well."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "Ah! some slight internal weakness?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "No, the fact is I have been overworking myself."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "Nothing more than that? Then I suppose you have come to town to amuse yourself with our entertainments?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "I have come to look for work."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "Is that a good cure for overwork?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "One must live, Doctor Rank."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, the general opinion seems to be that it is necessary."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Look here, Doctor Rank—you know you want to live."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "Certainly. However wretched I may feel, I want to prolong the agony as long as possible. All my patients are like that. And so are those who are morally diseased; one of them, and a bad case too, is at this very moment with Helmer—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "[sadly]. Ah!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Whom do you mean?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "A lawyer of the name of Krogstad, a fellow you don't know at all. He suffers from a diseased moral character, Mrs Helmer; but even he began talking of its being highly important that he should live."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Did he? What did he want to speak to Torvald about?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "I have no idea; I only heard that it was something about the Bank."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "I didn't know this—what's his name—Krogstad had anything to do with the Bank."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, he has some sort of appointment there. [To Mrs Linde.] I don't know whether you find also in your part of the world that there are certain people who go zealously snuffing about to smell out moral corruption, and, as soon as they have found some, put the person concerned into some lucrative position where they can keep their eye on him. Healthy natures are left out in the cold."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Still I think the sick are those who most need taking care of."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "[shrugging his shoulders]. Yes, there you are. That is the sentiment that is turning Society into a sick-house."
      }
    ]
  },
  {
    "type": "action",
    "content": [
      {
        "type": "text",
        "text": "[NORA, who has been absorbed in her thoughts, breaks out into smothered laughter and claps her hands.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "Why do you laugh at that? Have you any notion what Society really is?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "What do I care about tiresome Society? I am laughing at something quite different, something extremely amusing. Tell me, Doctor Rank, are all the people who are employed in the Bank dependent on Torvald now?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "Is that what you find so extremely amusing?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[smiling and humming]. That's my affair! [Walking about the room.] It's perfectly glorious to think that we have—that Torvald has so much power over so many people. [Takes the packet from her pocket.] Doctor Rank, what do you say to a macaroon?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "What, macaroons? I thought they were forbidden here."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, but these are some Christine gave me."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "What! I?—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Oh, well, don't be alarmed! You couldn't know that Torvald had forbidden them. I must tell you that he is afraid they will spoil my teeth. But, bah!—once in a way—That's so, isn't it, Doctor Rank? By your leave! [Puts a macaroon into his mouth.] You must have one too, Christine. And I shall have one, just a little one—or at most two. [Walking about.] I am tremendously happy. There is just one thing in the world now that I should dearly love to do."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "Well, what is that?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "It's something I should dearly love to say, if Torvald could hear me."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "Well, why can't you say it?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "No, I daren't; it's so shocking."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Shocking?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "Well, I should not advise you to say it. Still, with us you might. What is it you would so much like to say if Torvald could hear you?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "I should just love to say—Well, I'm damned!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "Are you mad?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Nora, dear—!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "Say it, here he is!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[hiding the packet]. Hush! Hush! Hush! [HELMER comes out of his room, with his coat over his arm and his hat in his hand.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Well, Torvald dear, have you got rid of him?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, he has just gone."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Let me introduce you—this is Christine, who has come to town."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Christine—? Excuse me, but I don't know—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Mrs Linde, dear; Christine Linde."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Of course. A school friend of my wife's, I presume?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, we have known each other since then."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "And just think, she has taken a long journey in order to see you."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "What do you mean?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "No, really, I—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Christine is tremendously clever at book-keeping, and she is frightfully anxious to work under some clever man, so as to perfect herself—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Very sensible, Mrs Linde."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "And when she heard you had been appointed manager of the Bank—the news was telegraphed, you know—she travelled here as quick as she could. Torvald, I am sure you will be able to do something for Christine, for my sake, won't you?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Well, it is not altogether impossible. I presume you are a widow, Mrs Linde?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "And have had some experience of book-keeping?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, a fair amount."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Ah! well, it's very likely I may be able to find something for you—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[clapping her hands]. What did I tell you? What did I tell you?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "You have just come at a fortunate moment, Mrs Linde."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "How am I to thank you?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "There is no need. [Puts on his coat.] But today you must excuse me—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "Wait a minute; I will come with you. [Brings his fur coat from the hall and warms it at the fire.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Don't be long away, Torvald dear."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "About an hour, not more."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Are you going too, Christine?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "[putting on her cloak]. Yes, I must go and look for a room."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Oh, well then, we can walk down the street together."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[helping her]. What a pity it is we are so short of space here; I am afraid it is impossible for us—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Please don't think of it! Goodbye, Nora dear, and many thanks."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Goodbye for the present. Of course you will come back this evening. And you too, Dr. Rank. What do you say? If you are well enough? Oh, you must be! Wrap yourself up well. [They go to the door all talking together. Children's voices are heard on the staircase.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "There they are! There they are! [She runs to open the door. The NURSE comes in with the children.] Come in! Come in! [Stoops and kisses them.] Oh, you sweet blessings! Look at them, Christine! Aren't they darlings?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "Don't let us stand here in the draught."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Come along, Mrs Linde; the place will only be bearable for a mother now!"
      }
    ]
  },
  {
    "type": "action",
    "content": [
      {
        "type": "text",
        "text": "[RANK, HELMER, and Mrs Linde go downstairs. The NURSE comes forward with the children; NORA shuts the hall door.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "How fresh and well you look! Such red cheeks like apples and roses. [The children all talk at once while she speaks to them.] Have you had great fun? That's splendid! What, you pulled both Emmy and Bob along on the sledge? —both at once?—that was good. You are a clever boy, Ivar. Let me take her for a little, Anne. My sweet little baby doll! [Takes the baby from the MAID and dances it up and down.] Yes, yes, mother will dance with Bob too. What! Have you been snowballing? I wish I had been there too! No, no, I will take their things off, Anne; please let me do it, it is such fun. Go in now, you look half frozen. There is some hot coffee for you on the stove."
      }
    ]
  },
  {
    "type": "action",
    "content": [
      {
        "type": "text",
        "text": "[The NURSE goes into the room on the left. NORA takes off the children's things and throws them about, while they all talk to her at once.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Really! Did a big dog run after you? But it didn't bite you? No, dogs don't bite nice little dolly children. You mustn't look at the parcels, Ivar. What are they? Ah, I daresay you would like to know. No, no—it's something nasty! Come, let us have a game! What shall we play at? Hide and Seek? Yes, we'll play Hide and Seek. Bob shall hide first. Must I hide? Very well, I'll hide first. [She and the children laugh and shout, and romp in and out of the room; at last NORA hides under the table, the children rush in and out for her, but do not see her; they hear her smothered laughter, run to the table, lift up the cloth and find her. Shouts of laughter. She crawls forward and pretends to frighten them. Fresh laughter. Meanwhile there has been a knock at the hall door, but none of them has noticed it. The door is half opened, and KROGSTAD appears, he waits a little; the game goes on.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "Excuse me, Mrs Helmer."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[with a stifled cry, turns round and gets up on to her knees]. Ah! what do you want?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "Excuse me, the outer door was ajar; I suppose someone forgot to shut it."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[rising]. My husband is out, Mr. Krogstad."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "I know that."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "What do you want here, then?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "A word with you."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "With me?—[To the children, gently.] Go in to nurse. What? No, the strange man won't do mother any harm. When he has gone we will have another game. [She takes the children into the room on the left, and shuts the door after them.] You want to speak to me?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, I do."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Today? It is not the first of the month yet."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "No, it is Christmas Eve, and it will depend on yourself what sort of a Christmas you will spend."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "What do you mean? Today it is absolutely impossible for me—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "We won't talk about that until later on. This is something different. I presume you can give me a moment?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes—yes, I can—although—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "Good. I was in Olsen's Restaurant and saw your husband going down the street—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "With a lady."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "What then?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "May I make so bold as to ask if it was a Mrs Linde?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "It was."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "Just arrived in town?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, today."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "She is a great friend of yours, isn't she?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "She is. But I don't see—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "I knew her too, once upon a time."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "I am aware of that."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "Are you? So you know all about it; I thought as much. Then I can ask you, without beating about the bush—is Mrs Linde to have an appointment in the Bank?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "What right have you to question me, Mr. Krogstad?—You, one of my husband's subordinates! But since you ask, you shall know. Yes, Mrs Linde is to have an appointment. And it was I who pleaded her cause, Mr. Krogstad, let me tell you that."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "I was right in what I thought, then."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[walking up and down the stage]. Sometimes one has a tiny little bit of influence, I should hope. Because one is a woman, it does not necessarily follow that—. When anyone is in a subordinate position, Mr. Krogstad, they should really be careful to avoid offending anyone who—who—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "Who has influence?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Exactly."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "[changing his tone]. Mrs Helmer, you will be so good as to use your influence on my behalf."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "What? What do you mean?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "You will be so kind as to see that I am allowed to keep my subordinate position in the Bank."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "What do you mean by that? Who proposes to take your post away from you?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "Oh, there is no necessity to keep up the pretence of ignorance. I can quite understand that your friend is not very anxious to expose herself to the chance of rubbing shoulders with me; and I quite understand, too, whom I have to thank for being turned off."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "But I assure you—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "Very likely; but, to come to the point, the time has come when I should advise you to use your influence to prevent that."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "But, Mr. Krogstad, I have no influence."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "Haven't you? I thought you said yourself just now—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Naturally I did not mean you to put that construction on it. I! What should make you think I have any influence of that kind with my husband?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "Oh, I have known your husband from our student days. I don't suppose he is any more unassailable than other husbands."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "If you speak slightingly of my husband, I shall turn you out of the house."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "You are bold, Mrs Helmer."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "I am not afraid of you any longer. As soon as the New Year comes, I shall in a very short time be free of the whole thing."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "[controlling himself]. Listen to me, Mrs Helmer. If necessary, I am prepared to fight for my small post in the Bank as if I were fighting for my life."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "So it seems."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "It is not only for the sake of the money; indeed, that weighs least with me in the matter. There is another reason—well, I may as well tell you. My position is this. I daresay you know, like everybody else, that once, many years ago, I was guilty of an indiscretion."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "I think I have heard something of the kind."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "The matter never came into court; but every way seemed to be closed to me after that. So I took to the business that you know of. I had to do something; and, honestly, I don't think I've been one of the worst. But now I must cut myself free from all that. My sons are growing up; for their sake I must try and win back as much respect as I can in the town. This post in the Bank was like the first step up for me—and now your husband is going to kick me downstairs again into the mud."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "But you must believe me, Mr. Krogstad; it is not in my power to help you at all."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "Then it is because you haven't the will; but I have means to compel you."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "You don't mean that you will tell my husband that I owe you money?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "Hm!—suppose I were to tell him?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "It would be perfectly infamous of you. [Sobbing.] To think of his learning my secret, which has been my joy and pride, in such an ugly, clumsy way—that he should learn it from you! And it would put me in a horribly disagreeable position—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "Only disagreeable?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[impetuously]. Well, do it, then!—and it will be the worse for you. My husband will see for himself what a blackguard you are, and you certainly won't keep your post then."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "I asked you if it was only a disagreeable scene at home that you were afraid of?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "If my husband does get to know of it, of course he will at once pay you what is still owing, and we shall have nothing more to do with you."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "[coming a step nearer]. Listen to me, Mrs Helmer. Either you have a very bad memory or you know very little of business. I shall be obliged to remind you of a few details."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "What do you mean?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "When your husband was ill, you came to me to borrow two hundred and fifty pounds."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "I didn't know anyone else to go to."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "I promised to get you that amount—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, and you did so."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "I promised to get you that amount, on certain conditions. Your mind was so taken up with your husband's illness, and you were so anxious to get the money for your journey, that you seem to have paid no attention to the conditions of our bargain. Therefore it will not be amiss if I remind you of them. Now, I promised to get the money on the security of a bond which I drew up."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, and which I signed."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "Good. But below your signature there were a few lines constituting your father a surety for the money; those lines your father should have signed."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Should? He did sign them."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "I had left the date blank; that is to say, your father should himself have inserted the date on which he signed the paper. Do you remember that?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, I think I remember—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "Then I gave you the bond to send by post to your father. Is that not so?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "And you naturally did so at once, because five or six days afterwards you brought me the bond with your father's signature. And then I gave you the money."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Well, haven't I been paying it off regularly?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "Fairly so, yes. But—to come back to the matter in hand—that must have been a very trying time for you, Mrs Helmer?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "It was, indeed."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "Your father was very ill, wasn't he?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "He was very near his end."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "And died soon afterwards?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "Tell me, Mrs Helmer, can you by any chance remember what day your father died?—on what day of the month, I mean."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Papa died on the 29th of September."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "That is correct; I have ascertained it for myself. And, as that is so, there is a discrepancy [taking a paper from his pocket] which I cannot account for."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "What discrepancy? I don't know—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "The discrepancy consists, Mrs Helmer, in the fact that your father signed this bond three days after his death."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "What do you mean? I don't understand—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "Your father died on the 29th of September. But, look here; your father has dated his signature the 2nd of October. It is a discrepancy, isn't it? [NORA is silent.] Can you explain it to me? [NORA is still silent.] It is a remarkable thing, too, that the words \"2nd of October,\" as well as the year, are not written in your father's handwriting but in one that I think I know. Well, of course it can be explained; your father may have forgotten to date his signature, and someone else may have dated it haphazard before they knew of his death. There is no harm in that. It all depends on the signature of the name; and that is genuine, I suppose, Mrs Helmer? It was your father himself who signed his name here?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[after a short pause, throws her head up and looks defiantly at him]. No, it was not. It was I that wrote papa's name."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "Are you aware that is a dangerous confession?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "In what way? You shall have your money soon."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "Let me ask you a question; why did you not send the paper to your father?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "It was impossible; papa was so ill. If I had asked him for his signature, I should have had to tell him what the money was to be used for; and when he was so ill himself I couldn't tell him that my husband's life was in danger—it was impossible."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "It would have been better for you if you had given up your trip abroad."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "No, that was impossible. That trip was to save my husband's life; I couldn't give that up."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "But did it never occur to you that you were committing a fraud on me?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "I couldn't take that into account; I didn't trouble myself about you at all. I couldn't bear you, because you put so many heartless difficulties in my way, although you knew what a dangerous condition my husband was in."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "Mrs Helmer, you evidently do not realise clearly what it is that you have been guilty of. But I can assure you that my one false step, which lost me all my reputation, was nothing more or nothing worse than what you have done."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "You? Do you ask me to believe that you were brave enough to run a risk to save your wife's life?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "The law cares nothing about motives."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Then it must be a very foolish law."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "Foolish or not, it is the law by which you will be judged, if I produce this paper in court."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "I don't believe it. Is a daughter not to be allowed to spare her dying father anxiety and care? Is a wife not to be allowed to save her husband's life? I don't know much about law; but I am certain that there must be laws permitting such things as that. Have you no knowledge of such laws—you who are a lawyer? You must be a very poor lawyer, Mr. Krogstad."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "Maybe. But matters of business—such business as you and I have had together—do you think I don't understand that? Very well. Do as you please. But let me tell you this—if I lose my position a second time, you shall lose yours with me. [He bows, and goes out through the hall.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[appears buried in thought for a short time, then tosses her head]. Nonsense! Trying to frighten me like that!—I am not so silly as he thinks. [Begins to busy herself putting the children's things in order.] And yet—? No, it's impossible! I did it for love's sake."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "THE CHILDREN"
    },
    "content": [
      {
        "type": "text",
        "text": "[in the doorway on the left]. Mother, the stranger man has gone out through the gate."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, dears, I know. But, don't tell anyone about the stranger man. Do you hear? Not even papa."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "CHILDREN"
    },
    "content": [
      {
        "type": "text",
        "text": "No, mother; but will you come and play again?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "No, no,—not now."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "CHILDREN"
    },
    "content": [
      {
        "type": "text",
        "text": "But, mother, you promised us."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, but I can't now. Run away in; I have such a lot to do. Run away in, my sweet little darlings. [She gets them into the room by degrees and shuts the door on them; then sits down on the sofa, takes up a piece of needlework and sews a few stitches, but soon stops.] No! [Throws down the work, gets up, goes to the hall door and calls out.] Helen! bring the Tree in. [Goes to the table on the left, opens a drawer, and stops again.] No, no! it is quite impossible!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MAID"
    },
    "content": [
      {
        "type": "text",
        "text": "[coming in with the Tree]. Where shall I put it, ma'am?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Here, in the middle of the floor."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MAID"
    },
    "content": [
      {
        "type": "text",
        "text": "Shall I get you anything else?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "No, thank you. I have all I want. [Exit MAID.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[begins dressing the tree]. A candle here-and flowers here—The horrible man! It's all nonsense—there's nothing wrong. The tree shall be splendid! I will do everything I can think of to please you, Torvald!—I will sing for you, dance for you—[HELMER comes in with some papers under his arm.] Oh! are you back already?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes. Has anyone been here?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Here? No."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "That is strange. I saw Krogstad going out of the gate."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Did you? Oh yes, I forgot, Krogstad was here for a moment."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Nora, I can see from your manner that he has been here begging you to say a good word for him."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "And you were to appear to do it of your own accord; you were to conceal from me the fact of his having been here; didn't he beg that of you too?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, Torvald, but—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Nora, Nora, and you would be a party to that sort of thing? To have any talk with a man like that, and give him any sort of promise? And to tell me a lie into the bargain?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "A lie—?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Didn't you tell me no one had been here? [Shakes his finger at her.] My little songbird must never do that again. A songbird must have a clean beak to chirp with—no false notes! [Puts his arm round her waist.] That is so, isn't it? Yes, I am sure it is. [Lets her go.] We will say no more about it. [Sits down by the stove.] How warm and snug it is here! [Turns over his papers.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[after a short pause, during which she busies herself with the Christmas Tree.] Torvald!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "I am looking forward tremendously to the fancy-dress ball at the Stenborgs' the day after tomorrow."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "And I am tremendously curious to see what you are going to surprise me with."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "It was very silly of me to want to do that."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "What do you mean?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "I can't hit upon anything that will do; everything I think of seems so silly and insignificant."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Does my little Nora acknowledge that at last?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[standing behind his chair with her arms on the back of it]. Are you very busy, Torvald?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Well—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "What are all those papers?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Bank business."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Already?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "I have got authority from the retiring manager to undertake the necessary changes in the staff and in the rearrangement of the work; and I must make use of the Christmas week for that, so as to have everything in order for the new year."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Then that was why this poor Krogstad—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Hm!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[leans against the back of his chair and strokes his hair]. If you hadn't been so busy I should have asked you a tremendously big favour, Torvald."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "What is that? Tell me."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "There is no one has such good taste as you. And I do so want to look nice at the fancy-dress ball. Torvald, couldn't you take me in hand and decide what I shall go as, and what sort of a dress I shall wear?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Aha! so my obstinate little woman is obliged to get someone to come to her rescue?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, Torvald, I can't get along a bit without your help."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Very well, I will think it over, we shall manage to hit upon something."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "That is nice of you. [Goes to the Christmas Tree. A short pause.] How pretty the red flowers look—. But, tell me, was it really something very bad that this Krogstad was guilty of?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "He forged someone's name. Have you any idea what that means?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Isn't it possible that he was driven to do it by necessity?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes; or, as in so many cases, by imprudence. I am not so heartless as to condemn a man altogether because of a single false step of that kind."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "No, you wouldn't, would you, Torvald?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Many a man has been able to retrieve his character, if he has openly confessed his fault and taken his punishment."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Punishment—?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "But Krogstad did nothing of that sort; he got himself out of it by a cunning trick, and that is why he has gone under altogether."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "But do you think it would—?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Just think how a guilty man like that has to lie and play the hypocrite with every one, how he has to wear a mask in the presence of those near and dear to him, even before his own wife and children. And about the children—that is the most terrible part of it all, Nora."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "How?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Because such an atmosphere of lies infects and poisons the whole life of a home. Each breath the children take in such a house is full of the germs of evil."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[coming nearer him]. Are you sure of that?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "My dear, I have often seen it in the course of my life as a lawyer. Almost everyone who has gone to the bad early in life has had a deceitful mother."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Why do you only say—mother?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "It seems most commonly to be the mother's influence, though naturally a bad father's would have the same result. Every lawyer is familiar with the fact. This Krogstad, now, has been persistently poisoning his own children with lies and dissimulation; that is why I say he has lost all moral character. [Holds out his hands to her.] That is why my sweet little Nora must promise me not to plead his cause. Give me your hand on it. Come, come, what is this? Give me your hand. There now, that's settled. I assure you it would be quite impossible for me to work with him; I literally feel physically ill when I am in the company of such people."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[takes her hand out of his and goes to the opposite side of the Christmas Tree]. How hot it is in here; and I have such a lot to do."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "[getting up and putting his papers in order]. Yes, and I must try and read through some of these before dinner; and I must think about your costume, too. And it is just possible I may have something ready in gold paper to hang up on the Tree. [Puts his hand on her head.] My precious little singing-bird! [He goes into his room and shuts the door after him.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[after a pause, whispers]. No, no—it isn't true. It's impossible; it must be impossible."
      }
    ]
  },
  {
    "type": "action",
    "content": [
      {
        "type": "text",
        "text": "[The NURSE opens the door on the left.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NURSE"
    },
    "content": [
      {
        "type": "text",
        "text": "The little ones are begging so hard to be allowed to come in to mamma."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "No, no, no! Don't let them come in to me! You stay with them, Anne."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NURSE"
    },
    "content": [
      {
        "type": "text",
        "text": "Very well, ma'am. [Shuts the door.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[pale with terror]. Deprave my little children? Poison my home? [A short pause. Then she tosses her head.] It's not true. It can't possibly be true."
      }
    ]
  },
  {
    "type": "scene",
    "attrs": {
      "id": "act-2"
    },
    "content": [
      {
        "type": "text",
        "text": "ACT II"
      }
    ]
  },
  {
    "type": "action",
    "content": [
      {
        "type": "text",
        "text": "[THE SAME SCENE.—THE Christmas Tree is in the corner by the piano,\nstripped of its ornaments and with burnt-down candle-ends on its dishevelled\nbranches. NORA'S cloak and hat are lying on the sofa. She is alone in the\nroom, walking about uneasily. She stops by the sofa and takes up her\ncloak.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[drops her cloak]. Someone is coming now! [Goes to the door and\nlistens.] No—it is no one. Of course, no one will come today,\nChristmas Day—nor tomorrow either. But, perhaps—[opens the door\nand looks out]. No, nothing in the letterbox; it is quite empty. [Comes\nforward.] What rubbish! of course he can't be in earnest about it.\nSuch a thing couldn't happen; it is impossible—I have three little\nchildren."
      }
    ]
  },
  {
    "type": "action",
    "content": [
      {
        "type": "text",
        "text": "[Enter the NURSE from the room on the left, carrying a big cardboard\nbox.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NURSE"
    },
    "content": [
      {
        "type": "text",
        "text": "At last I have found the box with the fancy dress."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Thanks; put it on the table."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NURSE"
    },
    "content": [
      {
        "type": "text",
        "text": "[doing so]. But it is very much in want of mending."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "I should like to tear it into a hundred thousand pieces."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NURSE"
    },
    "content": [
      {
        "type": "text",
        "text": "What an idea! It can easily be put in order—just a little patience."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, I will go and get Mrs Linde to come and help me with it."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NURSE"
    },
    "content": [
      {
        "type": "text",
        "text": "What, out again? In this horrible weather? You will catch cold, ma'am,\nand make yourself ill."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Well, worse than that might happen. How are the children?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NURSE"
    },
    "content": [
      {
        "type": "text",
        "text": "The poor little souls are playing with their Christmas presents, but—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Do they ask much for me?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NURSE"
    },
    "content": [
      {
        "type": "text",
        "text": "You see, they are so accustomed to have their mamma with them."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, but, nurse, I shall not be able to be so much with them now as I was\nbefore."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NURSE"
    },
    "content": [
      {
        "type": "text",
        "text": "Oh well, young children easily get accustomed to anything."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Do you think so? Do you think they would forget their mother if she went away\naltogether?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NURSE"
    },
    "content": [
      {
        "type": "text",
        "text": "Good heavens!—went away altogether?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Nurse, I want you to tell me something I have often wondered about—how\ncould you have the heart to put your own child out among strangers?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NURSE"
    },
    "content": [
      {
        "type": "text",
        "text": "I was obliged to, if I wanted to be little Nora's nurse."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, but how could you be willing to do it?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NURSE"
    },
    "content": [
      {
        "type": "text",
        "text": "What, when I was going to get such a good place by it? A poor girl who has got\ninto trouble should be glad to. Besides, that wicked man didn't do a\nsingle thing for me."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "But I suppose your daughter has quite forgotten you."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NURSE"
    },
    "content": [
      {
        "type": "text",
        "text": "No, indeed she hasn't. She wrote to me when she was confirmed, and when\nshe was married."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[putting her arms round her neck]. Dear old Anne, you were a good mother\nto me when I was little."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NURSE"
    },
    "content": [
      {
        "type": "text",
        "text": "Little Nora, poor dear, had no other mother but me."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "And if my little ones had no other mother, I am sure you would—What\nnonsense I am talking! [Opens the box.] Go in to them. Now I\nmust—. You will see tomorrow how charming I shall look."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NURSE"
    },
    "content": [
      {
        "type": "text",
        "text": "I am sure there will be no one at the ball so charming as you, ma'am.\n[Goes into the room on the left.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[begins to unpack the box, but soon pushes it away from her]. If only I\ndared go out. If only no one would come. If only I could be sure nothing would\nhappen here in the meantime. Stuff and nonsense! No one will come. Only I\nmustn't think about it. I will brush my muff. What lovely, lovely gloves!\nOut of my thoughts, out of my thoughts! One, two, three, four, five, six—\n[Screams.] Ah! there is someone coming—. [Makes a movement\ntowards the door, but stands irresolute.]"
      }
    ]
  },
  {
    "type": "action",
    "content": [
      {
        "type": "text",
        "text": "[Enter Mrs Linde from the hall, where she has taken off her cloak and\nhat.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Oh, it's you, Christine. There is no one else out there, is there? How\ngood of you to come!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "I heard you were up asking for me."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, I was passing by. As a matter of fact, it is something you could help me\nwith. Let us sit down here on the sofa. Look here. Tomorrow evening there is to\nbe a fancy-dress ball at the Stenborgs', who live above us; and Torvald\nwants me to go as a Neapolitan fisher-girl, and dance the Tarantella that I\nlearned at Capri."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "I see; you are going to keep up the character."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, Torvald wants me to. Look, here is the dress; Torvald had it made for me\nthere, but now it is all so torn, and I haven't any idea—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "We will easily put that right. It is only some of the trimming come unsewn here\nand there. Needle and thread? Now then, that's all we want."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "It is nice of you."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "[sewing]. So you are going to be dressed up tomorrow Nora. I will tell\nyou what—I shall come in for a moment and see you in your fine feathers.\nBut I have completely forgotten to thank you for a delightful evening\nyesterday."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[gets up, and crosses the stage]. Well, I don't think yesterday\nwas as pleasant as usual. You ought to have come to town a little earlier,\nChristine. Certainly Torvald does understand how to make a house dainty and\nattractive."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "And so do you, it seems to me; you are not your father's daughter for\nnothing. But tell me, is Doctor Rank always as depressed as he was yesterday?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "No; yesterday it was very noticeable. I must tell you that he suffers from a\nvery dangerous disease. He has consumption of the spine, poor creature. His\nfather was a horrible man who committed all sorts of excesses; and that is why\nhis son was sickly from childhood, do you understand?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "[dropping her sewing]. But, my dearest Nora, how do you know anything\nabout such things?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[walking about]. Pooh! When you have three children, you get visits now\nand then from—from married women, who know something of medical matters,\nand they talk about one thing and another."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "[goes on sewing. A short silence]. Does Doctor Rank come here everyday?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Everyday regularly. He is Torvald's most intimate friend, and a great\nfriend of mine too. He is just like one of the family."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "But tell me this—is he perfectly sincere? I mean, isn't he the kind\nof man that is very anxious to make himself agreeable?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Not in the least. What makes you think that?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "When you introduced him to me yesterday, he declared he had often heard my name\nmentioned in this house; but afterwards I noticed that your husband\nhadn't the slightest idea who I was. So how could Doctor Rank—?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "That is quite right, Christine. Torvald is so absurdly fond of me that he wants\nme absolutely to himself, as he says. At first he used to seem almost jealous\nif I mentioned any of the dear folk at home, so naturally I gave up doing so.\nBut I often talk about such things with Doctor Rank, because he likes hearing\nabout them."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Listen to me, Nora. You are still very like a child in many things, and I am\nolder than you in many ways and have a little more experience. Let me tell you\nthis—you ought to make an end of it with Doctor Rank."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "What ought I to make an end of?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Of two things, I think. Yesterday you talked some nonsense about a rich admirer\nwho was to leave you money—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "An admirer who doesn't exist, unfortunately! But what then?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Is Doctor Rank a man of means?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, he is."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "And has no one to provide for?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "No, no one; but—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "And comes here everyday?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, I told you so."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "But how can this well-bred man be so tactless?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "I don't understand you at all."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Don't prevaricate, Nora. Do you suppose I don't guess who lent you\nthe two hundred and fifty pounds?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Are you out of your senses? How can you think of such a thing! A friend of\nours, who comes here everyday! Do you realise what a horribly painful position\nthat would be?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Then it really isn't he?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "No, certainly not. It would never have entered into my head for a moment.\nBesides, he had no money to lend then; he came into his money afterwards."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Well, I think that was lucky for you, my dear Nora."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "No, it would never have come into my head to ask Doctor Rank. Although I am\nquite sure that if I had asked him—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "But of course you won't."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Of course not. I have no reason to think it could possibly be necessary. But I\nam quite sure that if I told Doctor Rank—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Behind your husband's back?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "I must make an end of it with the other one, and that will be behind his back\ntoo. I must make an end of it with him."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, that is what I told you yesterday, but—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[walking up and down]. A man can put a thing like that straight much\neasier than a woman—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "One's husband, yes."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Nonsense! [Standing still.] When you pay off a debt you get your bond\nback, don't you?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, as a matter of course."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "And can tear it into a hundred thousand pieces, and burn it up—the nasty\ndirty paper!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "[looks hard at her, lays down her sewing and gets up slowly]. Nora, you\nare concealing something from me."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Do I look as if I were?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Something has happened to you since yesterday morning. Nora, what is it?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[going nearer to her]. Christine! [Listens.] Hush! there's\nTorvald come home. Do you mind going in to the children for the present?\nTorvald can't bear to see dressmaking going on. Let Anne help you."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "[gathering some of the things together]. Certainly—but I am not\ngoing away from here until we have had it out with one another. [She goes\ninto the room on the left, as HELMER comes in from the hall.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[going up to HELMER]. I have wanted you so much, Torvald dear."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Was that the dressmaker?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "No, it was Christine; she is helping me to put my dress in order. You will see\nI shall look quite smart."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Wasn't that a happy thought of mine, now?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Splendid! But don't you think it is nice of me, too, to do as you wish?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Nice?—because you do as your husband wishes? Well, well, you little\nrogue, I am sure you did not mean it in that way. But I am not going to disturb\nyou; you will want to be trying on your dress, I expect."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "I suppose you are going to work."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes. [Shows her a bundle of papers.] Look at that. I have just been into\nthe bank. [Turns to go into his room.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Torvald."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "If your little squirrel were to ask you for something very, very\nprettily—?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "What then?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Would you do it?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "I should like to hear what it is, first."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Your squirrel would run about and do all her tricks if you would be nice, and\ndo what she wants."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Speak plainly."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Your skylark would chirp about in every room, with her song rising and\nfalling—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Well, my skylark does that anyhow."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "I would play the fairy and dance for you in the moonlight, Torvald."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Nora—you surely don't mean that request you made to me this\nmorning?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[going near him]. Yes, Torvald, I beg you so earnestly—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Have you really the courage to open up that question again?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, dear, you must do as I ask; you must let Krogstad keep his post in the\nbank."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "My dear Nora, it is his post that I have arranged Mrs Linde shall have."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, you have been awfully kind about that; but you could just as well dismiss\nsome other clerk instead of Krogstad."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "This is simply incredible obstinacy! Because you chose to give him a\nthoughtless promise that you would speak for him, I am expected to—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "That isn't the reason, Torvald. It is for your own sake. This fellow\nwrites in the most scurrilous newspapers; you have told me so yourself. He can\ndo you an unspeakable amount of harm. I am frightened to death of him—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Ah, I understand; it is recollections of the past that scare you."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "What do you mean?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Naturally you are thinking of your father."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes—yes, of course. Just recall to your mind what these malicious\ncreatures wrote in the papers about papa, and how horribly they slandered him.\nI believe they would have procured his dismissal if the Department had not sent\nyou over to inquire into it, and if you had not been so kindly disposed and\nhelpful to him."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "My little Nora, there is an important difference between your father and me.\nYour father's reputation as a public official was not above suspicion.\nMine is, and I hope it will continue to be so, as long as I hold my office."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "You never can tell what mischief these men may contrive. We ought to be so well\noff, so snug and happy here in our peaceful home, and have no cares—you\nand I and the children, Torvald! That is why I beg you so earnestly—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "And it is just by interceding for him that you make it impossible for me to\nkeep him. It is already known at the Bank that I mean to dismiss Krogstad. Is\nit to get about now that the new manager has changed his mind at his\nwife's bidding—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "And what if it did?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Of course!—if only this obstinate little person can get her way! Do you\nsuppose I am going to make myself ridiculous before my whole staff, to let\npeople think that I am a man to be swayed by all sorts of outside influence? I\nshould very soon feel the consequences of it, I can tell you! And besides,\nthere is one thing that makes it quite impossible for me to have Krogstad in\nthe Bank as long as I am manager."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Whatever is that?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "His moral failings I might perhaps have overlooked, if necessary—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, you could—couldn't you?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "And I hear he is a good worker, too. But I knew him when we were boys. It was\none of those rash friendships that so often prove an incubus in afterlife. I\nmay as well tell you plainly, we were once on very intimate terms with one\nanother. But this tactless fellow lays no restraint on himself when other\npeople are present. On the contrary, he thinks it gives him the right to adopt\na familiar tone with me, and every minute it is \"I say, Helmer, old\nfellow!\" and that sort of thing. I assure you it is extremely painful for\nme. He would make my position in the Bank intolerable."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Torvald, I don't believe you mean that."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Don't you? Why not?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Because it is such a narrow-minded way of looking at things."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "What are you saying? Narrow-minded? Do you think I am narrow-minded?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "No, just the opposite, dear—and it is exactly for that reason."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "It's the same thing. You say my point of view is narrow-minded, so I must\nbe so too. Narrow-minded! Very well—I must put an end to this. [Goes\nto the hall door and calls.] Helen!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "What are you going to do?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "[looking among his papers]. Settle it. [Enter MAID.] Look here;\ntake this letter and go downstairs with it at once. Find a messenger and tell\nhim to deliver it, and be quick. The address is on it, and here is the money."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MAID"
    },
    "content": [
      {
        "type": "text",
        "text": "Very well, sir. [Exit with the letter.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "[putting his papers together]. Now then, little Miss Obstinate."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[breathlessly]. Torvald—what was that letter?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Krogstad's dismissal."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Call her back, Torvald! There is still time. Oh Torvald, call her back! Do it\nfor my sake—for your own sake—for the children's sake! Do you\nhear me, Torvald? Call her back! You don't know what that letter can\nbring upon us."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "It's too late."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, it's too late."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "My dear Nora, I can forgive the anxiety you are in, although really it is an\ninsult to me. It is, indeed. Isn't it an insult to think that I should be\nafraid of a starving quill-driver's vengeance? But I forgive you\nnevertheless, because it is such eloquent witness to your great love for me.\n[Takes her in his arms.] And that is as it should be, my own darling\nNora. Come what will, you may be sure I shall have both courage and strength if\nthey be needed. You will see I am man enough to take everything upon myself."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[in a horror-stricken voice]. What do you mean by that?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Everything, I say—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[recovering herself]. You will never have to do that."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "That's right. Well, we will share it, Nora, as man and wife should. That\nis how it shall be. [Caressing her.] Are you content now? There!\nThere!—not these frightened dove's eyes! The whole thing is only\nthe wildest fancy!—Now, you must go and play through the Tarantella and\npractise with your tambourine. I shall go into the inner office and shut the\ndoor, and I shall hear nothing; you can make as much noise as you please.\n[Turns back at the door.] And when Rank comes, tell him where he will\nfind me. [Nods to her, takes his papers and goes into his room, and shuts\nthe door after him.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[bewildered with anxiety, stands as if rooted to the spot, and\nwhispers]. He was capable of doing it. He will do it. He will do it in\nspite of everything.—No, not that! Never, never! Anything rather than\nthat! Oh, for some help, some way out of it! [The door-bell rings.]\nDoctor Rank! Anything rather than that—anything, whatever it is! [She\nputs her hands over her face, pulls herself together, goes to the door and\nopens it. RANK is standing without, hanging up his coat. During the following\ndialogue it begins to grow dark.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Good day, Doctor Rank. I knew your ring. But you mustn't go in to Torvald\nnow; I think he is busy with something."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "And you?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[brings him in and shuts the door after him]. Oh, you know very well I\nalways have time for you."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "Thank you. I shall make use of as much of it as I can."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "What do you mean by that? As much of it as you can?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "Well, does that alarm you?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "It was such a strange way of putting it. Is anything likely to happen?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "Nothing but what I have long been prepared for. But I certainly didn't\nexpect it to happen so soon."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[gripping him by the arm]. What have you found out? Doctor Rank, you\nmust tell me."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "[sitting down by the stove]. It is all up with me. And it can't be\nhelped."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[with a sigh of relief]. Is it about yourself?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "Who else? It is no use lying to one's self. I am the most wretched of all\nmy patients, Mrs Helmer. Lately I have been taking stock of my internal\neconomy. Bankrupt! Probably within a month I shall lie rotting in the\nchurchyard."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "What an ugly thing to say!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "The thing itself is cursedly ugly, and the worst of it is that I shall have to\nface so much more that is ugly before that. I shall only make one more\nexamination of myself; when I have done that, I shall know pretty certainly\nwhen it will be that the horrors of dissolution will begin. There is something\nI want to tell you. Helmer's refined nature gives him an unconquerable\ndisgust at everything that is ugly; I won't have him in my sick-room."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Oh, but, Doctor Rank—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "I won't have him there. Not on any account. I bar my door to him. As soon\nas I am quite certain that the worst has come, I shall send you my card with a\nblack cross on it, and then you will know that the loathsome end has begun."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "You are quite absurd today. And I wanted you so much to be in a really good\nhumour."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "With death stalking beside me?—To have to pay this penalty for another\nman's sin? Is there any justice in that? And in every single family, in\none way or another, some such inexorable retribution is being exacted—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[putting her hands over her ears]. Rubbish! Do talk of something\ncheerful."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "Oh, it's a mere laughing matter, the whole thing. My poor innocent spine\nhas to suffer for my father's youthful amusements."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[sitting at the table on the left]. I suppose you mean that he was too\npartial to asparagus and pate de foie gras, don't you?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, and to truffles."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Truffles, yes. And oysters too, I suppose?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "Oysters, of course, that goes without saying."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "And heaps of port and champagne. It is sad that all these nice things should\ntake their revenge on our bones."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "Especially that they should revenge themselves on the unlucky bones of those\nwho have not had the satisfaction of enjoying them."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, that's the saddest part of it all."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "[with a searching look at her]. Hm!—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[after a short pause]. Why did you smile?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "No, it was you that laughed."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "No, it was you that smiled, Doctor Rank!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "[rising]. You are a greater rascal than I thought."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "I am in a silly mood today."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "So it seems."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[putting her hands on his shoulders]. Dear, dear Doctor Rank, death\nmustn't take you away from Torvald and me."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "It is a loss you would easily recover from. Those who are gone are soon\nforgotten."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[looking at him anxiously]. Do you believe that?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "People form new ties, and then—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Who will form new ties?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "Both you and Helmer, when I am gone. You yourself are already on the high road\nto it, I think. What did that Mrs Linde want here last night?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Oho!—you don't mean to say you are jealous of poor Christine?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, I am. She will be my successor in this house. When I am done for, this\nwoman will—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Hush! don't speak so loud. She is in that room."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "Today again. There, you see."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "She has only come to sew my dress for me. Bless my soul, how unreasonable you\nare! [Sits down on the sofa.] Be nice now, Doctor Rank, and tomorrow you\nwill see how beautifully I shall dance, and you can imagine I am doing it all\nfor you—and for Torvald too, of course. [Takes various things out of\nthe box.] Doctor Rank, come and sit down here, and I will show you\nsomething."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "[sitting down]. What is it?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Just look at those!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "Silk stockings."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Flesh-coloured. Aren't they lovely? It is so dark here now, but\ntomorrow—. No, no, no! you must only look at the feet. Oh well, you may\nhave leave to look at the legs too."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "Hm!—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Why are you looking so critical? Don't you think they will fit me?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "I have no means of forming an opinion about that."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[looks at him for a moment]. For shame! [Hits him lightly on the ear\nwith the stockings.] That's to punish you. [Folds them up\nagain.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "And what other nice things am I to be allowed to see?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Not a single thing more, for being so naughty. [She looks among the things,\nhumming to herself.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "[after a short silence]. When I am sitting here, talking to you as\nintimately as this, I cannot imagine for a moment what would have become of me\nif I had never come into this house."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[smiling]. I believe you do feel thoroughly at home with us."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "[in a lower voice, looking straight in front of him]. And to be obliged\nto leave it all—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Nonsense, you are not going to leave it."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "[as before]. And not be able to leave behind one the slightest token of\none's gratitude, scarcely even a fleeting regret—nothing but an\nempty place which the first comer can fill as well as any other."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "And if I asked you now for a—? No!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "For what?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "For a big proof of your friendship—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, yes!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "I mean a tremendously big favour—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "Would you really make me so happy for once?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Ah, but you don't know what it is yet."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "No—but tell me."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "I really can't, Doctor Rank. It is something out of all reason; it means\nadvice, and help, and a favour—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "The bigger a thing it is the better. I can't conceive what it is you\nmean. Do tell me. Haven't I your confidence?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "More than anyone else. I know you are my truest and best friend, and so I will\ntell you what it is. Well, Doctor Rank, it is something you must help me to\nprevent. You know how devotedly, how inexpressibly deeply Torvald loves me; he\nwould never for a moment hesitate to give his life for me."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "[leaning towards her]. Nora—do you think he is the only\none—?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[with a slight start]. The only one—?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "The only one who would gladly give his life for your sake."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[sadly]. Is that it?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "I was determined you should know it before I went away, and there will never be\na better opportunity than this. Now you know it, Nora. And now you know, too,\nthat you can trust me as you would trust no one else."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[rises, deliberately and quietly]. Let me pass."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "[makes room for her to pass him, but sits still]. Nora!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[at the hall door]. Helen, bring in the lamp. [Goes over to the\nstove.] Dear Doctor Rank, that was really horrid of you."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "To have loved you as much as anyone else does? Was that horrid?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "No, but to go and tell me so. There was really no need—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "What do you mean? Did you know—? [MAID enters with lamp, puts it down\non the table, and goes out.] Nora—Mrs Helmer—tell me, had you\nany idea of this?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Oh, how do I know whether I had or whether I hadn't? I really can't\ntell you—To think you could be so clumsy, Doctor Rank! We were getting on\nso nicely."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "Well, at all events you know now that you can command me, body and soul. So\nwon't you speak out?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[looking at him]. After what happened?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "I beg you to let me know what it is."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "I can't tell you anything now."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, yes. You mustn't punish me in that way. Let me have permission to do\nfor you whatever a man may do."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "You can do nothing for me now. Besides, I really don't need any help at\nall. You will find that the whole thing is merely fancy on my part. It really\nis so—of course it is! [Sits down in the rocking-chair, and looks at\nhim with a smile.] You are a nice sort of man, Doctor\nRank!—don't you feel ashamed of yourself, now the lamp has come?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "Not a bit. But perhaps I had better go—for ever?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "No, indeed, you shall not. Of course you must come here just as before. You\nknow very well Torvald can't do without you."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, but you?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Oh, I am always tremendously pleased when you come."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "It is just that, that put me on the wrong track. You are a riddle to me. I have\noften thought that you would almost as soon be in my company as in\nHelmer's."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes—you see there are some people one loves best, and others whom one\nwould almost always rather have as companions."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, there is something in that."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "When I was at home, of course I loved papa best. But I always thought it\ntremendous fun if I could steal down into the maids' room, because they\nnever moralised at all, and talked to each other about such entertaining\nthings."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "I see—it is their place I have taken."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[jumping up and going to him]. Oh, dear, nice Doctor Rank, I never meant\nthat at all. But surely you can understand that being with Torvald is a little\nlike being with papa—[Enter MAID from the hall.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MAID"
    },
    "content": [
      {
        "type": "text",
        "text": "If you please, ma'am. [Whispers and hands her a card.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[glancing at the card]. Oh! [Puts it in her pocket.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "Is there anything wrong?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "No, no, not in the least. It is only something—it is my new dress—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "What? Your dress is lying there."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Oh, yes, that one; but this is another. I ordered it. Torvald mustn't\nknow about it—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "Oho! Then that was the great secret."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Of course. Just go in to him; he is sitting in the inner room. Keep him as long\nas—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "Make your mind easy; I won't let him escape."
      }
    ]
  },
  {
    "type": "action",
    "content": [
      {
        "type": "text",
        "text": "[Goes into HELMER'S room.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[to the MAID]. And he is standing waiting in the kitchen?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MAID"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes; he came up the back stairs."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "But didn't you tell him no one was in?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MAID"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, but it was no good."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "He won't go away?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MAID"
    },
    "content": [
      {
        "type": "text",
        "text": "No; he says he won't until he has seen you, ma'am."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Well, let him come in—but quietly. Helen, you mustn't say anything\nabout it to anyone. It is a surprise for my husband."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MAID"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, ma'am, I quite understand. [Exit.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "This dreadful thing is going to happen! It will happen in spite of me! No, no,\nno, it can't happen—it shan't happen! [She bolts the door\nof HELMER'S room. The MAID opens the hall door for KROGSTAD and shuts it\nafter him. He is wearing a fur coat, high boots and a fur cap.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[advancing towards him]. Speak low—my husband is at home."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "No matter about that."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "What do you want of me?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "An explanation of something."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Make haste then. What is it?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "You know, I suppose, that I have got my dismissal."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "I couldn't prevent it, Mr. Krogstad. I fought as hard as I could on your\nside, but it was no good."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "Does your husband love you so little, then? He knows what I can expose you to,\nand yet he ventures—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "How can you suppose that he has any knowledge of the sort?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "I didn't suppose so at all. It would not be the least like our dear\nTorvald Helmer to show so much courage—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Mr. Krogstad, a little respect for my husband, please."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "Certainly—all the respect he deserves. But since you have kept the matter\nso carefully to yourself, I make bold to suppose that you have a little clearer\nidea, than you had yesterday, of what it actually is that you have done?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "More than you could ever teach me."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, such a bad lawyer as I am."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "What is it you want of me?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "Only to see how you were, Mrs Helmer. I have been thinking about you all day\nlong. A mere cashier, a quill-driver, a—well, a man like me—even he\nhas a little of what is called feeling, you know."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Show it, then; think of my little children."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "Have you and your husband thought of mine? But never mind about that. I only\nwanted to tell you that you need not take this matter too seriously. In the\nfirst place there will be no accusation made on my part."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "No, of course not; I was sure of that."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "The whole thing can be arranged amicably; there is no reason why anyone should\nknow anything about it. It will remain a secret between us three."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "My husband must never get to know anything about it."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "How will you be able to prevent it? Am I to understand that you can pay the\nbalance that is owing?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "No, not just at present."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "Or perhaps that you have some expedient for raising the money soon?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "No expedient that I mean to make use of."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "Well, in any case, it would have been of no use to you now. If you stood there\nwith ever so much money in your hand, I would never part with your bond."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Tell me what purpose you mean to put it to."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "I shall only preserve it—keep it in my possession. No one who is not\nconcerned in the matter shall have the slightest hint of it. So that if the\nthought of it has driven you to any desperate resolution—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "It has."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "If you had it in your mind to run away from your home—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "I had."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "Or even something worse—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "How could you know that?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "Give up the idea."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "How did you know I had thought of that?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "Most of us think of that at first. I did, too—but I hadn't the\ncourage."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[faintly]. No more had I."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "[in a tone of relief]. No, that's it, isn't it—you\nhadn't the courage either?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "No, I haven't—I haven't."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "Besides, it would have been a great piece of folly. Once the first storm at\nhome is over—. I have a letter for your husband in my pocket."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Telling him everything?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "In as lenient a manner as I possibly could."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[quickly]. He mustn't get the letter. Tear it up. I will find some\nmeans of getting money."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "Excuse me, Mrs Helmer, but I think I told you just now—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "I am not speaking of what I owe you. Tell me what sum you are asking my husband\nfor, and I will get the money."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "I am not asking your husband for a penny."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "What do you want, then?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "I will tell you. I want to rehabilitate myself, Mrs Helmer; I want to get on;\nand in that your husband must help me. For the last year and a half I have not\nhad a hand in anything dishonourable, amid all that time I have been struggling\nin most restricted circumstances. I was content to work my way up step by step.\nNow I am turned out, and I am not going to be satisfied with merely being taken\ninto favour again. I want to get on, I tell you. I want to get into the Bank\nagain, in a higher position. Your husband must make a place for me—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "That he will never do!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "He will; I know him; he dare not protest. And as soon as I am in there again\nwith him, then you will see! Within a year I shall be the manager's right\nhand. It will be Nils Krogstad and not Torvald Helmer who manages the Bank."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "That's a thing you will never see!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "Do you mean that you will—?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "I have courage enough for it now."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "Oh, you can't frighten me. A fine, spoilt lady like you—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "You will see, you will see."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "Under the ice, perhaps? Down into the cold, coal-black water? And then, in the\nspring, to float up to the surface, all horrible and unrecognisable, with your\nhair fallen out—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "You can't frighten me."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "Nor you me. People don't do such things, Mrs Helmer. Besides, what use\nwould it be? I should have him completely in my power all the same."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Afterwards? When I am no longer—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "Have you forgotten that it is I who have the keeping of your reputation?\n[NORA stands speechlessly looking at him.] Well, now, I have warned you.\nDo not do anything foolish. When Helmer has had my letter, I shall expect a\nmessage from him. And be sure you remember that it is your husband himself who\nhas forced me into such ways as this again. I will never forgive him for that.\nGoodbye, Mrs Helmer. [Exit through the hall.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[goes to the hall door, opens it slightly and listens.] He is going. He\nis not putting the letter in the box. Oh no, no! that's impossible!\n[Opens the door by degrees.] What is that? He is standing outside. He is\nnot going downstairs. Is he hesitating? Can he—? [A letter drops into\nthe box; then KROGSTAD'S footsteps are heard, until they die away as he\ngoes downstairs. NORA utters a stifled cry, and runs across the room to the\ntable by the sofa. A short pause.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "In the letter-box. [Steals across to the hall door.] There it\nlies—Torvald, Torvald, there is no hope for us now!"
      }
    ]
  },
  {
    "type": "action",
    "content": [
      {
        "type": "text",
        "text": "[Mrs Linde comes in from the room on the left, carrying the dress.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "There, I can't see anything more to mend now. Would you like to try it\non—?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[in a hoarse whisper]. Christine, come here."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "[throwing the dress down on the sofa]. What is the matter with you? You\nlook so agitated!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Come here. Do you see that letter? There, look—you can see it through the\nglass in the letter-box."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, I see it."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "That letter is from Krogstad."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Nora—it was Krogstad who lent you the money!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, and now Torvald will know all about it."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Believe me, Nora, that's the best thing for both of you."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "You don't know all. I forged a name."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Good heavens—!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "I only want to say this to you, Christine—you must be my witness."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Your witness? What do you mean? What am I to—?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "If I should go out of my mind—and it might easily happen—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Nora!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Or if anything else should happen to me—anything, for instance, that\nmight prevent my being here—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Nora! Nora! you are quite out of your mind."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "And if it should happen that there were some one who wanted to take all the\nresponsibility, all the blame, you understand—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, yes—but how can you suppose—?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Then you must be my witness, that it is not true, Christine. I am not out of my\nmind at all; I am in my right senses now, and I tell you no one else has known\nanything about it; I, and I alone, did the whole thing. Remember that."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "I will, indeed. But I don't understand all this."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "How should you understand it? A wonderful thing is going to happen!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "A wonderful thing?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, a wonderful thing!—But it is so terrible, Christine; it\nmustn't happen, not for all the world."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "I will go at once and see Krogstad."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Don't go to him; he will do you some harm."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "There was a time when he would gladly do anything for my sake."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "He?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Where does he live?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "How should I know—? Yes [feeling in her pocket], here is his card.\nBut the letter, the letter—!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "[calls from his room, knocking at the door]. Nora!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[cries out anxiously]. Oh, what's that? What do you want?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Don't be so frightened. We are not coming in; you have locked the door.\nAre you trying on your dress?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, that's it. I look so nice, Torvald."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "[who has read the card]. I see he lives at the corner here."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, but it's no use. It is hopeless. The letter is lying there in the\nbox."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "And your husband keeps the key?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, always."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Krogstad must ask for his letter back unread, he must find some pretence—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "But it is just at this time that Torvald generally—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "You must delay him. Go in to him in the meantime. I will come back as soon as I\ncan. [She goes out hurriedly through the hall door.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[goes to HELMER'S door, opens it and peeps in]. Torvald!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "[from the inner room]. Well? May I venture at last to come into my own\nroom again? Come along, Rank, now you will see— [Halting in the\ndoorway.] But what is this?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "What is what, dear?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Rank led me to expect a splendid transformation."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "[in the doorway]. I understood so, but evidently I was mistaken."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, nobody is to have the chance of admiring me in my dress until tomorrow."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "But, my dear Nora, you look so worn out. Have you been practising too much?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "No, I have not practised at all."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "But you will need to—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, indeed I shall, Torvald. But I can't get on a bit without you to\nhelp me; I have absolutely forgotten the whole thing."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Oh, we will soon work it up again."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, help me, Torvald. Promise that you will! I am so nervous about\nit—all the people—. You must give yourself up to me entirely this\nevening. Not the tiniest bit of business—you mustn't even take a\npen in your hand. Will you promise, Torvald dear?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "I promise. This evening I will be wholly and absolutely at your service, you\nhelpless little mortal. Ah, by the way, first of all I will just—\n[Goes towards the hall door.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "What are you going to do there?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Only see if any letters have come."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "No, no! don't do that, Torvald!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Why not?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Torvald, please don't. There is nothing there."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Well, let me look. [Turns to go to the letter-box. NORA, at the piano, plays\nthe first bars of the Tarantella. HELMER stops in the doorway.] Aha!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "I can't dance tomorrow if I don't practise with you."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "[going up to her]. Are you really so afraid of it, dear?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, so dreadfully afraid of it. Let me practise at once; there is time now,\nbefore we go to dinner. Sit down and play for me, Torvald dear; criticise me,\nand correct me as you play."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "With great pleasure, if you wish me to. [Sits down at the piano.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[takes out of the box a tambourine and a long variegated shawl. She hastily\ndrapes the shawl round her. Then she springs to the front of the stage and\ncalls out]. Now play for me! I am going to dance!"
      }
    ]
  },
  {
    "type": "action",
    "content": [
      {
        "type": "text",
        "text": "[HELMER plays and NORA dances. RANK stands by the piano behind HELMER, and\nlooks on.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "[as he plays]. Slower, slower!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "I can't do it any other way."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Not so violently, Nora!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "This is the way."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "[stops playing]. No, no—that is not a bit right."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[laughing and swinging the tambourine]. Didn't I tell you so?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "Let me play for her."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "[getting up]. Yes, do. I can correct her better then."
      }
    ]
  },
  {
    "type": "action",
    "content": [
      {
        "type": "text",
        "text": "[RANK sits down at the piano and plays. NORA dances more and more wildly.\nHELMER has taken up a position beside the stove, and during her dance gives her\nfrequent instructions. She does not seem to hear him; her hair comes down and\nfalls over her shoulders; she pays no attention to it, but goes on dancing.\nEnter Mrs Linde.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "[standing as if spell-bound in the doorway]. Oh!—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[as she dances]. Such fun, Christine!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "My dear darling Nora, you are dancing as if your life depended on it."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "So it does."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Stop, Rank; this is sheer madness. Stop, I tell you! [RANK stops playing,\nand NORA suddenly stands still. HELMER goes up to her.] I could never have\nbelieved it. You have forgotten everything I taught you."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[throwing away the tambourine]. There, you see."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "You will want a lot of coaching."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, you see how much I need it. You must coach me up to the last minute.\nPromise me that, Torvald!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "You can depend on me."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "You must not think of anything but me, either today or tomorrow; you\nmustn't open a single letter—not even open the letter-box—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Ah, you are still afraid of that fellow—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, indeed I am."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Nora, I can tell from your looks that there is a letter from him lying there."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "I don't know; I think there is; but you must not read anything of that\nkind now. Nothing horrid must come between us until this is all over."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "[whispers to HELMER]. You mustn't contradict her."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "[taking her in his arms]. The child shall have her way. But tomorrow\nnight, after you have danced—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Then you will be free. [The MAID appears in the doorway to the right.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MAID"
    },
    "content": [
      {
        "type": "text",
        "text": "Dinner is served, ma'am."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "We will have champagne, Helen."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MAID"
    },
    "content": [
      {
        "type": "text",
        "text": "Very good, ma'am. [Exit.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Hullo!—are we going to have a banquet?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, a champagne banquet until the small hours. [Calls out.] And a few\nmacaroons, Helen—lots, just for once!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Come, come, don't be so wild and nervous. Be my own little skylark, as\nyou used."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, dear, I will. But go in now and you too, Doctor Rank. Christine, you must\nhelp me to do up my hair."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "[whispers to HELMER as they go out]. I suppose there is\nnothing—she is not expecting anything?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Far from it, my dear fellow; it is simply nothing more than this childish\nnervousness I was telling you of. [They go into the right-hand room.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Well!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Gone out of town."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "I could tell from your face."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "He is coming home tomorrow evening. I wrote a note for him."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "You should have let it alone; you must prevent nothing. After all, it is\nsplendid to be waiting for a wonderful thing to happen."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "What is it that you are waiting for?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Oh, you wouldn't understand. Go in to them, I will come in a moment.\n[Mrs Linde goes into the dining-room. NORA stands still for a little while,\nas if to compose herself. Then she looks at her watch.] Five o'clock.\nSeven hours until midnight; and then four-and-twenty hours until the next\nmidnight. Then the Tarantella will be over. Twenty-four and seven? Thirty-one\nhours to live."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "[from the doorway on the right]. Where's my little skylark?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[going to him with her arms outstretched]. Here she is!"
      }
    ]
  },
  {
    "type": "scene",
    "attrs": {
      "id": "act-3"
    },
    "content": [
      {
        "type": "text",
        "text": "ACT III"
      }
    ]
  },
  {
    "type": "action",
    "content": [
      {
        "type": "text",
        "text": "[THE SAME SCENE.—The table has been placed in the middle of the stage, with chairs around it. A lamp is burning on the table. The door into the hall stands open. Dance music is heard in the room above. Mrs Linde is sitting at the table idly turning over the leaves of a book; she tries to read, but does not seem able to collect her thoughts. Every now and then she listens intently for a sound at the outer door.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "[looking at her watch]. Not yet—and the time is nearly up. If only he does not—. [Listens again.] Ah, there he is. [Goes into the hall and opens the outer door carefully. Light footsteps are heard on the stairs. She whispers.] Come in. There is no one here."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "[in the doorway]. I found a note from you at home. What does this mean?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "It is absolutely necessary that I should have a talk with you."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "Really? And is it absolutely necessary that it should be here?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "It is impossible where I live; there is no private entrance to my rooms. Come in; we are quite alone. The maid is asleep, and the Helmers are at the dance upstairs."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "[coming into the room]. Are the Helmers really at a dance tonight?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, why not?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "Certainly—why not?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Now, Nils, let us have a talk."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "Can we two have anything to talk about?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "We have a great deal to talk about."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "I shouldn’t have thought so."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "No, you have never properly understood me."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "Was there anything else to understand except what was obvious to all the world—a heartless woman jilts a man when a more lucrative chance turns up?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Do you believe I am as absolutely heartless as all that? And do you believe that I did it with a light heart?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "Didn’t you?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Nils, did you really think that?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "If it were as you say, why did you write to me as you did at the time?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "I could do nothing else. As I had to break with you, it was my duty also to put an end to all that you felt for me."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "[wringing his hands]. So that was it. And all this—only for the sake of money!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "You must not forget that I had a helpless mother and two little brothers. We couldn’t wait for you, Nils; your prospects seemed hopeless then."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "That may be so, but you had no right to throw me over for anyone else’s sake."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Indeed I don’t know. Many a time did I ask myself if I had the right to do it."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "[more gently]. When I lost you, it was as if all the solid ground went from under my feet. Look at me now—I am a shipwrecked man clinging to a bit of wreckage."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "But help may be near."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "It was near; but then you came and stood in my way."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Unintentionally, Nils. It was only today that I learned it was your place I was going to take in the Bank."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "I believe you, if you say so. But now that you know it, are you not going to give it up to me?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "No, because that would not benefit you in the least."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "Oh, benefit, benefit—I would have done it whether or no."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "I have learned to act prudently. Life, and hard, bitter necessity have taught me that."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "And life has taught me not to believe in fine speeches."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Then life has taught you something very reasonable. But deeds you must believe in?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "What do you mean by that?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "You said you were like a shipwrecked man clinging to some wreckage."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "I had good reason to say so."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Well, I am like a shipwrecked woman clinging to some wreckage—no one to mourn for, no one to care for."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "It was your own choice."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "There was no other choice—then."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "Well, what now?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Nils, how would it be if we two shipwrecked people could join forces?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "What are you saying?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Two on the same piece of wreckage would stand a better chance than each on their own."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "Christine I..."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "What do you suppose brought me to town?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "Do you mean that you gave me a thought?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "I could not endure life without work. All my life, as long as I can remember, I have worked, and it has been my greatest and only pleasure. But now I am quite alone in the world—my life is so dreadfully empty and I feel so forsaken. There is not the least pleasure in working for one’s self. Nils, give me someone and something to work for."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "I don’t trust that. It is nothing but a woman’s overstrained sense of generosity that prompts you to make such an offer of yourself."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Have you ever noticed anything of the sort in me?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "Could you really do it? Tell me—do you know all about my past life?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "And do you know what they think of me here?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "You seemed to me to imply that with me you might have been quite another man."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "I am certain of it."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Is it too late now?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "Christine, are you saying this deliberately? Yes, I am sure you are. I see it in your face. Have you really the courage, then—?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "I want to be a mother to someone, and your children need a mother. We two need each other. Nils, I have faith in your real character—I can dare anything together with you."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "[grasps her hands]. Thanks, thanks, Christine! Now I shall find a way to clear myself in the eyes of the world. Ah, but I forgot—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "[listening]. Hush! The Tarantella! Go, go!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "Why? What is it?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Do you hear them up there? When that is over, we may expect them back."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, yes—I will go. But it is all no use. Of course you are not aware what steps I have taken in the matter of the Helmers."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, I know all about that."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "And in spite of that have you the courage to—?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "I understand very well to what lengths a man like you might be driven by despair."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "If I could only undo what I have done!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "You cannot. Your letter is lying in the letter-box now."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "Are you sure of that?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Quite sure, but—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "[with a searching look at her]. Is that what it all means?—that you want to save your friend at any cost? Tell me frankly. Is that it?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Nils, a woman who has once sold herself for another’s sake, doesn’t do it a second time."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "I will ask for my letter back."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "No, no."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, of course I will. I will wait here until Helmer comes; I will tell him he must give me my letter back—that it only concerns my dismissal—that he is not to read it—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "No, Nils, you must not recall your letter."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "But, tell me, wasn’t it for that very purpose that you asked me to meet you here?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "In my first moment of fright, it was. But twenty-four hours have elapsed since then, and in that time I have witnessed incredible things in this house. Helmer must know all about it. This unhappy secret must be disclosed; they must have a complete understanding between them, which is impossible with all this concealment and falsehood going on."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "Very well, if you will take the responsibility. But there is one thing I can do in any case, and I shall do it at once."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "[listening]. You must be quick and go! The dance is over; we are not safe a moment longer."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "I will wait for you below."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, do. You must see me back to my door..."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "KROGSTAD"
    },
    "content": [
      {
        "type": "text",
        "text": "I have never had such an amazing piece of good fortune in my life! [Goes out through the outer door. The door between the room and the hall remains open.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "[tidying up the room and laying her hat and cloak ready]. What a difference! what a difference! Someone to work for and live for—a home to bring comfort into. That I will do, indeed. I wish they would be quick and come—[Listens.] Ah, there they are now. I must put on my things. [Takes up her hat and cloak. HELMER’S and NORA’S voices are heard outside; a key is turned, and HELMER brings NORA almost by force into the hall. She is in an Italian costume with a large black shawl around her; he is in evening dress, and a black domino which is flying open.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[hanging back in the doorway, and struggling with him]. No, no, no!—don’t take me in. I want to go upstairs again; I don’t want to leave so early."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "But, my dearest Nora—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Please, Torvald dear—please, please—only an hour more."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Not a single minute, my sweet Nora. You know that was our agreement. Come along into the room; you are catching cold standing there. [He brings her gently into the room, in spite of her resistance.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Good evening."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Christine!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "You here, so late, Mrs Linde?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, you must excuse me; I was so anxious to see Nora in her dress."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Have you been sitting here waiting for me?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, unfortunately I came too late, you had already gone upstairs; and I thought I couldn’t go away again without having seen you."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "[taking off NORA’S shawl]. Yes, take a good look at her. I think she is worth looking at. Isn’t she charming, Mrs Linde?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, indeed she is."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Doesn’t she look remarkably pretty? Everyone thought so at the dance. But she is terribly self-willed, this sweet little person. What are we to do with her? You will hardly believe that I had almost to bring her away by force."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Torvald, you will repent not having let me stay, even if it were only for half an hour."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Listen to her, Mrs Linde! She had danced her Tarantella, and it had been a tremendous success, as it deserved—although possibly the performance was a trifle too realistic—a little more so, I mean, than was strictly compatible with the limitations of art. But never mind about that! The chief thing is, she had made a success—she had made a tremendous success. Do you think I was going to let her remain there after that, and spoil the effect? No, indeed! I took my charming little Capri maiden—my capricious little Capri maiden, I should say—on my arm; took one quick turn round the room; a curtsey on either side, and, as they say in novels, the beautiful apparition disappeared. An exit ought always to be effective, Mrs Linde; but that is what I cannot make Nora understand. Pooh! this room is hot. [Throws his domino on a chair, and opens the door of his room.] Hullo! it’s all dark in here. Oh, of course—excuse me—. [He goes in, and lights some candles.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[in a hurried and breathless whisper]. Well?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "[in a low voice]. I have had a talk with him."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, and—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Nora, you must tell your husband all about it."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[in an expressionless voice]. I knew it."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "You have nothing to be afraid of as far as Krogstad is concerned; but you must tell him."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "I won’t tell him."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Then the letter will."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Thank you, Christine. Now I know what I must do. Hush—!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "[coming in again]. Well, Mrs Linde, have you admired her?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, and now I will say goodnight."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "What, already? Is this yours, this knitting?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "[taking it]. Yes, thank you, I had very nearly forgotten it."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "So you knit?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Of course."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Do you know, you ought to embroider."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Really? Why?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, it’s far more becoming. Let me show you. You hold the embroidery thus in your left hand, and use the needle with the right—like this—with a long, easy sweep. Do you see?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, perhaps—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "But in the case of knitting—that can never be anything but ungraceful; look here—the arms close together, the knitting-needles going up and down—it has a sort of Chinese effect—. That was really excellent champagne they gave us."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Well,—goodnight, Nora, and don’t be self-willed any more."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "That’s right, Mrs Linde."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MRS LINDE"
    },
    "content": [
      {
        "type": "text",
        "text": "Goodnight, Mr. Helmer."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "[accompanying her to the door]. Goodnight, goodnight. I hope you will get home all right. I should be very happy to—but you haven’t any great distance to go. Goodnight, goodnight. [She goes out; he shuts the door after her, and comes in again.] Ah!—at last we have got rid of her. She is a frightful bore, that woman."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Aren’t you very tired, Torvald?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "No, not in the least."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Nor sleepy?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Not a bit. On the contrary, I feel extraordinarily lively. And you?—you really look both tired and sleepy."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, I am very tired. I want to go to sleep at once."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "There, you see it was quite right of me not to let you stay there any longer."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Everything you do is quite right, Torvald."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "[kissing her on the forehead]. Now my little skylark is speaking reasonably. Did you notice what good spirits Rank was in this evening?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Really? Was he? I didn’t speak to him at all."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "And I very little, but I have not for a long time seen him in such good form. [Looks for a while at her and then goes nearer to her.] It is delightful to be at home by ourselves again, to be all alone with you—you fascinating, charming little darling!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Don’t look at me like that, Torvald."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Why shouldn’t I look at my dearest treasure?—at all the beauty that is mine, all my very own?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[going to the other side of the table]. You mustn’t say things like that to me tonight."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "[following her]. You have still got the Tarantella in your blood, I see. And it makes you more captivating than ever. Listen—the guests are beginning to go now. [In a lower voice.] Nora—soon the whole house will be quiet."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, I hope so."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, my own darling Nora. Do you know, when I am out at a party with you like this, why I speak so little to you, keep away from you, and only send a stolen glance in your direction now and then?—do you know why I do that? It is because I make believe to myself that we are secretly in love, and you are my secretly promised bride, and that no one suspects there is anything between us."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, yes—I know very well your thoughts are with me all the time."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "And when we are leaving, and I am putting the shawl over your beautiful young shoulders—on your lovely neck—then I imagine that you are my young bride and that we have just come from the wedding, and I am bringing you for the first time into our home—to be alone with you for the first time—quite alone with my shy little darling! All this evening I have longed for nothing but you. When I watched the seductive figures of the Tarantella, my blood was on fire; I could endure it no longer, and that was why I brought you down so early—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Go away, Torvald! You must let me go. I won’t—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "What’s that? You’re joking, my little Nora! You won’t—you won’t? Am I not your husband—? [A knock is heard at the outer door.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[starting]. Did you hear—?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "[going into the hall]. Who is it?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "[outside]. It is I. May I come in for a moment?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "[in a fretful whisper]. Oh, what does he want now? [Aloud.] Wait a minute! [Unlocks the door.] Come, that’s kind of you not to pass by our door."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "I thought I heard your voice, and felt as if I should like to look in. [With a swift glance round.] Ah, yes!—these dear familiar rooms. You are very happy and cosy in here, you two."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "It seems to me that you looked after yourself pretty well upstairs too."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "Excellently. Why shouldn’t I? Why shouldn’t one enjoy everything in this world?—at any rate as much as one can, and as long as one can. The wine was capital—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Especially the champagne."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "So you noticed that too? It is almost incredible how much I managed to put away!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Torvald drank a great deal of champagne tonight too."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "Did he?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, and he is always in such good spirits afterwards."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "Well, why should one not enjoy a merry evening after a well-spent day?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Well spent? I am afraid I can’t take credit for that."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "[clapping him on the back]. But I can, you know!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Doctor Rank, you must have been occupied with some scientific investigation today."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "Exactly."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Just listen!—little Nora talking about scientific investigations!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "And may I congratulate you on the result?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "Indeed you may."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Was it favourable, then?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "The best possible, for both doctor and patient—certainty."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[quickly and searchingly]. Certainty?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "Absolute certainty. So wasn’t I entitled to make a merry evening of it after that?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, you certainly were, Doctor Rank."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "I think so too, so long as you don’t have to pay for it in the morning."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "Oh well, one can’t have anything in this life without paying for it."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Doctor Rank—are you fond of fancy-dress balls?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, if there is a fine lot of pretty costumes."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Tell me—what shall we two wear at the next?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Little featherbrain!—are you thinking of the next already?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "We two? Yes, I can tell you. You shall go as a good fairy—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, but what do you suggest as an appropriate costume for that?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "Let your wife go dressed just as she is in everyday life."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "That was really very prettily turned. But can’t you tell us what you will be?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, my dear friend, I have quite made up my mind about that."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Well?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "At the next fancy-dress ball I shall be invisible."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "That’s a good joke!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "There is a big black hat—have you never heard of hats that make you invisible? If you put one on, no one can see you."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "[suppressing a smile]. Yes, you are quite right."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "But I am clean forgetting what I came for. Helmer, give me a cigar—one of the dark Havanas."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "With the greatest pleasure. [Offers him his case.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "[takes a cigar and cuts off the end]. Thanks."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[striking a match]. Let me give you a light."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "Thank you. [She holds the match for him to light his cigar.] And now goodbye!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Goodbye, goodbye, dear old man!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Sleep well, Doctor Rank."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "Thank you for that wish."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Wish me the same."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "RANK"
    },
    "content": [
      {
        "type": "text",
        "text": "You? Well, if you want me to sleep well! And thanks for the light. [He nods to them both and goes out.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "[in a subdued voice]. He has drunk more than he ought."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[absently]. Maybe. [HELMER takes a bunch of keys out of his pocket and goes into the hall.] Torvald! what are you going to do there?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Emptying the letter-box; it is quite full; there will be no room to put the newspaper in tomorrow morning."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Are you going to work tonight?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "You know quite well I’m not. What is this? Someone has been at the lock."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "At the lock—?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, someone has. What can it mean? I should never have thought the maid—. Here is a broken hairpin. Nora, it is one of yours."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[quickly]. Then it must have been the children—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Then you must get them out of those ways. There, at last I have got it open. [Takes out the contents of the letter-box, and calls to the kitchen.] Helen!—Helen, put out the light over the front door. [Goes back into the room and shuts the door into the hall. He holds out his hand full of letters.] Look at that—look what a heap of them there are. [Turning them over.] What on earth is that?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[at the window]. The letter—No! Torvald, no!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Two cards—of Rank’s."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Of Doctor Rank’s?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "[looking at them]. Doctor Rank. They were on the top. He must have put them in when he went out."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Is there anything written on them?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "There is a black cross over the name. Look there—what an uncomfortable idea! It looks as if he were announcing his own death."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "It is just what he is doing."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "What? Do you know anything about it? Has he said anything to you?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes. He told me that when the cards came it would be his leave-taking from us. He means to shut himself up and die."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "My poor old friend! Certainly I knew we should not have him very long with us. But so soon! And so he hides himself away like a wounded animal."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "If it has to happen, it is best it should be without a word—don’t you think so, Torvald?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "[walking up and down]. He had so grown into our lives. I can’t think of him as having gone out of them. He, with his sufferings and his loneliness, was like a cloudy background to our sunlit happiness. Well, perhaps it is best so. For him, anyway. [Standing still.] And perhaps for us too, Nora. We two are thrown quite upon each other now. [Puts his arms round her.] My darling wife, I don’t feel as if I could hold you tight enough. Do you know, Nora, I have often wished that you might be threatened by some great danger, so that I might risk my life’s blood, and everything, for your sake."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[disengages herself, and says firmly and decidedly]. Now you must read your letters, Torvald."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "No, no; not tonight. I want to be with you, my darling wife."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "With the thought of your friend’s death—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "You are right, it has affected us both. Something ugly has come between us—the thought of the horrors of death. We must try and rid our minds of that. Until then—we will each go to our own room."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[hanging on his neck]. Goodnight, Torvald—Goodnight!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "[kissing her on the forehead]. Goodnight, my little singing-bird. Sleep sound, Nora. Now I will read my letters through. [He takes his letters and goes into his room, shutting the door after him.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[gropes distractedly about, seizes HELMER’S domino, throws it round her, while she says in quick, hoarse, spasmodic whispers]. Never to see him again. Never! Never! [Puts her shawl over her head.] Never to see my children again either—never again. Never! Never!—Ah! the icy, black water—the unfathomable depths—If only it were over! He has got it now—now he is reading it. Goodbye, Torvald and my children! [She is about to rush out through the hall, when HELMER opens his door hurriedly and stands with an open letter in his hand.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Nora!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Ah!—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "What is this? Do you know what is in this letter?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, I know. Let me go! Let me get out!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "[holding her back]. Where are you going?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[trying to get free]. You shan’t save me, Torvald!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "[reeling]. True? Is this true, that I read here? Horrible! No, no—it is impossible that it can be true."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "It is true. I have loved you above everything else in the world."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Oh, don’t let us have any silly excuses."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[taking a step towards him]. Torvald—!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Miserable creature—what have you done?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Let me go. You shall not suffer for my sake. You shall not take it upon yourself."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "No tragic airs, please. [Locks the hall door.] Here you shall stay and give me an explanation. Do you understand what you have done? Answer me! Do you understand what you have done?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[looks steadily at him and says with a growing look of coldness in her face]. Yes, now I am beginning to understand thoroughly."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "[walking about the room]. What a horrible awakening! All these eight years—she who was my joy and pride—a hypocrite, a liar—worse, worse—a criminal! The unutterable ugliness of it all!—For shame! For shame! [NORA is silent and looks steadily at him. He stops in front of her.] I ought to have suspected that something of the sort would happen. I ought to have foreseen it. All your father’s want of principle—be silent!—all your father’s want of principle has come out in you. No religion, no morality, no sense of duty—. How I am punished for having winked at what he did! I did it for your sake, and this is how you repay me."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, that’s just it."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Now you have destroyed all my happiness. You have ruined all my future. It is horrible to think of! I am in the power of an unscrupulous man; he can do what he likes with me, ask anything he likes of me, give me any orders he pleases—I dare not refuse. And I must sink to such miserable depths because of a thoughtless woman!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "When I am out of the way, you will be free."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "No fine speeches, please. Your father had always plenty of those ready, too. What good would it be to me if you were out of the way, as you say? Not the slightest. He can make the affair known everywhere; and if he does, I may be falsely suspected of having been a party to your criminal action. Very likely people will think I was behind it all—that it was I who prompted you! And I have to thank you for all this—you whom I have cherished during the whole of our married life. Do you understand now what it is you have done for me?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[coldly and quietly]. Yes."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "It is so incredible that I can’t take it in. But we must come to some understanding. Take off that shawl. Take it off, I tell you. I must try and appease him some way or another. The matter must be hushed up at any cost. And as for you and me, it must appear as if everything between us were just as before—but naturally only in the eyes of the world. You will still remain in my house, that is a matter of course. But I shall not allow you to bring up the children; I dare not trust them to you. To think that I should be obliged to say so to one whom I have loved so dearly, and whom I still—. No, that is all over. From this moment happiness is not the question; all that concerns us is to save the remains, the fragments, the appearance—"
      }
    ]
  },
  {
    "type": "action",
    "content": [
      {
        "type": "text",
        "text": "[A ring is heard at the front-door bell.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "[with a start]. What is that? So late! Can the worst—? Can he—? Hide yourself, Nora. Say you are ill."
      }
    ]
  },
  {
    "type": "action",
    "content": [
      {
        "type": "text",
        "text": "[NORA stands motionless. HELMER goes and unlocks the hall door.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "MAID"
    },
    "content": [
      {
        "type": "text",
        "text": "[half-dressed, comes to the door]. A letter for the mistress."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Give it to me. [Takes the letter, and shuts the door.] Yes, it is from him. You shall not have it; I will read it myself."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, read it."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "[standing by the lamp]. I scarcely have the courage to do it. It may mean ruin for both of us. No, I must know. [Tears open the letter, runs his eye over a few lines, looks at a paper enclosed, and gives a shout of joy.] Nora! [She looks at him questioningly.] Nora!—No, I must read it once again—. Yes, it is true! I am saved! Nora, I am saved!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "And I?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "You too, of course; we are both saved, both you and I. Look, he sends you your bond back. He says he regrets and repents—that a happy change in his life—never mind what he says! We are saved, Nora! No one can do anything to you. Oh, Nora, Nora!—no, first I must destroy these hateful things. Let me see—. [Takes a look at the bond.] No, no, I won’t look at it. The whole thing shall be nothing but a bad dream to me. [Tears up the bond and both letters, throws them all into the stove, and watches them burn.] There—now it doesn’t exist any longer. He says that since Christmas Eve you—. These must have been three dreadful days for you, Nora."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "I have fought a hard fight these three days."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "And suffered agonies, and seen no way out but—. No, we won’t call any of the horrors to mind. We will only shout with joy, and keep saying, “It’s all over! It’s all over!” Listen to me, Nora. You don’t seem to realise that it is all over. What is this?—such a cold, set face! My poor little Nora, I quite understand; you don’t feel as if you could believe that I have forgiven you. But it is true, Nora, I swear it; I have forgiven you everything. I know that what you did, you did out of love for me."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "That is true."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "You have loved me as a wife ought to love her husband. Only you had not sufficient knowledge to judge of the means you used. But do you suppose you are any the less dear to me, because you don’t understand how to act on your own responsibility? No, no; only lean on me; I will advise you and direct you. I should not be a man if this womanly helplessness did not just give you a double attractiveness in my eyes. You must not think anymore about the hard things I said in my first moment of consternation, when I thought everything was going to overwhelm me. I have forgiven you, Nora; I swear to you I have forgiven you."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Thank you for your forgiveness. [She goes out through the door to the right.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "No, don’t go—. [Looks in.] What are you doing in there?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[from within]. Taking off my fancy dress."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "[standing at the open door]. Yes, do. Try and calm yourself, and make your mind easy again, my frightened little singing-bird. Be at rest, and feel secure; I have broad wings to shelter you under. [Walks up and down by the door.] How warm and cosy our home is, Nora. Here is shelter for you; here I will protect you like a hunted dove that I have saved from a hawk’s claws; I will bring peace to your poor beating heart. It will come, little by little, Nora, believe me. Tomorrow morning you will look upon it all quite differently; soon everything will be just as it was before. Very soon you won’t need me to assure you that I have forgiven you; you will yourself feel the certainty that I have done so. Can you suppose I should ever think of such a thing as repudiating you, or even reproaching you? You have no idea what a true man’s heart is like, Nora. There is something so indescribably sweet and satisfying, to a man, in the knowledge that he has forgiven his wife—forgiven her freely, and with all his heart. It seems as if that had made her, as it were, doubly his own; he has given her a new life, so to speak; and she has in a way become both wife and child to him. So you shall be for me after this, my little scared, helpless darling. Have no anxiety about anything, Nora; only be frank and open with me, and I will serve as will and conscience both to you—. What is this? Not gone to bed? Have you changed your things?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[in everyday dress]. Yes, Torvald, I have changed my things now."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "But what for?—so late as this."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "I shall not sleep tonight."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "But, my dear Nora—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[looking at her watch]. It is not so very late. Sit down here, Torvald. You and I have much to say to one another. [She sits down at one side of the table.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Nora—what is this?—this cold, set face?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Sit down. It will take some time; I have a lot to talk over with you."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "[sits down at the opposite side of the table]. You alarm me, Nora!—and I don’t understand you."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "No, that is just it. You don’t understand me, and I have never understood you either—before tonight. No, you mustn’t interrupt me. You must simply listen to what I say. Torvald, this is a settling of accounts."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "What do you mean by that?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[after a short silence]. Isn’t there one thing that strikes you as strange in our sitting here like this?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "What is that?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "We have been married now eight years. Does it not occur to you that this is the first time we two, you and I, husband and wife, have had a serious conversation?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "What do you mean by serious?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "In all these eight years—longer than that—from the very beginning of our acquaintance, we have never exchanged a word on any serious subject."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Was it likely that I would be continually and forever telling you about worries that you could not help me to bear?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "I am not speaking about business matters. I say that we have never sat down in earnest together to try and get at the bottom of anything."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "But, dearest Nora, would it have been any good to you?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "That is just it; you have never understood me. I have been greatly wronged, Torvald—first by papa and then by you."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "What! By us two—by us two, who have loved you better than anyone else in the world?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[shaking her head]. You have never loved me. You have only thought it pleasant to be in love with me."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Nora, what do I hear you saying?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "It is perfectly true, Torvald. When I was at home with papa, he told me his opinion about everything, and so I had the same opinions; and if I differed from him I concealed the fact, because he would not have liked it. He called me his doll-child, and he played with me just as I used to play with my dolls. And when I came to live with you—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "What sort of an expression is that to use about our marriage?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[undisturbed]. I mean that I was simply transferred from papa’s hands into yours. You arranged everything according to your own taste, and so I got the same tastes as you—or else I pretended to, I am really not quite sure which—I think sometimes the one and sometimes the other. When I look back on it, it seems to me as if I had been living here like a poor woman—just from hand to mouth. I have existed merely to perform tricks for you, Torvald. But you would have it so. You and papa have committed a great sin against me. It is your fault that I have made nothing of my life."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "How unreasonable and how ungrateful you are, Nora! Have you not been happy here?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "No, I have never been happy. I thought I was, but it has never really been so."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Not—not happy!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "No, only merry. And you have always been so kind to me. But our home has been nothing but a playroom. I have been your doll-wife, just as at home I was papa’s doll-child; and here the children have been my dolls. I thought it great fun when you played with me, just as they thought it great fun when I played with them. That is what our marriage has been, Torvald."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "There is some truth in what you say—exaggerated and strained as your view of it is. But for the future it shall be different. Playtime shall be over, and lesson-time shall begin."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Whose lessons? Mine, or the children’s?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Both yours and the children’s, my darling Nora."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Alas, Torvald, you are not the man to educate me into being a proper wife for you."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "And you can say that!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "And I—how am I fitted to bring up the children?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Nora!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Didn’t you say so yourself a little while ago—that you dare not trust me to bring them up?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "In a moment of anger! Why do you pay any heed to that?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Indeed, you were perfectly right. I am not fit for the task. There is another task I must undertake first. I must try and educate myself—you are not the man to help me in that. I must do that for myself. And that is why I am going to leave you now."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "[springing up]. What do you say?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "I must stand quite alone, if I am to understand myself and everything about me. It is for that reason that I cannot remain with you any longer."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Nora, Nora!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "I am going away from here now, at once. I am sure Christine will take me in for the night—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "You are out of your mind! I won’t allow it! I forbid you!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "It is no use forbidding me anything any longer. I will take with me what belongs to myself. I will take nothing from you, either now or later."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "What sort of madness is this!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Tomorrow I shall go home—I mean, to my old home. It will be easiest for me to find something to do there."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "You blind, foolish woman!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "I must try and get some sense, Torvald."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "To desert your home, your husband and your children! And you don’t consider what people will say!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "I cannot consider that at all. I only know that it is necessary for me."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "It’s shocking. This is how you would neglect your most sacred duties."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "What do you consider my most sacred duties?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Do I need to tell you that? Are they not your duties to your husband and your children?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "I have other duties just as sacred."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "That you have not. What duties could those be?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Duties to myself."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Before all else, you are a wife and a mother."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "I don’t believe that any longer. I believe that before all else I am a reasonable human being, just as you are—or, at all events, that I must try and become one. I know quite well, Torvald, that most people would think you right, and that views of that kind are to be found in books; but I can no longer content myself with what most people say, or with what is found in books. I must think over things for myself and get to understand them."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Can you not understand your place in your own home? Have you not a reliable guide in such matters as that?—have you no religion?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "I am afraid, Torvald, I do not exactly know what religion is."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "What are you saying?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "I know nothing but what the clergyman said, when I went to be confirmed. He told us that religion was this, and that, and the other. When I am away from all this, and am alone, I will look into that matter too. I will see if what the clergyman said is true, or at all events if it is true for me."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "This is unheard of in a girl of your age! But if religion cannot lead you aright, let me try and awaken your conscience. I suppose you have some moral sense? Or—answer me—am I to think you have none?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "I assure you, Torvald, that is not an easy question to answer. I really don’t know. The thing perplexes me altogether. I only know that you and I look at it in quite a different light. I am learning, too, that the law is quite another thing from what I supposed; but I find it impossible to convince myself that the law is right. According to it a woman has no right to spare her old dying father, or to save her husband’s life. I can’t believe that."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "You talk like a child. You don’t understand the conditions of the world in which you live."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "No, I don’t. But now I am going to try. I am going to see if I can make out who is right, the world or I."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "You are ill, Nora; you are delirious; I almost think you are out of your mind."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "I have never felt my mind so clear and certain as tonight."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "And is it with a clear and certain mind that you forsake your husband and your children?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, it is."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Then there is only one possible explanation."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "What is that?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "You do not love me anymore."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "No, that is just it."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Nora!—and you can say that?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "It gives me great pain, Torvald, for you have always been so kind to me, but I cannot help it. I do not love you any more."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "[regaining his composure]. Is that a clear and certain conviction too?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, absolutely clear and certain. That is the reason why I will not stay here any longer."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "And can you tell me what I have done to forfeit your love?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, indeed I can. It was tonight, when the wonderful thing did not happen; then I saw you were not the man I had thought you were."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Explain yourself better. I don’t understand you."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "I have waited so patiently for eight years; for, goodness knows, I knew very well that wonderful things don’t happen every day. Then this horrible misfortune came upon me; and then I felt quite certain that the wonderful thing was going to happen at last. When Krogstad’s letter was lying out there, never for a moment did I imagine that you would consent to accept this man’s conditions. I was so absolutely certain that you would say to him: Publish the thing to the whole world. And when that was done—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Yes, what then?—when I had exposed my wife to shame and disgrace?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "When that was done, I was so absolutely certain, you would come forward and take everything upon yourself, and say: I am the guilty one."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Nora—!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "You mean that I would never have accepted such a sacrifice on your part? No, of course not. But what would my assurances have been worth against yours? That was the wonderful thing which I hoped for and feared; and it was to prevent that, that I wanted to kill myself."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "I would gladly work night and day for you, Nora—bear sorrow and want for your sake. But no man would sacrifice his honour for the one he loves."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "It is a thing hundreds of thousands of women have done."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Oh, you think and talk like a heedless child."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Maybe. But you neither think nor talk like the man I could bind myself to. As soon as your fear was over—and it was not fear for what threatened me, but for what might happen to you—when the whole thing was past, as far as you were concerned it was exactly as if nothing at all had happened. Exactly as before, I was your little skylark, your doll, which you would in future treat with doubly gentle care, because it was so brittle and fragile. [Getting up.] Torvald—it was then it dawned upon me that for eight years I had been living here with a strange man, and had borne him three children—. Oh, I can’t bear to think of it! I could tear myself into little bits!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "[sadly]. I see, I see. An abyss has opened between us—there is no denying it. But, Nora, would it not be possible to fill it up?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "As I am now, I am no wife for you."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "I have it in me to become a different man."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Perhaps—if your doll is taken away from you."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "But to part!—to part from you! No, no, Nora, I can’t understand that idea."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[going out to the right]. That makes it all the more certain that it must be done. [She comes back with her cloak and hat and a small bag which she puts on a chair by the table.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Nora, Nora, not now! Wait until tomorrow."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[putting on her cloak]. I cannot spend the night in a strange man’s room."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "But can’t we live here like brother and sister—?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[putting on her hat]. You know very well that would not last long. [Puts the shawl round her.] Goodbye, Torvald. I won’t see the little ones. I know they are in better hands than mine. As I am now, I can be of no use to them."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "But some day, Nora—some day?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "How can I tell? I have no idea what is going to become of me."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "But you are my wife, whatever becomes of you."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Listen, Torvald. I have heard that when a wife deserts her husband’s house, as I am doing now, he is legally freed from all obligations towards her. In any case, I set you free from all your obligations. You are not to feel yourself bound in the slightest way, any more than I shall. There must be perfect freedom on both sides. See, here is your ring back. Give me mine."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "That too?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "That too."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Here it is."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "That’s right. Now it is all over. I have put the keys here. The maids know all about everything in the house—better than I do. Tomorrow, after I have left her, Christine will come here and pack up my own things that I brought with me from home. I will have them sent after me."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "All over! All over!—Nora, shall you never think of me again?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "I know I shall often think of you, the children, and this house."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "May I write to you, Nora?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "No—never. You must not do that."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "But at least let me send you—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Nothing—nothing—"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Let me help you if you are in want."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "No. I can receive nothing from a stranger."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Nora—can I never be anything more than a stranger to you?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "[taking her bag]. Ah, Torvald, the most wonderful thing of all would have to happen."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "Tell me what that would be!"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "Both you and I would have to be so changed that—. Oh, Torvald, I don’t believe any longer in wonderful things happening."
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "But I will believe in it. Tell me! So changed that—?"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "NORA"
    },
    "content": [
      {
        "type": "text",
        "text": "That our life together would be a real wedlock. Goodbye. [She goes out through the hall.]"
      }
    ]
  },
  {
    "type": "dialogue",
    "attrs": {
      "character": "HELMER"
    },
    "content": [
      {
        "type": "text",
        "text": "[sinks down on a chair at the door and buries his face in his hands]. Nora! Nora! [Looks round, and rises.] Empty. She is gone. [A hope flashes across his mind.] The most wonderful thing of all—?"
      }
    ]
  },
  {
    "type": "action",
    "content": [
      {
        "type": "text",
        "text": "[The sound of a door shutting is heard from below.]"
      }
    ]
  }
]
  }
}
