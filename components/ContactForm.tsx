'use client';

import { useState } from 'react';
import { CheckCircle, Phone, Mail, MapPin, ArrowRight, Send } from 'lucide-react';

const services = [
  'Buying a Home',
  'Selling a Home',
  'First-Time Buyer Guidance',
  'Relocation Assistance',
  'Investment Property',
  'Free Home Valuation',
  'Neighborhood Consultation',
  'Other',
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.firstName && form.email) {
      setSubmitted(true);
    }
  };

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  return (
    <section id="contact" className="py-24 bg-[#F8F7F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left: Info */}
          <div className="lg:col-span-2">
            <p className="text-[#C5A46E] font-semibold text-sm tracking-widest uppercase mb-3">
              Get In Touch
            </p>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#0F1C2E] mb-5 leading-tight">
              Let&apos;s Start Your Home Journey Together
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Whether you have one question or you&apos;re ready to get started, our
              team responds to every inquiry within one business hour. No pressure,
              no obligation — just honest, helpful guidance.
            </p>

            <div className="space-y-5">
              {[
                {
                  icon: Phone,
                  label: 'Call or Text',
                  value: '(615) 555-1234',
                  href: 'tel:+16155551234',
                },
                {
                  icon: Mail,
                  label: 'Email Us',
                  value: 'hello@teamrobertmorris.com',
                  href: 'mailto:hello@teamrobertmorris.com',
                },
                {
                  icon: MapPin,
                  label: 'Serving All of',
                  value: 'Middle Tennessee',
                  href: '#areas',
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-11 h-11 bg-[#0F1C2E] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-[#C5A46E]" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-xs font-medium uppercase tracking-wide mb-0.5">
                        {item.label}
                      </div>
                      <div className="text-[#0F1C2E] font-semibold group-hover:text-[#2E5A3E] transition-colors">
                        {item.value}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Trust note */}
            <div className="mt-10 bg-[#0F1C2E] rounded-2xl p-6 text-white">
              <div className="font-playfair text-lg font-semibold mb-2">
                Our Promise to You
              </div>
              <p className="text-white/65 text-sm leading-relaxed">
                We will never pressure you, share your information, or push you
                toward a home that isn&apos;t right for your family. Our only goal is
                to help you make the best decision — even if that means waiting.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3 bg-white rounded-2xl p-8 sm:p-10 border border-[#E4E1DC] shadow-sm">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-[#2E5A3E]/10 rounded-full flex items-center justify-center mx-auto mb-5">
                  <CheckCircle size={32} className="text-[#2E5A3E]" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-[#0F1C2E] mb-3">
                  We&apos;ll Be in Touch Shortly!
                </h3>
                <p className="text-gray-500 text-base max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out. A member of Team Robert Morris will
                  contact you within 1 business hour.
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-playfair text-2xl font-bold text-[#0F1C2E] mb-7">
                  How Can We Help?
                </h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.firstName}
                        onChange={(e) => update('firstName', e.target.value)}
                        placeholder="Jane"
                        className="w-full border border-[#E4E1DC] rounded-xl px-4 py-3 text-sm text-[#0F1C2E] focus:outline-none focus:border-[#C5A46E] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Last Name
                      </label>
                      <input
                        type="text"
                        value={form.lastName}
                        onChange={(e) => update('lastName', e.target.value)}
                        placeholder="Smith"
                        className="w-full border border-[#E4E1DC] rounded-xl px-4 py-3 text-sm text-[#0F1C2E] focus:outline-none focus:border-[#C5A46E] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      placeholder="jane@example.com"
                      className="w-full border border-[#E4E1DC] rounded-xl px-4 py-3 text-sm text-[#0F1C2E] focus:outline-none focus:border-[#C5A46E] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      placeholder="(615) 000-0000"
                      className="w-full border border-[#E4E1DC] rounded-xl px-4 py-3 text-sm text-[#0F1C2E] focus:outline-none focus:border-[#C5A46E] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      I&apos;m interested in...
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => update('service', e.target.value)}
                      className="w-full border border-[#E4E1DC] rounded-xl px-4 py-3 text-sm text-[#0F1C2E] focus:outline-none focus:border-[#C5A46E] transition-colors bg-white"
                    >
                      <option value="">Select a service</option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Tell Us About Your Situation
                    </label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => update('message', e.target.value)}
                      placeholder="What are you looking for? Any specific areas, timeline, or questions?"
                      className="w-full border border-[#E4E1DC] rounded-xl px-4 py-3 text-sm text-[#0F1C2E] focus:outline-none focus:border-[#C5A46E] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#0F1C2E] hover:bg-[#2E5A3E] text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 group"
                  >
                    Send Message
                    <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-gray-400 text-xs text-center">
                    We respond within 1 business hour. Your information stays private.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
