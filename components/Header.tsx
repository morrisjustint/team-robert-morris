'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'First-Time Buyers', href: '#first-time-buyers' },
  { label: 'Buying', href: '#journey' },
  { label: 'Selling', href: '#journey' },
  { label: 'Areas', href: '#areas' },
  { label: 'Resources', href: '#resources' },
  { label: 'Who We Are', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0F1C2E] shadow-lg py-3'
          : 'bg-[#0F1C2E]/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-3 group"
          >
            <Image
              src="/Logo_B7.svg"
              alt="Team Robert Morris"
              width={44}
              height={44}
              className="h-11 w-11 flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
              priority
            />
            <Image
              src="/Logo_wordmark_white.svg"
              alt="Team Robert Morris — Middle Tennessee Real Estate"
              width={300}
              height={80}
              className="h-8 md:h-10 w-auto max-w-[200px] sm:max-w-[300px] md:max-w-[340px] hidden sm:block transition-opacity duration-300 group-hover:opacity-80"
              priority
            />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-white hover:text-[#C5A46E] text-sm font-medium px-3 py-2 rounded transition-colors duration-200 whitespace-nowrap"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+16155551234"
              className="flex items-center gap-2 text-[#C5A46E] hover:text-white text-sm font-medium transition-colors"
            >
              <Phone size={15} />
              (615) 555-1234
            </a>
            <button
              onClick={() => handleNavClick('#contact')}
              className="bg-[#C5A46E] hover:bg-[#B08B4A] text-[#0F1C2E] font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-[#C5A46E]/20"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2 rounded hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0F1C2E] border-t border-white/10 animate-fade-in">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-white/85 hover:text-[#C5A46E] text-base font-medium py-3 px-4 rounded text-left transition-colors border-b border-white/5 last:border-0"
              >
                {link.label}
              </button>
            ))}
            <div className="mt-3 flex flex-col gap-2 pt-3 border-t border-white/10">
              <a
                href="tel:+16155551234"
                className="flex items-center gap-2 text-[#C5A46E] text-base font-medium px-4 py-2"
              >
                <Phone size={16} />
                (615) 555-1234
              </a>
              <button
                onClick={() => handleNavClick('#contact')}
                className="bg-[#C5A46E] text-[#0F1C2E] font-semibold text-base py-3 px-6 rounded-full w-full"
              >
                Get Started Today
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
