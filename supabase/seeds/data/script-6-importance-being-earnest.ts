import type { SeedScript } from '../types'

/**
 * 《不可儿戏》- Oscar Wilde
 * - 场次: 3幕
 * - 角色: 9人
 * - 类型: 喜剧
 */
export const script6ImportanceBeingEarnest: SeedScript = {
  title: "不可儿戏",
  description: "奥斯卡·王尔德的经典喜剧，讲述两个年轻人用虚构的身份追求爱情的故事",
  author: "Oscar Wilde",
  genre: "喜剧",
  logline: "两个维多利亚时代的绅士分别创造虚构的身份来逃避社会责任，却发现他们的谎言与真相惊人地交织在一起",
  characters: [
    {
      name: "John Worthing",
      description: "也称为Jack，乡村绅士，在城里以Ernest的身份出现"
    },
    {
      name: "Algernon Moncrieff",
      description: "Jack的朋友，创造了虚构的朋友Bunbury来逃避社交义务"
    },
    {
      name: "Lady Bracknell",
      description: "Algernon的姑妈，Gwendolen的母亲，维多利亚时代上流社会的代表"
    },
    {
      name: "Gwendolen Fairfax",
      description: "Lady Bracknell的女儿，爱上了名为Ernest的男子"
    },
    {
      name: "Cecily Cardew",
      description: "Jack的受监护人，天真浪漫的乡村少女"
    },
    {
      name: "Miss Prism",
      description: "Cecily的家庭教师，有着神秘的过去"
    },
    {
      name: "Rev. Canon Chasuble",
      description: "乡村牧师，对Miss Prism有好感"
    },
    {
      name: "Merriman",
      description: "庄园的管家"
    },
    {
      name: "Lane",
      description: "Algernon的男仆"
    }
  ],
  content: {
  "type": "doc",
  "content": [
        {
      "type": "scene",
      "content": [
        {
          "type": "text",
          "text": "第一幕 - Algernon的公寓 - 半月街 - 上午"
        }
      ]
    },
{
      "type": "action",
      "content": [
        {
          "type": "text",
          "text": "Morning-room in Algernon's flat in Half-Moon Street. The room is\r luxuriously and artistically furnished. The sound of a piano is heard in the adjoining room."
        }
      ]
    },
    {
      "type": "action",
      "content": [
        {
          "type": "text",
          "text": "[Lane is arranging afternoon tea on the table, and after the music\r has ceased, Algernon enters.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Did you hear what I was playing, Lane?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LANE"
      },
      "content": [
        {
          "type": "text",
          "text": "I didn't think it polite to listen, sir."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "I'm sorry for that, for your sake. I don't play accurately—any one can play accurately—but I play with wonderful expression. As far as the piano is concerned, sentiment is my forte. I keep science for Life."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LANE"
      },
      "content": [
        {
          "type": "text",
          "text": "Yes, sir."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "And, speaking of the science of Life, have you got the cucumber sandwiches cut for Lady Bracknell?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LANE"
      },
      "content": [
        {
          "type": "text",
          "text": "Yes, sir. [Hands them on a salver.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "[Inspects them, takes two, and sits down on the sofa.] Oh! . . . by the way, Lane, I see from your book that on Thursday night, when Lord Shoreman and Mr. Worthing were dining with me, eight bottles of champagne are entered as having been consumed."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LANE"
      },
      "content": [
        {
          "type": "text",
          "text": "Yes, sir; eight bottles and a pint."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Why is it that at a bachelor's establishment the servants invariably drink the champagne? I ask merely for information."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LANE"
      },
      "content": [
        {
          "type": "text",
          "text": "I attribute it to the superior quality of the wine, sir. I have often observed that in married households the champagne is rarely of a first-rate brand."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Good heavens! Is marriage so demoralising as that?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LANE"
      },
      "content": [
        {
          "type": "text",
          "text": "I believe it is a very pleasant state, sir. I have had very little experience of it myself up to the present. I have only been married once. That was in consequence of a misunderstanding between myself and a young person."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "[Languidly.] I don't know that I am much interested in your family life, Lane."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LANE"
      },
      "content": [
        {
          "type": "text",
          "text": "No, sir; it is not a very interesting subject. I never think of it myself."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Very natural, I am sure. That will do, Lane, thank you."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LANE"
      },
      "content": [
        {
          "type": "text",
          "text": "Thank you, sir. [Lane goes out.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Lane's views on marriage seem somewhat lax. Really, if the lower orders don't set us a good example, what on earth is the use of them? They seem, as a class, to have absolutely no sense of moral responsibility."
        }
      ]
    },
    {
      "type": "action",
      "content": [
        {
          "type": "text",
          "text": "[Enter Lane.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LANE"
      },
      "content": [
        {
          "type": "text",
          "text": "Mr. Ernest Worthing."
        }
      ]
    },
    {
      "type": "action",
      "content": [
        {
          "type": "text",
          "text": "[Enter Jack.]"
        }
      ]
    },
    {
      "type": "action",
      "content": [
        {
          "type": "text",
          "text": "[Lane goes out.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "How are you, my dear Ernest? What brings you up to town?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Oh, pleasure, pleasure! What else should bring one anywhere? Eating as usual, I see, Algy!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "[Stiffly.] I believe it is customary in good society to take some slight refreshment at five o'clock. Where have you been since last Thursday?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "[Sitting down on the sofa.] In the country."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "What on earth do you do there?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "[Pulling off his gloves.] When one is in town one amuses oneself. When one is in the country one amuses other people. It is excessively boring."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "And who are the people you amuse?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "[Airily.] Oh, neighbours, neighbours."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Got nice neighbours in your part of Shropshire?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Perfectly horrid! Never speak to one of them."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "How immensely you must amuse them! [Goes over and takes sandwich.] By the way, Shropshire is your county, is it not?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Eh? Shropshire? Yes, of course. Hallo! Why all these cups? Why cucumber sandwiches? Why such reckless extravagance in one so young? Who is coming to tea?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Oh! merely Aunt Augusta and Gwendolen."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "How perfectly delightful!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Yes, that is all very well; but I am afraid Aunt Augusta won't quite approve of your being here."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "May I ask why?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "My dear fellow, the way you flirt with Gwendolen is perfectly disgraceful. It is almost as bad as the way Gwendolen flirts with you."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "I am in love with Gwendolen. I have come up to town expressly to propose to her."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "I thought you had come up for pleasure? . . . I call that business."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "How utterly unromantic you are!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "I really don't see anything romantic in proposing. It is very romantic to be in love. But there is nothing romantic about a definite proposal. Why, one may be accepted. One usually is, I believe. Then the excitement is all over. The very essence of romance is uncertainty. If ever I get married, I'll certainly try to forget the fact."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "I have no doubt about that, dear Algy. The Divorce Court was specially invented for people whose memories are so curiously constituted."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Oh! there is no use speculating on that subject. Divorces are made in Heaven—[Jack puts out his hand to take a sandwich. Algernon at once interferes.] Please don't touch the cucumber sandwiches. They are ordered specially for Aunt Augusta. [Takes one and eats it.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Well, you have been eating them all the time."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "That is quite a different matter. She is my aunt. [Takes plate from below.] Have some bread and butter. The bread and butter is for Gwendolen. Gwendolen is devoted to bread and butter."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "[Advancing to table and helping himself.] And very good bread and butter it is too."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Well, my dear fellow, you need not eat as if you were going to eat it all. You behave as if you were married to her already. You are not married to her already, and I don't think you ever will be."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Why on earth do you say that?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Well, in the first place girls never marry the men they flirt with. Girls don't think it right."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Oh, that is nonsense!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "It isn't. It is a great truth. It accounts for the extraordinary number of bachelors that one sees all over the place. In the second place, I don't give my consent."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Your consent!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "My dear fellow, Gwendolen is my first cousin. And before I allow you to marry her, you will have to clear up the whole question of Cecily. [Rings bell.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Cecily! What on earth do you mean? What do you mean, Algy, by Cecily! I don't know any one of the name of Cecily."
        }
      ]
    },
    {
      "type": "action",
      "content": [
        {
          "type": "text",
          "text": "[Enter Lane.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Bring me that cigarette case Mr. Worthing left in the smoking-room the last time he dined here."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LANE"
      },
      "content": [
        {
          "type": "text",
          "text": "Yes, sir. [Lane goes out.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Do you mean to say you have had my cigarette case all this time? I wish to goodness you had let me know. I have been writing frantic letters to Scotland Yard about it. I was very nearly offering a large reward."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Well, I wish you would offer one. I happen to be more than usually hard up."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "There is no good offering a large reward now that the thing is found."
        }
      ]
    },
    {
      "type": "action",
      "content": [
        {
          "type": "text",
          "text": "[Enter Lane with the cigarette case on a salver. Algernon\r takes it at once. Lane goes out.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "I think that is rather mean of you, Ernest, I must say. [Opens case and examines it.] However, it makes no matter, for, now that I look at the inscription inside, I find that the thing isn't yours after all."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Of course it's mine. [Moving to him.] You have seen me with it a hundred times, and you have no right whatsoever to read what is written inside. It is a very ungentlemanly thing to read a private cigarette case."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Oh! it is absurd to have a hard and fast rule about what one should read and what one shouldn't. More than half of modern culture depends on what one shouldn't read."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "I am quite aware of the fact, and I don't propose to discuss modern culture. It isn't the sort of thing one should talk of in private. I simply want my cigarette case back."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Yes; but this isn't your cigarette case. This cigarette case is a present from some one of the name of Cecily, and you said you didn't know any one of that name."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Well, if you want to know, Cecily happens to be my aunt."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Your aunt!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Yes. Charming old lady she is, too. Lives at Tunbridge Wells. Just give it back to me, Algy."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "[Retreating to back of sofa.] But why does she call herself little Cecily if she is your aunt and lives at Tunbridge Wells? [Reading.] 'From little Cecily with her fondest love.'"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "[Moving to sofa and kneeling upon it.] My dear fellow, what on earth is there in that? Some aunts are tall, some aunts are not tall. That is a matter that surely an aunt may be allowed to decide for herself. You seem to think that every aunt should be exactly like your aunt! That is absurd! For Heaven's sake give me back my cigarette case. [Follows Algernon round the room.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Yes. But why does your aunt call you her uncle? 'From little Cecily, with her fondest love to her dear Uncle Jack.' There is no objection, I admit, to an aunt being a small aunt, but why an aunt, no matter what her size may be, should call her own nephew her uncle, I can't quite make out. Besides, your name isn't Jack at all; it is Ernest."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "It isn't Ernest; it's Jack."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "You have always told me it was Ernest. I have introduced you to every one as Ernest. You answer to the name of Ernest. You look as if your name was Ernest. You are the most earnest-looking person I ever saw in my life. It is perfectly absurd your saying that your name isn't Ernest. It's on your cards. Here is one of them. [Taking it from case.] 'Mr. Ernest Worthing, B. 4, The Albany.' I'll keep this as a proof that your name is Ernest if ever you attempt to deny it to me, or to Gwendolen, or to any one else. [Puts the card in his pocket.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Well, my name is Ernest in town and Jack in the country, and the cigarette case was given to me in the country."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Yes, but that does not account for the fact that your small Aunt Cecily, who lives at Tunbridge Wells, calls you her dear uncle. Come, old boy, you had much better have the thing out at once."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "My dear Algy, you talk exactly as if you were a dentist. It is very vulgar to talk like a dentist when one isn't a dentist. It produces a false impression."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Well, that is exactly what dentists always do. Now, go on! Tell me the whole thing. I may mention that I have always suspected you of being a confirmed and secret Bunburyist; and I am quite sure of it now."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Bunburyist? What on earth do you mean by a Bunburyist?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "I'll reveal to you the meaning of that incomparable expression as soon as you are kind enough to inform me why you are Ernest in town and Jack in the country."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Well, produce my cigarette case first."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Here it is. [Hands cigarette case.] Now produce your explanation, and pray make it improbable. [Sits on sofa.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "My dear fellow, there is nothing improbable about my explanation at all. In fact it's perfectly ordinary. Old Mr. Thomas Cardew, who adopted me when I was a little boy, made me in his will guardian to his grand-daughter, Miss Cecily Cardew. Cecily, who addresses me as her uncle from motives of respect that you could not possibly appreciate, lives at my place in the country under the charge of her admirable governess, Miss Prism."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Where is that place in the country, by the way?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "That is nothing to you, dear boy. You are not going to be invited . . . I may tell you candidly that the place is not in Shropshire."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "I suspected that, my dear fellow! I have Bunburyed all over Shropshire on two separate occasions. Now, go on. Why are you Ernest in town and Jack in the country?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "My dear Algy, I don't know whether you will be able to understand my real motives. You are hardly serious enough. When one is placed in the position of guardian, one has to adopt a very high moral tone on all subjects. It's one's duty to do so. And as a high moral tone can hardly be said to conduce very much to either one's health or one's happiness, in order to get up to town I have always pretended to have a younger brother of the name of Ernest, who lives in the Albany, and gets into the most dreadful scrapes. That, my dear Algy, is the whole truth pure and simple."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "The truth is rarely pure and never simple. Modern life would be very tedious if it were either, and modern literature a complete impossibility!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "That wouldn't be at all a bad thing."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Literary criticism is not your forte, my dear fellow. Don't try it. You should leave that to people who haven't been at a University. They do it so well in the daily papers. What you really are is a Bunburyist. I was quite right in saying you were a Bunburyist. You are one of the most advanced Bunburyists I know."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "What on earth do you mean?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "You have invented a very useful younger brother called Ernest, in order that you may be able to come up to town as often as you like. I have invented an invaluable permanent invalid called Bunbury, in order that I may be able to go down into the country whenever I choose. Bunbury is perfectly invaluable. If it wasn't for Bunbury's extraordinary bad health, for instance, I wouldn't be able to dine with you at Willis's to-night, for I have been really engaged to Aunt Augusta for more than a week."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "I haven't asked you to dine with me anywhere to-night."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "I know. You are absurdly careless about sending out invitations. It is very foolish of you. Nothing annoys people so much as not receiving invitations."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "You had much better dine with your Aunt Augusta."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "I haven't the smallest intention of doing anything of the kind. To begin with, I dined there on Monday, and once a week is quite enough to dine with one's own relations. In the second place, whenever I do dine there I am always treated as a member of the family, and sent down with either no woman at all, or two. In the third place, I know perfectly well whom she will place me next to, to-night. She will place me next Mary Farquhar, who always flirts with her own husband across the dinner-table. That is not very pleasant. Indeed, it is not even decent . . . and that sort of thing is enormously on the increase. The amount of women in London who flirt with their own husbands is perfectly scandalous. It looks so bad. It is simply washing one's clean linen in public. Besides, now that I know you to be a confirmed Bunburyist I naturally want to talk to you about Bunburying. I want to tell you the rules."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "I'm not a Bunburyist at all. If Gwendolen accepts me, I am going to kill my brother, indeed I think I'll kill him in any case. Cecily is a little too much interested in him. It is rather a bore. So I am going to get rid of Ernest. And I strongly advise you to do the same with Mr. . . . with your invalid friend who has the absurd name."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Nothing will induce me to part with Bunbury, and if you ever get married, which seems to me extremely problematic, you will be very glad to know Bunbury. A man who marries without knowing Bunbury has a very tedious time of it."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "That is nonsense. If I marry a charming girl like Gwendolen, and she is the only girl I ever saw in my life that I would marry, I certainly won't want to know Bunbury."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Then your wife will. You don't seem to realise, that in married life three is company and two is none."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "[Sententiously.] That, my dear young friend, is the theory that the corrupt French Drama has been propounding for the last fifty years."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Yes; and that the happy English home has proved in half the time."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "For heaven's sake, don't try to be cynical. It's perfectly easy to be cynical."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "My dear fellow, it isn't easy to be anything nowadays. There's such a lot of beastly competition about. [The sound of an electric bell is heard.] Ah! that must be Aunt Augusta. Only relatives, or creditors, ever ring in that Wagnerian manner. Now, if I get her out of the way for ten minutes, so that you can have an opportunity for proposing to Gwendolen, may I dine with you to-night at Willis's?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "I suppose so, if you want to."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Yes, but you must be serious about it. I hate people who are not serious about meals. It is so shallow of them."
        }
      ]
    },
    {
      "type": "action",
      "content": [
        {
          "type": "text",
          "text": "[Enter Lane.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LANE"
      },
      "content": [
        {
          "type": "text",
          "text": "Lady Bracknell and Miss Fairfax."
        }
      ]
    },
    {
      "type": "action",
      "content": [
        {
          "type": "text",
          "text": "[Algernon goes forward to meet them. Enter Lady Bracknell and\r Gwendolen.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "Good afternoon, dear Algernon, I hope you are behaving very well."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "I'm feeling very well, Aunt Augusta."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "That's not quite the same thing. In fact the two things rarely go together. [Sees Jack and bows to him with icy coldness.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "[To Gwendolen.] Dear me, you are smart!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "I am always smart! Am I not, Mr. Worthing?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "You're quite perfect, Miss Fairfax."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "Oh! I hope I am not that. It would leave no room for developments, and I intend to develop in many directions. [Gwendolen and Jack sit down together in the corner.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "I'm sorry if we are a little late, Algernon, but I was obliged to call on dear Lady Harbury. I hadn't been there since her poor husband's death. I never saw a woman so altered; she looks quite twenty years younger. And now I'll have a cup of tea, and one of those nice cucumber sandwiches you promised me."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Certainly, Aunt Augusta. [Goes over to tea-table.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "Won't you come and sit here, Gwendolen?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "Thanks, mamma, I'm quite comfortable where I am."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "[Picking up empty plate in horror.] Good heavens! Lane! Why are there no cucumber sandwiches? I ordered them specially."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LANE"
      },
      "content": [
        {
          "type": "text",
          "text": "[Gravely.] There were no cucumbers in the market this morning, sir. I went down twice."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "No cucumbers!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LANE"
      },
      "content": [
        {
          "type": "text",
          "text": "No, sir. Not even for ready money."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "That will do, Lane, thank you."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LANE"
      },
      "content": [
        {
          "type": "text",
          "text": "Thank you, sir. [Goes out.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "I am greatly distressed, Aunt Augusta, about there being no cucumbers, not even for ready money."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "It really makes no matter, Algernon. I had some crumpets with Lady Harbury, who seems to me to be living entirely for pleasure now."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "I hear her hair has turned quite gold from grief."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "It certainly has changed its colour. From what cause I, of course, cannot say. [Algernon crosses and hands tea.] Thank you. I've quite a treat for you to-night, Algernon. I am going to send you down with Mary Farquhar. She is such a nice woman, and so attentive to her husband. It's delightful to watch them."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "I am afraid, Aunt Augusta, I shall have to give up the pleasure of dining with you to-night after all."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "[Frowning.] I hope not, Algernon. It would put my table completely out. Your uncle would have to dine upstairs. Fortunately he is accustomed to that."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "It is a great bore, and, I need hardly say, a terrible disappointment to me, but the fact is I have just had a telegram to say that my poor friend Bunbury is very ill again. [Exchanges glances with Jack.] They seem to think I should be with him."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "It is very strange. This Mr. Bunbury seems to suffer from curiously bad health."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Yes; poor Bunbury is a dreadful invalid."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "Well, I must say, Algernon, that I think it is high time that Mr. Bunbury made up his mind whether he was going to live or to die. This shilly-shallying with the question is absurd. Nor do I in any way approve of the modern sympathy with invalids. I consider it morbid. Illness of any kind is hardly a thing to be encouraged in others. Health is the primary duty of life. I am always telling that to your poor uncle, but he never seems to take much notice . . . as far as any improvement in his ailment goes. I should be much obliged if you would ask Mr. Bunbury, from me, to be kind enough not to have a relapse on Saturday, for I rely on you to arrange my music for me. It is my last reception, and one wants something that will encourage conversation, particularly at the end of the season when every one has practically said whatever they had to say, which, in most cases, was probably not much."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "I'll speak to Bunbury, Aunt Augusta, if he is still conscious, and I think I can promise you he'll be all right by Saturday. Of course the music is a great difficulty. You see, if one plays good music, people don't listen, and if one plays bad music people don't talk. But I'll run over the programme I've drawn out, if you will kindly come into the next room for a moment."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "Thank you, Algernon. It is very thoughtful of you. [Rising, and following Algernon.] I'm sure the programme will be delightful, after a few expurgations. French songs I cannot possibly allow. People always seem to think that they are improper, and either look shocked, which is vulgar, or laugh, which is worse. But German sounds a thoroughly respectable language, and indeed, I believe is so. Gwendolen, you will accompany me."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "Certainly, mamma."
        }
      ]
    },
    {
      "type": "action",
      "content": [
        {
          "type": "text",
          "text": "[Lady Bracknell and Algernon go into the music-room,\r Gwendolen remains behind.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Charming day it has been, Miss Fairfax."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "Pray don't talk to me about the weather, Mr. Worthing. Whenever people talk to me about the weather, I always feel quite certain that they mean something else. And that makes me so nervous."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "I do mean something else."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "I thought so. In fact, I am never wrong."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "And I would like to be allowed to take advantage of Lady Bracknell's temporary absence . . ."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "I would certainly advise you to do so. Mamma has a way of coming back suddenly into a room that I have often had to speak to her about."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "[Nervously.] Miss Fairfax, ever since I met you I have admired you more than any girl . . . I have ever met since . . . I met you."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "Yes, I am quite well aware of the fact. And I often wish that in public, at any rate, you had been more demonstrative. For me you have always had an irresistible fascination. Even before I met you I was far from indifferent to you. [Jack looks at her in amazement.] We live, as I hope you know, Mr. Worthing, in an age of ideals. The fact is constantly mentioned in the more expensive monthly magazines, and has reached the provincial pulpits, I am told; and my ideal has always been to love some one of the name of Ernest. There is something in that name that inspires absolute confidence. The moment Algernon first mentioned to me that he had a friend called Ernest, I knew I was destined to love you."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "You really love me, Gwendolen?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "Passionately!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Darling! You don't know how happy you've made me."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "My own Ernest!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "But you don't really mean to say that you couldn't love me if my name wasn't Ernest?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "But your name is Ernest."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Yes, I know it is. But supposing it was something else? Do you mean to say you couldn't love me then?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "[Glibly.] Ah! that is clearly a metaphysical speculation, and like most metaphysical speculations has very little reference at all to the actual facts of real life, as we know them."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Personally, darling, to speak quite candidly, I don't much care about the name of Ernest . . . I don't think the name suits me at all."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "It suits you perfectly. It is a divine name. It has a music of its own. It produces vibrations."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Well, really, Gwendolen, I must say that I think there are lots of other much nicer names. I think Jack, for instance, a charming name."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "Jack? . . . No, there is very little music in the name Jack, if any at all, indeed. It does not thrill. It produces absolutely no vibrations . . . I have known several Jacks, and they all, without exception, were more than usually plain. Besides, Jack is a notorious domesticity for John! And I pity any woman who is married to a man called John. She would probably never be allowed to know the entrancing pleasure of a single moment's solitude. The only really safe name is Ernest."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Gwendolen, I must get christened at once—I mean we must get married at once. There is no time to be lost."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "Married, Mr. Worthing?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "[Astounded.] Well . . . surely. You know that I love you, and you led me to believe, Miss Fairfax, that you were not absolutely indifferent to me."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "I adore you. But you haven't proposed to me yet. Nothing has been said at all about marriage. The subject has not even been touched on."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Well . . . may I propose to you now?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "I think it would be an admirable opportunity. And to spare you any possible disappointment, Mr. Worthing, I think it only fair to tell you quite frankly before-hand that I am fully determined to accept you."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Gwendolen!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "Yes, Mr. Worthing, what have you got to say to me?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "You know what I have got to say to you."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "Yes, but you don't say it."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Gwendolen, will you marry me? [Goes on his knees.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "Of course I will, darling. How long you have been about it! I am afraid you have had very little experience in how to propose."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "My own one, I have never loved any one in the world but you."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "Yes, but men often propose for practice. I know my brother Gerald does. All my girl-friends tell me so. What wonderfully blue eyes you have, Ernest! They are quite, quite, blue. I hope you will always look at me just like that, especially when there are other people present. [Enter Lady Bracknell.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "Mr. Worthing! Rise, sir, from this semi-recumbent posture. It is most indecorous."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "Mamma! [He tries to rise; she restrains him.] I must beg you to retire. This is no place for you. Besides, Mr. Worthing has not quite finished yet."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "Finished what, may I ask?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "I am engaged to Mr. Worthing, mamma. [They rise together.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "Pardon me, you are not engaged to any one. When you do become engaged to some one, I, or your father, should his health permit him, will inform you of the fact. An engagement should come on a young girl as a surprise, pleasant or unpleasant, as the case may be. It is hardly a matter that she could be allowed to arrange for herself . . . And now I have a few questions to put to you, Mr. Worthing. While I am making these inquiries, you, Gwendolen, will wait for me below in the carriage."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "[Reproachfully.] Mamma!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "In the carriage, Gwendolen! [Gwendolen goes to the door. She and Jack blow kisses to each other behind Lady Bracknell's back. Lady Bracknell looks vaguely about as if she could not understand what the noise was. Finally turns round.] Gwendolen, the carriage!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "Yes, mamma. [Goes out, looking back at Jack.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "[Sitting down.] You can take a seat, Mr. Worthing."
        }
      ]
    },
    {
      "type": "action",
      "content": [
        {
          "type": "text",
          "text": "[Looks in her pocket for note-book and pencil.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Thank you, Lady Bracknell, I prefer standing."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "[Pencil and note-book in hand.] I feel bound to tell you that you are not down on my list of eligible young men, although I have the same list as the dear Duchess of Bolton has. We work together, in fact. However, I am quite ready to enter your name, should your answers be what a really affectionate mother requires. Do you smoke?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Well, yes, I must admit I smoke."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "I am glad to hear it. A man should always have an occupation of some kind. There are far too many idle men in London as it is. How old are you?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Twenty-nine."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "A very good age to be married at. I have always been of opinion that a man who desires to get married should know either everything or nothing. Which do you know?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "[After some hesitation.] I know nothing, Lady Bracknell."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "I am pleased to hear it. I do not approve of anything that tampers with natural ignorance. Ignorance is like a delicate exotic fruit; touch it and the bloom is gone. The whole theory of modern education is radically unsound. Fortunately in England, at any rate, education produces no effect whatsoever. If it did, it would prove a serious danger to the upper classes, and probably lead to acts of violence in Grosvenor Square. What is your income?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Between seven and eight thousand a year."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "[Makes a note in her book.] In land, or in investments?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "In investments, chiefly."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "That is satisfactory. What between the duties expected of one during one's lifetime, and the duties exacted from one after one's death, land has ceased to be either a profit or a pleasure. It gives one position, and prevents one from keeping it up. That's all that can be said about land."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "I have a country house with some land, of course, attached to it, about fifteen hundred acres, I believe; but I don't depend on that for my real income. In fact, as far as I can make out, the poachers are the only people who make anything out of it."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "A country house! How many bedrooms? Well, that point can be cleared up afterwards. You have a town house, I hope? A girl with a simple, unspoiled nature, like Gwendolen, could hardly be expected to reside in the country."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Well, I own a house in Belgrave Square, but it is let by the year to Lady Bloxham. Of course, I can get it back whenever I like, at six months' notice."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "Lady Bloxham? I don't know her."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Oh, she goes about very little. She is a lady considerably advanced in years."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "Ah, nowadays that is no guarantee of respectability of character. What number in Belgrave Square?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "149."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "[Shaking her head.] The unfashionable side. I thought there was something. However, that could easily be altered."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Do you mean the fashion, or the side?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "[Sternly.] Both, if necessary, I presume. What are your politics?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Well, I am afraid I really have none. I am a Liberal Unionist."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "Oh, they count as Tories. They dine with us. Or come in the evening, at any rate. Now to minor matters. Are your parents living?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "I have lost both my parents."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "To lose one parent, Mr. Worthing, may be regarded as a misfortune; to lose both looks like carelessness. Who was your father? He was evidently a man of some wealth. Was he born in what the Radical papers call the purple of commerce, or did he rise from the ranks of the aristocracy?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "I am afraid I really don't know. The fact is, Lady Bracknell, I said I had lost my parents. It would be nearer the truth to say that my parents seem to have lost me . . . I don't actually know who I am by birth. I was . . . well, I was found."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "Found!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "The late Mr. Thomas Cardew, an old gentleman of a very charitable and kindly disposition, found me, and gave me the name of Worthing, because he happened to have a first-class ticket for Worthing in his pocket at the time. Worthing is a place in Sussex. It is a seaside resort."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "Where did the charitable gentleman who had a first-class ticket for this seaside resort find you?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "[Gravely.] In a hand-bag."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "A hand-bag?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "[Very seriously.] Yes, Lady Bracknell. I was in a hand-bag—a somewhat large, black leather hand-bag, with handles to it—an ordinary hand-bag in fact."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "In what locality did this Mr. James, or Thomas, Cardew come across this ordinary hand-bag?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "In the cloak-room at Victoria Station. It was given to him in mistake for his own."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "The cloak-room at Victoria Station?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Yes. The Brighton line."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "The line is immaterial. Mr. Worthing, I confess I feel somewhat bewildered by what you have just told me. To be born, or at any rate bred, in a hand-bag, whether it had handles or not, seems to me to display a contempt for the ordinary decencies of family life that reminds one of the worst excesses of the French Revolution. And I presume you know what that unfortunate movement led to? As for the particular locality in which the hand-bag was found, a cloak-room at a railway station might serve to conceal a social indiscretion—has probably, indeed, been used for that purpose before now—but it could hardly be regarded as an assured basis for a recognised position in good society."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "May I ask you then what you would advise me to do? I need hardly say I would do anything in the world to ensure Gwendolen's happiness."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "I would strongly advise you, Mr. Worthing, to try and acquire some relations as soon as possible, and to make a definite effort to produce at any rate one parent, of either sex, before the season is quite over."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Well, I don't see how I could possibly manage to do that. I can produce the hand-bag at any moment. It is in my dressing-room at home. I really think that should satisfy you, Lady Bracknell."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "Me, sir! What has it to do with me? You can hardly imagine that I and Lord Bracknell would dream of allowing our only daughter—a girl brought up with the utmost care—to marry into a cloak-room, and form an alliance with a parcel? Good morning, Mr. Worthing!"
        }
      ]
    },
    {
      "type": "action",
      "content": [
        {
          "type": "text",
          "text": "[Lady Bracknell sweeps out in majestic indignation.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Good morning! [Algernon, from the other room, strikes up the Wedding March. Jack looks perfectly furious, and goes to the door.] For goodness' sake don't play that ghastly tune, Algy. How idiotic you are!"
        }
      ]
    },
    {
      "type": "action",
      "content": [
        {
          "type": "text",
          "text": "[The music stops and Algernon enters cheerily.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Didn't it go off all right, old boy? You don't mean to say Gwendolen refused you? I know it is a way she has. She is always refusing people. I think it is most ill-natured of her."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Oh, Gwendolen is as right as a trivet. As far as she is concerned, we are engaged. Her mother is perfectly unbearable. Never met such a Gorgon . . . I don't really know what a Gorgon is like, but I am quite sure that Lady Bracknell is one. In any case, she is a monster, without being a myth, which is rather unfair . . . I beg your pardon, Algy, I suppose I shouldn't talk about your own aunt in that way before you."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "My dear boy, I love hearing my relations abused. It is the only thing that makes me put up with them at all. Relations are simply a tedious pack of people, who haven't got the remotest knowledge of how to live, nor the smallest instinct about when to die."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Oh, that is nonsense!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "It isn't!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Well, I won't argue about the matter. You always want to argue about things."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "That is exactly what things were originally made for."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Upon my word, if I thought that, I'd shoot myself . . . [A pause.] You don't think there is any chance of Gwendolen becoming like her mother in about a hundred and fifty years, do you, Algy?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "All women become like their mothers. That is their tragedy. No man does. That's his."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Is that clever?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "It is perfectly phrased! and quite as true as any observation in civilised life should be."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "I am sick to death of cleverness. Everybody is clever nowadays. You can't go anywhere without meeting clever people. The thing has become an absolute public nuisance. I wish to goodness we had a few fools left."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "We have."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "I should extremely like to meet them. What do they talk about?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "The fools? Oh! about the clever people, of course."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "What fools!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "By the way, did you tell Gwendolen the truth about your being Ernest in town, and Jack in the country?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "[In a very patronising manner.] My dear fellow, the truth isn't quite the sort of thing one tells to a nice, sweet, refined girl. What extraordinary ideas you have about the way to behave to a woman!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "The only way to behave to a woman is to make love to her, if she is pretty, and to some one else, if she is plain."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Oh, that is nonsense."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "What about your brother? What about the profligate Ernest?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Oh, before the end of the week I shall have got rid of him. I'll say he died in Paris of apoplexy. Lots of people die of apoplexy, quite suddenly, don't they?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Yes, but it's hereditary, my dear fellow. It's a sort of thing that runs in families. You had much better say a severe chill."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "You are sure a severe chill isn't hereditary, or anything of that kind?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Of course it isn't!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Very well, then. My poor brother Ernest is carried off suddenly, in Paris, by a severe chill. That gets rid of him."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "But I thought you said that . . . Miss Cardew was a little too much interested in your poor brother Ernest? Won't she feel his loss a good deal?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Oh, that is all right. Cecily is not a silly romantic girl, I am glad to say. She has got a capital appetite, goes long walks, and pays no attention at all to her lessons."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "I would rather like to see Cecily."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "I will take very good care you never do. She is excessively pretty, and she is only just eighteen."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Have you told Gwendolen yet that you have an excessively pretty ward who is only just eighteen?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Oh! one doesn't blurt these things out to people. Cecily and Gwendolen are perfectly certain to be extremely great friends. I'll bet you anything you like that half an hour after they have met, they will be calling each other sister."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Women only do that when they have called each other a lot of other things first. Now, my dear boy, if we want to get a good table at Willis's, we really must go and dress. Do you know it is nearly seven?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "[Irritably.] Oh! It always is nearly seven."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Well, I'm hungry."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "I never knew you when you weren't . . ."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "What shall we do after dinner? Go to a theatre?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Oh no! I loathe listening."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Well, let us go to the Club?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Oh, no! I hate talking."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Well, we might trot round to the Empire at ten?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Oh, no! I can't bear looking at things. It is so silly."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Well, what shall we do?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Nothing!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "It is awfully hard work doing nothing. However, I don't mind hard work where there is no definite object of any kind."
        }
      ]
    },
    {
      "type": "action",
      "content": [
        {
          "type": "text",
          "text": "[Enter Lane.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LANE"
      },
      "content": [
        {
          "type": "text",
          "text": "Miss Fairfax."
        }
      ]
    },
    {
      "type": "action",
      "content": [
        {
          "type": "text",
          "text": "[Enter Gwendolen. Lane goes out.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Gwendolen, upon my word!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "Algy, kindly turn your back. I have something very particular to say to Mr. Worthing."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Really, Gwendolen, I don't think I can allow this at all."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "Algy, you always adopt a strictly immoral attitude towards life. You are not quite old enough to do that. [Algernon retires to the fireplace.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "My own darling!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "Ernest, we may never be married. From the expression on mamma's face I fear we never shall. Few parents nowadays pay any regard to what their children say to them. The old-fashioned respect for the young is fast dying out. Whatever influence I ever had over mamma, I lost at the age of three. But although she may prevent us from becoming man and wife, and I may marry some one else, and marry often, nothing that she can possibly do can alter my eternal devotion to you."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Dear Gwendolen!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "The story of your romantic origin, as related to me by mamma, with unpleasing comments, has naturally stirred the deeper fibres of my nature. Your Christian name has an irresistible fascination. The simplicity of your character makes you exquisitely incomprehensible to me. Your town address at the Albany I have. What is your address in the country?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "The Manor House, Woolton, Hertfordshire."
        }
      ]
    },
    {
      "type": "action",
      "content": [
        {
          "type": "text",
          "text": "[Algernon, who has been carefully listening, smiles to himself, and\r writes the address on his shirt-cuff. Then picks up the Railway Guide.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "There is a good postal service, I suppose? It may be necessary to do something desperate. That of course will require serious consideration. I will communicate with you daily."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "My own one!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "How long do you remain in town?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Till Monday."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "Good! Algy, you may turn round now."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Thanks, I've turned round already."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "You may also ring the bell."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "You will let me see you to your carriage, my own darling?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "Certainly."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "[To Lane, who now enters.] I will see Miss Fairfax out."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LANE"
      },
      "content": [
        {
          "type": "text",
          "text": "Yes, sir. [Jack and Gwendolen go off.]"
        }
      ]
    },
    {
      "type": "action",
      "content": [
        {
          "type": "text",
          "text": "[Lane presents several letters on a salver to Algernon. It is\r to be surmised that they are bills, as Algernon, after looking at the envelopes, tears them up.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "A glass of sherry, Lane."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LANE"
      },
      "content": [
        {
          "type": "text",
          "text": "Yes, sir."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "To-morrow, Lane, I'm going Bunburying."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LANE"
      },
      "content": [
        {
          "type": "text",
          "text": "Yes, sir."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "I shall probably not be back till Monday. You can put up my dress clothes, my smoking jacket, and all the Bunbury suits . . ."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LANE"
      },
      "content": [
        {
          "type": "text",
          "text": "Yes, sir. [Handing sherry.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "I hope to-morrow will be a fine day, Lane."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LANE"
      },
      "content": [
        {
          "type": "text",
          "text": "It never is, sir."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Lane, you're a perfect pessimist."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LANE"
      },
      "content": [
        {
          "type": "text",
          "text": "I do my best to give satisfaction, sir."
        }
      ]
    },
    {
      "type": "action",
      "content": [
        {
          "type": "text",
          "text": "[Enter Jack. Lane goes off.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "There's a sensible, intellectual girl! the only girl I ever cared for in my life. [Algernon is laughing immoderately.] What on earth are you so amused at?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Oh, I'm a little anxious about poor Bunbury, that is all."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "If you don't take care, your friend Bunbury will get you into a serious scrape some day."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "I love scrapes. They are the only things that are never serious."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Oh, that's nonsense, Algy. You never talk anything but nonsense."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Nobody ever does."
        }
      ]
    },
    {
      "type": "action",
      "content": [
        {
          "type": "text",
          "text": "[Jack looks indignantly at him, and leaves the room. Algernon\r lights a cigarette, reads his shirt-cuff, and smiles.]"
        },
    {
      "type": "scene",
      "content": [
        {
          "type": "text",
          "text": "第二幕 - Woolton庄园的花园 - 下午"
        }
      ]
    },
      ]
    },
    {
      "type": "action",
      "content": [
        {
          "type": "text",
          "text": "Garden at the Manor House. A flight of grey stone steps leads up to the\r house. The garden, an old-fashioned one, full of roses. Time of year, July. Basket chairs, and a table covered with books, are set under a large yew-tree."
        }
      ]
    },
    {
      "type": "action",
      "content": [
        {
          "type": "text",
          "text": "[Miss Prism discovered seated at the table. Cecily is at the\r back watering flowers.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "MISS PRISM"
      },
      "content": [
        {
          "type": "text",
          "text": "[Calling.] Cecily, Cecily! Surely such a utilitarian occupation as the watering of flowers is rather Moulton's duty than yours? Especially at a moment when intellectual pleasures await you. Your German grammar is on the table. Pray open it at page fifteen. We will repeat yesterday's lesson."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "[Coming over very slowly.] But I don't like German. It isn't at all a becoming language. I know perfectly well that I look quite plain after my German lesson."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "MISS PRISM"
      },
      "content": [
        {
          "type": "text",
          "text": "Child, you know how anxious your guardian is that you should improve yourself in every way. He laid particular stress on your German, as he was leaving for town yesterday. Indeed, he always lays stress on your German when he is leaving for town."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Dear Uncle Jack is so very serious! Sometimes he is so serious that I think he cannot be quite well."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "MISS PRISM"
      },
      "content": [
        {
          "type": "text",
          "text": "[Drawing herself up.] Your guardian enjoys the best of health, and his gravity of demeanour is especially to be commended in one so comparatively young as he is. I know no one who has a higher sense of duty and responsibility."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "I suppose that is why he often looks a little bored when we three are together."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "MISS PRISM"
      },
      "content": [
        {
          "type": "text",
          "text": "Cecily! I am surprised at you. Mr. Worthing has many troubles in his life. Idle merriment and triviality would be out of place in his conversation. You must remember his constant anxiety about that unfortunate young man his brother."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "I wish Uncle Jack would allow that unfortunate young man, his brother, to come down here sometimes. We might have a good influence over him, Miss Prism. I am sure you certainly would. You know German, and geology, and things of that kind influence a man very much. [Cecily begins to write in her diary.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "MISS PRISM"
      },
      "content": [
        {
          "type": "text",
          "text": "[Shaking her head.] I do not think that even I could produce any effect on a character that according to his own brother's admission is irretrievably weak and vacillating. Indeed I am not sure that I would desire to reclaim him. I am not in favour of this modern mania for turning bad people into good people at a moment's notice. As a man sows so let him reap. You must put away your diary, Cecily. I really don't see why you should keep a diary at all."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "I keep a diary in order to enter the wonderful secrets of my life. If I didn't write them down, I should probably forget all about them."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "MISS PRISM"
      },
      "content": [
        {
          "type": "text",
          "text": "Memory, my dear Cecily, is the diary that we all carry about with us."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Yes, but it usually chronicles the things that have never happened, and couldn't possibly have happened. I believe that Memory is responsible for nearly all the three-volume novels that Mudie sends us."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "MISS PRISM"
      },
      "content": [
        {
          "type": "text",
          "text": "Do not speak slightingly of the three-volume novel, Cecily. I wrote one myself in earlier days."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Did you really, Miss Prism? How wonderfully clever you are! I hope it did not end happily? I don't like novels that end happily. They depress me so much."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "MISS PRISM"
      },
      "content": [
        {
          "type": "text",
          "text": "The good ended happily, and the bad unhappily. That is what Fiction means."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "I suppose so. But it seems very unfair. And was your novel ever published?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "MISS PRISM"
      },
      "content": [
        {
          "type": "text",
          "text": "Alas! no. The manuscript unfortunately was abandoned. [Cecily starts.] I use the word in the sense of lost or mislaid. To your work, child, these speculations are profitless."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "[Smiling.] But I see dear Dr. Chasuble coming up through the garden."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "MISS PRISM"
      },
      "content": [
        {
          "type": "text",
          "text": "[Rising and advancing.] Dr. Chasuble! This is indeed a pleasure."
        }
      ]
    },
    {
      "type": "action",
      "content": [
        {
          "type": "text",
          "text": "[Enter Canon Chasuble.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CHASUBLE"
      },
      "content": [
        {
          "type": "text",
          "text": "And how are we this morning? Miss Prism, you are, I trust, well?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Miss Prism has just been complaining of a slight headache. I think it would do her so much good to have a short stroll with you in the Park, Dr. Chasuble."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "MISS PRISM"
      },
      "content": [
        {
          "type": "text",
          "text": "Cecily, I have not mentioned anything about a headache."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "No, dear Miss Prism, I know that, but I felt instinctively that you had a headache. Indeed I was thinking about that, and not about my German lesson, when the Rector came in."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CHASUBLE"
      },
      "content": [
        {
          "type": "text",
          "text": "I hope, Cecily, you are not inattentive."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Oh, I am afraid I am."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CHASUBLE"
      },
      "content": [
        {
          "type": "text",
          "text": "That is strange. Were I fortunate enough to be Miss Prism's pupil, I would hang upon her lips. [Miss Prism glares.] I spoke metaphorically.—My metaphor was drawn from bees. Ahem! Mr. Worthing, I suppose, has not returned from town yet?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "MISS PRISM"
      },
      "content": [
        {
          "type": "text",
          "text": "We do not expect him till Monday afternoon."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CHASUBLE"
      },
      "content": [
        {
          "type": "text",
          "text": "Ah yes, he usually likes to spend his Sunday in London. He is not one of those whose sole aim is enjoyment, as, by all accounts, that unfortunate young man his brother seems to be. But I must not disturb Egeria and her pupil any longer."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "MISS PRISM"
      },
      "content": [
        {
          "type": "text",
          "text": "Egeria? My name is Lætitia, Doctor."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CHASUBLE"
      },
      "content": [
        {
          "type": "text",
          "text": "[Bowing.] A classical allusion merely, drawn from the Pagan authors. I shall see you both no doubt at Evensong?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "MISS PRISM"
      },
      "content": [
        {
          "type": "text",
          "text": "I think, dear Doctor, I will have a stroll with you. I find I have a headache after all, and a walk might do it good."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CHASUBLE"
      },
      "content": [
        {
          "type": "text",
          "text": "With pleasure, Miss Prism, with pleasure. We might go as far as the schools and back."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "MISS PRISM"
      },
      "content": [
        {
          "type": "text",
          "text": "That would be delightful. Cecily, you will read your Political Economy in my absence. The chapter on the Fall of the Rupee you may omit. It is somewhat too sensational. Even these metallic problems have their melodramatic side."
        }
      ]
    },
    {
      "type": "action",
      "content": [
        {
          "type": "text",
          "text": "[Goes down the garden with Dr. Chasuble.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "[Picks up books and throws them back on table.] Horrid Political Economy! Horrid Geography! Horrid, horrid German!"
        }
      ]
    },
    {
      "type": "action",
      "content": [
        {
          "type": "text",
          "text": "[Enter Merriman with a card on a salver.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "MERRIMAN"
      },
      "content": [
        {
          "type": "text",
          "text": "Mr. Ernest Worthing has just driven over from the station. He has brought his luggage with him."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "[Takes the card and reads it.] 'Mr. Ernest Worthing, B. 4, The Albany, W.' Uncle Jack's brother! Did you tell him Mr. Worthing was in town?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "MERRIMAN"
      },
      "content": [
        {
          "type": "text",
          "text": "Yes, Miss. He seemed very much disappointed. I mentioned that you and Miss Prism were in the garden. He said he was anxious to speak to you privately for a moment."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Ask Mr. Ernest Worthing to come here. I suppose you had better talk to the housekeeper about a room for him."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "MERRIMAN"
      },
      "content": [
        {
          "type": "text",
          "text": "Yes, Miss."
        }
      ]
    },
    {
      "type": "action",
      "content": [
        {
          "type": "text",
          "text": "[Merriman goes off.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "I have never met any really wicked person before. I feel rather frightened. I am so afraid he will look just like every one else."
        }
      ]
    },
    {
      "type": "action",
      "content": [
        {
          "type": "text",
          "text": "[Enter Algernon, very gay and debonnair.] He does!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "[Raising his hat.] You are my little cousin Cecily, I'm sure."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "You are under some strange mistake. I am not little. In fact, I believe I am more than usually tall for my age. [Algernon is rather taken aback.] But I am your cousin Cecily. You, I see from your card, are Uncle Jack's brother, my cousin Ernest, my wicked cousin Ernest."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Oh! I am not really wicked at all, cousin Cecily. You mustn't think that I am wicked."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "If you are not, then you have certainly been deceiving us all in a very inexcusable manner. I hope you have not been leading a double life, pretending to be wicked and being really good all the time. That would be hypocrisy."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "[Looks at her in amazement.] Oh! Of course I have been rather reckless."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "I am glad to hear it."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "In fact, now you mention the subject, I have been very bad in my own small way."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "I don't think you should be so proud of that, though I am sure it must have been very pleasant."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "It is much pleasanter being here with you."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "I can't understand how you are here at all. Uncle Jack won't be back till Monday afternoon."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "That is a great disappointment. I am obliged to go up by the first train on Monday morning. I have a business appointment that I am anxious . . . to miss?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Couldn't you miss it anywhere but in London?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "No: the appointment is in London."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Well, I know, of course, how important it is not to keep a business engagement, if one wants to retain any sense of the beauty of life, but still I think you had better wait till Uncle Jack arrives. I know he wants to speak to you about your emigrating."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "About my what?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Your emigrating. He has gone up to buy your outfit."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "I certainly wouldn't let Jack buy my outfit. He has no taste in neckties at all."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "I don't think you will require neckties. Uncle Jack is sending you to Australia."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Australia! I'd sooner die."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Well, he said at dinner on Wednesday night, that you would have to choose between this world, the next world, and Australia."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Oh, well! The accounts I have received of Australia and the next world, are not particularly encouraging. This world is good enough for me, cousin Cecily."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Yes, but are you good enough for it?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "I'm afraid I'm not that. That is why I want you to reform me. You might make that your mission, if you don't mind, cousin Cecily."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "I'm afraid I've no time, this afternoon."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Well, would you mind my reforming myself this afternoon?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "It is rather Quixotic of you. But I think you should try."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "I will. I feel better already."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "You are looking a little worse."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "That is because I am hungry."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "How thoughtless of me. I should have remembered that when one is going to lead an entirely new life, one requires regular and wholesome meals. Won't you come in?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Thank you. Might I have a buttonhole first? I never have any appetite unless I have a buttonhole first."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "A Marechal Niel? [Picks up scissors.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "No, I'd sooner have a pink rose."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Why? [Cuts a flower.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Because you are like a pink rose, Cousin Cecily."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "I don't think it can be right for you to talk to me like that. Miss Prism never says such things to me."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Then Miss Prism is a short-sighted old lady. [Cecily puts the rose in his buttonhole.] You are the prettiest girl I ever saw."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Miss Prism says that all good looks are a snare."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "They are a snare that every sensible man would like to be caught in."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Oh, I don't think I would care to catch a sensible man. I shouldn't know what to talk to him about."
        }
      ]
    },
    {
      "type": "action",
      "content": [
        {
          "type": "text",
          "text": "[They pass into the house. Miss Prism and Dr. Chasuble\r return.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "MISS PRISM"
      },
      "content": [
        {
          "type": "text",
          "text": "You are too much alone, dear Dr. Chasuble. You should get married. A misanthrope I can understand—a womanthrope, never!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CHASUBLE"
      },
      "content": [
        {
          "type": "text",
          "text": "[With a scholar's shudder.] Believe me, I do not deserve so neologistic a phrase. The precept as well as the practice of the Primitive Church was distinctly against matrimony."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "MISS PRISM"
      },
      "content": [
        {
          "type": "text",
          "text": "[Sententiously.] That is obviously the reason why the Primitive Church has not lasted up to the present day. And you do not seem to realise, dear Doctor, that by persistently remaining single, a man converts himself into a permanent public temptation. Men should be more careful; this very celibacy leads weaker vessels astray."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CHASUBLE"
      },
      "content": [
        {
          "type": "text",
          "text": "But is a man not equally attractive when married?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "MISS PRISM"
      },
      "content": [
        {
          "type": "text",
          "text": "No married man is ever attractive except to his wife."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CHASUBLE"
      },
      "content": [
        {
          "type": "text",
          "text": "And often, I've been told, not even to her."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "MISS PRISM"
      },
      "content": [
        {
          "type": "text",
          "text": "That depends on the intellectual sympathies of the woman. Maturity can always be depended on. Ripeness can be trusted. Young women are green. [Dr. Chasuble starts.] I spoke horticulturally. My metaphor was drawn from fruits. But where is Cecily?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CHASUBLE"
      },
      "content": [
        {
          "type": "text",
          "text": "Perhaps she followed us to the schools."
        }
      ]
    },
    {
      "type": "action",
      "content": [
        {
          "type": "text",
          "text": "[Enter Jack slowly from the back of the garden. He is dressed in the\r deepest mourning, with crape hatband and black gloves.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "MISS PRISM"
      },
      "content": [
        {
          "type": "text",
          "text": "Mr. Worthing!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CHASUBLE"
      },
      "content": [
        {
          "type": "text",
          "text": "Mr. Worthing?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "MISS PRISM"
      },
      "content": [
        {
          "type": "text",
          "text": "This is indeed a surprise. We did not look for you till Monday afternoon."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "[Shakes Miss Prism's hand in a tragic manner.] I have returned sooner than I expected. Dr. Chasuble, I hope you are well?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CHASUBLE"
      },
      "content": [
        {
          "type": "text",
          "text": "Dear Mr. Worthing, I trust this garb of woe does not betoken some terrible calamity?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "My brother."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "MISS PRISM"
      },
      "content": [
        {
          "type": "text",
          "text": "More shameful debts and extravagance?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CHASUBLE"
      },
      "content": [
        {
          "type": "text",
          "text": "Still leading his life of pleasure?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "[Shaking his head.] Dead!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CHASUBLE"
      },
      "content": [
        {
          "type": "text",
          "text": "Your brother Ernest dead?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Quite dead."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "MISS PRISM"
      },
      "content": [
        {
          "type": "text",
          "text": "What a lesson for him! I trust he will profit by it."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CHASUBLE"
      },
      "content": [
        {
          "type": "text",
          "text": "Mr. Worthing, I offer you my sincere condolence. You have at least the consolation of knowing that you were always the most generous and forgiving of brothers."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Poor Ernest! He had many faults, but it is a sad, sad blow."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CHASUBLE"
      },
      "content": [
        {
          "type": "text",
          "text": "Very sad indeed. Were you with him at the end?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "No. He died abroad; in Paris, in fact. I had a telegram last night from the manager of the Grand Hotel."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CHASUBLE"
      },
      "content": [
        {
          "type": "text",
          "text": "Was the cause of death mentioned?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "A severe chill, it seems."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "MISS PRISM"
      },
      "content": [
        {
          "type": "text",
          "text": "As a man sows, so shall he reap."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CHASUBLE"
      },
      "content": [
        {
          "type": "text",
          "text": "[Raising his hand.] Charity, dear Miss Prism, charity! None of us are perfect. I myself am peculiarly susceptible to draughts. Will the interment take place here?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "No. He seems to have expressed a desire to be buried in Paris."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CHASUBLE"
      },
      "content": [
        {
          "type": "text",
          "text": "In Paris! [Shakes his head.] I fear that hardly points to any very serious state of mind at the last. You would no doubt wish me to make some slight allusion to this tragic domestic affliction next Sunday. [Jack presses his hand convulsively.] My sermon on the meaning of the manna in the wilderness can be adapted to almost any occasion, joyful, or, as in the present case, distressing. [All sigh.] I have preached it at harvest celebrations, christenings, confirmations, on days of humiliation and festal days. The last time I delivered it was in the Cathedral, as a charity sermon on behalf of the Society for the Prevention of Discontent among the Upper Orders. The Bishop, who was present, was much struck by some of the analogies I drew."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Ah! that reminds me, you mentioned christenings I think, Dr. Chasuble? I suppose you know how to christen all right? [Dr. Chasuble looks astounded.] I mean, of course, you are continually christening, aren't you?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "MISS PRISM"
      },
      "content": [
        {
          "type": "text",
          "text": "It is, I regret to say, one of the Rector's most constant duties in this parish. I have often spoken to the poorer classes on the subject. But they don't seem to know what thrift is."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CHASUBLE"
      },
      "content": [
        {
          "type": "text",
          "text": "But is there any particular infant in whom you are interested, Mr. Worthing? Your brother was, I believe, unmarried, was he not?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Oh yes."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "MISS PRISM"
      },
      "content": [
        {
          "type": "text",
          "text": "[Bitterly.] People who live entirely for pleasure usually are."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "But it is not for any child, dear Doctor. I am very fond of children. No! the fact is, I would like to be christened myself, this afternoon, if you have nothing better to do."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CHASUBLE"
      },
      "content": [
        {
          "type": "text",
          "text": "But surely, Mr. Worthing, you have been christened already?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "I don't remember anything about it."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CHASUBLE"
      },
      "content": [
        {
          "type": "text",
          "text": "But have you any grave doubts on the subject?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "I certainly intend to have. Of course I don't know if the thing would bother you in any way, or if you think I am a little too old now."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CHASUBLE"
      },
      "content": [
        {
          "type": "text",
          "text": "Not at all. The sprinkling, and, indeed, the immersion of adults is a perfectly canonical practice."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Immersion!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CHASUBLE"
      },
      "content": [
        {
          "type": "text",
          "text": "You need have no apprehensions. Sprinkling is all that is necessary, or indeed I think advisable. Our weather is so changeable. At what hour would you wish the ceremony performed?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Oh, I might trot round about five if that would suit you."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CHASUBLE"
      },
      "content": [
        {
          "type": "text",
          "text": "Perfectly, perfectly! In fact I have two similar ceremonies to perform at that time. A case of twins that occurred recently in one of the outlying cottages on your own estate. Poor Jenkins the carter, a most hard-working man."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Oh! I don't see much fun in being christened along with other babies. It would be childish. Would half-past five do?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CHASUBLE"
      },
      "content": [
        {
          "type": "text",
          "text": "Admirably! Admirably! [Takes out watch.] And now, dear Mr. Worthing, I will not intrude any longer into a house of sorrow. I would merely beg you not to be too much bowed down by grief. What seem to us bitter trials are often blessings in disguise."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "MISS PRISM"
      },
      "content": [
        {
          "type": "text",
          "text": "This seems to me a blessing of an extremely obvious kind."
        }
      ]
    },
    {
      "type": "action",
      "content": [
        {
          "type": "text",
          "text": "[Enter Cecily from the house.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Uncle Jack! Oh, I am pleased to see you back. But what horrid clothes you have got on! Do go and change them."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "MISS PRISM"
      },
      "content": [
        {
          "type": "text",
          "text": "Cecily!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CHASUBLE"
      },
      "content": [
        {
          "type": "text",
          "text": "My child! my child! [Cecily goes towards Jack; he kisses her brow in a melancholy manner.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "What is the matter, Uncle Jack? Do look happy! You look as if you had toothache, and I have got such a surprise for you. Who do you think is in the dining-room? Your brother!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Who?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Your brother Ernest. He arrived about half an hour ago."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "What nonsense! I haven't got a brother."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Oh, don't say that. However badly he may have behaved to you in the past he is still your brother. You couldn't be so heartless as to disown him. I'll tell him to come out. And you will shake hands with him, won't you, Uncle Jack? [Runs back into the house.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CHASUBLE"
      },
      "content": [
        {
          "type": "text",
          "text": "These are very joyful tidings."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "MISS PRISM"
      },
      "content": [
        {
          "type": "text",
          "text": "After we had all been resigned to his loss, his sudden return seems to me peculiarly distressing."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "My brother is in the dining-room? I don't know what it all means. I think it is perfectly absurd."
        }
      ]
    },
    {
      "type": "action",
      "content": [
        {
          "type": "text",
          "text": "[Enter Algernon and Cecily hand in hand. They come slowly up\r to Jack.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Good heavens! [Motions Algernon away.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Brother John, I have come down from town to tell you that I am very sorry for all the trouble I have given you, and that I intend to lead a better life in the future. [Jack glares at him and does not take his hand.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Uncle Jack, you are not going to refuse your own brother's hand?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Nothing will induce me to take his hand. I think his coming down here disgraceful. He knows perfectly well why."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Uncle Jack, do be nice. There is some good in every one. Ernest has just been telling me about his poor invalid friend Mr. Bunbury whom he goes to visit so often. And surely there must be much good in one who is kind to an invalid, and leaves the pleasures of London to sit by a bed of pain."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Oh! he has been talking about Bunbury, has he?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Yes, he has told me all about poor Mr. Bunbury, and his terrible state of health."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Bunbury! Well, I won't have him talk to you about Bunbury or about anything else. It is enough to drive one perfectly frantic."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Of course I admit that the faults were all on my side. But I must say that I think that Brother John's coldness to me is peculiarly painful. I expected a more enthusiastic welcome, especially considering it is the first time I have come here."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Uncle Jack, if you don't shake hands with Ernest I will never forgive you."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Never forgive me?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Never, never, never!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Well, this is the last time I shall ever do it. [Shakes with Algernon and glares.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CHASUBLE"
      },
      "content": [
        {
          "type": "text",
          "text": "It's pleasant, is it not, to see so perfect a reconciliation? I think we might leave the two brothers together."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "MISS PRISM"
      },
      "content": [
        {
          "type": "text",
          "text": "Cecily, you will come with us."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Certainly, Miss Prism. My little task of reconciliation is over."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CHASUBLE"
      },
      "content": [
        {
          "type": "text",
          "text": "You have done a beautiful action to-day, dear child."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "MISS PRISM"
      },
      "content": [
        {
          "type": "text",
          "text": "We must not be premature in our judgments."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "I feel very happy. [They all go off except Jack and Algernon.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "You young scoundrel, Algy, you must get out of this place as soon as possible. I don't allow any Bunburying here."
        }
      ]
    },
    {
      "type": "action",
      "content": [
        {
          "type": "text",
          "text": "[Enter Merriman.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "MERRIMAN"
      },
      "content": [
        {
          "type": "text",
          "text": "I have put Mr. Ernest's things in the room next to yours, sir. I suppose that is all right?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "What?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "MERRIMAN"
      },
      "content": [
        {
          "type": "text",
          "text": "Mr. Ernest's luggage, sir. I have unpacked it and put it in the room next to your own."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "His luggage?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "MERRIMAN"
      },
      "content": [
        {
          "type": "text",
          "text": "Yes, sir. Three portmanteaus, a dressing-case, two hat-boxes, and a large luncheon-basket."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "I am afraid I can't stay more than a week this time."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Merriman, order the dog-cart at once. Mr. Ernest has been suddenly called back to town."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "MERRIMAN"
      },
      "content": [
        {
          "type": "text",
          "text": "Yes, sir. [Goes back into the house.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "What a fearful liar you are, Jack. I have not been called back to town at all."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Yes, you have."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "I haven't heard any one call me."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Your duty as a gentleman calls you back."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "My duty as a gentleman has never interfered with my pleasures in the smallest degree."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "I can quite understand that."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Well, Cecily is a darling."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "You are not to talk of Miss Cardew like that. I don't like it."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Well, I don't like your clothes. You look perfectly ridiculous in them. Why on earth don't you go up and change? It is perfectly childish to be in deep mourning for a man who is actually staying for a whole week with you in your house as a guest. I call it grotesque."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "You are certainly not staying with me for a whole week as a guest or anything else. You have got to leave . . . by the four-five train."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "I certainly won't leave you so long as you are in mourning. It would be most unfriendly. If I were in mourning you would stay with me, I suppose. I should think it very unkind if you didn't."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Well, will you go if I change my clothes?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Yes, if you are not too long. I never saw anybody take so long to dress, and with such little result."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Well, at any rate, that is better than being always over-dressed as you are."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "If I am occasionally a little over-dressed, I make up for it by being always immensely over-educated."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Your vanity is ridiculous, your conduct an outrage, and your presence in my garden utterly absurd. However, you have got to catch the four-five, and I hope you will have a pleasant journey back to town. This Bunburying, as you call it, has not been a great success for you."
        }
      ]
    },
    {
      "type": "action",
      "content": [
        {
          "type": "text",
          "text": "[Goes into the house.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "I think it has been a great success. I'm in love with Cecily, and that is everything."
        }
      ]
    },
    {
      "type": "action",
      "content": [
        {
          "type": "text",
          "text": "[Enter Cecily at the back of the garden. She picks up the can and\r begins to water the flowers.] But I must see her before I go, and make arrangements for another Bunbury. Ah, there she is."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Oh, I merely came back to water the roses. I thought you were with Uncle Jack."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "He's gone to order the dog-cart for me."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Oh, is he going to take you for a nice drive?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "He's going to send me away."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Then have we got to part?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "I am afraid so. It's a very painful parting."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "It is always painful to part from people whom one has known for a very brief space of time. The absence of old friends one can endure with equanimity. But even a momentary separation from anyone to whom one has just been introduced is almost unbearable."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Thank you."
        }
      ]
    },
    {
      "type": "action",
      "content": [
        {
          "type": "text",
          "text": "[Enter Merriman.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "MERRIMAN"
      },
      "content": [
        {
          "type": "text",
          "text": "The dog-cart is at the door, sir. [Algernon looks appealingly at Cecily.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "It can wait, Merriman for . . . five minutes."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "MERRIMAN"
      },
      "content": [
        {
          "type": "text",
          "text": "Yes, Miss. [Exit Merriman.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "I hope, Cecily, I shall not offend you if I state quite frankly and openly that you seem to me to be in every way the visible personification of absolute perfection."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "I think your frankness does you great credit, Ernest. If you will allow me, I will copy your remarks into my diary. [Goes over to table and begins writing in diary.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Do you really keep a diary? I'd give anything to look at it. May I?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Oh no. [Puts her hand over it.] You see, it is simply a very young girl's record of her own thoughts and impressions, and consequently meant for publication. When it appears in volume form I hope you will order a copy. But pray, Ernest, don't stop. I delight in taking down from dictation. I have reached 'absolute perfection'. You can go on. I am quite ready for more."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "[Somewhat taken aback.] Ahem! Ahem!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Oh, don't cough, Ernest. When one is dictating one should speak fluently and not cough. Besides, I don't know how to spell a cough. [Writes as Algernon speaks.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "[Speaking very rapidly.] Cecily, ever since I first looked upon your wonderful and incomparable beauty, I have dared to love you wildly, passionately, devotedly, hopelessly."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "I don't think that you should tell me that you love me wildly, passionately, devotedly, hopelessly. Hopelessly doesn't seem to make much sense, does it?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Cecily!"
        }
      ]
    },
    {
      "type": "action",
      "content": [
        {
          "type": "text",
          "text": "[Enter Merriman.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "MERRIMAN"
      },
      "content": [
        {
          "type": "text",
          "text": "The dog-cart is waiting, sir."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Tell it to come round next week, at the same hour."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "MERRIMAN"
      },
      "content": [
        {
          "type": "text",
          "text": "[Looks at Cecily, who makes no sign.] Yes, sir."
        }
      ]
    },
    {
      "type": "action",
      "content": [
        {
          "type": "text",
          "text": "[Merriman retires.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Uncle Jack would be very much annoyed if he knew you were staying on till next week, at the same hour."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Oh, I don't care about Jack. I don't care for anybody in the whole world but you. I love you, Cecily. You will marry me, won't you?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "You silly boy! Of course. Why, we have been engaged for the last three months."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "For the last three months?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Yes, it will be exactly three months on Thursday."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "But how did we become engaged?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Well, ever since dear Uncle Jack first confessed to us that he had a younger brother who was very wicked and bad, you of course have formed the chief topic of conversation between myself and Miss Prism. And of course a man who is much talked about is always very attractive. One feels there must be something in him, after all. I daresay it was foolish of me, but I fell in love with you, Ernest."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Darling! And when was the engagement actually settled?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "On the 14th of February last. Worn out by your entire ignorance of my existence, I determined to end the matter one way or the other, and after a long struggle with myself I accepted you under this dear old tree here. The next day I bought this little ring in your name, and this is the little bangle with the true lover's knot I promised you always to wear."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Did I give you this? It's very pretty, isn't it?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Yes, you've wonderfully good taste, Ernest. It's the excuse I've always given for your leading such a bad life. And this is the box in which I keep all your dear letters. [Kneels at table, opens box, and produces letters tied up with blue ribbon.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "My letters! But, my own sweet Cecily, I have never written you any letters."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "You need hardly remind me of that, Ernest. I remember only too well that I was forced to write your letters for you. I wrote always three times a week, and sometimes oftener."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Oh, do let me read them, Cecily?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Oh, I couldn't possibly. They would make you far too conceited. [Replaces box.] The three you wrote me after I had broken off the engagement are so beautiful, and so badly spelled, that even now I can hardly read them without crying a little."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "But was our engagement ever broken off?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Of course it was. On the 22nd of last March. You can see the entry if you like. [Shows diary.] 'To-day I broke off my engagement with Ernest. I feel it is better to do so. The weather still continues charming.'"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "But why on earth did you break it off? What had I done? I had done nothing at all. Cecily, I am very much hurt indeed to hear you broke it off. Particularly when the weather was so charming."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "It would hardly have been a really serious engagement if it hadn't been broken off at least once. But I forgave you before the week was out."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "[Crossing to her, and kneeling.] What a perfect angel you are, Cecily."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "You dear romantic boy. [He kisses her, she puts her fingers through his hair.] I hope your hair curls naturally, does it?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Yes, darling, with a little help from others."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "I am so glad."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "You'll never break off our engagement again, Cecily?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "I don't think I could break it off now that I have actually met you. Besides, of course, there is the question of your name."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Yes, of course. [Nervously.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "You must not laugh at me, darling, but it had always been a girlish dream of mine to love some one whose name was Ernest. [Algernon rises, Cecily also.] There is something in that name that seems to inspire absolute confidence. I pity any poor married woman whose husband is not called Ernest."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "But, my dear child, do you mean to say you could not love me if I had some other name?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "But what name?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Oh, any name you like—Algernon—for instance . . ."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "But I don't like the name of Algernon."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Well, my own dear, sweet, loving little darling, I really can't see why you should object to the name of Algernon. It is not at all a bad name. In fact, it is rather an aristocratic name. Half of the chaps who get into the Bankruptcy Court are called Algernon. But seriously, Cecily . . . [Moving to her] . . . if my name was Algy, couldn't you love me?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "[Rising.] I might respect you, Ernest, I might admire your character, but I fear that I should not be able to give you my undivided attention."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Ahem! Cecily! [Picking up hat.] Your Rector here is, I suppose, thoroughly experienced in the practice of all the rites and ceremonials of the Church?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Oh, yes. Dr. Chasuble is a most learned man. He has never written a single book, so you can imagine how much he knows."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "I must see him at once on a most important christening—I mean on most important business."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Oh!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "I shan't be away more than half an hour."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Considering that we have been engaged since February the 14th, and that I only met you to-day for the first time, I think it is rather hard that you should leave me for so long a period as half an hour. Couldn't you make it twenty minutes?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "I'll be back in no time."
        }
      ]
    },
    {
      "type": "action",
      "content": [
        {
          "type": "text",
          "text": "[Kisses her and rushes down the garden.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "What an impetuous boy he is! I like his hair so much. I must enter his proposal in my diary."
        }
      ]
    },
    {
      "type": "action",
      "content": [
        {
          "type": "text",
          "text": "[Enter Merriman.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "MERRIMAN"
      },
      "content": [
        {
          "type": "text",
          "text": "A Miss Fairfax has just called to see Mr. Worthing. On very important business, Miss Fairfax states."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Isn't Mr. Worthing in his library?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "MERRIMAN"
      },
      "content": [
        {
          "type": "text",
          "text": "Mr. Worthing went over in the direction of the Rectory some time ago."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Pray ask the lady to come out here; Mr. Worthing is sure to be back soon. And you can bring tea."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "MERRIMAN"
      },
      "content": [
        {
          "type": "text",
          "text": "Yes, Miss. [Goes out.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Miss Fairfax! I suppose one of the many good elderly women who are associated with Uncle Jack in some of his philanthropic work in London. I don't quite like women who are interested in philanthropic work. I think it is so forward of them."
        }
      ]
    },
    {
      "type": "action",
      "content": [
        {
          "type": "text",
          "text": "[Enter Merriman.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "MERRIMAN"
      },
      "content": [
        {
          "type": "text",
          "text": "Miss Fairfax."
        }
      ]
    },
    {
      "type": "action",
      "content": [
        {
          "type": "text",
          "text": "[Enter Gwendolen.]"
        }
      ]
    },
    {
      "type": "action",
      "content": [
        {
          "type": "text",
          "text": "[Exit Merriman.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "[Advancing to meet her.] Pray let me introduce myself to you. My name is Cecily Cardew."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "Cecily Cardew? [Moving to her and shaking hands.] What a very sweet name! Something tells me that we are going to be great friends. I like you already more than I can say. My first impressions of people are never wrong."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "How nice of you to like me so much after we have known each other such a comparatively short time. Pray sit down."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "[Still standing up.] I may call you Cecily, may I not?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "With pleasure!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "And you will always call me Gwendolen, won't you?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "If you wish."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "Then that is all quite settled, is it not?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "I hope so. [A pause. They both sit down together.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "Perhaps this might be a favourable opportunity for my mentioning who I am. My father is Lord Bracknell. You have never heard of papa, I suppose?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "I don't think so."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "Outside the family circle, papa, I am glad to say, is entirely unknown. I think that is quite as it should be. The home seems to me to be the proper sphere for the man. And certainly once a man begins to neglect his domestic duties he becomes painfully effeminate, does he not? And I don't like that. It makes men so very attractive. Cecily, mamma, whose views on education are remarkably strict, has brought me up to be extremely short-sighted; it is part of her system; so do you mind my looking at you through my glasses?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Oh! not at all, Gwendolen. I am very fond of being looked at."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "[After examining Cecily carefully through a lorgnette.] You are here on a short visit, I suppose."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Oh no! I live here."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "[Severely.] Really? Your mother, no doubt, or some female relative of advanced years, resides here also?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Oh no! I have no mother, nor, in fact, any relations."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "Indeed?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "My dear guardian, with the assistance of Miss Prism, has the arduous task of looking after me."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "Your guardian?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Yes, I am Mr. Worthing's ward."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "Oh! It is strange he never mentioned to me that he had a ward. How secretive of him! He grows more interesting hourly. I am not sure, however, that the news inspires me with feelings of unmixed delight. [Rising and going to her.] I am very fond of you, Cecily; I have liked you ever since I met you! But I am bound to state that now that I know that you are Mr. Worthing's ward, I cannot help expressing a wish you were—well, just a little older than you seem to be—and not quite so very alluring in appearance. In fact, if I may speak candidly—"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Pray do! I think that whenever one has anything unpleasant to say, one should always be quite candid."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "Well, to speak with perfect candour, Cecily, I wish that you were fully forty-two, and more than usually plain for your age. Ernest has a strong upright nature. He is the very soul of truth and honour. Disloyalty would be as impossible to him as deception. But even men of the noblest possible moral character are extremely susceptible to the influence of the physical charms of others. Modern, no less than Ancient History, supplies us with many most painful examples of what I refer to. If it were not so, indeed, History would be quite unreadable."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "I beg your pardon, Gwendolen, did you say Ernest?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
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
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Oh, but it is not Mr. Ernest Worthing who is my guardian. It is his brother—his elder brother."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "[Sitting down again.] Ernest never mentioned to me that he had a brother."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "I am sorry to say they have not been on good terms for a long time."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "Ah! that accounts for it. And now that I think of it I have never heard any man mention his brother. The subject seems distasteful to most men. Cecily, you have lifted a load from my mind. I was growing almost anxious. It would have been terrible if any cloud had come across a friendship like ours, would it not? Of course you are quite, quite sure that it is not Mr. Ernest Worthing who is your guardian?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Quite sure. [A pause.] In fact, I am going to be his."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "[Inquiringly.] I beg your pardon?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "[Rather shy and confidingly.] Dearest Gwendolen, there is no reason why I should make a secret of it to you. Our little county newspaper is sure to chronicle the fact next week. Mr. Ernest Worthing and I are engaged to be married."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "[Quite politely, rising.] My darling Cecily, I think there must be some slight error. Mr. Ernest Worthing is engaged to me. The announcement will appear in the Morning Post on Saturday at the latest."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "[Very politely, rising.] I am afraid you must be under some misconception. Ernest proposed to me exactly ten minutes ago. [Shows diary.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "[Examines diary through her lorgnettte carefully.] It is certainly very curious, for he asked me to be his wife yesterday afternoon at 5.30. If you would care to verify the incident, pray do so. [Produces diary of her own.] I never travel without my diary. One should always have something sensational to read in the train. I am so sorry, dear Cecily, if it is any disappointment to you, but I am afraid I have the prior claim."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "It would distress me more than I can tell you, dear Gwendolen, if it caused you any mental or physical anguish, but I feel bound to point out that since Ernest proposed to you he clearly has changed his mind."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "[Meditatively.] If the poor fellow has been entrapped into any foolish promise I shall consider it my duty to rescue him at once, and with a firm hand."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "[Thoughtfully and sadly.] Whatever unfortunate entanglement my dear boy may have got into, I will never reproach him with it after we are married."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "Do you allude to me, Miss Cardew, as an entanglement? You are presumptuous. On an occasion of this kind it becomes more than a moral duty to speak one's mind. It becomes a pleasure."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Do you suggest, Miss Fairfax, that I entrapped Ernest into an engagement? How dare you? This is no time for wearing the shallow mask of manners. When I see a spade I call it a spade."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "[Satirically.] I am glad to say that I have never seen a spade. It is obvious that our social spheres have been widely different."
        }
      ]
    },
    {
      "type": "action",
      "content": [
        {
          "type": "text",
          "text": "[Enter Merriman, followed by the footman. He carries a salver, table\r cloth, and plate stand. Cecily is about to retort. The presence of the servants exercises a restraining influence, under which both girls chafe.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "MERRIMAN"
      },
      "content": [
        {
          "type": "text",
          "text": "Shall I lay tea here as usual, Miss?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "[Sternly, in a calm voice.] Yes, as usual. [Merriman begins to clear table and lay cloth. A long pause. Cecily and Gwendolen glare at each other.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "Are there many interesting walks in the vicinity, Miss Cardew?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Oh! yes! a great many. From the top of one of the hills quite close one can see five counties."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "Five counties! I don't think I should like that; I hate crowds."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "[Sweetly.] I suppose that is why you live in town? [Gwendolen bites her lip, and beats her foot nervously with her parasol.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "[Looking round.] Quite a well-kept garden this is, Miss Cardew."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "So glad you like it, Miss Fairfax."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "I had no idea there were any flowers in the country."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Oh, flowers are as common here, Miss Fairfax, as people are in London."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "Personally I cannot understand how anybody manages to exist in the country, if anybody who is anybody does. The country always bores me to death."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Ah! This is what the newspapers call agricultural depression, is it not? I believe the aristocracy are suffering very much from it just at present. It is almost an epidemic amongst them, I have been told. May I offer you some tea, Miss Fairfax?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "[With elaborate politeness.] Thank you. [Aside.] Detestable girl! But I require tea!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "[Sweetly.] Sugar?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "[Superciliously.] No, thank you. Sugar is not fashionable any more. [Cecily looks angrily at her, takes up the tongs and puts four lumps of sugar into the cup.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "[Severely.] Cake or bread and butter?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "[In a bored manner.] Bread and butter, please. Cake is rarely seen at the best houses nowadays."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "[Cuts a very large slice of cake, and puts it on the tray.] Hand that to Miss Fairfax."
        }
      ]
    },
    {
      "type": "action",
      "content": [
        {
          "type": "text",
          "text": "[Merriman does so, and goes out with footman. Gwendolen drinks\r the tea and makes a grimace. Puts down cup at once, reaches out her hand to the bread and butter, looks at it, and finds it is cake. Rises in indignation.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "You have filled my tea with lumps of sugar, and though I asked most distinctly for bread and butter, you have given me cake. I am known for the gentleness of my disposition, and the extraordinary sweetness of my nature, but I warn you, Miss Cardew, you may go too far."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "[Rising.] To save my poor, innocent, trusting boy from the machinations of any other girl there are no lengths to which I would not go."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "From the moment I saw you I distrusted you. I felt that you were false and deceitful. I am never deceived in such matters. My first impressions of people are invariably right."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "It seems to me, Miss Fairfax, that I am trespassing on your valuable time. No doubt you have many other calls of a similar character to make in the neighbourhood."
        }
      ]
    },
    {
      "type": "action",
      "content": [
        {
          "type": "text",
          "text": "[Enter Jack.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "[Catching sight of him.] Ernest! My own Ernest!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Gwendolen! Darling! [Offers to kiss her.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "[Draws back.] A moment! May I ask if you are engaged to be married to this young lady? [Points to Cecily.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "[Laughing.] To dear little Cecily! Of course not! What could have put such an idea into your pretty little head?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "Thank you. You may! [Offers her cheek.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "[Very sweetly.] I knew there must be some misunderstanding, Miss Fairfax. The gentleman whose arm is at present round your waist is my guardian, Mr. John Worthing."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "I beg your pardon?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "This is Uncle Jack."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "[Receding.] Jack! Oh!"
        }
      ]
    },
    {
      "type": "action",
      "content": [
        {
          "type": "text",
          "text": "[Enter Algernon.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Here is Ernest."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "[Goes straight over to Cecily without noticing any one else.] My own love! [Offers to kiss her.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "[Drawing back.] A moment, Ernest! May I ask you—are you engaged to be married to this young lady?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "[Looking round.] To what young lady? Good heavens! Gwendolen!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Yes! to good heavens, Gwendolen, I mean to Gwendolen."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "[Laughing.] Of course not! What could have put such an idea into your pretty little head?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Thank you. [Presenting her cheek to be kissed.] You may. [Algernon kisses her.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "I felt there was some slight error, Miss Cardew. The gentleman who is now embracing you is my cousin, Mr. Algernon Moncrieff."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "[Breaking away from Algernon.] Algernon Moncrieff! Oh! [The two girls move towards each other and put their arms round each other's waists as if for protection.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Are you called Algernon?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "I cannot deny it."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Oh!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "Is your name really John?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "[Standing rather proudly.] I could deny it if I liked. I could deny anything if I liked. But my name certainly is John. It has been John for years."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "[To Gwendolen.] A gross deception has been practised on both of us."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "My poor wounded Cecily!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "My sweet wronged Gwendolen!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "[Slowly and seriously.] You will call me sister, will you not? [They embrace. Jack and Algernon groan and walk up and down.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "[Rather brightly.] There is just one question I would like to be allowed to ask my guardian."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "An admirable idea! Mr. Worthing, there is just one question I would like to be permitted to put to you. Where is your brother Ernest? We are both engaged to be married to your brother Ernest, so it is a matter of some importance to us to know where your brother Ernest is at present."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "[Slowly and hesitatingly.] Gwendolen—Cecily—it is very painful for me to be forced to speak the truth. It is the first time in my life that I have ever been reduced to such a painful position, and I am really quite inexperienced in doing anything of the kind. However, I will tell you quite frankly that I have no brother Ernest. I have no brother at all. I never had a brother in my life, and I certainly have not the smallest intention of ever having one in the future."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "[Surprised.] No brother at all?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "[Cheerily.] None!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "[Severely.] Had you never a brother of any kind?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "[Pleasantly.] Never. Not even of any kind."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "I am afraid it is quite clear, Cecily, that neither of us is engaged to be married to any one."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "It is not a very pleasant position for a young girl suddenly to find herself in. Is it?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "Let us go into the house. They will hardly venture to come after us there."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "No, men are so cowardly, aren't they?"
        }
      ]
    },
    {
      "type": "action",
      "content": [
        {
          "type": "text",
          "text": "[They retire into the house with scornful looks.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "This ghastly state of things is what you call Bunburying, I suppose?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Yes, and a perfectly wonderful Bunbury it is. The most wonderful Bunbury I have ever had in my life."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Well, you've no right whatsoever to Bunbury here."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "That is absurd. One has a right to Bunbury anywhere one chooses. Every serious Bunburyist knows that."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Serious Bunburyist! Good heavens!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Well, one must be serious about something, if one wants to have any amusement in life. I happen to be serious about Bunburying. What on earth you are serious about I haven't got the remotest idea. About everything, I should fancy. You have such an absolutely trivial nature."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Well, the only small satisfaction I have in the whole of this wretched business is that your friend Bunbury is quite exploded. You won't be able to run down to the country quite so often as you used to do, dear Algy. And a very good thing too."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Your brother is a little off colour, isn't he, dear Jack? You won't be able to disappear to London quite so frequently as your wicked custom was. And not a bad thing either."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "As for your conduct towards Miss Cardew, I must say that your taking in a sweet, simple, innocent girl like that is quite inexcusable. To say nothing of the fact that she is my ward."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "I can see no possible defence at all for your deceiving a brilliant, clever, thoroughly experienced young lady like Miss Fairfax. To say nothing of the fact that she is my cousin."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "I wanted to be engaged to Gwendolen, that is all. I love her."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Well, I simply wanted to be engaged to Cecily. I adore her."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "There is certainly no chance of your marrying Miss Cardew."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "I don't think there is much likelihood, Jack, of you and Miss Fairfax being united."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Well, that is no business of yours."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "If it was my business, I wouldn't talk about it. [Begins to eat muffins.] It is very vulgar to talk about one's business. Only people like stock-brokers do that, and then merely at dinner parties."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "How can you sit there, calmly eating muffins when we are in this horrible trouble, I can't make out. You seem to me to be perfectly heartless."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Well, I can't eat muffins in an agitated manner. The butter would probably get on my cuffs. One should always eat muffins quite calmly. It is the only way to eat them."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "I say it's perfectly heartless your eating muffins at all, under the circumstances."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "When I am in trouble, eating is the only thing that consoles me. Indeed, when I am in really great trouble, as any one who knows me intimately will tell you, I refuse everything except food and drink. At the present moment I am eating muffins because I am unhappy. Besides, I am particularly fond of muffins. [Rising.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "[Rising.] Well, that is no reason why you should eat them all in that greedy way. [Takes muffins from Algernon.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "[Offering tea-cake.] I wish you would have tea-cake instead. I don't like tea-cake."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Good heavens! I suppose a man may eat his own muffins in his own garden."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "But you have just said it was perfectly heartless to eat muffins."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "I said it was perfectly heartless of you, under the circumstances. That is a very different thing."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "That may be. But the muffins are the same. [He seizes the muffin-dish from Jack.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Algy, I wish to goodness you would go."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "You can't possibly ask me to go without having some dinner. It's absurd. I never go without my dinner. No one ever does, except vegetarians and people like that. Besides I have just made arrangements with Dr. Chasuble to be christened at a quarter to six under the name of Ernest."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "My dear fellow, the sooner you give up that nonsense the better. I made arrangements this morning with Dr. Chasuble to be christened myself at 5.30, and I naturally will take the name of Ernest. Gwendolen would wish it. We can't both be christened Ernest. It's absurd. Besides, I have a perfect right to be christened if I like. There is no evidence at all that I have ever been christened by anybody. I should think it extremely probable I never was, and so does Dr. Chasuble. It is entirely different in your case. You have been christened already."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Yes, but I have not been christened for years."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Yes, but you have been christened. That is the important thing."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Quite so. So I know my constitution can stand it. If you are not quite sure about your ever having been christened, I must say I think it rather dangerous your venturing on it now. It might make you very unwell. You can hardly have forgotten that some one very closely connected with you was very nearly carried off this week in Paris by a severe chill."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Yes, but you said yourself that a severe chill was not hereditary."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "It usen't to be, I know—but I daresay it is now. Science is always making wonderful improvements in things."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "[Picking up the muffin-dish.] Oh, that is nonsense; you are always talking nonsense."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Jack, you are at the muffins again! I wish you wouldn't. There are only two left. [Takes them.] I told you I was particularly fond of muffins."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "But I hate tea-cake."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Why on earth then do you allow tea-cake to be served up for your guests? What ideas you have of hospitality!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Algernon! I have already told you to go. I don't want you here. Why don't you go!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "I haven't quite finished my tea yet! and there is still one muffin left. [Jack groans, and sinks into a chair. Algernon still continues eating.]"
        },
    {
      "type": "scene",
      "content": [
        {
          "type": "text",
          "text": "第三幕 - Woolton庄园的客厅 - 当天下午"
        }
      ]
    },
      ]
    },
    {
      "type": "action",
      "content": [
        {
          "type": "text",
          "text": "Morning-room at the Manor House."
        }
      ]
    },
    {
      "type": "action",
      "content": [
        {
          "type": "text",
          "text": "[Gwendolen and Cecily are at the window, looking out into the\r garden.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "The fact that they did not follow us at once into the house, as any one else would have done, seems to me to show that they have some sense of shame left."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "They have been eating muffins. That looks like repentance."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "[After a pause.] They don't seem to notice us at all. Couldn't you cough?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "But I haven't got a cough."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "They're looking at us. What effrontery!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "They're approaching. That's very forward of them."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "Let us preserve a dignified silence."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Certainly. It's the only thing to do now. [Enter Jack followed by Algernon. They whistle some dreadful popular air from a British Opera.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "This dignified silence seems to produce an unpleasant effect."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "A most distasteful one."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "But we will not be the first to speak."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Certainly not."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "Mr. Worthing, I have something very particular to ask you. Much depends on your reply."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Gwendolen, your common sense is invaluable. Mr. Moncrieff, kindly answer me the following question. Why did you pretend to be my guardian's brother?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "In order that I might have an opportunity of meeting you."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "[To Gwendolen.] That certainly seems a satisfactory explanation, does it not?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "Yes, dear, if you can believe him."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "I don't. But that does not affect the wonderful beauty of his answer."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "True. In matters of grave importance, style, not sincerity is the vital thing. Mr. Worthing, what explanation can you offer to me for pretending to have a brother? Was it in order that you might have an opportunity of coming up to town to see me as often as possible?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Can you doubt it, Miss Fairfax?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "I have the gravest doubts upon the subject. But I intend to crush them. This is not the moment for German scepticism. [Moving to Cecily.] Their explanations appear to be quite satisfactory, especially Mr. Worthing's. That seems to me to have the stamp of truth upon it."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "I am more than content with what Mr. Moncrieff said. His voice alone inspires one with absolute credulity."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "Then you think we should forgive them?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Yes. I mean no."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "True! I had forgotten. There are principles at stake that one cannot surrender. Which of us should tell them? The task is not a pleasant one."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Could we not both speak at the same time?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "An excellent idea! I nearly always speak at the same time as other people. Will you take the time from me?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Certainly. [Gwendolen beats time with uplifted finger.]"
        }
      ]
    },
    {
      "type": "action",
      "content": [
        {
          "type": "text",
          "text": "GWENDOLEN and CECILY [Speaking together.] Your Christian names are still an\r insuperable barrier. That is all!"
        }
      ]
    },
    {
      "type": "action",
      "content": [
        {
          "type": "text",
          "text": "JACK and ALGERNON [Speaking together.] Our Christian names! Is that all? But\r we are going to be christened this afternoon."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "[To Jack.] For my sake you are prepared to do this terrible thing?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "I am."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "[To Algernon.] To please me you are ready to face this fearful ordeal?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "I am!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "How absurd to talk of the equality of the sexes! Where questions of self-sacrifice are concerned, men are infinitely beyond us."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "We are. [Clasps hands with Algernon.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "They have moments of physical courage of which we women know absolutely nothing."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "[To Jack.] Darling!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "[To Cecily.] Darling! [They fall into each other's arms.]"
        }
      ]
    },
    {
      "type": "action",
      "content": [
        {
          "type": "text",
          "text": "[Enter Merriman. When he enters he coughs loudly, seeing the\r situation.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "MERRIMAN"
      },
      "content": [
        {
          "type": "text",
          "text": "Ahem! Ahem! Lady Bracknell!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Good heavens!"
        }
      ]
    },
    {
      "type": "action",
      "content": [
        {
          "type": "text",
          "text": "[Enter Lady Bracknell. The couples separate in alarm. Exit\r Merriman.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "Gwendolen! What does this mean?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "Merely that I am engaged to be married to Mr. Worthing, mamma."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "Come here. Sit down. Sit down immediately. Hesitation of any kind is a sign of mental decay in the young, of physical weakness in the old. [Turns to Jack.] Apprised, sir, of my daughter's sudden flight by her trusty maid, whose confidence I purchased by means of a small coin, I followed her at once by a luggage train. Her unhappy father is, I am glad to say, under the impression that she is attending a more than usually lengthy lecture by the University Extension Scheme on the Influence of a permanent income on Thought. I do not propose to undeceive him. Indeed I have never undeceived him on any question. I would consider it wrong. But of course, you will clearly understand that all communication between yourself and my daughter must cease immediately from this moment. On this point, as indeed on all points, I am firm."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "I am engaged to be married to Gwendolen, Lady Bracknell!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "You are nothing of the kind, sir. And now, as regards Algernon! . . . Algernon!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Yes, Aunt Augusta."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "May I ask if it is in this house that your invalid friend Mr. Bunbury resides?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "[Stammering.] Oh! No! Bunbury doesn't live here. Bunbury is somewhere else at present. In fact, Bunbury is dead."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "Dead! When did Mr. Bunbury die? His death must have been extremely sudden."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "[Airily.] Oh! I killed Bunbury this afternoon. I mean poor Bunbury died this afternoon."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "What did he die of?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Bunbury? Oh, he was quite exploded."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "Exploded! Was he the victim of a revolutionary outrage? I was not aware that Mr. Bunbury was interested in social legislation. If so, he is well punished for his morbidity."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "My dear Aunt Augusta, I mean he was found out! The doctors found out that Bunbury could not live, that is what I mean—so Bunbury died."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "He seems to have had great confidence in the opinion of his physicians. I am glad, however, that he made up his mind at the last to some definite course of action, and acted under proper medical advice. And now that we have finally got rid of this Mr. Bunbury, may I ask, Mr. Worthing, who is that young person whose hand my nephew Algernon is now holding in what seems to me a peculiarly unnecessary manner?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "That lady is Miss Cecily Cardew, my ward. [Lady Bracknell bows coldly to Cecily.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "I am engaged to be married to Cecily, Aunt Augusta."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "I beg your pardon?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Mr. Moncrieff and I are engaged to be married, Lady Bracknell."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "[With a shiver, crossing to the sofa and sitting down.] I do not know whether there is anything peculiarly exciting in the air of this particular part of Hertfordshire, but the number of engagements that go on seems to me considerably above the proper average that statistics have laid down for our guidance. I think some preliminary inquiry on my part would not be out of place. Mr. Worthing, is Miss Cardew at all connected with any of the larger railway stations in London? I merely desire information. Until yesterday I had no idea that there were any families or persons whose origin was a Terminus. [Jack looks perfectly furious, but restrains himself.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "[In a clear, cold voice.] Miss Cardew is the grand-daughter of the late Mr. Thomas Cardew of 149 Belgrave Square, S.W.; Gervase Park, Dorking, Surrey; and the Sporran, Fifeshire, N.B."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "That sounds not unsatisfactory. Three addresses always inspire confidence, even in tradesmen. But what proof have I of their authenticity?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "I have carefully preserved the Court Guides of the period. They are open to your inspection, Lady Bracknell."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "[Grimly.] I have known strange errors in that publication."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Miss Cardew's family solicitors are Messrs. Markby, Markby, and Markby."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "Markby, Markby, and Markby? A firm of the very highest position in their profession. Indeed I am told that one of the Mr. Markby's is occasionally to be seen at dinner parties. So far I am satisfied."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "[Very irritably.] How extremely kind of you, Lady Bracknell! I have also in my possession, you will be pleased to hear, certificates of Miss Cardew's birth, baptism, whooping cough, registration, vaccination, confirmation, and the measles; both the German and the English variety."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "Ah! A life crowded with incident, I see; though perhaps somewhat too exciting for a young girl. I am not myself in favour of premature experiences. [Rises, looks at her watch.] Gwendolen! the time approaches for our departure. We have not a moment to lose. As a matter of form, Mr. Worthing, I had better ask you if Miss Cardew has any little fortune?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Oh! about a hundred and thirty thousand pounds in the Funds. That is all. Goodbye, Lady Bracknell. So pleased to have seen you."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "[Sitting down again.] A moment, Mr. Worthing. A hundred and thirty thousand pounds! And in the Funds! Miss Cardew seems to me a most attractive young lady, now that I look at her. Few girls of the present day have any really solid qualities, any of the qualities that last, and improve with time. We live, I regret to say, in an age of surfaces. [To Cecily.] Come over here, dear. [Cecily goes across.] Pretty child! your dress is sadly simple, and your hair seems almost as Nature might have left it. But we can soon alter all that. A thoroughly experienced French maid produces a really marvellous result in a very brief space of time. I remember recommending one to young Lady Lancing, and after three months her own husband did not know her."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "And after six months nobody knew her."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "[Glares at Jack for a few moments. Then bends, with a practised smile, to Cecily.] Kindly turn round, sweet child. [Cecily turns completely round.] No, the side view is what I want. [Cecily presents her profile.] Yes, quite as I expected. There are distinct social possibilities in your profile. The two weak points in our age are its want of principle and its want of profile. The chin a little higher, dear. Style largely depends on the way the chin is worn. They are worn very high, just at present. Algernon!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Yes, Aunt Augusta!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "There are distinct social possibilities in Miss Cardew's profile."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Cecily is the sweetest, dearest, prettiest girl in the whole world. And I don't care twopence about social possibilities."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "Never speak disrespectfully of Society, Algernon. Only people who can't get into it do that. [To Cecily.] Dear child, of course you know that Algernon has nothing but his debts to depend upon. But I do not approve of mercenary marriages. When I married Lord Bracknell I had no fortune of any kind. But I never dreamed for a moment of allowing that to stand in my way. Well, I suppose I must give my consent."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Thank you, Aunt Augusta."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "Cecily, you may kiss me!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "[Kisses her.] Thank you, Lady Bracknell."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "You may also address me as Aunt Augusta for the future."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Thank you, Aunt Augusta."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "The marriage, I think, had better take place quite soon."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Thank you, Aunt Augusta."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Thank you, Aunt Augusta."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "To speak frankly, I am not in favour of long engagements. They give people the opportunity of finding out each other's character before marriage, which I think is never advisable."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "I beg your pardon for interrupting you, Lady Bracknell, but this engagement is quite out of the question. I am Miss Cardew's guardian, and she cannot marry without my consent until she comes of age. That consent I absolutely decline to give."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "Upon what grounds may I ask? Algernon is an extremely, I may almost say an ostentatiously, eligible young man. He has nothing, but he looks everything. What more can one desire?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "It pains me very much to have to speak frankly to you, Lady Bracknell, about your nephew, but the fact is that I do not approve at all of his moral character. I suspect him of being untruthful. [Algernon and Cecily look at him in indignant amazement.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "Untruthful! My nephew Algernon? Impossible! He is an Oxonian."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "I fear there can be no possible doubt about the matter. This afternoon during my temporary absence in London on an important question of romance, he obtained admission to my house by means of the false pretence of being my brother. Under an assumed name he drank, I've just been informed by my butler, an entire pint bottle of my Perrier-Jouet, Brut, '89; wine I was specially reserving for myself. Continuing his disgraceful deception, he succeeded in the course of the afternoon in alienating the affections of my only ward. He subsequently stayed to tea, and devoured every single muffin. And what makes his conduct all the more heartless is, that he was perfectly well aware from the first that I have no brother, that I never had a brother, and that I don't intend to have a brother, not even of any kind. I distinctly told him so myself yesterday afternoon."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "Ahem! Mr. Worthing, after careful consideration I have decided entirely to overlook my nephew's conduct to you."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "That is very generous of you, Lady Bracknell. My own decision, however, is unalterable. I decline to give my consent."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "[To Cecily.] Come here, sweet child. [Cecily goes over.] How old are you, dear?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Well, I am really only eighteen, but I always admit to twenty when I go to evening parties."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "You are perfectly right in making some slight alteration. Indeed, no woman should ever be quite accurate about her age. It looks so calculating . . . [In a meditative manner.] Eighteen, but admitting to twenty at evening parties. Well, it will not be very long before you are of age and free from the restraints of tutelage. So I don't think your guardian's consent is, after all, a matter of any importance."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Pray excuse me, Lady Bracknell, for interrupting you again, but it is only fair to tell you that according to the terms of her grandfather's will Miss Cardew does not come legally of age till she is thirty-five."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "That does not seem to me to be a grave objection. Thirty-five is a very attractive age. London society is full of women of the very highest birth who have, of their own free choice, remained thirty-five for years. Lady Dumbleton is an instance in point. To my own knowledge she has been thirty-five ever since she arrived at the age of forty, which was many years ago now. I see no reason why our dear Cecily should not be even still more attractive at the age you mention than she is at present. There will be a large accumulation of property."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Algy, could you wait for me till I was thirty-five?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Of course I could, Cecily. You know I could."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Yes, I felt it instinctively, but I couldn't wait all that time. I hate waiting even five minutes for anybody. It always makes me rather cross. I am not punctual myself, I know, but I do like punctuality in others, and waiting, even to be married, is quite out of the question."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Then what is to be done, Cecily?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "I don't know, Mr. Moncrieff."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "My dear Mr. Worthing, as Miss Cardew states positively that she cannot wait till she is thirty-five—a remark which I am bound to say seems to me to show a somewhat impatient nature—I would beg of you to reconsider your decision."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "But my dear Lady Bracknell, the matter is entirely in your own hands. The moment you consent to my marriage with Gwendolen, I will most gladly allow your nephew to form an alliance with my ward."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "[Rising and drawing herself up.] You must be quite aware that what you propose is out of the question."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Then a passionate celibacy is all that any of us can look forward to."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "That is not the destiny I propose for Gwendolen. Algernon, of course, can choose for himself. [Pulls out her watch.] Come, dear, [Gwendolen rises] we have already missed five, if not six, trains. To miss any more might expose us to comment on the platform."
        }
      ]
    },
    {
      "type": "action",
      "content": [
        {
          "type": "text",
          "text": "[Enter Dr. Chasuble.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CHASUBLE"
      },
      "content": [
        {
          "type": "text",
          "text": "Everything is quite ready for the christenings."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "The christenings, sir! Is not that somewhat premature?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CHASUBLE"
      },
      "content": [
        {
          "type": "text",
          "text": "[Looking rather puzzled, and pointing to Jack and Algernon.] Both these gentlemen have expressed a desire for immediate baptism."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "At their age? The idea is grotesque and irreligious! Algernon, I forbid you to be baptized. I will not hear of such excesses. Lord Bracknell would be highly displeased if he learned that that was the way in which you wasted your time and money."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CHASUBLE"
      },
      "content": [
        {
          "type": "text",
          "text": "Am I to understand then that there are to be no christenings at all this afternoon?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "I don't think that, as things are now, it would be of much practical value to either of us, Dr. Chasuble."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CHASUBLE"
      },
      "content": [
        {
          "type": "text",
          "text": "I am grieved to hear such sentiments from you, Mr. Worthing. They savour of the heretical views of the Anabaptists, views that I have completely refuted in four of my unpublished sermons. However, as your present mood seems to be one peculiarly secular, I will return to the church at once. Indeed, I have just been informed by the pew-opener that for the last hour and a half Miss Prism has been waiting for me in the vestry."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "[Starting.] Miss Prism! Did I hear you mention a Miss Prism?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CHASUBLE"
      },
      "content": [
        {
          "type": "text",
          "text": "Yes, Lady Bracknell. I am on my way to join her."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "Pray allow me to detain you for a moment. This matter may prove to be one of vital importance to Lord Bracknell and myself. Is this Miss Prism a female of repellent aspect, remotely connected with education?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CHASUBLE"
      },
      "content": [
        {
          "type": "text",
          "text": "[Somewhat indignantly.] She is the most cultivated of ladies, and the very picture of respectability."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "It is obviously the same person. May I ask what position she holds in your household?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CHASUBLE"
      },
      "content": [
        {
          "type": "text",
          "text": "[Severely.] I am a celibate, madam."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "[Interposing.] Miss Prism, Lady Bracknell, has been for the last three years Miss Cardew's esteemed governess and valued companion."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "In spite of what I hear of her, I must see her at once. Let her be sent for."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CHASUBLE"
      },
      "content": [
        {
          "type": "text",
          "text": "[Looking off.] She approaches; she is nigh."
        }
      ]
    },
    {
      "type": "action",
      "content": [
        {
          "type": "text",
          "text": "[Enter Miss Prism hurriedly.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "MISS PRISM"
      },
      "content": [
        {
          "type": "text",
          "text": "I was told you expected me in the vestry, dear Canon. I have been waiting for you there for an hour and three-quarters. [Catches sight of Lady Bracknell, who has fixed her with a stony glare. Miss Prism grows pale and quails. She looks anxiously round as if desirous to escape.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "[In a severe, judicial voice.] Prism! [Miss Prism bows her head in shame.] Come here, Prism! [Miss Prism approaches in a humble manner.] Prism! Where is that baby? [General consternation. The Canon starts back in horror. Algernon and Jack pretend to be anxious to shield Cecily and Gwendolen from hearing the details of a terrible public scandal.] Twenty-eight years ago, Prism, you left Lord Bracknell's house, Number 104, Upper Grosvenor Street, in charge of a perambulator that contained a baby of the male sex. You never returned. A few weeks later, through the elaborate investigations of the Metropolitan police, the perambulator was discovered at midnight, standing by itself in a remote corner of Bayswater. It contained the manuscript of a three-volume novel of more than usually revolting sentimentality. [Miss Prism starts in involuntary indignation.] But the baby was not there! [Every one looks at Miss Prism.] Prism! Where is that baby? [A pause.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "MISS PRISM"
      },
      "content": [
        {
          "type": "text",
          "text": "Lady Bracknell, I admit with shame that I do not know. I only wish I did. The plain facts of the case are these. On the morning of the day you mention, a day that is for ever branded on my memory, I prepared as usual to take the baby out in its perambulator. I had also with me a somewhat old, but capacious hand-bag in which I had intended to place the manuscript of a work of fiction that I had written during my few unoccupied hours. In a moment of mental abstraction, for which I never can forgive myself, I deposited the manuscript in the basinette, and placed the baby in the hand-bag."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "[Who has been listening attentively.] But where did you deposit the hand-bag?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "MISS PRISM"
      },
      "content": [
        {
          "type": "text",
          "text": "Do not ask me, Mr. Worthing."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Miss Prism, this is a matter of no small importance to me. I insist on knowing where you deposited the hand-bag that contained that infant."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "MISS PRISM"
      },
      "content": [
        {
          "type": "text",
          "text": "I left it in the cloak-room of one of the larger railway stations in London."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "What railway station?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "MISS PRISM"
      },
      "content": [
        {
          "type": "text",
          "text": "[Quite crushed.] Victoria. The Brighton line. [Sinks into a chair.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "I must retire to my room for a moment. Gwendolen, wait here for me."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "If you are not too long, I will wait here for you all my life. [Exit Jack in great excitement.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CHASUBLE"
      },
      "content": [
        {
          "type": "text",
          "text": "What do you think this means, Lady Bracknell?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "I dare not even suspect, Dr. Chasuble. I need hardly tell you that in families of high position strange coincidences are not supposed to occur. They are hardly considered the thing."
        }
      ]
    },
    {
      "type": "action",
      "content": [
        {
          "type": "text",
          "text": "[Noises heard overhead as if some one was throwing trunks about. Every one\r looks up.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "Uncle Jack seems strangely agitated."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CHASUBLE"
      },
      "content": [
        {
          "type": "text",
          "text": "Your guardian has a very emotional nature."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "This noise is extremely unpleasant. It sounds as if he was having an argument. I dislike arguments of any kind. They are always vulgar, and often convincing."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CHASUBLE"
      },
      "content": [
        {
          "type": "text",
          "text": "[Looking up.] It has stopped now. [The noise is redoubled.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "I wish he would arrive at some conclusion."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "This suspense is terrible. I hope it will last. [Enter Jack with a hand-bag of black leather in his hand.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "[Rushing over to Miss Prism.] Is this the hand-bag, Miss Prism? Examine it carefully before you speak. The happiness of more than one life depends on your answer."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "MISS PRISM"
      },
      "content": [
        {
          "type": "text",
          "text": "[Calmly.] It seems to be mine. Yes, here is the injury it received through the upsetting of a Gower Street omnibus in younger and happier days. Here is the stain on the lining caused by the explosion of a temperance beverage, an incident that occurred at Leamington. And here, on the lock, are my initials. I had forgotten that in an extravagant mood I had had them placed there. The bag is undoubtedly mine. I am delighted to have it so unexpectedly restored to me. It has been a great inconvenience being without it all these years."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "[In a pathetic voice.] Miss Prism, more is restored to you than this hand-bag. I was the baby you placed in it."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "MISS PRISM"
      },
      "content": [
        {
          "type": "text",
          "text": "[Amazed.] You?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "[Embracing her.] Yes . . . mother!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "MISS PRISM"
      },
      "content": [
        {
          "type": "text",
          "text": "[Recoiling in indignant astonishment.] Mr. Worthing! I am unmarried!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Unmarried! I do not deny that is a serious blow. But after all, who has the right to cast a stone against one who has suffered? Cannot repentance wipe out an act of folly? Why should there be one law for men, and another for women? Mother, I forgive you. [Tries to embrace her again.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "MISS PRISM"
      },
      "content": [
        {
          "type": "text",
          "text": "[Still more indignant.] Mr. Worthing, there is some error. [Pointing to Lady Bracknell.] There is the lady who can tell you who you really are."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "[After a pause.] Lady Bracknell, I hate to seem inquisitive, but would you kindly inform me who I am?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "I am afraid that the news I have to give you will not altogether please you. You are the son of my poor sister, Mrs. Moncrieff, and consequently Algernon's elder brother."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Algy's elder brother! Then I have a brother after all. I knew I had a brother! I always said I had a brother! Cecily,—how could you have ever doubted that I had a brother? [Seizes hold of Algernon.] Dr. Chasuble, my unfortunate brother. Miss Prism, my unfortunate brother. Gwendolen, my unfortunate brother. Algy, you young scoundrel, you will have to treat me with more respect in the future. You have never behaved to me like a brother in all your life."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Well, not till to-day, old boy, I admit. I did my best, however, though I was out of practice."
        }
      ]
    },
    {
      "type": "action",
      "content": [
        {
          "type": "text",
          "text": "[Shakes hands.]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "[To Jack.] My own! But what own are you? What is your Christian name, now that you have become some one else?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Good heavens! . . . I had quite forgotten that point. Your decision on the subject of my name is irrevocable, I suppose?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "I never change, except in my affections."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CECILY"
      },
      "content": [
        {
          "type": "text",
          "text": "What a noble nature you have, Gwendolen!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Then the question had better be cleared up at once. Aunt Augusta, a moment. At the time when Miss Prism left me in the hand-bag, had I been christened already?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "Every luxury that money could buy, including christening, had been lavished on you by your fond and doting parents."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Then I was christened! That is settled. Now, what name was I given? Let me know the worst."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "Being the eldest son you were naturally christened after your father."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "[Irritably.] Yes, but what was my father's Christian name?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "[Meditatively.] I cannot at the present moment recall what the General's Christian name was. But I have no doubt he had one. He was eccentric, I admit. But only in later years. And that was the result of the Indian climate, and marriage, and indigestion, and other things of that kind."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Algy! Can't you recollect what our father's Christian name was?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "My dear boy, we were never even on speaking terms. He died before I was a year old."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "His name would appear in the Army Lists of the period, I suppose, Aunt Augusta?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "The General was essentially a man of peace, except in his domestic life. But I have no doubt his name would appear in any military directory."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "The Army Lists of the last forty years are here. These delightful records should have been my constant study. [Rushes to bookcase and tears the books out.] M. Generals . . . Mallam, Maxbohm, Magley, what ghastly names they have—Markby, Migsby, Mobbs, Moncrieff! Lieutenant 1840, Captain, Lieutenant-Colonel, Colonel, General 1869, Christian names, Ernest John. [Puts book very quietly down and speaks quite calmly.] I always told you, Gwendolen, my name was Ernest, didn't I? Well, it is Ernest after all. I mean it naturally is Ernest."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "Yes, I remember now that the General was called Ernest, I knew I had some particular reason for disliking the name."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "Ernest! My own Ernest! I felt from the first that you could have no other name!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Gwendolen, it is a terrible thing for a man to find out suddenly that all his life he has been speaking nothing but the truth. Can you forgive me?"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "GWENDOLEN"
      },
      "content": [
        {
          "type": "text",
          "text": "I can. For I feel that you are sure to change."
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "My own one!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "CHASUBLE"
      },
      "content": [
        {
          "type": "text",
          "text": "[To Miss Prism.] Lætitia! [Embraces her]"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "MISS PRISM"
      },
      "content": [
        {
          "type": "text",
          "text": "[Enthusiastically.] Frederick! At last!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "ALGERNON"
      },
      "content": [
        {
          "type": "text",
          "text": "Cecily! [Embraces her.] At last!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "JACK"
      },
      "content": [
        {
          "type": "text",
          "text": "Gwendolen! [Embraces her.] At last!"
        }
      ]
    },
    {
      "type": "dialogue",
      "attrs": {
        "character": "LADY BRACKNELL"
      },
      "content": [
        {
          "type": "text",
          "text": "My nephew, you seem to be displaying signs of triviality."
        }
      ]
    },
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
    },
    {
      "type": "transition",
      "content": [
        {
          "type": "text",
          "text": "剧终"
        }
      ]
    }
  ]
}
}
