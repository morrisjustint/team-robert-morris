'use client';

import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, ArrowRight } from 'lucide-react';

const footerLinks = {
  Buyers: [
    { label: 'First-Time Home Buyers', href: '#first-time-buyers' },
    { label: 'Buying Process', href: '#journey' },
    { label: 'Mortgage Pre-Approval', href: '#contact' },
    { label: 'Free Buyer Guide', href: '#resources' },
    { label: 'Area Explorer', href: '#areas' },
  ],
  Sellers: [
    { label: 'Selling Your Home', href: '#journey' },
    { label: 'Free Home Valuation', href: '#contact' },
    { label: 'Seller Checklist', href: '#resources' },
    { label: 'Marketing Strategy', href: '#contact' },
  ],
  Company: [
    { label: 'Who We Are', href: '#about' },
    { label: 'Client Testimonials', href: '#testimonials' },
    { label: 'Resources', href: '#resources' },
    { label: 'Contact Us', href: '#contact' },
    { label: 'Newsletter', href: '#newsletter' },
  ],
  Areas: [
    { label: 'Franklin', href: '#areas' },
    { label: 'Brentwood', href: '#areas' },
    { label: 'Nolensville', href: '#areas' },
    { label: 'Spring Hill', href: '#areas' },
    { label: 'Murfreesboro', href: '#areas' },
    { label: 'Gallatin', href: '#areas' },
  ],
};

export default function Footer() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F1C2E]">
      {/* CTA Strip */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-playfair text-xl font-semibold text-white mb-1">
              Ready to take the next step?
            </p>
            <p className="text-white/60 text-sm">
              Our team is ready to help — no pressure, just answers.
            </p>
          </div>
          <button
            onClick={() => scrollTo('#contact')}
            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#C5A46E] hover:bg-[#B08B4A] text-[#0F1C2E] font-bold px-8 py-3.5 rounded-full transition-all group"
          >
            Contact Us Today
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-[#C5A46E] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="font-playfair font-bold text-[#0F1C2E] text-sm">TRM</span>
              </div>
              <div>
                <div className="font-playfair text-white font-semibold text-sm">
                  Team Robert Morris
                </div>
                <div className="text-[#C5A46E] text-xs">Middle Tennessee</div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Trusted real estate experts helping families move smarter across
              Middle Tennessee since day one.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+16155551234"
                className="flex items-center gap-2 text-white/60 hover:text-[#C5A46E] text-sm transition-colors"
              >
                <Phone size={14} />
                (615) 555-1234
              </a>
              <a
                href="mailto:hello@teamrobertmorris.com"
                className="flex items-center gap-2 text-white/60 hover:text-[#C5A46E] text-sm transition-colors"
              >
                <Mail size={14} />
                hello@teamrobertmorris.com
              </a>
              <div className="flex items-start gap-2 text-white/60 text-sm">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                Franklin, TN — Serving All of Middle Tennessee
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 border border-white/20 hover:border-[#C5A46E] rounded-full flex items-center justify-center text-white/50 hover:text-[#C5A46E] transition-all"
                >
                  <Icon size={15} />
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-white/50 hover:text-[#C5A46E] text-sm transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/35 text-xs">
            &copy; {new Date().getFullYear()} Team Robert Morris. All rights reserved. Licensed in Tennessee.
          </p>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms of Service', 'Fair Housing'].map((item) => (
              <button key={item} className="text-white/35 hover:text-white/60 text-xs transition-colors">
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
