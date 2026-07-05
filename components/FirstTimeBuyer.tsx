'use client';

import { CheckCircle, ArrowRight, Download } from 'lucide-react';
import { useState } from 'react';

const steps = [
  {
    number: '01',
    title: 'Check Your Credit Score',
    description:
      "We help you understand what score you need and what to do if you're not there yet — no judgment, just a clear next step.",
  },
  {
    number: '02',
    title: 'Get Pre-Approved',
    description:
      "Before you fall in love with a home, we connect you with trusted local lenders so you know exactly what you can afford.",
  },
  {
    number: '03',
    title: 'Define Your Must-Haves',
    description:
      "We sit down with you (no rush) to understand your lifestyle, your family's needs, and what really matters in a home.",
  },
  {
    number: '04',
    title: 'Tour Homes Together',
    description:
      "We filter the noise and show you homes that actually fit — pointing out things you'd miss on a Zillow scroll.",
  },
  {
    number: '05',
    title: 'Make a Confident Offer',
    description:
      "We walk you through every number in the offer. You'll understand exactly what you're signing — no surprises.",
  },
  {
    number: '06',
    title: 'Close & Celebrate',
    description:
      'We stay with you through inspection, appraisal, and closing day. Then we hand you the keys — and celebrate with you.',
  },
];

const perks = [
  'Plain-language explanations — no jargon',
  'Down payment assistance guidance',
  'Lender connections you can trust',
  'Neighborhood school & safety insights',
  'First-time buyer grant information',
  'Ongoing support after closing',
];

export default function FirstTimeBuyer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleGuideRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section id="first-time-buyers" className="py-24 bg-[#F8F7F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#2E5A3E] font-semibold text-sm tracking-widest uppercase mb-3">
            First-Time Home Buyers
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F1C2E] mb-5 max-w-2xl mx-auto leading-tight">
            Buying Your First Home Doesn&apos;t Have to Be Scary
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            We&apos;ve guided hundreds of first-time buyers through the process — in plain
            English, with real patience, and zero pressure. Here&apos;s exactly how it works.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-2xl p-7 border border-[#E4E1DC] hover:border-[#C5A46E]/40 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="font-playfair text-4xl font-bold text-[#C5A46E]/30 group-hover:text-[#C5A46E]/50 transition-colors mb-3 leading-none">
                {step.number}
              </div>
              <h3 className="font-playfair text-lg font-semibold text-[#0F1C2E] mb-2">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Two-column: Perks + Guide CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Perks */}
          <div>
            <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-[#0F1C2E] mb-6">
              What You Get With Team Robert Morris
            </h3>
            <ul className="space-y-4">
              {perks.map((perk) => (
                <li key={perk} className="flex items-start gap-3">
                  <CheckCircle
                    size={20}
                    className="text-[#2E5A3E] flex-shrink-0 mt-0.5"
                  />
                  <span className="text-gray-700 text-base">{perk}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() =>
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="mt-8 inline-flex items-center gap-2 bg-[#2E5A3E] hover:bg-[#254A33] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-[#2E5A3E]/20 group"
            >
              Talk to a First-Time Buyer Specialist
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Guide Capture */}
          <div className="bg-[#0F1C2E] rounded-2xl p-8 sm:p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#C5A46E]/10 rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-[#C5A46E] rounded-xl flex items-center justify-center mb-5">
                <Download size={22} className="text-[#0F1C2E]" />
              </div>
              <h3 className="font-playfair text-2xl font-bold mb-2">
                Free First-Time Buyer Guide
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Our 22-page guide walks you through every step — from checking your
                credit score to holding your keys — in plain language that actually makes sense.
              </p>

              {submitted ? (
                <div className="bg-[#2E5A3E]/30 border border-[#2E5A3E]/60 rounded-xl p-5 text-center">
                  <CheckCircle className="mx-auto text-[#C5A46E] mb-2" size={28} />
                  <p className="text-white font-semibold">Guide sent to your inbox!</p>
                  <p className="text-white/60 text-sm mt-1">
                    Check your email — it&apos;s on its way.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleGuideRequest} className="space-y-3">
                  <input
                    type="text"
                    placeholder="Your first name"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-[#C5A46E] transition-colors"
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-[#C5A46E] transition-colors"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#C5A46E] hover:bg-[#B08B4A] text-[#0F1C2E] font-bold py-3.5 rounded-xl transition-colors text-sm"
                  >
                    Send Me the Free Guide
                  </button>
                  <p className="text-white/40 text-xs text-center">
                    No spam. Unsubscribe anytime.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
