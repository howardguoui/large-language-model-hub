export interface TopicContent {
  id: string
  emoji: string
  title: { en: string; zh: string }
  content: { en: string; zh: string }
  /** 'article' = text only | 'visual' = has interactive diagram | 'coming-soon' = placeholder */
  contentType: 'article' | 'visual' | 'coming-soon'
}

export interface Chapter {
  id: string
  title: { en: string; zh: string }
  icon: string
  topics: TopicContent[]
}
