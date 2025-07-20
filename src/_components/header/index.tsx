import Image from "next/image";
import Link from "next/link";
import logo from "@/app/assets/Laban- (1).png";

function Header() {
  return (
    <header className="fixed w-full top-0 left-0 z-10 bg-slate-50/80 backdrop-blur-md shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="Laban2Tech Logo" height={40} />
          {/* <span className="font-bold text-lg text-gray-800">Laban2Tech</span> */}
        </Link>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li>
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
          </li>
          {/* <li>
            <Link href="/about" className="hover:text-blue-600 transition-colors">
              About Us
            </Link>
          </li> */}
          <li>
            <Link href="/courses" className="hover:text-blue-600 transition-colors">
              Our Courses
            </Link>
          </li>
          <li>
            <Link href="/resources" className="hover:text-blue-600 transition-colors">
              Resources
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
