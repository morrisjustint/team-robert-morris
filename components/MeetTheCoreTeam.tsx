import Link from 'next/link';
import Image from 'next/image';

export default function MeetTheCoreTeam() {
  return (
    <section id="core-team" className="bg-[#F8F7F4] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14 md:mb-20">
          <div className="uppercase tracking-[3px] text-xs text-[#C5A46E] mb-3">
            OUR FOUNDATION
          </div>
          <h2 className="heading-serif text-4xl md:text-5xl lg:text-6xl text-[#0F1C2E] tracking-[-0.02em] leading-[1.05] mb-4">
            Meet the Core Team
          </h2>
          <p className="text-lg md:text-xl text-[#4A5568] font-light max-w-2xl mx-auto">
            Multi-Generational Expertise. Local Legacy. Proven Results.
          </p>
        </div>

        {/* Two-column split */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - text */}
          <div className="order-2 md:order-1">
            <p className="text-lg md:text-xl text-[#4A5568] leading-[1.75] mb-8">
              At Team Robert Morris – Onward Real Estate, we blend four decades of
              unparalleled real estate leadership with fresh technological
              innovation and family-driven commitment to client success. Serving
              Murfreesboro, Spring Hill, Nolensville, Franklin, Brentwood, College
              Grove and greater Middle Tennessee, our team delivers the trusted
              guidance that comes from deep roots in the community and a
              relentless focus on results.
            </p>
            <Link
              href="/team"
              className="btn-gold inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold shadow-md hover:shadow-lg hover:shadow-[#C5A46E]/20 transition-all duration-200"
            >
              Learn More About Our Team
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Right column - team photo placeholder */}
          <div className="order-1 md:order-2">
            <div className="relative aspect-[4/5] md:aspect-[5/6] w-full rounded-2xl overflow-hidden shadow-xl border border-[#E5E2D9] bg-gradient-to-br from-[#E5E2D9] to-[#F0EDE5] group">
              <Image
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Team Robert Morris — multi-generational family real estate team in professional attire"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1C2E]/30 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 text-white">
                <div className="text-xs tracking-[2px] uppercase opacity-90">
                  Team Robert Morris
                </div>
                <div className="font-serif text-lg font-medium">
                  Onward Real Estate
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Alternating second block */}
        <div className="mt-20 md:mt-28 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image placeholder */}
          <div>
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-xl border border-[#E5E2D9] bg-gradient-to-br from-[#E5E2D9] to-[#F0EDE5] group">
              <Image
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Team Robert Morris outdoor lifestyle portrait"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
          </div>

          {/* Text block */}
          <div>
            <div className="uppercase tracking-[3px] text-xs text-[#C5A46E] mb-3">
              LED BY EXPERIENCE
            </div>
            <p className="text-lg md:text-xl text-[#4A5568] leading-[1.75]">
              Led by Robert &ldquo;RoMo&rdquo; Morris Jr., a 40+ year veteran who
              has earned Realtor® of the Year honors, Tennessee Realtor® Educator
              of the Year (twice), and leadership roles including President of
              the Middle Tennessee Association of REALTORS®, our approach combines
              time-tested fundamentals with modern systems for scalable success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
