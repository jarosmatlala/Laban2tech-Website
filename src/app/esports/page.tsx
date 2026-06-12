"use client";

import React from "react";
import Layout from "@/_components/Layout";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import sport2Image from "@/app/assets/sport2.jpg";
import etoolsImage from "@/app/assets/etools.avif";

export default function EsportsPage() {
  return (
    <Layout>
      <div className="bg-slate-950 text-slate-100">

        {/* HERO SECTION */}
        <section className="relative py-24 px-6 md:px-20">
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

          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Holistic eSports Learning
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-12">
              Our holistic eSports program goes beyond gaming. We nurture
              students’ physical health, mental resilience, digital skills,
              and career pathways to ensure they thrive both in and out of
              the game.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm hover:border-indigo-500 transition">
                <h3 className="font-bold text-xl text-indigo-400 mb-3">🎮 Gaming Skills</h3>
                <p className="text-slate-300">
                  Learn teamwork, strategy, communication, and competitive eSports fundamentals.
                </p>
              </div>

              <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm hover:border-indigo-500 transition">
                <h3 className="font-bold text-xl text-indigo-400 mb-3">🧠 Health & Wellness</h3>
                <p className="text-slate-300">
                  Develop healthy habits, manage stress, and balance screen time with physical activity.
                </p>
              </div>

              <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm hover:border-indigo-500 transition">
                <h3 className="font-bold text-xl text-indigo-400 mb-3">🎓 Career Skills</h3>
                <p className="text-slate-300">
                  Explore opportunities in broadcasting, streaming, game design, and digital entrepreneurship.
                </p>
              </div>

              <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm hover:border-indigo-500 transition">
                <h3 className="font-bold text-xl text-indigo-400 mb-3">🌍 Community & Values</h3>
                <p className="text-slate-300">
                  Promote inclusivity, teamwork, positive gaming culture, and responsible online behavior.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROGRAM BENEFITS */}
        <section className="relative py-24 px-6 md:px-20">
          <div className="absolute inset-0 z-0">
            <Image
              src={etoolsImage}
              alt="eSports Tools"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-slate-950/85"></div>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto">
            <h2 className="text-4xl font-extrabold text-white text-center mb-12">
              Why Choose Our eSports Program?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[ 
                {
                  title: "Professional Coaching",
                  text: "Learn from experienced eSports professionals and educators who understand both gaming and youth development."
                },
                {
                  title: "State-of-the-Art Facilities",
                  text: "Access high-performance gaming equipment and dedicated training spaces designed for optimal learning."
                },
                {
                  title: "Tournament Experience",
                  text: "Compete in organized tournaments and leagues to develop competitive skills in a supportive environment."
                },
                {
                  title: "Holistic Development",
                  text: "Build life skills including communication, problem-solving, and digital citizenship alongside gaming expertise."
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-white mb-2">{item.title}</h3>
                    <p className="text-slate-300">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 md:px-20 bg-slate-900 border-t border-slate-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
              Ready to Level Up?
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              Join our eSports program and start your journey toward becoming a well‑rounded digital athlete.
            </p>

            <Button
              size="lg"
              className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-semibold px-10 py-6 rounded-xl shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:scale-105"
            >
              Apply Now
            </Button>
          </div>
        </section>

      </div>
    </Layout>
  );
}
