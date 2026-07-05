'use client';

import { Star, Quote } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Sarah & Marcus Thompson',
    location: 'Franklin, TN',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    rating: 5,
    text: "We were completely overwhelmed as first-time buyers. Team Robert Morris held our hand through every step, explained every document in plain English, and helped us get our dream home $12K under asking. I can't imagine doing this with anyone else.",
    type: 'First-Time Buyer',
  },
  {
    name: 'Jennifer Caldwell',
    location: 'Brentwood, TN',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    rating: 5,
    text: "Robert's team sold our home in 4 days — 8% over asking price. Their marketing strategy was unlike anything I'd seen. Every open house felt like a premium event. Worth every penny of their commission and then some.",
    type: 'Home Seller',
  },
  {
    name: 'David & Priya Patel',
    location: 'Nolensville, TN',
    image: 'https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    rating: 5,
    text: "We were relocating from Chicago and didn't know Middle Tennessee at all. The team did a deep dive into our needs and showed us neighborhoods we never would have found on Zillow. We're so happy in Nolensville — it's perfect for our family.",
    type: 'Relocation Buyer',
  },
  {
    name: 'Mike & Carla Reyes',
    location: 'Spring Hill, TN',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    rating: 5,
    text: "As move-up buyers, we needed to sell and buy simultaneously. The coordination was flawless — we closed both on the same day with zero stress. Their experience handling complex transactions is truly remarkable.",
    type: 'Move-Up Buyer',
  },
  {
    name: 'Lisa Wentworth',
    location: 'Murfreesboro, TN',
    image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    rating: 5,
    text: "I reached out after a failed deal with another agent. Within two weeks of working with Team Robert Morris, I was under contract on a beautiful home in my price range. Their local knowledge is unmatched.",
    type: 'First-Time Buyer',
  },
  {
    name: 'James & Amy Sullivan',
    location: 'Gallatin, TN',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    rating: 5,
    text: "Patient, professional, and deeply knowledgeable about the Gallatin market. They walked us through every option without ever making us feel rushed. We found a waterfront property we didn't even know existed. Absolute five-star experience.",
    type: 'Luxury Buyer',
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="py-24 bg-[#0F1C2E] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#C5A46E] font-semibold text-sm tracking-widest uppercase mb-3">
            Client Stories
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-4">
            Real Families. Real Results.
          </h2>
          <p className="text-white/60 text-base max-w-xl mx-auto leading-relaxed">
            Don&apos;t take our word for it — hear from the families we&apos;ve had the
            privilege of helping across Middle Tennessee.
          </p>
        </div>

        {/* Featured testimonial */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-10 mb-8 relative">
          <Quote className="absolute top-6 right-6 text-[#C5A46E]/20" size={48} />
          <div className="flex items-center gap-1 mb-5">
            {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
              <Star key={i} size={18} className="fill-[#C5A46E] text-[#C5A46E]" />
            ))}
            <span className="ml-2 bg-[#C5A46E]/20 text-[#C5A46E] text-xs font-medium px-3 py-1 rounded-full">
              {testimonials[activeIndex].type}
            </span>
          </div>
          <blockquote className="font-playfair text-lg sm:text-xl text-white leading-relaxed mb-6 max-w-3xl">
            &ldquo;{testimonials[activeIndex].text}&rdquo;
          </blockquote>
          <div className="flex items-center gap-4">
            <img
              src={testimonials[activeIndex].image}
              alt={testimonials[activeIndex].name}
              className="w-12 h-12 rounded-full object-cover border-2 border-[#C5A46E]/40"
            />
            <div>
              <div className="text-white font-semibold">
                {testimonials[activeIndex].name}
              </div>
              <div className="text-white/50 text-sm">
                {testimonials[activeIndex].location}
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial selector */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setActiveIndex(i)}
              className={`text-center p-4 rounded-xl transition-all duration-200 ${
                i === activeIndex
                  ? 'bg-[#C5A46E]/20 border border-[#C5A46E]/50'
                  : 'bg-white/5 border border-white/10 hover:border-white/20'
              }`}
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-10 h-10 rounded-full object-cover mx-auto mb-2 border-2 border-white/10"
              />
              <div className="text-white text-xs font-medium leading-tight truncate">
                {t.name.split(' ')[0]}
              </div>
              <div className="text-white/40 text-xs truncate">
                {t.location.split(',')[0]}
              </div>
            </button>
          ))}
        </div>

        {/* Trust bar */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-8 pt-12 border-t border-white/10">
          {[
            { value: '500+', label: 'Happy Families' },
            { value: '4.98', label: 'Average Rating' },
            { value: '$2.1B+', label: 'Total Sales Volume' },
            { value: '#1', label: 'Middle TN Team' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-playfair text-3xl font-bold text-[#C5A46E] mb-1">
                {stat.value}
              </div>
              <div className="text-white/50 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
