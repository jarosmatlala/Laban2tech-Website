import { Button } from "@/components/ui/button";
import Image from "next/image";
import hero from "./assets/main.jpg";
import pic1 from "./assets/20231124_115809.jpg";
import pic2 from "./assets/20231124_131410.jpg";
import pic3 from "./assets/8G0A8515.jpg";
import pic4 from "./assets/IMG_0138.jpg";
import Tsewe from "./assets/Tsewe.jpg";

import siyafunda_1 from "./assets/siyafunda_1.jpg";
import { Info_Card } from "@/_components";
import relume from "./assets/Relume.svg";
import avatar from "./assets/Avatar Image.png";
import logo from "@/app/assets/Laban- (1).png";

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
  return (
    <div>
      {/* Hero Section */}
      <main className="flex flex-col lg:flex-row px-4 md:px-6 lg:px-16 gap-8 min-h-screen items-center justify-center py-8">
        <div className="w-full lg:w-1/2 relative">
          <Image
            alt="hero"
            // src={pic1}
           src={Tsewe}

            className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-lg shadow-lg"
          />
        </div>

{/* <right section></right>
        {/* <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6"> */}
        

<div className="w-full lg:w-1/2 relative flex flex-col justify-center space-y-6 overflow-hidden">
  {/* Animated Logo Backgrounds */}
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    {[logo, logo, logo].map((img, idx) => (
      <Image
        key={idx}
        src={img}
        alt={`logo-${idx}`}
        className={`
          absolute w-3/4 opacity-10 animate-spin-slow
          animate-[fadeInOut_6s_${idx * 2}s_infinite]
        `}
      />
    ))}
  </div>

  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
    EMPOWERING THE FUTURE THROUGH DIGITAL EDUCATION
  </h1>
  <div className="space-y-4 text-base md:text-lg text-gray-700">
    <p>
      Laban2tech is a South African EduTech Company, focused
      on equipping young minds with digital skills for the Fourth Industrial
      Revolution.
    </p>
    <p>
      We are passionate about making technology education accessible,
      engaging, and impactful — especially for underserved communities.
    </p>
    <p>
      Our journey began with a mission to close the digital divide and has
      evolved into a movement that combines innovation, education, and
      community development.
    </p>
  </div>
  <div className="flex flex-col sm:flex-row gap-4 pt-4">
    {/* <Button size="lg" className="flex-1 sm:flex-none bg-blue-600 hover:bg-blue-700">
      Learn More →
    </Button>
    <Button variant="outline" size="lg" className="flex-1 sm:flex-none border-blue-600 text-blue-600 hover:bg-blue-50">
      Sign In
    </Button> */}
  </div>
</div>


      </main>

      {/* Services Section */}
      <section className="min-h-screen px-4 md:px-6 lg:px-16 py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 max-w-4xl mx-auto text-blue-900">
              Unlock Your Digital Potential with Laban2tech
            </h2>
            <p className="text-lg md:text-xl text-blue-700 max-w-3xl mx-auto">
              At Laban2tech, we offer innovative programs designed to equip
              underserved youth with essential digital skills. Join us in bridging
              the digital divide and creating opportunities for a brighter future.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Info_Card
              // image={hero}
                            image={Tsewe}

              title="Comprehensive Coding and Programming Courses"
              paragraph="Learn the fundamentals of coding and software development."
            />
            <Info_Card
              image={pic3}
              title="Creative Digital Design and Multimedia Training"
              paragraph="Explore the world of graphic design and video editing."
            />
            <Info_Card
              image={siyafunda_1}
              title="Hands-On Workshops for Real-World Experience"
              paragraph="Participate in interactive sessions that enhance learning."
            />
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      {/* <section className="min-h-screen px-4 md:px-6 lg:px-16 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Info_Card
              image={relume}
              title="Comprehensive Coding and Programming Courses"
              paragraph="Learn the fundamentals of coding and software development."
            />
            <Info_Card
              image={relume}
              title="Creative Digital Design and Multimedia Training"
              paragraph="Explore the world of graphic design and video editing."
            />
            <Info_Card
              image={relume}
              title="Hands-On Workshops for Real-World Experience"
              paragraph="Participate in interactive sessions that enhance learning."
            />
          </div>
        </div>
      </section> */}

      {/* Feature Section
      <section className="min-h-screen px-4 md:px-6 lg:px-16 py-16 bg-gradient-to-br from-blue-100 to-blue-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
                Unlock Your Potential with Digital Skills
              </h2>
              <p className="text-lg text-blue-700">
                // Our programs equip students with essential digital skills. Gain
                confidence and open doors to new opportunities.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
                  <h3 className="text-xl font-semibold mb-3 text-blue-900">
                    Skill Development
                  </h3>
                  <p className="text-gray-600">
                    Learn in-demand skills that enhance employability and career
                    growth.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-pink-500">
                  <h3 className="text-xl font-semibold mb-3 text-blue-900">
                    Community Support
                  </h3>
                  <p className="text-gray-600">
                    Join a network of like-minded peers and mentors for guidance
                    and encouragement.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <Image
                src={pic2}
                alt="building"
                width={800}
                height={400}
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* Testimonial Section */}
      <section className="bg-blue-900 py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-16 text-center">
          <div className="flex justify-center gap-2 mb-8">
            <StarIcon color="#fbbf24" size={32} />
            <StarIcon color="#fbbf24" size={32} />
            <StarIcon color="#fbbf24" size={32} />
          </div>
          <blockquote className="text-white text-xl md:text-2xl mb-12 italic">
            "Laban2tech has transformed my understanding of technology. The skills
            I've gained here have opened new doors for my future."
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