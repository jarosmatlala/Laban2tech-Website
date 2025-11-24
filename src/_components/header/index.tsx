import Image from "next/image";
import Link from "next/link";
import logo from "@/app/assets/Laban- (1).png";

function Header() {
  return (
    <header className="fixed w-full top-0 left-0 z-10 bg-transparent">
      <nav className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-3 flex items-center justify-center">
        <ul className="flex items-center gap-8 text-white font-medium">
          {/* Home */}
          <li>
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
          </li>

          {/* Our Courses */}
          <li>
            <Link href="/courses" className="hover:text-blue-600 transition-colors">
              Our Courses
            </Link>
          </li>

          {/* Logo in the middle */}
          <li>
            <Link href="/" className="flex items-center">
              <Image src={logo} alt="Laban2Tech Logo" height={40} />
            </Link>
          </li>

          {/* Resources */}
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
