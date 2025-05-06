import Link from 'next/link'

export default function Button({ href, children = <></>, className = '', external = false }) {

  const linkProps = {
    href,
    className: `bg-blue-600 text-white px-4 py-2 rounded inline-block text-center hover:bg-blue-700 transition-colors ${className}`,
  }

  return (external ? (
    <a
      {...linkProps}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ) : (
    <Link
      {...linkProps}
    >
      {children}
    </Link>
  )
  )
}