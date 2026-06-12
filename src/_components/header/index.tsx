"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/app/assets/Laban- (1).png";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-10 w-10 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800 p-1 group-hover:border-indigo-500 transition-colors">
            <Image src={logo} alt="Laban2Tech Logo" fill className="object-contain" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <li><Link href="/" className="hover:text-white hover:underline underline-offset-4">Home</Link></li>
          <li><Link href="/workshops" className="hover:text-white hover:underline underline-offset-4">Workshops</Link></li>
          <li><Link href="/esports" className="hover:text-white hover:underline underline-offset-4">E-Sports</Link></li>
          <li>
            <button
              onClick={() => scrollToSection("pricing-section")}
              className="hover:text-white hover:underline underline-offset-4"
            >
              Pricing
            </button>
          </li>
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <Button
            onClick={() => scrollToSection("contact-section")}
            className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-semibold shadow-lg shadow-indigo-500/20 px-5 py-2 rounded-lg text-sm transition-all duration-300 hover:scale-105"
          >
            Get a Quote
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-slate-900 border-r border-slate-800 z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-slate-800">
          <span className="text-white font-semibold text-lg">Menu</span>
          <button onClick={() => setIsOpen(false)} className="text-white">
            <X size={26} />
          </button>
        </div>

        <ul className="flex flex-col gap-6 p-6 text-slate-300 text-base">
          <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link href="/workshops" onClick={() => setIsOpen(false)}>Workshops</Link></li>
          <li><Link href="/esports" onClick={() => setIsOpen(false)}>E-Sports</Link></li>
          <li>
            <button onClick={() => scrollToSection("pricing-section")}>
              Pricing
            </button>
          </li>
          <li>
            <Button
              onClick={() => scrollToSection("contact-section")}
              className="w-full bg-indigo-600 text-white"
            >
              Get a Quote
            </Button>
          </li>
        </ul>
      </div>

      {/* Backdrop Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
}

export default Header;
