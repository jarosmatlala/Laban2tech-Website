"use client";

import React from "react";
import { Button } from "@/components/ui/button";

import {
  Facebook,
  Instagram,
  Linkedin,
  StarIcon,
  X,
  YoutubeIcon,
} from "lucide-react";
import { Input } from "@/components/ui/input";
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
          <div className="absolute inset-0 bg-gray-900/70"></div>
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
          {/* <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white">
            Enroll Now
          </Button> */}
        </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Holistic eSports Learning
          </h2>
          <p className="text-lg text-gray-100 max-w-3xl mx-auto mb-12 pb-10">
            Our holistic eSports program goes beyond gaming. We nurture 
            students' physical health, mental resilience, digital skills, 
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
              <div className="flex-shrink-0 w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
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
              <div className="flex-shrink-0 w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
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
              <div className="flex-shrink-0 w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
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
              <div className="flex-shrink-0 w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
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
      <section className="bg-blue-800 py-16 px-6 md:px-16">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Level Up?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join our eSports program and start your journey toward becoming 
            a well-rounded digital athlete.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
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
      <footer className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-16">
          <div className="bg-blue-800 rounded-lg p-8 mb-8">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl font-bold mb-4 text-pink-400">Laban2Tech</h3>
                <p className="text-blue-200 mb-6">
                  Subscribe to our newsletter for the latest updates on features and
                  releases.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mb-4">
                  <Input
                    className="flex-1 border-blue-600 bg-white text-blue-900 focus:ring-2 focus:ring-pink-500"
                    placeholder="Your email here"
                    type="email"
                  />
                  <Button className="bg-pink-600 hover:bg-pink-700">Join</Button>
                </div>
                <p className="text-sm text-blue-200">
                  By subscribing, you consent to our Privacy Policies and receiving
                  updates from us.
                </p>
              </div>
              <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-pink-400">Quick Links</h4>
                  <ul className="space-y-2">
                    <li><Link href="/#" className="text-blue-200 hover:text-white">About Us</Link></li>
                    <li><Link href="/#" className="text-blue-200 hover:text-white">Home</Link></li>
                    <li><Link href="/#" className="text-blue-200 hover:text-white">Our Services</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-pink-400">Resources</h4>
                  <ul className="space-y-2">
                    
                    <li><Link href="/#" className="text-blue-200 hover:text-white">Workshops</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-pink-400">Connect With Us</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/#" className="flex items-center gap-2 text-blue-200 hover:text-white">
                        <Facebook size={20} />
                        Facebook
                      </Link>
                    </li>
                    <li>
                      <Link href="/#" className="flex items-center gap-2 text-blue-200 hover:text-white">
                        <Instagram size={20} />
                        Instagram
                      </Link>
                    </li>
                    <li>
                      <Link href="/#" className="flex items-center gap-2 text-blue-200 hover:text-white">
                        <X size={20} />
                        X
                      </Link>
                    </li>
                    <li>
                      <Link href="/#" className="flex items-center gap-2 text-blue-200 hover:text-white">
                        <Linkedin size={20} />
                        LinkedIn
                      </Link>
                    </li>
                    <li>
                      <Link href="/#" className="flex items-center gap-2 text-blue-200 hover:text-white">
                        <YoutubeIcon size={20} />
                        YouTube
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>© 2025 Laban2tech. All rights reserved.</p>
            {/* <ul className="flex gap-6">
              <li><Link href="/#" className="text-blue-200 hover:text-white underline">Privacy Policy</Link></li>
              <li><Link href="/#" className="text-blue-200 hover:text-white underline">Terms of Service</Link></li>
              <li><Link href="/#" className="text-blue-200 hover:text-white underline">Cookie Settings</Link></li>
            </ul> */}
          </div>
        </div>
      </footer>

    </div>
  );
}