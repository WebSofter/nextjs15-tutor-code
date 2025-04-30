import { 
    SignInButton, 
    SignOutButton,
    SignedIn,
    SignedOut,
    // UserButton 
} from '@clerk/nextjs';
import Link from 'next/link';
import { usePathname } from "next/navigation";

const navItems = [
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
    { label: "Teams", href: "/teams" },
    {
      label: "Resources",
      href: "/resources",
      subLinks: [
        { label: "How to start", href: "/resources" },
        { label: "Community", href: "/resources" },
        { label: "Security", href: "/resources" },
        { label: "Docs", href: "/docs" },
      ],
    },
  ];

export default function Navigation() {
    const pathName = usePathname();
    return (
        <nav className="bg-gray-800 p-4 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
            <span className="text-white font-bold text-xl mr-8">Logo</span>
            </div>
            {/* Navigation Links */}
            <ul className="flex space-x-6">
            {navItems.map((item) => {
              const isActive = pathName.includes(item.href) ||
              (pathName.startsWith(item.href) && item.href !== "/");
                return (
                <li key={item.href}>
                    <Link
                    href={item.href}
                    className={(isActive ? "font-bold " : "") + "text-white hover:text-yellow-400 transition-colors"}
                    >
                    {item.label}
                    </Link>
                </li>
                )
            })}
            </ul>
            {/* Button at the end */}
            <div>
            <SignedOut>
                <span className="cursor-pointer bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors mr-4">
                    <SignInButton mode="modal"/>
                </span>
            </SignedOut>
            {/* <UserButton/> */}
            {/* <SignOutButton/> */}
            <SignedIn>
                <span className="cursor-pointer bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors mr-4">
                    <SignOutButton redirectUrl='/'/>
                </span>
                <span className="cursor-pointer bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors">
                    <Link href="/user-profile">
                        Profile
                    </Link>
                </span>
            </SignedIn>
            </div>
        </nav>
    );
}