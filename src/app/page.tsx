"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Tsewe from "./assets/Tsewe.jpg";
import Tsewe11 from "./assets/Tsewe11.jpg";
import Khosi from "./assets/Khosi.jpg";
import Kid from "./assets/Kid.jpg";
import Kid2 from "./assets/Kid2.jpg";
import photo1 from "./assets/photo1.jpg";
import { useRouter } from "next/navigation";
import Laban2techContactForm from "@/_components/Laban2techContactForm";
import { PricingCard } from "@/_components";
import {
  Facebook,
  Instagram,
  Linkedin,
  X,
  YoutubeIcon,
  Laptop,
  Code,
  Smartphone,
  BookOpen,
  Gamepad2,
  Users,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState<string>("");

  // Array of images for the slideshow
  const heroImages = [photo1, Kid2, Tsewe, Kid, Tsewe11];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-advance slideshow every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const pricingPlans = [
    {
      name: "Starter / Landing Page",
      price: "R4,999",
      // usdPrice: "$275",
      description: "Ideal for startups, single campaigns, and basic business portfolios.",
      features: [
        "Single-Page Next.js / React Website",
        "100% Mobile & Tablet Responsive",
        "Core SEO Tags Setup",
        "Resend Contact Form Integration",
        "Social Media Profiles Linkage",
        "1 Month Post-Launch Support",
      ],
      popular: false,
    },
    {
      name: "Professional Business",
      price: "R12,499",
      // usdPrice: "$690",
      description: "Best for established companies requiring multi-page setups and content management.",
      features: [
        "Up to 5 Pages (Home, Services, About, Blog, etc.)",
        "Tailored UI/UX Premium Layout",
        "Dynamic CMS / Blog Integration",
        "Advanced SEO & Analytics Configuration",
        "Google Search Console Indexing",
        "3 Months Technical Support",
      ],
      popular: true,
    },
    {
      name: "Custom Application",
      price: "Custom",
      usdPrice: "TBD",
      description: "For full-scale SaaS platforms, database portals, and specialized software applications.",
      features: [
        "Full-Stack Web & Mobile App (iOS & Android)",
        "Database Architecture & API Integration",
        "Secure User Auth & Access Roles",
        "Payment & E-Commerce Integration",
        "Custom Admin Dashboard Panel",
        "6 Months Dedicated SLA Support",
      ],
      popular: false,
      ctaText: "Request Quote",
    },
  ];

  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
    // Scroll smoothly to contact form (handled via useEffect in Laban2techContactForm)
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen selection:bg-indigo-500/35 selection:text-white">
      
      {/* 🚀 Premium B2B Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
        {/* Background Grid Mesh */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800b_1px,transparent_1px),linear-gradient(to_bottom,#8080800b_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-indigo-600/10 rounded-full filter blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full filter blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column - Headline & B2B/B2C copy */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/35 text-indigo-300 text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider">
              <TrendingUp size={14} className="text-indigo-400" /> Professional Digital Agency & Training
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
              We Build Software.<br />
              We Empower<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-blue-500 to-violet-400">
                Future Innovators.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
              Laban2tech delivers world-class custom websites, full-stack applications, and software solutions for growing businesses. Simultaneously, we bridge the digital divide by equipping South Africa&apos;s youth with advanced software engineering skills.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                onClick={() => scrollToSection("pricing-section")}
                className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-bold text-base px-8 py-6 rounded-xl shadow-xl shadow-indigo-500/20 transition-all duration-300 hover:scale-[1.03]"
              >
                Build a Project <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button
                onClick={() => router.push("/courses")}
                className="bg-slate-900 hover:bg-slate-800 text-white border border-slate-800 hover:border-slate-700 font-semibold text-base px-8 py-6 rounded-xl transition-all duration-300 hover:scale-[1.03]"
              >
                Browse Academy
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-900/60 max-w-lg">
              <div>
                <p className="text-3xl font-extrabold text-white">100%</p>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Responsive Projects</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-white">500+</p>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Students Trained</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-white">24/7</p>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Integrations</p>
              </div>
            </div>
          </div>

          {/* Right Column - Contained Slideshow Card */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/40 p-3 backdrop-blur-sm shadow-2xl">
              <div className="relative w-full h-full rounded-2xl overflow-hidden group">
                {heroImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      index === currentImageIndex ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Image
                      alt={`hero-slide-${index}`}
                      src={image}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                ))}
                {/* Gradient overlays to frame the images */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-6 left-6 right-6 text-left z-20">
                  <span className="text-xs bg-indigo-600/80 text-white font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Our Training Impact
                  </span>
                  <h4 className="text-lg font-bold text-white mt-2 drop-shadow-md">
                    Bridging the Digital Divide
                  </h4>
                  <p className="text-xs text-slate-300 drop-shadow-sm">
                    Enabling underserved youth to construct enterprise code.
                  </p>
                </div>
              </div>

              {/* Slideshow indicators */}
              <div className="absolute bottom-14 right-8 flex space-x-2 z-20">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? "bg-indigo-500 w-4"
                        : "bg-white/40 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 💼 B2B Services & B2C Education Split Section */}
      <section className="py-28 bg-slate-950 border-t border-slate-900/60 relative">
        <div className="absolute top-1/2 left-0 w-84 h-84 bg-indigo-600/5 rounded-full filter blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Enterprise Digital Capabilities
            </h2>
            <p className="text-slate-400 text-lg">
              We design and construct digital products for startups and enterprises, while conducting practical education to grow future talent.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Business/B2B Services Column */}
            <div className="bg-slate-900/30 border border-slate-900 p-8 rounded-2xl space-y-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white pb-3 border-b border-slate-900 flex items-center gap-3">
                <Laptop className="text-indigo-400" /> Client Solutions & Web Services
              </h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-400">
                    <Code size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Corporate Websites & CMS</h4>
                    <p className="text-sm text-slate-400">
                      Sleek multi-page designs with custom visual systems, content management platforms, and high-performance SEO.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-400">
                    <Smartphone size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Custom Applications & SaaS</h4>
                    <p className="text-sm text-slate-400">
                      Highly interactive full-stack applications, client databases, dashboards, and automated payment gateways.
                    </p>
                  </div>
                </div>
              </div>
              
              <Button
                onClick={() => scrollToSection("pricing-section")}
                className="w-full bg-slate-900 border border-slate-850 hover:bg-slate-800 text-white font-medium py-5 rounded-xl transition-all"
              >
                View Website & App Pricing
              </Button>
            </div>

            {/* Education/Academy Services Column */}
            <div className="bg-slate-900/30 border border-slate-900 p-8 rounded-2xl space-y-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white pb-3 border-b border-slate-900 flex items-center gap-3">
                <BookOpen className="text-indigo-400" /> Digital Skills Training Academy
              </h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-400">
                    <Users size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Technical Workshops</h4>
                    <p className="text-sm text-slate-400">
                      Guided coding labs covering JavaScript, React, UI design, and team coding workflows for young programmers.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-400">
                    <Gamepad2 size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Scholastic E-Sports</h4>
                    <p className="text-sm text-slate-400">
                      Nurturing strategic thinking, wellness, and broadcasting skills through organized digital competition structures.
                    </p>
                  </div>
                </div>
              </div>
              
              <Button
                onClick={() => router.push("/courses")}
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-5 rounded-xl transition-all"
              >
                Explore Academic Courses
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* 💳 Brand New Pricing Tiers Section */}
      <section id="pricing-section" className="py-28 bg-slate-950 border-t border-slate-900/60 relative">
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-600/5 rounded-full filter blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/35 text-indigo-300 text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider">
              Pricing Packages
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Website & Application Development
            </h2>
            <p className="text-slate-400 text-lg">
              Transparent, professional pricing designed for companies of all scales. Choose a plan to request an instant quote.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch relative z-10">
            {pricingPlans.map((plan, i) => (
              <PricingCard
                key={i}
                plan={plan}
                onSelect={handleSelectPlan}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-slate-500">
              Need custom service integrations, specific service level agreements (SLAs), or payment installments?{" "}
              <a href="#contact-section" onClick={(e) => { e.preventDefault(); scrollToSection("contact-section"); }} className="text-indigo-400 hover:underline">
                Let&apos;s build a custom plan together.
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-slate-900/30 border-t border-slate-900 py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-16 text-center relative z-10">
          
          <span className="text-indigo-500 text-4xl font-serif">&ldquo;</span>
          <blockquote className="text-slate-200 text-xl md:text-2xl mb-10 italic leading-relaxed">
            Laban2tech has completely redefined my trajectory in technology. The deep technical understanding and structured software logic I gained here have unlocked doors I previously thought closed.
          </blockquote>

          <div className="flex items-center justify-center gap-4 text-white">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border border-slate-800">
              <Image src={Khosi} alt="Omphile Nakedi avatar" fill className="object-cover" />
            </div>
            <div className="text-left">
              <p className="font-bold text-white text-base">Omphile Nakedi</p>
              <p className="text-xs text-slate-500">Graduate, Software Academy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Component (accepts pre-filled selectedPlan) */}
      <Laban2techContactForm selectedPlan={selectedPlan} />

      {/* 🚀 Corporate Footer */}
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
                  <li><Link href="/courses" className="hover:text-white transition-colors">Courses</Link></li>
                  <li><Link href="/workshops" className="hover:text-white transition-colors">Workshops</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Sectors</h4>
                <ul className="space-y-3">
                  <li><Link href="/esports" className="hover:text-white transition-colors">E-Sports</Link></li>
                  <li><a href="#pricing-section" onClick={(e) => { e.preventDefault(); scrollToSection("pricing-section"); }} className="hover:text-white transition-colors cursor-pointer">Pricing</a></li>
                </ul>
              </div>

              {/* <div className="col-span-2 sm:col-span-1">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Company Address</h4>
                <p className="text-slate-400 leading-relaxed">
                  Middelburg, Mpumalanga,<br />
                  South Africa
                </p>
              </div> */}
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