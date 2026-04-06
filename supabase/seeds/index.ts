import type { SeedScript } from './types'
import { script1FirstMeeting } from './data/script-1-first-meeting'
import { script2PhoneCall } from './data/script-2-phone-call'
import { script3Encounter } from './data/script-3-encounter'
import { script4TimeMailbox } from './data/script-4-time-mailbox'
import { script5Negotiator } from './data/script-5-negotiator'
import { script6ImportanceBeingEarnest } from './data/script-6-importance-being-earnest'
import { script7Hamlet } from './data/script-7-hamlet'
import { script8ADollsHouse } from './data/script-8-a-dolls-house'

export const seedScripts: SeedScript[] = [
  script1FirstMeeting,
  script2PhoneCall,
  script3Encounter,
  script4TimeMailbox,
  script5Negotiator,
  script6ImportanceBeingEarnest,
  script7Hamlet,
  script8ADollsHouse,
]

export { type SeedScript, type SeedCharacter, type TipTapContent, type TipTapNode } from './types'
