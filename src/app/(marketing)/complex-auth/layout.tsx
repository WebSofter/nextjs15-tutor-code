"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ComplexAuthLayout({
  children,
  auth,
}: {
  children: React.ReactNode;
  auth: React.ReactNode;
}) {
  const navList = [
    { name: "Login", href: "/complex-auth" },
    { name: "Register", href: "/complex-auth/register" },
    { name: "Forgot", href: "/complex-auth/forgot" },
  ];
  const pathName = usePathname();
  const isLoggedIn = true;
  return isLoggedIn ? (
    <div>
      <ul>
        {navList.map((item) => {
          const isActive =
            pathName.includes(item.href) ||
            (pathName.startsWith(item.href) && item.href !== "/");
          return (
            <li key={item.name}>
              <Link className={isActive ? "font-bold" : ""} href={item.href}>
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <div style={{ display: "flex", flex: 1 }}>{auth}</div>
      <div>{children}</div>
    </div>
  ) : (
    auth
  );
}
