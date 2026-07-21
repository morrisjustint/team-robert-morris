import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

const team = [
  {
    name: 'Robert Morris Jr.',
    title: 'Founder & Broker — "RoMo"',
    bio: 'A 40+ year veteran of Middle Tennessee real estate, Robert has earned Realtor® of the Year honors and Tennessee Realtor® Educator of the Year twice. A past President of the Middle Tennessee Association of REALTORS®, he blends time-tested fundamentals with modern systems to guide families and investors alike.',
    photo: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Deborah Morris',
    title: 'Co-Founder & Client Advocate',
    bio: 'Deborah brings decades of relationship-driven service to every transaction. Her warmth, attention to detail, and deep community ties make every client feel like family from the first conversation through closing day.',
    photo: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Justin Morris',
    title: 'Lead Agent & Technology Director',
    bio: 'Justin pairs fresh technological innovation with the family\'s legacy of leadership. From digital marketing strategy to data-driven pricing, he ensures every listing reaches the right buyer and every client gets a modern, seamless experience.',
    photo: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'John Hayslett',
    title: 'Agent & Market Specialist',
    bio: 'John\'s sharp market analysis and steady guidance make him a trusted advisor for buyers and sellers across Franklin, Brentwood, and Spring Hill. He translates complex market data into clear, confident decisions for every client.',
    photo: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Kaelyn Morris',
    title: 'Client Experience Coordinator',
    bio: 'Kaelyn represents the next generation of the Morris family legacy. She keeps every transaction organized, communicates proactively, and ensures no detail slips through the cracks — making the journey smooth from start to finish.',
    photo: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export const metadata = {
  title: 'Meet the Core Team | Team Robert Morris — Onward Real Estate',
  description:
    'Multi-generational expertise serving Murfreesboro, Spring Hill, Nolensville, Franklin, Brentwood, College Grove and greater Middle Tennessee.',
};

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[#F8F7F4] text-[#0F1C2E]">
      {/* Header */}
      <header className="bg-white border-b border-[#E5E2D9]">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-1.5 sm:gap-3 group">
            <Image
              src="/Logo_B7_dark.svg"
              alt="Team Robert Morris"
              width={44}
              height={44}
              className="h-8 w-8 sm:h-10 md:h-11 flex-shrink-0"
              priority
            />
            <Image
              src="/Logo_wordmark_dark.svg"
              alt="Team Robert Morris — Middle Tennessee Real Estate"
              width={300}
              height={80}
              className="h-5 sm:h-8 md:h-10 w-auto max-w-[140px] sm:max-w-[300px] md:max-w-[360px]"
              priority
            />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#4A5568] hover:text-[#0F1C2E] transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Promise heading */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E5E2D9]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="uppercase tracking-[3px] text-xs text-[#C5A46E] mb-4">
            OUR PROMISE
          </div>
          <h1 className="heading-serif text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.2] tracking-[-0.02em] text-[#0F1C2E]">
            Decades of local market mastery, combined with innovative systems, to
            help families buy, sell, and invest with confidence in one of the
            nation&rsquo;s strongest growth markets.
          </h1>
        </div>
      </section>

      {/* Team members */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-10 md:gap-12">
            {team.map((member, i) => (
              <article
                key={member.name}
                className={`grid md:grid-cols-12 gap-8 md:gap-12 items-center bg-white rounded-2xl border border-[#E5E2D9] p-6 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300 ${
                  i % 2 === 1 ? 'md:[&>div:first-child]:order-2' : ''
                }`}
              >
                {/* Photo */}
                <div className="md:col-span-4">
                  <div className="relative aspect-square w-full rounded-xl overflow-hidden border border-[#E5E2D9] bg-[#F0EDE5] group">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                </div>
                {/* Bio */}
                <div className="md:col-span-8">
                  <h2 className="heading-serif text-2xl md:text-3xl text-[#0F1C2E] mb-1">
                    {member.name}
                  </h2>
                  <div className="text-[#C5A46E] text-sm tracking-[1.5px] uppercase mb-4">
                    {member.title}
                  </div>
                  <p className="text-lg text-[#4A5568] leading-[1.75]">
                    {member.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Link
              href="/#contact"
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold shadow-md hover:shadow-lg transition-all duration-200"
            >
              Talk With Our Team
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F1C2E] text-white/70 py-12 text-sm">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="max-w-md mx-auto mb-4">
            Clear guidance. Trusted expertise. Helping Middle Tennessee families
            move with confidence since the 1980s.
          </p>
          <div className="text-xs">
            &copy; {new Date().getFullYear()} Team Robert Morris • Onward Realty
          </div>
        </div>
      </footer>
    </div>
  );
}
