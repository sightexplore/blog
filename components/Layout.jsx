export default function Layout({ children, home }) {
  return (
    <div className="px-6 pt-36 py-4 pb-4 sm:px-16 sm:pb-14 sm:py-28 dark:bg-gray-900 text-gray-900 dark:text-gray-200">
        { children }
    </div>
  )
}