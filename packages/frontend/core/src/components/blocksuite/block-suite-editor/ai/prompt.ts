// manually synced with packages/backend/server/src/data/migrations/utils/prompts.ts
// todo: automate this
export const promptKeys = [
  'debug:chat:gpt4',
  'debug:action:gpt4',
  'debug:action:vision4',
  'debug:action:dalle3',
  'debug:action:fal-sd15',
  'chat:gpt4',
  'Summary',
  'Summary the webpage',
  'Explain this',
  'Explain this image',
  'Explain this code',
  'Translate to',
  'Write an article about this',
  'Write a twitter about this',
  'Write a poem about this',
  'Write a blog post about this',
  'Write outline',
  'Change tone to',
  'Brainstorm ideas about this',
  'Brainstorm mindmap',
  'Expand mind map',
  'Improve writing for it',
  'Improve grammar for it',
  'Fix spelling for it',
  'Find action items from it',
  'Check code error',
  'Create a presentation',
  'Create headings',
  'Make it real',
  'Make it real with text',
  'Make it longer',
  'Make it shorter',
  'Continue writing',
] as const;

export type PromptKey = (typeof promptKeys)[number];
