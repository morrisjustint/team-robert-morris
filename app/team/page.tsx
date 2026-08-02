import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

type TeamMember = {
  name: string;
  role: string;
  credentials?: string;
  bio: string[];
  photo: string;
  comingSoon?: boolean;
};

const team: TeamMember[] = [
  {
    name: 'Robert Morris Jr.',
    role: 'Founder / Team Lead',
    credentials:
      'ABR, ABRM, CRB, CRS, GRI, PMN, SRES, SRS, AHWD, C-RETS, e-Pro, MRP, PSA, RENE, SFR, ITI, C2EX',
    bio: [
      'Robert Morris has been actively involved in real estate sales, brokerage, and education since entering the industry in 1985. A graduate of Middle Tennessee State University, he is a selling broker with Onward Real Estate in Middle Tennessee, where he continues to list and sell homes with Team Robert Morris.',
      'A dedicated educator and instructor, Robert is committed to continued education and promoting homeownership. He has received Realtor® of the Year (2000) and Tennessee Realtor® Educator of the Year honors (1995 and 2021). He has held leadership roles including President of the Middle Tennessee Association of REALTORS®, NAR Director, and positions with the Real Estate Business Institute (REBI) and other national councils.',
      'An international speaker, certified instructor, and consultant, Robert teaches courses on business planning, brokerage management, leadership, professional standards, fair housing, ethics, and more. He has trained thousands of REALTORS® across the U.S., Canada, and beyond through REBI, REBAC, WCR, NAR, and other organizations, helping raise professional standards in the industry.',
    ],
    photo: '/images/Robert_Morris.jpg',
  },
  {
    name: 'Justin Morris',
    role: 'Agent & Technology Director',
    bio: [
      'Justin Morris is a Murfreesboro native and Middle Tennessee State University graduate. After more than a decade leading client success, project management, and high-performing teams in the healthcare and pharmaceutical industries—managing multimillion-dollar portfolios and delivering data-driven results—he became a licensed REALTOR® in June 2026 and joined Team Robert Morris at Onward Real Estate.',
      'Justin brings a unique combination of leadership, process discipline, data & analytics, and AI-driven insight to every transaction. He focuses on first-time and move-up buyers, guiding them with the same care and strategic clarity he once applied to complex corporate clients. His goal is simple: make the dream of homeownership feel real and ensure every client knows how deeply he is invested in their success.',
      'A Project Management Professional (PMP) and lifelong leader, Justin approaches real estate the way he approaches the game of football that he loves—full contact, high accountability, and genuine connection. Alongside his dad and siblings, the family brings over 60 years of combined real estate experience to Middle Tennessee.',
      'When you work with Justin, you get clear communication, disciplined execution, and a partner who treats your home decision with the seriousness it deserves.',
      'Ready to take the next step? Let\u2019s talk.',
    ],
    photo: '/images/Justin_Morris.jpg',
  },
  {
    name: 'John Hayslett',
    role: 'Agent & Market Specialist',
    bio: [
      'Originally from Memphis, Tennessee, I learned the value of hard work, integrity, and building meaningful relationships at an early age. After attending the University of Alabama at Birmingham (UAB), I made Middle Tennessee home in 2016. In 2022, I became a REALTOR® to help individuals and families confidently navigate one of the biggest financial decisions of their lives.',
      'As an agent serving Murfreesboro and the surrounding Middle Tennessee communities, I believe real estate is about more than buying and selling homes — it\u2019s about creating opportunities, building wealth, and helping people put down roots in the communities they love. I hold the At Home With Diversity® (AHWD) certification and the Commitment to Excellence (C2EX) endorsement through the National Association of REALTORS®, reflecting my commitment to ethical service and delivering an exceptional client experience.',
      'My clients can count on quick communication, honest guidance, and relentless advocacy from first offer to closing day — whether you\u2019re buying your first home, upgrading, selling, or expanding your investment portfolio.',
      'Outside of real estate, you\u2019ll find me at a game, traveling, or spending time with friends and family.',
      'Ready to buy or sell in Murfreesboro? Let\u2019s connect.',
    ],
    photo: '/images/John_Hayslett.jpg',
  },
  {
    name: 'Kaelyn Thomas',
    role: 'Client Experience Coordinator',
    bio: [
      'Kaelyn Thomas is a native of Murfreesboro, TN. She obtained her undergraduate degree from MTSU and UT Knoxville. She also obtained her Masters in Public Health from Chamberlain University. She prides herself on leading with integrity, honesty, and a passion for helping others achieve homeownership and is committed to guiding buyers and sellers through every transaction efficiently, ensuring client happiness and satisfaction remain as a top priority.',
      'When Kaelyn is not assisting buyers and sellers, she enjoys spending time with family and friends, home design, and baking.',
    ],
    photo: '/images/Kaelyn_Thomas.png',
  },
  {
    name: 'Deborah Morris',
    role: 'Co-Founder & Client Advocate',
    bio: [],
    photo: '/images/Deborah_Morris.jpg',
    comingSoon: true,
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
            Our Promise: Decades of local market mastery, combined with innovative
            systems, to help families buy, sell, and invest with confidence in one
            of the nation&rsquo;s strongest growth markets.
          </h1>
        </div>
      </section>

      {/* Team members */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 gap-8 md:gap-10">
            {team.map((member) => (
              <article
                key={member.name}
                className="flex flex-col bg-white rounded-2xl border border-[#E5E2D9] shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                {/* Photo — fixed square, face-safe crop */}
                <div className="relative w-full overflow-hidden bg-[#F0EDE5] group" style={{ height: '320px' }}>
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>

                {/* Body */}
                <div className="flex flex-col flex-1 p-6 md:p-8">
                  <h2 className="heading-serif text-xl md:text-2xl text-[#0F1C2E] leading-tight">
                    {member.name}
                  </h2>
                  <div className="text-[#C5A46E] text-xs tracking-[1.5px] uppercase mt-1 mb-3">
                    {member.role}
                  </div>

                  {member.credentials && (
                    <p className="text-xs text-[#6B7280] leading-relaxed mb-4 italic border-b border-[#E5E2D9] pb-4">
                      {member.credentials}
                    </p>
                  )}

                  <div className="text-sm md:text-[15px] text-[#4A5568] leading-[1.75] space-y-3 flex-1">
                    {member.comingSoon ? (
                      <p className="italic text-[#9CA3AF]">
                        Bio coming soon.
                      </p>
                    ) : (
                      member.bio.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))
                    )}
                  </div>
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
