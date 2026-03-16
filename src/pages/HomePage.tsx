import { Link } from 'react-router-dom'
import { curriculum, totalTopics } from '../content/curriculum'
import { useLang } from '../context/LangContext'

export function HomePage() {
  const { t, lang } = useLang()

  const firstTopic = curriculum[0]?.topics[0]
  const readyCount = curriculum.flatMap(c => c.topics).filter(t => t.contentType === 'article' || t.contentType === 'visual').length

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      {/* Hero */}
      <div className="text-center mb-14">
        <div className="text-6xl mb-4">🤖</div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
          {t('LLM Hub', '大模型知识库')}
        </h1>
        <p className="text-gray-500 dark:text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
          {t(
            'A comprehensive bilingual knowledge base for Large Language Models — from fundamentals to frontier research.',
            '系统化的大模型双语知识库 — 从基础概念到前沿研究，持续更新。'
          )}
        </p>
        <div className="flex items-center justify-center gap-6 mt-6 text-sm text-gray-400 dark:text-slate-500 flex-wrap">
          <span>📚 {totalTopics} {t('Topics', '个主题')}</span>
          <span>✅ {readyCount} {t('Ready', '已完成')}</span>
          <span>🌍 {t('EN / 中文', '中文 / EN')}</span>
          <span>🔄 {t('Continuously Updated', '持续更新中')}</span>
        </div>
      </div>

      {/* CTA */}
      <div className="flex gap-3 justify-center mb-14 flex-wrap">
        {firstTopic && (
          <Link
            to={`/learn/${firstTopic.id}`}
            className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium text-sm transition-colors no-underline"
          >
            {t('Start Learning →', '开始学习 →')}
          </Link>
        )}
        <a
          href="https://my.feishu.cn/wiki/Gvg5w5yi4iGe2ykcxabcbSn7nXb"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 bg-gray-200 dark:bg-slate-800 hover:bg-gray-300 dark:hover:bg-slate-700 text-gray-800 dark:text-slate-200 rounded-xl font-medium text-sm transition-colors no-underline"
        >
          {t('View Source Wiki', '查看原始文档')}
        </a>
      </div>

      {/* Chapter grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {curriculum.map(chapter => {
          const ready = chapter.topics.filter(t => t.contentType !== 'coming-soon').length
          const firstAvailable = chapter.topics.find(t => t.contentType !== 'coming-soon') ?? chapter.topics[0]
          return (
            <Link
              key={chapter.id}
              to={`/learn/${firstAvailable.id}`}
              className="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-md transition-all no-underline group"
            >
              <div className="flex items-start gap-3">
                <span className="text-3xl">{chapter.icon}</span>
                <div className="flex-1 min-w-0">
                  <h2 className="font-semibold text-gray-900 dark:text-white text-base group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {lang === 'zh' ? chapter.title.zh : chapter.title.en}
                  </h2>
                  <p className="text-xs text-gray-500 dark:text-slate-500 mt-0.5">
                    {chapter.topics.length} {t('topics', '个主题')}
                    {ready > 0 && ` · ${ready} ${t('ready', '已完成')}`}
                  </p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {chapter.topics.slice(0, 5).map(topic => (
                      <span key={topic.id} className="text-sm" title={lang === 'zh' ? topic.title.zh : topic.title.en}>
                        {topic.emoji}
                      </span>
                    ))}
                    {chapter.topics.length > 5 && (
                      <span className="text-xs text-gray-400 self-center">+{chapter.topics.length - 5}</span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
