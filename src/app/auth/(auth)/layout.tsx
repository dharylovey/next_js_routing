"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Register", href: "/auth/register" },
  { name: "Login", href: "/auth/login" },
  { name: "Forgot-password", href: "/auth/forgot-password" },
];

function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  return (
    <div className="gap-4">
      {navLinks.map(({ href, name }) => {
        const isActive = pathname.startsWith(href);
        return (
          <Link key={name} href={href}
          className={isActive ? 'font-bold text-indigo-600 mr-4' : 'mr-4' }
          >
            {name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}

export default AuthLayout;
