import { Heart, Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-neutral-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-lg">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Great Commission Ethiopia</span>
            </div>
            <p className="text-neutral-300 text-sm">
              Empowering Ethiopian missionaries to spread hope, love, and transformation in communities across all
              regions of Ethiopia.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-primary-300">Get Involved</h4>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>
                <Link href="/partnership" className="hover:text-primary-300 transition-colors">
                  Become a Partner
                </Link>
              </li>
              <li>
                <Link href="/missionaries" className="hover:text-primary-300 transition-colors">
                  Support Missionaries
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="hover:text-primary-300 transition-colors">
                  Fund Projects
                </Link>
              </li>
              <li>
                <Link href="/prayer-requests" className="hover:text-primary-300 transition-colors">
                  Prayer Requests
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-primary-300">About Us</h4>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>
                <Link href="/about" className="hover:text-primary-300 transition-colors">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="/impact" className="hover:text-primary-300 transition-colors">
                  Our Impact
                </Link>
              </li>
              <li>
                <Link href="/transparency" className="hover:text-primary-300 transition-colors">
                  Financial Transparency
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-300 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-primary-300">Connect</h4>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:info@greatcommissionethiopia.org" className="hover:text-primary-300 transition-colors">
                  info@greatcommissionethiopia.org
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+251 11 555 0123</span>
              </li>
              <li>
                <Link href="/newsletter" className="hover:text-primary-300 transition-colors">
                  Newsletter Signup
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-700 mt-8 pt-8 text-center text-sm text-neutral-400">
          <p>&copy; 2024 Great Commission Ethiopia. All rights reserved. | Tax ID: ET-123456789</p>
        </div>
      </div>
    </footer>
  )
}
