'use client';

import { useState } from 'react';
import {
  FileText,
  Calculator,
  List,
  BookOpen,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

const resources = [
  {
    icon: FileText,
    title: "First-Time Buyer's Complete Guide",
    description:
      '22 pages of plain-language guidance for first-time buyers — from credit check to closing day.',
    tag: 'Free Guide',
    color: 'text-[#2E5A3E] bg-[#2E5A3E]/10',
  },
  {
    icon: Calculator,
    title: 'How Much Home Can You Afford?',
    description:
      'Understand your real buying power — including taxes, insurance, and what lenders actually look at.',
    tag: 'Calculator Guide',
    color: 'text-[#C5A46E] bg-[#C5A46E]/10',
  },
  {
    icon: List,
    title: 'Home Seller Checklist',
    description:
      '35 steps to maximize your home value before listing — small changes that yield big returns.',
    tag: 'Free Checklist',
    color: 'text-[#0F1C2E] bg-[#0F1C2E]/10',
  },
  {
    icon: BookOpen,
    title: 'Middle Tennessee Neighborhood Guide',
    description:
      'Detailed breakdowns of every major area — schools, commutes, home types, and price ranges.',
    tag: 'Area Guide',
    color: 'text-[#2E5A3E] bg-[#2E5A3E]/10',
  },
];

export default function Resources() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section id="resources" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#C5A46E] font-semibold text-sm tracking-widest uppercase mb-3">
            Free Resources
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#0F1C2E] mb-4">
            Everything You Need to Move Smart
          </h2>
          <p className="text-gray-600 text-base max-w-xl mx-auto leading-relaxed">
            We believe informed buyers and sellers make better decisions. Use
            these free resources to gain confidence at every stage.
          </p>
        </div>

        {/* Resource cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {resources.map((resource) => {
            const Icon = resource.icon;
            return (
              <div
                key={resource.title}
                className="group bg-[#F8F7F4] rounded-2xl p-6 border border-[#E4E1DC] hover:border-[#C5A46E]/40 hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() =>
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${resource.color}`}>
                  <Icon size={20} />
                </div>
                <span className="text-xs font-semibold text-[#C5A46E] uppercase tracking-wider mb-3 block">
                  {resource.tag}
                </span>
                <h3 className="font-playfair text-base font-semibold text-[#0F1C2E] mb-2 leading-snug">
                  {resource.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {resource.description}
                </p>
                <div className="text-[#2E5A3E] text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Download Free
                  <ArrowRight size={14} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Newsletter */}
        <div
          id="newsletter"
          className="bg-gradient-to-br from-[#0F1C2E] to-[#1A2F47] rounded-2xl p-8 sm:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A46E]/10 rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#2E5A3E]/20 rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <p className="text-[#C5A46E] font-semibold text-sm tracking-widest uppercase mb-3">
              Stay Informed
            </p>
            <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-white mb-4">
              Middle Tennessee Market Updates
            </h3>
            <p className="text-white/65 text-base mb-8 leading-relaxed">
              Get monthly market insights, new listings in your target area, and
              first-time buyer tips — straight to your inbox. No spam, ever.
            </p>

            {submitted ? (
              <div className="inline-flex items-center gap-2 bg-[#2E5A3E]/30 border border-[#2E5A3E]/60 text-white px-6 py-4 rounded-full">
                <CheckCircle size={18} className="text-[#C5A46E]" />
                <span className="font-semibold">You&apos;re subscribed! Welcome to the community.</span>
              </div>
            ) : (
              <form
                onSubmit={handleNewsletter}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="flex-1 bg-white/10 border border-white/20 rounded-full px-5 py-3.5 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-[#C5A46E] transition-colors"
                />
                <button
                  type="submit"
                  className="bg-[#C5A46E] hover:bg-[#B08B4A] text-[#0F1C2E] font-bold px-7 py-3.5 rounded-full transition-colors text-sm whitespace-nowrap"
                >
                  Subscribe Free
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
