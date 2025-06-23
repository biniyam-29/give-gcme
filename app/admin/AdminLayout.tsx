"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Heart,
  Activity,
  Users,
  Target,
  TrendingUp,
  DollarSign,
  MessageCircle,
  BarChart3,
  Settings,
  User,
} from "lucide-react";

const navLinks = [
  { href: "/admin", label: "Dashboard", icon: Activity },
  { href: "/admin/missionaries", label: "Missionaries", icon: Users },
  { href: "/admin/projects", label: "Projects", icon: Target },
  { href: "/admin/strategies", label: "Strategies", icon: TrendingUp },
];

function SidebarLink({ href, label, icon: Icon, active }: any) {
  return (
    <Link
      href={href}
      className={`flex items-center w-full px-4 py-3 rounded-lg text-sm font-medium transition duration-200 space-x-3
        ${
          active
            ? "bg-white bg-opacity-20 text-white shadow-lg"
            : "text-white text-opacity-80 hover:bg-white hover:bg-opacity-10 hover:text-opacity-100"
        }
      `}
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>
    </Link>
  );
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div className="min-h-screen flex" style={{ backgroundColor: "#f4f8fb" }}>
      <aside
        className="w-64 text-white shadow-xl flex flex-col"
        style={{ backgroundColor: "#001F54" }}
      >
        <div className="p-6">
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center mx-auto mb-3">
              <img
                src="/logo/gcme-logo-white.png"
                alt="GCME Logo"
                className="w-40 h-40 max-w-xs object-contain"
              />
            </div>
          </div>
          <nav className="space-y-2">
            {navLinks.map((link) => (
              <SidebarLink
                key={link.href}
                href={link.href}
                label={link.label}
                icon={link.icon}
                active={pathname === link.href}
              />
            ))}
          </nav>
        </div>
        <div
          className="mt-auto p-6 border-t border-white border-opacity-10"
          style={{ backgroundColor: "#001F54" }}
        >
          {/* <div className="text-center">
            <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-2">
              <User className="w-5 h-5 text-white" />
            </div>
            <p className="text-sm font-medium">Admin User</p>
            <p className="text-xs opacity-70">admin@give.com</p>
          </div> */}
        </div>
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
