'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1600)',
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F1C2E]/92 via-[#0F1C2E]/75 to-[#0F1C2E]/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F1C2E]/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-2xl xl:max-w-3xl">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 bg-[#C5A46E]/20 border border-[#C5A46E]/40 text-[#C5A46E] text-sm font-medium px-4 py-2 rounded-full mb-6 transition-all duration-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <span className="w-2 h-2 bg-[#C5A46E] rounded-full animate-pulse" />
            Trusted Middle Tennessee Realtors
          </div>

          {/* Headline */}
          <h1
            className={`font-playfair text-4xl sm:text-5xl xl:text-6xl font-bold text-white leading-[1.15] mb-6 transition-all duration-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Helping You{' '}
            <span className="text-[#C5A46E]">Move Smarter</span>
            <br />
            Across Middle Tennessee
          </h1>

          {/* Subheadline */}
          <p
            className={`text-white/80 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl transition-all duration-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '350ms' }}
          >
            Whether you&apos;re buying your first home or your forever home, we
            guide you every step with honesty, expertise, and genuine care.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <button
              onClick={() => scrollTo('#first-time-buyers')}
              className="group inline-flex items-center justify-center gap-2 bg-[#C5A46E] hover:bg-[#B08B4A] text-[#0F1C2E] font-bold text-base px-8 py-4 rounded-full transition-all duration-200 shadow-xl shadow-[#C5A46E]/20 hover:shadow-[#C5A46E]/30 hover:scale-105"
            >
              First-Time Home Buyers
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo('#contact')}
              className="inline-flex items-center justify-center gap-2 border-2 border-white/50 hover:border-white text-white font-semibold text-base px-8 py-4 rounded-full transition-all duration-200 hover:bg-white/10"
            >
              Talk to an Agent
            </button>
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-3 gap-6 max-w-md transition-all duration-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '650ms' }}
          >
            {[
              { value: '500+', label: 'Families Served' },
              { value: '15+', label: 'Years Experience' },
              { value: '98%', label: 'Client Satisfaction' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-playfair text-2xl sm:text-3xl font-bold text-[#C5A46E]">
                  {stat.value}
                </div>
                <div className="text-white/65 text-xs sm:text-sm mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('#journey')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white flex flex-col items-center gap-1 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
}
