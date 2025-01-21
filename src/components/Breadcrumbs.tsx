import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/solid'
import BreadcrumbSchema from './schemas/BreadcrumbSchema'

interface BreadcrumbItem {
  name: string
  href: string
}

export default function Breadcrumbs() {
  const pathname = usePathname()
  const paths = pathname.split('/').filter(Boolean)
  
  const breadcrumbs: BreadcrumbItem[] = [
    { name: 'Home', href: '/' },
    ...paths.map((path, index) => {
      const href = `/${paths.slice(0, index + 1).join('/')}`
      const name = path
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
      return { name, href }
    })
  ]

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <nav className="flex py-4 px-4 text-gray-600 text-sm">
        <ol className="flex items-center space-x-2">
          {breadcrumbs.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index === 0 ? (
                <Link href={item.href} className="flex items-center hover:text-blue-600">
                  <HomeIcon className="w-4 h-4 mr-1" />
                  <span className="hidden sm:inline">{item.name}</span>
                </Link>
              ) : (
                <>
                  <ChevronRightIcon className="w-4 h-4 mx-2 text-gray-400" />
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-blue-600">{item.name}</span>
                  ) : (
                    <Link 
                      href={item.href}
                      className="hover:text-blue-600"
                    >
                      {item.name}
                    </Link>
                  )}
                </>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
