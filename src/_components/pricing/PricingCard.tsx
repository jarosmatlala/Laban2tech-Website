"use client";

import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface PricingPlan {
  name: string;
  price: string;
  usdPrice?: string;
  description: string;
  features: string[];
  popular?: boolean;
  ctaText?: string;
}

interface PricingCardProps {
  plan: PricingPlan;
  onSelect: (planName: string) => void;
}

export default function PricingCard({ plan, onSelect }: PricingCardProps) {
  return (
    <div
      className={`relative rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 ${
        plan.popular
          ? "bg-gradient-to-b from-indigo-950/80 to-slate-900/80 border-2 border-indigo-500 shadow-2xl shadow-indigo-500/10 md:scale-105 z-10"
          : "bg-slate-900/40 border border-slate-800 hover:border-slate-700 shadow-lg hover:scale-[1.02]"
      }`}
    >
      {plan.popular && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
          Most Popular
        </span>
      )}

      <div>
        <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
        <p className="text-sm text-slate-400 mb-6">{plan.description}</p>
        <div className="flex items-baseline gap-2 mb-6">
          <span className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {plan.price}
          </span>
          {plan.usdPrice && (
            <span className="text-xs text-slate-500 font-medium">
              (~{plan.usdPrice})
            </span>
          )}
        </div>

        <ul className="space-y-4 mb-8">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mt-0.5">
                <Check size={12} className="stroke-[3]" />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <Button
        onClick={() => onSelect(plan.name)}
        className={`w-full py-6 font-semibold rounded-xl text-base transition-all duration-300 ${
          plan.popular
            ? "bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white shadow-lg shadow-indigo-500/25"
            : "bg-slate-850 hover:bg-slate-800 text-white border border-slate-700 hover:border-slate-600"
        }`}
      >
        {plan.ctaText || "Get Started"}
      </Button>
    </div>
  );
}
