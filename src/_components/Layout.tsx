"use client";

import Header from "@/_components/Header";
import Footer from "@/_components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      <Header />
      <main className="pt-24">{children}</main>
      <Footer />
    </div>
  );
}
