import { Link } from 'react-router-dom'

export function HomePage() {
  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          欢迎使用 Drama Editor
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          专业的短剧剧本创作工具
        </p>
        <Link
          to="/scripts/new"
          className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700"
        >
          开始创作
        </Link>
      </div>
    </div>
  )
}
