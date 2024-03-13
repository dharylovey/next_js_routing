"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "Register", href: "/auth/register" },
  { name: "Login", href: "/auth/login" },
  { name: "Forgot-password", href: "/auth/forgot-password" },
];

function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const [input, setInput] = useState('')
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div>
        <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
      </div>
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
