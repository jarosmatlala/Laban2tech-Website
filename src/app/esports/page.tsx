"use client";

import React from "react";
import { Button } from "@/components/ui/button";

import {
  Facebook,
  Instagram,
  Linkedin,
  X,
  YoutubeIcon,
} from "lucide-react";
// import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";
import sport2Image from "@/app/assets/sport2.jpg";
import etoolsImage from "@/app/assets/etools.avif";





export default function EsportsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {/* <section className="bg-gradient-to-r from-blue-900  px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Scholastic E-Sports Learning
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
            Empowering the next generation of digital athletes through 
            comprehensive eSports education
          </p>
          <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white">
            Enroll Now
          </Button>
        </div>
      </section> */}

      


<section className="relative py-20 px-6 md:px-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={sport2Image}
            alt="eSports Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-950/80"></div>
        </div>

        {/* Content */}

        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="max-w-6xl mx-auto text-center">
          {/* <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Scholastic E-Sports Learning
          </h1> */}
          {/* <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
            Empowering the next generation of digital athletes through 
            comprehensive eSports education
          </p> */}
          {/* <Button size="lg" className="bg-indigo-600 hover:bg-pink-700 text-white">
            Enroll Now
          </Button> */}
        </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Holistic eSports Learning
          </h2>
          <p className="text-lg text-gray-100 max-w-3xl mx-auto mb-12 pb-10">
            Our holistic eSports program goes beyond gaming. We nurture 
            students physical health, mental resilience, digital skills, 
            and career pathways to ensure they thrive both in and out of 
            the game.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/5 backdrop-blur-sm shadow-lg rounded-2xl p-6 hover:shadow-xl transition-shadow border border-white/30">
              <h3 className="font-bold text-xl text-blue-800 mb-3">🎮 Gaming Skills</h3>
              <p className="text-gray-100">
                Learn teamwork, strategy, communication, and competitive 
                eSports fundamentals.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm shadow-lg rounded-2xl p-6 hover:shadow-xl transition-shadow border border-white/30">
              <h3 className="font-bold text-xl text-blue-800 mb-3">🧠 Health & Wellness</h3>
              <p className="text-gray-100">
                Develop healthy habits, manage stress, and balance screen 
                time with physical activity.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm shadow-lg rounded-2xl p-6 hover:shadow-xl transition-shadow border border-white/30 ">
              <h3 className="font-bold text-xl text-blue-800 mb-3">🎓 Career Skills</h3>
              <p className="text-gray-100">
                Explore opportunities in broadcasting, streaming, game 
                design, and digital entrepreneurship.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm shadow-lg rounded-2xl p-6 hover:shadow-xl transition-shadow border border-white/30">
              <h3 className="font-bold text-xl text-blue-800 mb-3">🌍 Community & Values</h3>
              <p className="text-gray-100">
                Promote inclusivity, teamwork, positive gaming culture, and 
                responsible online behavior.
              </p>
            </div>
          </div>


        </div>
      </section>

      {/* Program Benefits */}
      <section className="relative py-20 px-6 md:px-16">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={etoolsImage}
            alt="eSports Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/80"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Why Choose Our eSports Program?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="font-bold text-xl text-white mb-2">
                  Professional Coaching
                </h3>
                <p className="text-gray-100">
                  Learn from experienced eSports professionals and educators 
                  who understand both gaming and youth development.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="font-bold text-xl text-white mb-2">
                  State-of-the-Art Facilities
                </h3>
                <p className="text-gray-100">
                  Access high-performance gaming equipment and dedicated 
                  training spaces designed for optimal learning.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="font-bold text-xl text-white mb-2">
                  Tournament Experience
                </h3>
                <p className="text-gray-100">
                  Compete in organized tournaments and leagues to develop 
                  competitive skills in a supportive environment.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="font-bold text-xl text-white mb-2">
                  Holistic Development
                </h3>
                <p className="text-gray-100">
                  Build life skills including communication, problem-solving, 
                  and digital citizenship alongside gaming expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      

      {/* Call to Action */}
      <section className="bg-slate-900 border-t border-slate-800 py-16 px-6 md:px-16">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Level Up?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join our eSports program and start your journey toward becoming 
            a well-rounded digital athlete.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-blue-600 
hover:from-indigo-500 hover:to-blue-500
">
              Apply Now
            </Button>
            {/* <Link href="/">
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-800">
                Back to Home
              </Button>
            </Link> */}
          </div>
        </div>

      </section>

   {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-20 text-slate-400 text-sm">
  <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-16">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
      
      {/* Brand column */}
      <div className="lg:col-span-5 space-y-6">
        <h3 className="text-2xl font-bold text-white">Laban2tech</h3>
        <p className="text-slate-400 max-w-sm leading-relaxed">
          Building professional web architectures and training the next generation of engineers in South Africa.
        </p>

        <div className="flex items-center gap-4 text-slate-500">
          <Link href="#" className="hover:text-white transition-colors"><Facebook size={18} /></Link>
          <Link href="#" className="hover:text-white transition-colors"><Instagram size={18} /></Link>
          <Link href="#" className="hover:text-white transition-colors"><X size={18} /></Link>
          <Link href="#" className="hover:text-white transition-colors"><Linkedin size={18} /></Link>
          <Link href="#" className="hover:text-white transition-colors"><YoutubeIcon size={18} /></Link>
        </div>
      </div>

      {/* Links columns */}
      <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Quick Links</h4>
          <ul className="space-y-3">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/workshops" className="hover:text-white transition-colors">Workshops</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Sectors</h4>
          <ul className="space-y-3">
            <li><Link href="/esports" className="hover:text-white transition-colors">E-Sports</Link></li>
            <li><Link href="/#pricing-section" className="hover:text-white transition-colors">Pricing</Link></li>
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