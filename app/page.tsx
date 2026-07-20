'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

// Type for chat messages
interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export default function TeamRobertMorris() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: "Hello! I'm here to help with any questions about buying, selling, or living in Middle Tennessee. What would you like to know?" }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatWindowRef = useRef<HTMLDivElement>(null);
  const floatingChatRef = useRef<HTMLDivElement>(null);

  // Auto-scroll chat to bottom on new messages
  useEffect(() => {
    chatWindowRef.current?.scrollTo({ top: chatWindowRef.current.scrollHeight, behavior: 'smooth' });
    floatingChatRef.current?.scrollTo({ top: floatingChatRef.current.scrollHeight, behavior: 'smooth' });
  }, [chatMessages, isTyping]);

  // Simple AI Advisor mock - draws from the vision content
  const getAIResponse = (question: string): string => {
    const q = question.toLowerCase();

    if (q.includes('first time') || q.includes('first-time')) {
      return "Buying your first home in Middle Tennessee is very achievable. Start with a mortgage pre-approval so you know your budget. Most first-time buyers need 3-5% down (sometimes less with certain programs). We'll walk you through every step — credit tips, what to expect at closing, and how to avoid common mistakes. Would you like our free First-Time Buyer Checklist?";
    }
    if (q.includes('franklin') || q.includes('brentwood')) {
      return "Franklin and Brentwood are two of the most popular areas for families. Franklin offers historic charm with excellent schools and a vibrant downtown. Brentwood is known for top-rated schools, beautiful neighborhoods, and convenient access to Nashville. Current market trends show strong demand with homes typically selling in the $600k–$1.2M range depending on the neighborhood. Both areas have great parks, restaurants, and family activities.";
    }
    if (q.includes('how much') || q.includes('down payment') || q.includes('cash needed')) {
      return "A common rule of thumb is 20% down to avoid PMI, but many first-time programs allow 3-5% down. For a $450,000 home, that's roughly $13,500–$22,500 down plus closing costs (typically 2-5% of the purchase price). We have simple calculators and guides that break this down clearly for your situation.";
    }
    if (q.includes('sell') || q.includes('selling')) {
      return "Selling in today's Middle Tennessee market starts with understanding your home's current value. We provide free home value estimates and a clear 2026 Seller Playbook that covers staging, timing, net sheet calculations, and how to maximize your proceeds. Most homes in desirable areas are moving well when priced and presented correctly.";
    }
    if (q.includes('murfreesboro') || q.includes('spring hill') || q.includes('nolensville')) {
      return "These areas offer excellent value and strong growth. Murfreesboro has great schools, a growing downtown, and more affordable options compared to Franklin/Brentwood. Spring Hill and Nolensville are popular with families for their newer construction, good schools, and commute options. Market trends are positive with steady appreciation.";
    }

    return "That's a great question. Our team specializes in making the process clear and stress-free for first-time buyers and sellers across Middle Tennessee. I recommend starting with our free guides or scheduling a friendly conversation with one of our agents. Would you like me to share the best next step for your situation?";
  };

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const question = chatInput.trim();
    if (!question) return;

    const userMessage: ChatMessage = { role: 'user', content: question };
    setChatMessages(prev => [...prev, userMessage]);
    setChatInput('');
    setIsTyping(true);

    setTimeout(() => {
      const response = getAIResponse(question);
      setChatMessages(prev => [...prev, { role: 'assistant', content: response }]);
      setIsTyping(false);
    }, 850);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleLeadForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // In production: send to Supabase / Resend
    console.log('Lead captured:', Object.fromEntries(formData));

    alert("Thank you! We've received your request. A member of Team Robert Morris will reach out within 24 hours to help you personally.");
    form.reset();
  };

  const handleNewsletter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log('Newsletter signup');
    alert("Welcome! You're now subscribed to our weekly Middle Tennessee market updates and guides.");
    form.reset();
  };

  const journeyOptions = [
    { label: "First-Time Home Buyer", id: "first-time" },
    { label: "Buying a Home", id: "buyer-resources" },
    { label: "Selling Your Home", id: "seller-resources" },
    { label: "Relocating to Middle TN", id: "areas" },
    { label: "Investing", id: "investor-resources" },
    { label: "New Construction", id: "first-time" },
  ];

  const areas = [
    { name: "Franklin", desc: "Historic charm, top schools, vibrant downtown" },
    { name: "Brentwood", desc: "Premium neighborhoods, excellent schools, convenient location" },
    { name: "Nolensville", desc: "Growing family favorite with strong value and new construction" },
    { name: "Spring Hill", desc: "Family-oriented, good schools, more affordable entry" },
    { name: "Murfreesboro", desc: "Strong growth, great downtown, solid appreciation" },
    { name: "College Grove & Beyond", desc: "Rural charm with easy access to everything" },
  ];

  return (
    <div className="min-h-screen bg-[#F8F7F4] text-[#1A2A3A]">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E5E2D9]">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          <div className="flex items-center gap-1.5 sm:gap-3">
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
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <button onClick={() => scrollToSection('first-time')} className="nav-link cursor-pointer">First-Time Buyers</button>
            <button onClick={() => scrollToSection('buyer-resources')} className="nav-link cursor-pointer">Buying</button>
            <button onClick={() => scrollToSection('seller-resources')} className="nav-link cursor-pointer">Selling</button>
            <button onClick={() => scrollToSection('areas')} className="nav-link cursor-pointer">Areas</button>
            <button onClick={() => scrollToSection('resources')} className="nav-link cursor-pointer">Resources</button>
            <button onClick={() => scrollToSection('testimonials')} className="nav-link cursor-pointer">Stories</button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary px-6 py-2.5 rounded-full text-sm font-semibold"
            >
              Contact Us
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-white px-6 py-6 flex flex-col gap-4 text-base font-medium">
            {[
              { label: "First-Time Buyers", id: "first-time" },
              { label: "Buying", id: "buyer-resources" },
              { label: "Selling", id: "seller-resources" },
              { label: "Explore Areas", id: "areas" },
              { label: "Resources & Guides", id: "resources" },
              { label: "Contact Our Team", id: "contact" },
            ].map((item) => (
              <button key={item.id} onClick={() => scrollToSection(item.id)} className="text-left py-1">
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary w-full py-3 rounded-full mt-2 font-semibold"
            >
              Schedule a Conversation
            </button>
          </div>
        )}
      </header>

      {/* HERO - Cinematic Video Background */}
      <section className="relative h-[92vh] min-h-[620px] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://pub-ec0a590b3dc0438cb67a7d58edd92b9c.r2.dev/15743919_3840_2160_24fps.mp4" type="video/mp4" />
          {/* Fallback image if video fails to load */}
          <img
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
            alt="Middle Tennessee homes"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </video>
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-sm mb-6 tracking-[1px]">
            MIDDLE TENNESSEE • EST. 40+ YEARS
          </div>

          <h1 className="heading-serif text-6xl md:text-7xl leading-[1.05] tracking-[-0.03em] mb-6">
            Helping You Move Smarter<br />Across Middle Tennessee
          </h1>
          <p className="max-w-2xl mx-auto text-xl md:text-2xl text-white/90 mb-10">
            Clear, honest guidance for first-time buyers, sellers, and everyone in between.<br className="hidden md:block" /> No jargon. No pressure. Just the answers you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => scrollToSection('first-time')} className="btn-gold px-10 py-4 rounded-full text-lg font-semibold shadow-lg">
              I&apos;m a First-Time Buyer
            </button>
            <button onClick={() => scrollToSection('contact')} className="btn-outline border-white text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[#0F1C2E]">
              Talk With Our Team
            </button>
          </div>
          <p className="mt-6 text-sm text-white/60">Hundreds of families helped • Average response under 2 hours</p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/60 text-xs tracking-[2px]">
          SCROLL TO BEGIN <div className="h-px w-6 bg-white/40 mt-2"></div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="trust-bar py-5">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-[#C5A46E]">★★★★★</span>
            <span className="font-medium">5.0 Average Rating</span>
          </div>
          <div>Hundreds of families guided</div>
          <div>40+ years of trusted expertise</div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#2E5A3E]"></span>
            Code of Ethics Aligned
          </div>
        </div>
      </div>

      {/* WHAT ARE YOU LOOKING FOR? */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        <div className="text-center mb-10">
          <div className="uppercase tracking-[3px] text-xs text-[#C5A46E] mb-2">WHERE ARE YOU IN YOUR JOURNEY?</div>
          <h2 className="heading-serif text-4xl md:text-5xl tracking-[-0.02em]">What are you looking for today?</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {journeyOptions.map((option, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(option.id)}
              className="card px-6 py-7 text-center hover:border-[#C5A46E] border border-transparent group"
            >
              <div className="font-semibold text-lg group-hover:text-[#0F1C2E] transition-colors">{option.label}</div>
            </button>
          ))}
        </div>
      </section>

      {/* FIRST-TIME HOME BUYER SPOTLIGHT - Core of Vision */}
      <section id="first-time" className="section bg-white border-y border-[#E5E2D9]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-x-12 items-center">
            <div className="md:col-span-7">
              <div className="uppercase tracking-[2.5px] text-[#C5A46E] text-sm mb-3">FOR FIRST-TIME BUYERS</div>
              <h2 className="heading-serif text-5xl tracking-[-0.025em] leading-none mb-6">
                Buying your first home<br />doesn&apos;t have to feel overwhelming.
              </h2>
              <p className="text-xl text-[#4A5568] max-w-lg">
                We break everything down into clear, simple steps. By the time you&apos;re ready to make an offer, you&apos;ll feel confident and prepared.
              </p>
            </div>
            <div className="md:col-span-5 mt-10 md:mt-0">
              <div className="card p-8">
                <h3 className="font-semibold text-xl mb-5">What you&apos;ll learn:</h3>
                <ul className="space-y-3.5 text-[15px]">
                  <li className="flex gap-3"><span className="text-[#C5A46E] mt-1">→</span> What a mortgage pre-approval really means and why it matters</li>
                  <li className="flex gap-3"><span className="text-[#C5A46E] mt-1">→</span> How much you actually need to save (it&apos;s often less than you think)</li>
                  <li className="flex gap-3"><span className="text-[#C5A46E] mt-1">→</span> Credit tips that can save you thousands</li>
                  <li className="flex gap-3"><span className="text-[#C5A46E] mt-1">→</span> The exact steps from offer to closing (explained simply)</li>
                  <li className="flex gap-3"><span className="text-[#C5A46E] mt-1">→</span> Common first-time mistakes — and how to avoid them</li>
                </ul>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="btn-primary w-full mt-8 py-3.5 rounded-full font-semibold"
                >
                  Get Your Free First-Time Buyer Checklist
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BUYER / SELLER / INVESTOR QUICK LINKS */}
      <section id="buyer-resources" className="section max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Buyer Center */}
          <div className="card p-8">
            <div className="text-[#C5A46E] text-sm tracking-widest mb-2">FOR BUYERS</div>
            <h3 className="heading-serif text-3xl mb-4">Buyer Resources</h3>
            <p className="text-[#4A5568] mb-6">Mortgage explained simply, offer strategy, inspection checklists, negotiation tips, and neighborhood matching.</p>
            <button onClick={() => scrollToSection('contact')} className="btn-outline w-full py-3 rounded-full text-sm font-semibold">Explore Buyer Guides</button>
          </div>

          {/* Seller Center */}
          <div id="seller-resources" className="card p-8">
            <div className="text-[#C5A46E] text-sm tracking-widest mb-2">FOR SELLERS</div>
            <h3 className="heading-serif text-3xl mb-4">Seller Resources</h3>
            <p className="text-[#4A5568] mb-6">Free home value estimate, staging ideas, net sheet calculator, moving checklist, and our 2026 Seller Playbook.</p>
            <button onClick={() => scrollToSection('contact')} className="btn-outline w-full py-3 rounded-full text-sm font-semibold">Get Your Home Value</button>
          </div>

          {/* Investor Center */}
          <div id="investor-resources" className="card p-8">
            <div className="text-[#C5A46E] text-sm tracking-widest mb-2">FOR INVESTORS</div>
            <h3 className="heading-serif text-3xl mb-4">Investor Resources</h3>
            <p className="text-[#4A5568] mb-6">Cash flow estimators, rental analysis tools, and beginner-friendly explanations of Middle Tennessee investment opportunities.</p>
            <button onClick={() => scrollToSection('contact')} className="btn-outline w-full py-3 rounded-full text-sm font-semibold">View Investment Insights</button>
          </div>
        </div>
      </section>

      {/* MIDDLE TENNESSEE AREA EXPLORER */}
      <section id="areas" className="section bg-[#0F1C2E] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <div className="uppercase tracking-[3px] text-[#C5A46E] text-sm mb-2">DISCOVER YOUR COMMUNITY</div>
              <h2 className="heading-serif text-5xl tracking-[-0.02em]">Middle Tennessee Area Guides</h2>
            </div>
            <p className="max-w-sm mt-4 md:mt-0 text-white/70">Honest, detailed insights on schools, costs, lifestyle, and current market trends — written in plain language.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {areas.map((area) => (
              <div key={area.name} className="area-card card bg-white text-[#1A2A3A] p-7 rounded-2xl group cursor-pointer" onClick={() => scrollToSection('contact')}>
                <div className="font-semibold text-2xl mb-1.5 group-hover:text-[#0F1C2E]">{area.name}</div>
                <p className="text-[#4A5568]">{area.desc}</p>
                <div className="mt-8 text-sm text-[#C5A46E] flex items-center gap-2 group-hover:gap-3 transition-all">
                  Explore this area <span>→</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-white/60 text-sm mt-8">More neighborhoods and detailed reports coming soon — including market trend videos.</p>
        </div>
      </section>

      {/* RESOURCES & GUIDES HUB */}
      <section id="resources" className="section max-w-5xl mx-auto px-6">
        <div className="text-center mb-10">
          <div className="text-[#C5A46E] tracking-[3px] text-sm mb-2">FREE DOWNLOADS</div>
          <h2 className="heading-serif text-5xl tracking-[-0.02em]">Helpful Guides &amp; Checklists</h2>
          <p className="mt-4 text-xl text-[#4A5568]">Everything you need to feel confident — delivered straight to your inbox.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "First-Time Home Buyer Checklist", desc: "The complete step-by-step guide for beginners" },
            { title: "2026 Middle Tennessee Seller Playbook", desc: "Pricing, staging, timing, and maximizing your net proceeds" },
            { title: "Moving to Middle Tennessee Guide", desc: "Neighborhoods, schools, costs, and what to expect" },
          ].map((guide, i) => (
            <div key={i} className="card p-8 flex flex-col">
              <div className="flex-1">
                <div className="text-[#C5A46E] text-xs tracking-widest mb-3">FREE GUIDE</div>
                <h4 className="font-semibold text-2xl leading-tight mb-3">{guide.title}</h4>
                <p className="text-[#4A5568]">{guide.desc}</p>
              </div>
              <button
                onClick={() => scrollToSection('contact')}
                className="mt-8 btn-primary w-full py-3 rounded-full text-sm font-semibold"
              >
                Download Free Guide
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS / STORIES */}
      <section id="testimonials" className="section bg-white border-y">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-[#C5A46E] tracking-[3px] text-sm mb-3">REAL FAMILIES. REAL RESULTS.</div>
          <h2 className="heading-serif text-5xl tracking-[-0.02em] mb-12">What our clients say</h2>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="card p-9">
              <div className="text-[#C5A46E] text-4xl mb-4">&ldquo;</div>
              <p className="text-lg leading-relaxed">&ldquo;Team Robert Morris made our first home purchase feel manageable and even exciting. They explained every step clearly and never made us feel rushed. We couldn&apos;t be happier with our home in Franklin.&rdquo;</p>
              <div className="mt-8 text-sm">
                <div className="font-semibold">— The Thompson Family</div>
                <div className="text-[#718096]">First-Time Buyers • Franklin, TN</div>
              </div>
            </div>
            <div className="card p-9">
              <div className="text-[#C5A46E] text-4xl mb-4">&ldquo;</div>
              <p className="text-lg leading-relaxed">&ldquo;After 40 years in the business, Robert and his team still treat every client like family. Their knowledge of Middle Tennessee is unmatched. We sold our home quickly and for top dollar.&rdquo;</p>
              <div className="mt-8 text-sm">
                <div className="font-semibold">— Michael &amp; Susan R.</div>
                <div className="text-[#718096]">Sellers • Brentwood, TN</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI REAL ESTATE ADVISOR - Prominent Feature */}
      <section className="section max-w-4xl mx-auto px-6">
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-1 rounded-full bg-[#0F1C2E] text-white text-xs tracking-[2px] mb-4">24/7 GUIDANCE</div>
          <h2 className="heading-serif text-5xl tracking-[-0.02em]">Ask Our AI Real Estate Advisor</h2>
          <p className="mt-4 text-xl text-[#4A5568]">Get instant, trustworthy answers based on our guides and local expertise. No jargon.</p>
        </div>

        <div className="card max-w-2xl mx-auto p-2 shadow-xl">
          <div className="bg-[#F8F7F4] rounded-xl p-6 h-[380px] flex flex-col">
            {/* Chat Messages */}
            <div ref={chatWindowRef} className="flex-1 overflow-y-auto pr-2 space-y-1 mb-4" id="chat-window">
              {chatMessages.map((msg, index) => (
                <div key={index} className={`chat-bubble ${msg.role === 'user' ? 'chat-bubble-user' : 'chat-bubble-assistant'}`}>
                  {msg.content}
                </div>
              ))}
              {isTyping && (
                <div className="chat-bubble chat-bubble-assistant">
                  <span className="inline-block animate-pulse">Thinking...</span>
                </div>
              )}
            </div>

            {/* Chat Input */}
            <form onSubmit={handleChatSubmit} className="flex gap-3">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask anything... e.g. &ldquo;What should a first-time buyer know about Franklin?&rdquo;"
                className="input flex-1 text-sm"
              />
              <button
                type="submit"
                className="btn-primary px-8 rounded-full font-semibold text-sm"
                disabled={!chatInput.trim() || isTyping}
              >
                Send
              </button>
            </form>
          </div>
          <p className="text-center text-xs text-[#718096] mt-3">This assistant is trained on Team Robert Morris content and local market knowledge.</p>
        </div>
      </section>

      {/* NEWSLETTER + FINAL CTA */}
      <section className="bg-[#0F1C2E] text-white py-16">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="heading-serif text-4xl tracking-[-0.02em] mb-4">Stay informed with weekly market insights</h2>
          <p className="text-white/70 mb-8">Simple updates on prices, inventory, and practical tips for buyers and sellers in Middle Tennessee. No spam.</p>

          <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              required
              className="input flex-1 bg-white text-[#1A2A3A] placeholder:text-[#718096]"
            />
            <button type="submit" className="btn-gold px-10 py-3.5 rounded-full font-semibold whitespace-nowrap">
              Subscribe Free
            </button>
          </form>
          <p className="text-xs text-white/50 mt-4">We respect your inbox. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* CONTACT / FINAL CTA */}
      <section id="contact" className="section max-w-4xl mx-auto px-6">
        <div className="text-center mb-10">
          <div className="text-[#C5A46E] tracking-[3px] text-sm mb-2">LET&apos;S TALK</div>
          <h2 className="heading-serif text-5xl tracking-[-0.02em]">Ready to take the next step?</h2>
          <p className="mt-4 text-xl text-[#4A5568]">Whether you&apos;re just exploring or ready to move, we&apos;re here to help — with no pressure.</p>
        </div>

        <div className="card p-10 md:p-14">
          <form onSubmit={handleLeadForm} className="grid md:grid-cols-2 gap-x-6 gap-y-5">
            <div>
              <label className="block text-sm font-medium mb-1.5">Full Name</label>
              <input type="text" name="name" required className="input w-full" placeholder="Alex Rivera" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Email Address</label>
              <input type="email" name="email" required className="input w-full" placeholder="you@email.com" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Phone Number</label>
              <input type="tel" name="phone" className="input w-full" placeholder="(615) 555-0123" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">What are you looking for?</label>
              <div className="relative">
                <select name="interest" className="input w-full appearance-none cursor-pointer pr-10">
                  <option>First-Time Home Buyer</option>
                  <option>Buying a Home</option>
                  <option>Selling My Current Home</option>
                  <option>Relocating to Middle Tennessee</option>
                  <option>Investment / Rental Property</option>
                  <option>Just Exploring / Have Questions</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                  <svg className="w-4 h-4 text-[#718096]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1.5">Tell us a little about what you need</label>
              <textarea name="message" rows={4} className="input w-full resize-y min-h-[110px]" placeholder="I'm looking to buy my first home in the Franklin or Nolensville area within the next 4-6 months..."></textarea>
            </div>
            <div className="md:col-span-2">
              <button type="submit" className="btn-primary w-full py-4 text-lg rounded-full font-semibold mt-2">
                Send My Request — We&apos;ll Reply Within 24 Hours
              </button>
              <p className="text-center text-xs text-[#718096] mt-4">Your information is private and secure. We only use it to help you personally.</p>
            </div>
          </form>
        </div>

        <div className="text-center mt-10 text-sm text-[#4A5568]">
          Or call us directly: <a href="tel:6155550123" className="font-medium text-[#0F1C2E] hover:underline">(615) 555-0123</a> &nbsp;•&nbsp;
          <button onClick={() => alert("Calendly integration coming soon — we'll add direct booking links.")} className="font-medium text-[#0F1C2E] hover:underline">Schedule a 15-min chat</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0F1C2E] text-white/70 py-12 text-sm">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-y-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-1.5 sm:gap-3 mb-4">
              <Image
                src="/Logo_B7.svg"
                alt="Team Robert Morris"
                width={44}
                height={44}
                className="h-8 w-8 sm:h-10 md:h-11 flex-shrink-0"
              />
              <Image
                src="/Logo_wordmark_white.svg"
                alt="Team Robert Morris — Middle Tennessee Real Estate"
                width={300}
                height={80}
                className="h-5 sm:h-8 md:h-10 w-auto max-w-[140px] sm:max-w-[300px] md:max-w-[340px]"
              />
            </div>
            <p className="max-w-xs">Clear guidance. Trusted expertise. Helping Middle Tennessee families move with confidence since the 1980s.</p>
          </div>

          <div className="md:col-span-3 text-sm">
            <div className="font-medium text-white mb-3">Quick Links</div>
            <div className="space-y-[7px]">
              <button onClick={() => scrollToSection('first-time')} className="block hover:text-white">First-Time Buyers</button>
              <button onClick={() => scrollToSection('buyer-resources')} className="block hover:text-white">Buyer Resources</button>
              <button onClick={() => scrollToSection('seller-resources')} className="block hover:text-white">Seller Resources</button>
              <button onClick={() => scrollToSection('areas')} className="block hover:text-white">Explore Areas</button>
            </div>
          </div>

          <div className="md:col-span-4 text-sm">
            <div className="font-medium text-white mb-3">Our Commitment</div>
            <p className="leading-relaxed">We follow the National Association of Realtors® Code of Ethics and operate with full transparency. Your trust is our most important asset.</p>
            <div className="mt-6 text-xs">&copy; {new Date().getFullYear()} Team Robert Morris • Onward Realty</div>
          </div>
        </div>
      </footer>

      {/* Floating AI Chat Button */}
      <button
        onClick={() => setChatOpen(!chatOpen)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#0F1C2E] text-white px-6 py-3.5 rounded-full shadow-xl hover:bg-[#1E2F47] transition-all active:scale-[0.985]"
      >
        <span className="font-medium">Ask Our AI Advisor</span>
        <div className="w-2.5 h-2.5 bg-[#C5A46E] rounded-full animate-pulse"></div>
      </button>

      {/* Floating Chat Window */}
      {chatOpen && (
        <div className="fixed bottom-24 right-6 z-[60] w-[380px] max-w-[calc(100vw-3rem)] card shadow-2xl overflow-hidden">
          <div className="bg-[#0F1C2E] text-white px-5 py-4 flex items-center justify-between">
            <div>
              <div className="font-semibold">Team Robert Morris AI Advisor</div>
              <div className="text-xs text-white/60">Ask anything about Middle Tennessee real estate</div>
            </div>
            <button onClick={() => setChatOpen(false)} className="text-white/70 hover:text-white">&times;</button>
          </div>

          <div ref={floatingChatRef} className="p-4 h-[340px] overflow-y-auto bg-[#F8F7F4] text-sm" id="floating-chat">
            {chatMessages.map((msg, index) => (
              <div key={index} className={`chat-bubble text-sm ${msg.role === 'user' ? 'chat-bubble-user' : 'chat-bubble-assistant'}`}>
                {msg.content}
              </div>
            ))}
            {isTyping && <div className="chat-bubble chat-bubble-assistant text-sm">Thinking...</div>}
          </div>

          <form onSubmit={handleChatSubmit} className="p-4 border-t flex gap-2 bg-white">
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Type your question..."
              className="input flex-1 text-sm py-2.5"
            />
            <button type="submit" className="btn-primary px-5 rounded-full text-sm font-semibold" disabled={!chatInput.trim()}>Send</button>
          </form>
        </div>
      )}
    </div>
  );
}
