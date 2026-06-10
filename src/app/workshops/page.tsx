"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import {
  Facebook,
  Instagram,
  Linkedin,
  X,
  YoutubeIcon,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import Image from "next/image"
import apple from "../assets/apple.png";
import uii from "../assets/uii.png";
import youthh from "../assets/youthh.jpg";







export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-700 text-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Explore Our Courses
        </h1>

        <p className="text-center text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-12">
          Build real-world skills through hands-on practical training guided by experts.
          Whether you are starting out or leveling up — we have got programs tailored for you.
        </p>

        

        {/* Course Categories */}
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {/* Web Dev */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-3">Youth Month Initiative</h3>
            <p className="text-gray-200 mb-4">
As South Africa proudly commemorates the 50th Anniversary of June 16, we at Laban2tech honour the legacy of our youth by investing in your future. This Youth Month, Laban2tech — in partnership with the Cisco Networking Academy — is offering self-paced online courses and masterclasses to equip you with the skills the future demands.            </p>

<Image
  src={youthh}
  alt="Web Dev"
  className="rounded-lg mb-4"
  width={400}
  height={250}
/>
          

            <Link href="/courses/web-development">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                View Details
              </Button>
            </Link>
          </div>




          {/* Mobile Development */}
          {/* <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-3">Mobile App Development</h3>
            <p className="text-gray-200 mb-4">
              Build Android & iOS apps using React Native and modern tools.
            </p>
            <Image
  src={apple}
  alt="Web Dev"
  className="rounded-lg mb-4"
  width={400}
  height={250}
/>
            <Link href="/courses/mobile-development">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                View Details
              </Button>
            </Link>
          </div> */}

          {/* UI/UX */}
          {/* <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-3">UI/UX Design</h3>
            <p className="text-gray-200 mb-4">
              Master design systems, Figma, wireframing, and product workflows.
            </p>
            <Image
  src={uii}
  alt="Web Dev"
  className="rounded-lg mb-4"
  width={400}
  height={250}
/>
            <Link href="/courses/ui-ux">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                View Details
              </Button>
            </Link>
          </div> */}
        </div>
      </div>

  {/* Footer */}
      <footer className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-16">
          <div className="bg-blue-800 rounded-lg p-8 mb-8">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl font-bold mb-4 text-pink-400">Laban2Tech</h3>
                {/* <p className="text-blue-200 mb-6">
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
                </div> */}
                {/* <p className="text-sm text-blue-200">
                  By subscribing, you consent to our Privacy Policies and receiving
                  updates from us.
                </p> */}
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
            <p>© 2026 Laban2tech. All rights reserved.</p>
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
