'use client';

import { MapPin, TrendingUp, Users, ArrowRight } from 'lucide-react';

const areas = [
  {
    name: 'Franklin',
    county: 'Williamson County',
    image: 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=800',
    medianPrice: '$650K',
    highlight: 'Historic downtown, top-rated schools, vibrant community.',
    tags: ['Family-Friendly', 'Historic Downtown', 'Top Schools'],
  },
  {
    name: 'Brentwood',
    county: 'Williamson County',
    image: 'https://images.pexels.com/photos/1512516/pexels-photo-1512516.jpeg?auto=compress&cs=tinysrgb&w=800',
    medianPrice: '$850K',
    highlight: 'Prestigious living, luxury estates, and excellent amenities.',
    tags: ['Luxury', 'Low Crime', 'Great Schools'],
  },
  {
    name: 'Nolensville',
    county: 'Williamson County',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
    medianPrice: '$540K',
    highlight: 'Small-town charm with rapid growth and modern conveniences.',
    tags: ['Growing Area', 'Charming', 'New Construction'],
  },
  {
    name: 'Spring Hill',
    county: 'Maury / Williamson',
    image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
    medianPrice: '$430K',
    highlight: 'Affordable, family-friendly, and growing fast.',
    tags: ['Affordable', 'Fast Growing', 'Family Neighborhoods'],
  },
  {
    name: 'Murfreesboro',
    county: 'Rutherford County',
    image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800',
    medianPrice: '$380K',
    highlight: "MTSU college town with diverse neighborhoods and strong value.",
    tags: ['Best Value', 'University Town', 'Diverse'],
  },
  {
    name: 'Gallatin',
    county: 'Sumner County',
    image: 'https://images.pexels.com/photos/1029602/pexels-photo-1029602.jpeg?auto=compress&cs=tinysrgb&w=800',
    medianPrice: '$360K',
    highlight: 'Lakeside living on Old Hickory with a thriving downtown.',
    tags: ['Lakeside', 'Downtown Vibe', 'Affordable'],
  },
];

export default function AreaExplorer() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="areas" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-12">
          <div>
            <p className="text-[#C5A46E] font-semibold text-sm tracking-widest uppercase mb-3">
              Area Explorer
            </p>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#0F1C2E] leading-tight">
              Find Your Perfect Neighborhood
            </h2>
          </div>
          <p className="text-gray-500 text-base max-w-xs leading-relaxed sm:text-right">
            We know every street, school district, and hidden gem across Middle Tennessee.
          </p>
        </div>

        {/* Area cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area) => (
            <div
              key={area.name}
              className="group rounded-2xl overflow-hidden border border-[#E4E1DC] hover:border-transparent hover:shadow-2xl transition-all duration-300 bg-white"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={area.image}
                  alt={`${area.name} neighborhood`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1C2E]/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <div className="font-playfair text-xl font-bold text-white">
                      {area.name}
                    </div>
                    <div className="flex items-center gap-1 text-white/70 text-xs mt-0.5">
                      <MapPin size={11} />
                      {area.county}
                    </div>
                  </div>
                  <div className="bg-[#C5A46E] text-[#0F1C2E] text-xs font-bold px-3 py-1.5 rounded-full">
                    {area.medianPrice}
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {area.highlight}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {area.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#F8F7F4] text-[#2E5A3E] text-xs font-medium px-3 py-1 rounded-full border border-[#E4E1DC]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  onClick={scrollToContact}
                  className="text-[#0F1C2E] text-sm font-semibold flex items-center gap-1 hover:gap-2 hover:text-[#2E5A3E] transition-all group/btn"
                >
                  Explore {area.name}
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 bg-[#F8F7F4] rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#E4E1DC]">
          <div>
            <h3 className="font-playfair text-2xl font-bold text-[#0F1C2E] mb-2">
              Not Sure Which Area Fits Your Family?
            </h3>
            <p className="text-gray-500 text-base max-w-lg">
              Tell us your priorities — commute, schools, budget, yard size — and
              we&apos;ll tell you exactly which neighborhood to look at.
            </p>
          </div>
          <button
            onClick={scrollToContact}
            className="flex-shrink-0 bg-[#0F1C2E] hover:bg-[#2E5A3E] text-white font-semibold px-8 py-4 rounded-full transition-colors whitespace-nowrap inline-flex items-center gap-2 group"
          >
            Get a Free Area Match
            <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
