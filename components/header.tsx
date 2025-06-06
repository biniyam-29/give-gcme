import { Heart } from "lucide-react"
import Link from "next/link"

interface HeaderProps {
  currentPage?: string
}

export default function Header({ currentPage }: HeaderProps) {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/#projects", label: "Projects" },
    { href: "/missionaries", label: "Missionaries" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-neutral-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-lg">
            <Heart className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-neutral-800">Great Commission Ethiopia</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors font-medium ${
                currentPage === item.label.toLowerCase()
                  ? "text-primary-600 font-semibold"
                  : "text-neutral-600 hover:text-primary-600"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
