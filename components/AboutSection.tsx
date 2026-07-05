'use client';

import { Award, Heart, Users, TrendingUp, ArrowRight } from 'lucide-react';

const team = [
  {
    name: 'Robert Morris',
    title: 'Lead Realtor & Founder',
    image:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'A Middle Tennessee native with 15+ years of experience, Robert built this team on one belief: every family deserves an agent who treats their home purchase like their own.',
  },
  {
    name: 'Maria Chen',
    title: 'First-Time Buyer Specialist',
    image:
      'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Maria specializes in guiding first-time buyers through the process with patience and clarity. Her clients consistently say she made something intimidating feel exciting.',
  },
  {
    name: 'James Whitfield',
    title: 'Luxury & Relocation Specialist',
    image:
      'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: "James has deep roots in Williamson County's luxury market and has helped over 80 families relocate to Middle Tennessee from across the country.",
  },
];

const values = [
  {
    icon: Heart,
    title: 'Family First',
    description: 'We treat every client like family — with honesty, patience, and genuine care.',
  },
  {
    icon: Award,
    title: 'Local Expertise',
    description: 'Born and raised here. We know these neighborhoods the way only locals can.',
  },
  {
    icon: Users,
    title: 'No Pressure',
    description: "We're advisors, not salespeople. Our job is to help you make the right choice.",
  },
  {
    icon: TrendingUp,
    title: 'Proven Results',
    description: '98% client satisfaction and hundreds of successful closes across Middle Tennessee.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#F8F7F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#C5A46E] font-semibold text-sm tracking-widest uppercase mb-3">
            Who We Are
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#0F1C2E] mb-5 leading-tight">
            Your Neighbors. Your Advocates.
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto leading-relaxed">
            Team Robert Morris isn&apos;t a big-box real estate company. We&apos;re a
            close-knit team of Middle Tennessee locals who got into real estate because
            we love helping families — and we&apos;re proud of every relationship we&apos;ve built.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="text-center p-7 bg-white rounded-2xl border border-[#E4E1DC] hover:border-[#C5A46E]/40 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#0F1C2E] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-[#C5A46E]" />
                </div>
                <h3 className="font-playfair text-lg font-semibold text-[#0F1C2E] mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Team */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="group bg-white rounded-2xl overflow-hidden border border-[#E4E1DC] hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1C2E]/60 via-transparent to-transparent" />
              </div>
              <div className="p-7">
                <h3 className="font-playfair text-xl font-bold text-[#0F1C2E] mb-1">
                  {member.name}
                </h3>
                <p className="text-[#2E5A3E] text-sm font-semibold mb-4">
                  {member.title}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={() =>
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="inline-flex items-center gap-2 bg-[#0F1C2E] hover:bg-[#2E5A3E] text-white font-semibold px-8 py-4 rounded-full transition-colors group"
          >
            Meet the Full Team
            <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
