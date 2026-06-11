"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/app/assets/Laban- (1).png";
import { Button } from "@/components/ui/button";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#contact-section";
    }
  };

  const scrollToPricing = (e: React.MouseEvent) => {
    e.preventDefault();
    const pricingSection = document.getElementById("pricing-section");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#pricing-section";
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
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-10 w-10 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800 p-1 group-hover:border-indigo-500 transition-colors">
            <Image src={logo} alt="Laban2Tech Logo" className="object-contain" fill />
          </div>
          {/* <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300 group-hover:to-indigo-300 transition-colors">
            Laban2tech
          </span> */}
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <li>
            <Link href="/" className="hover:text-white hover:underline underline-offset-4 transition-colors">
              Home
            </Link>
          </li>
          {/* <li>
            <Link href="/courses" className="hover:text-white hover:underline underline-offset-4 transition-colors">
              Courses
            </Link>
          </li> */}
          <li>
            <Link href="/workshops" className="hover:text-white hover:underline underline-offset-4 transition-colors">
              Workshops
            </Link>
          </li>
          <li>
            <Link href="/esports" className="hover:text-white hover:underline underline-offset-4 transition-colors">
              E-Sports
            </Link>
          </li>
          <li>
            <a
              href="#pricing-section"
              onClick={scrollToPricing}
              className="hover:text-white hover:underline underline-offset-4 cursor-pointer transition-colors"
            >
              Pricing
            </a>
          </li>
        </ul>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <Button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-semibold shadow-lg shadow-indigo-500/20 px-5 py-2 rounded-lg text-sm transition-all duration-300 hover:scale-105"
          >
            Get a Quote
          </Button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
