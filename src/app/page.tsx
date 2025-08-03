"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Tsewe from "./assets/Tsewe.jpg";
import Tsewe11 from "./assets/Tsewe11.jpg";

import black_and_white from "./assets/black_and_white.jpg";
import { Info_Card } from "@/_components";
import avatar from "./assets/Avatar Image.png";
import logo from "@/app/assets/Laban- (1).png";
import Dev2 from "./assets/Dev2.jpg";
// import development from "./assets/development.jpg";
import Kid from "./assets/Kid.jpg";
import photo1 from "./assets/photo1.jpg";

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

export default function Home() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  
  // Array of images for the slideshow
  const heroImages = [
    // development,
    photo1,
    Tsewe,
    // Dev2,
    Kid,
    Tsewe11,
    
    
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-advance slideshow every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const openVideo = () => setIsVideoOpen(true);
  const closeVideo = () => setIsVideoOpen(false);

  return (
    <div>
      {/* Hero Section with Slideshow */}
      <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Slideshow background images */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                alt={`hero-slide-${index}`}
                src={image}
                className="w-full h-full object-cover"
                priority={index === 0}
              />
            </div>
          ))}
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content overlay */}
        <div className="relative z-10 text-center px-4 md:px-6 lg:px-16 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-8 drop-shadow-lg">
            EMPOWERING THE FUTURE THROUGH DIGITAL EDUCATION
          </h1>

          {/* Call-to-action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
              Learn More →
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg">
              Get Started
            </Button>
          </div>
        </div>

        {/* Slideshow indicators (dots) */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>

        {/* Optional: Navigation arrows */}
        <button
          onClick={() => setCurrentImageIndex(
            currentImageIndex === 0 ? heroImages.length - 1 : currentImageIndex - 1
          )}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors z-20"
        >
          ←
        </button>
        <button
          onClick={() => setCurrentImageIndex(
            currentImageIndex === heroImages.length - 1 ? 0 : currentImageIndex + 1
          )}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors z-20"
        >
          →
        </button>
      </main>

      {/* Services Section */}
      <section 
        className="min-h-screen px-4 md:px-6 lg:px-16 py-16" 
        style={{ backgroundColor: "#0070B3" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 max-w-4xl mx-auto text-white">
              Unlock Your Digital Potential with Laban2tech
            </h2>
            <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto">
              At Laban2tech, we offer innovative programs designed to equip
              underserved youth with essential digital skills. Join us in bridging
              the digital divide and creating opportunities for a brighter future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Info_Card
              image={Tsewe}
              title="Comprehensive Coding and Programming Courses"
              paragraph="Learn the fundamentals of coding and software development."
            />
            <Info_Card
              image={black_and_white}
              title="Hands-On Workshops for Real-World Experience"
              paragraph="Participate in interactive sessions that enhance learning."
              onClick={openVideo} 
            />
            <Info_Card
              image={Dev2}
              title="Creative Digital Design and Multimedia Training"
              paragraph="Explore the world of graphic design and video editing."
            />
          </div>
        </div>
      </section>

      {/* Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg overflow-hidden max-w-3xl w-full relative">
            <button
              onClick={closeVideo}
              className="absolute top-2 right-2 text-black text-xl font-bold z-10"
            >
              ✕
            </button>
            <video controls autoPlay className="w-full h-auto">
              <source src="/assets/MVI_2368.MP4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      {/* Rest of your sections remain the same... */}
      {/* Testimonial Section */}
      <section className="bg-blue-900 py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-16 text-center">
          <div className="flex justify-center gap-2 mb-8">
            <StarIcon color="#fbbf24" size={32} />
            <StarIcon color="#fbbf24" size={32} />
            <StarIcon color="#fbbf24" size={32} />
          </div>
          <blockquote className="text-white text-xl md:text-2xl mb-12 italic">
            {"Laban2tech has transformed my understanding of technology. The skills I've gained here have opened new doors for my future."}
          </blockquote>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex items-center gap-4 text-white">
              <Image src={avatar} alt="avatar" className="rounded-full" />
              <div className="text-left">
                <p className="font-semibold">Kutullo Moropane</p>
                <p className="text-blue-200">Student, Laban2tech</p>
              </div>
            </div>
            <div className="text-white border-l-2 border-blue-400 pl-8">
              <p className="text-lg">Logo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-blue-800 py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h2>
              <p className="text-blue-100 text-lg max-w-md">
                Ready to start your digital journey? Get in touch with us today and 
                discover how Laban2tech can help you unlock your potential in the 
                digital world.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <form className="space-y-6 max-w-md mx-auto">
                <div>
                  <label className="block text-white mb-2">Name</label>
                  <input
                    className="w-full px-4 py-3 rounded-md text-blue-900 outline-none focus:ring-2 focus:ring-pink-500"
                    type="text"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Email</label>
                  <input
                    className="w-full px-4 py-3 rounded-md text-blue-900 outline-none focus:ring-2 focus:ring-pink-500"
                    type="email"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Message</label>
                  <textarea
                    className="w-full px-4 py-3 rounded-md text-blue-900 outline-none min-h-[120px] resize-vertical focus:ring-2 focus:ring-pink-500"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button className="w-full py-3 rounded-md bg-pink-600 text-white font-bold hover:bg-pink-700 transition-colors">
                  Submit
                </button>
              </form>
            </div>
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
                    <li><Link href="/#" className="text-blue-200 hover:text-white">Contact Us</Link></li>
                    <li><Link href="/#" className="text-blue-200 hover:text-white">Our Services</Link></li>
                    <li><Link href="/#" className="text-blue-200 hover:text-white">Blog Posts</Link></li>
                    <li><Link href="/#" className="text-blue-200 hover:text-white">FAQs</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-pink-400">Resources</h4>
                  <ul className="space-y-2">
                    <li><Link href="/#" className="text-blue-200 hover:text-white">E-books</Link></li>
                    <li><Link href="/#" className="text-blue-200 hover:text-white">Webinars</Link></li>
                    <li><Link href="/#" className="text-blue-200 hover:text-white">Case Studies</Link></li>
                    <li><Link href="/#" className="text-blue-200 hover:text-white">Newsletters</Link></li>
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
            <ul className="flex gap-6">
              <li><Link href="/#" className="text-blue-200 hover:text-white underline">Privacy Policy</Link></li>
              <li><Link href="/#" className="text-blue-200 hover:text-white underline">Terms of Service</Link></li>
              <li><Link href="/#" className="text-blue-200 hover:text-white underline">Cookie Settings</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}