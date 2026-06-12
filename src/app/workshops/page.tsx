"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import {
  Facebook,
  Instagram,
  Linkedin,
  X,
  YoutubeIcon,
} from "lucide-react";

import youthh from "../assets/youthh.jpg";

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6">
          Explore Our Courses
        </h1>

        <p className="text-center text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12">
          Build real-world skills through hands-on practical training guided by experts.
          Whether you are starting out or leveling up — we have programs tailored for you.
        </p>

        {/* Course Categories */}
        <div className="grid md:grid-cols-3 gap-8 mt-10">

          {/* Youth Month Card */}
          <div className="bg-slate-900/40 border border-slate-800 backdrop-blur-sm p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-indigo-400 mb-3">
              June 2026 Youth Month Initiative
            </h3>

            <p className="text-slate-300 mb-4">
              As South Africa proudly commemorates the 50th Anniversary of June 16,
              we at Laban2tech honour the legacy of our youth by investing in your future.
              This Youth Month, Laban2tech — in partnership with the Cisco Networking Academy —
              is offering self-paced online courses and masterclasses to equip you with the
              skills the future demands.
            </p>

            <Image
              src={youthh}
              alt="Youth Month"
              className="rounded-lg mb-4"
              width={400}
              height={250}
            />

            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdkDUyhjeLQHM7R9Fxey6VMp1qA7UWKo9qAIvgnix99bTeDcw/viewform?usp=sharing&ouid=105392927634406864011">
              <Button className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white">
                Register
              </Button>
            </Link>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 mt-20 py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-16">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            
            {/* Brand */}
            <div className="lg:col-span-5 space-y-6">
              <h3 className="text-2xl font-bold text-white">Laban2tech</h3>
              <p className="text-slate-400 max-w-sm leading-relaxed">
                Building professional web architectures and training the next generation
                of engineers in South Africa.
              </p>

              <div className="flex items-center gap-4 text-slate-500">
                <Link href="https://web.facebook.com/profile.php?id=61580600991449" className="hover:text-white transition-colors"><Facebook size={18} /></Link>
                <Link href="#" className="hover:text-white transition-colors"><Instagram size={18} /></Link>
                <Link href="#" className="hover:text-white transition-colors"><X size={18} /></Link>
                <Link href="https://www.linkedin.com/company/112031633/admin/inbox/" className="hover:text-white transition-colors"><Linkedin size={18} /></Link>
                <Link href="#" className="hover:text-white transition-colors"><YoutubeIcon size={18} /></Link>
              </div>
            </div>

            {/* Links */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Quick Links</h4>
                <ul className="space-y-3">
                  <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                  <li><Link href="/workshops" className="hover:text-white transition-colors">Workshops</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Resources</h4>
                <ul className="space-y-3">
                  <li><Link href="/#" className="hover:text-white transition-colors">Workshops</Link></li>
                </ul>
              </div>
            </div>

          </div>

          <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-600">
            <p>© {new Date().getFullYear()} Laban2tech. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-slate-500 transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-slate-500 transition-colors">Terms of Service</Link>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
