'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Minimize2 } from 'lucide-react';

interface Message {
  role: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

const getBotResponse = (input: string): string => {
  const q = input.toLowerCase();

  if (q.match(/credit|score|fico/)) {
    return "Most first-time buyer programs require a minimum credit score of 580–620 for FHA loans, or 620–640 for conventional loans. But don't worry — if your score needs work, we can connect you with a trusted local lender who specializes in getting buyers ready. It usually takes 3–6 months to improve a score meaningfully.";
  }
  if (q.match(/down payment|down pay|downpayment/)) {
    return "Great question! You don't always need 20% down. FHA loans require as little as 3.5%, conventional loans can be 3–5%, and there are Tennessee-specific down payment assistance programs that may cover some or all of it. Let's look at what you qualify for — it's often more than people expect!";
  }
  if (q.match(/franklin|brentwood|nolensville/)) {
    return "All three are fantastic areas in Williamson County! Franklin offers historic downtown charm with great schools — median prices around $650K. Brentwood is more prestigious with luxury estates, median around $850K. Nolensville is a bit more affordable and growing fast, median around $540K. Which factors matter most to your family?";
  }
  if (q.match(/spring hill|murfreesboro|gallatin/)) {
    return "Great options for families watching their budget! Spring Hill runs around $430K median and is very family-friendly. Murfreesboro is a fantastic value at ~$380K — college-town energy, diverse neighborhoods. Gallatin offers lakeside living on Old Hickory Lake for around $360K. Each has strong communities and good schools.";
  }
  if (q.match(/pre.approv|preapprov|qualify|how much can|afford/)) {
    return "Getting pre-approved is step one — and it's free! It tells sellers you're serious and shows you exactly what you can afford. We work with several trusted local lenders who are fast, fair, and great with first-time buyers. Want me to connect you with one? Just reach out through our contact form and we'll make the intro.";
  }
  if (q.match(/sell|selling|list|listing/)) {
    return "Our sellers typically net more than the asking price, with an average days-on-market of under 10. We use professional photography, targeted digital marketing, and deep local network connections to get maximum exposure. Would you like a free home valuation? We can give you an accurate estimate based on current market data.";
  }
  if (q.match(/school|education|district/)) {
    return "School quality is one of the top priorities for families, and rightfully so! Williamson County Schools (Franklin, Brentwood, Nolensville) consistently rank among the top districts in Tennessee. Rutherford County (Murfreesboro) and Sumner County (Gallatin) also have excellent schools. Want details on a specific area?";
  }
  if (q.match(/timeline|how long|process|steps/)) {
    return "The buying process typically takes 30–60 days once you're under contract. Finding the right home can take 2–8 weeks depending on the market. From start (pre-approval) to keys, most buyers are in their home within 2–4 months. We'll keep you informed every step of the way — no surprises.";
  }
  if (q.match(/close|closing cost|cost/)) {
    return "Closing costs typically run 2–4% of the purchase price for buyers. That covers lender fees, title insurance, appraisal, and more. Some sellers will pay a portion of your closing costs, especially in a buyer-favorable negotiation. We'll always negotiate on your behalf to minimize your out-of-pocket costs.";
  }
  if (q.match(/hello|hi|hey|help|start|begin/)) {
    return "Hello! I'm the Team Robert Morris AI Advisor. I'm here to answer your real estate questions about Middle Tennessee — from first-time buying to neighborhoods to the selling process. What would you like to know?";
  }
  return "That's a great question! Our team specializes in Middle Tennessee real estate and we'd love to give you a personalized answer. For the most accurate advice for your specific situation, I'd recommend reaching out directly — you can use the Contact form below or call us at (615) 555-1234. We respond to every inquiry within 1 business hour.";
};

const suggestedQuestions = [
  "What credit score do I need?",
  "How much down payment do I need?",
  "Tell me about Franklin vs Brentwood",
  "How long does buying take?",
];

export default function AIChatAdvisor() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'bot',
      text: "Hi! I'm your Middle Tennessee real estate advisor. Ask me anything about buying, selling, neighborhoods, or the home-buying process. I'm here to help!",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isMinimized]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { role: 'user', text: text.trim(), timestamp: new Date() };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botMsg: Message = {
        role: 'bot',
        text: getBotResponse(text),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 800 + Math.random() * 600);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* Chat button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#2E5A3E] hover:bg-[#254A33] text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-2xl"
          aria-label="Open AI Chat Advisor"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div
          className={`fixed bottom-6 right-6 z-50 w-[360px] sm:w-[400px] bg-white rounded-2xl shadow-2xl border border-[#E4E1DC] overflow-hidden transition-all duration-300 ${
            isMinimized ? 'h-16' : 'h-[560px]'
          }`}
        >
          {/* Header */}
          <div className="bg-[#0F1C2E] px-5 py-4 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#C5A46E] rounded-full flex items-center justify-center">
                <Bot size={18} className="text-[#0F1C2E]" />
              </div>
              <div>
                <div className="text-white font-semibold text-sm">TRM AI Advisor</div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-[#2E5A3E] rounded-full" />
                  <span className="text-white/50 text-xs">Online — always here to help</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-white/50 hover:text-white p-1 rounded transition-colors"
                aria-label="Minimize"
              >
                <Minimize2 size={16} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/50 hover:text-white p-1 rounded transition-colors"
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 h-[400px] bg-[#F8F7F4]">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        msg.role === 'bot'
                          ? 'bg-[#C5A46E]'
                          : 'bg-[#0F1C2E]'
                      }`}
                    >
                      {msg.role === 'bot' ? (
                        <Bot size={14} className="text-[#0F1C2E]" />
                      ) : (
                        <User size={14} className="text-white" />
                      )}
                    </div>
                    <div
                      className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                        msg.role === 'bot'
                          ? 'bg-white text-[#0F1C2E] border border-[#E4E1DC]'
                          : 'bg-[#0F1C2E] text-white'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex gap-3 items-start">
                    <div className="w-8 h-8 rounded-full bg-[#C5A46E] flex items-center justify-center flex-shrink-0">
                      <Bot size={14} className="text-[#0F1C2E]" />
                    </div>
                    <div className="bg-white border border-[#E4E1DC] px-4 py-3 rounded-2xl">
                      <div className="flex gap-1.5 items-center h-5">
                        <span className="w-2 h-2 bg-[#0F1C2E]/30 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-2 h-2 bg-[#0F1C2E]/30 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-2 h-2 bg-[#0F1C2E]/30 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={bottomRef} />
              </div>

              {/* Suggestions */}
              {messages.length <= 1 && (
                <div className="px-4 py-2 bg-white border-t border-[#E4E1DC] flex gap-2 overflow-x-auto">
                  {suggestedQuestions.map((q) => (
                    <button
                      key={q}
                      onClick={() => sendMessage(q)}
                      className="flex-shrink-0 text-xs bg-[#F8F7F4] border border-[#E4E1DC] text-[#0F1C2E] px-3 py-2 rounded-full hover:border-[#C5A46E] hover:text-[#2E5A3E] transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}

              {/* Input */}
              <form
                onSubmit={handleSubmit}
                className="px-4 py-3 bg-white border-t border-[#E4E1DC] flex gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about buying, neighborhoods, loans..."
                  className="flex-1 text-sm border border-[#E4E1DC] rounded-full px-4 py-2.5 focus:outline-none focus:border-[#C5A46E] transition-colors bg-[#F8F7F4]"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="w-9 h-9 bg-[#0F1C2E] disabled:bg-gray-200 text-white rounded-full flex items-center justify-center flex-shrink-0 transition-colors hover:bg-[#2E5A3E]"
                >
                  <Send size={14} />
                </button>
              </form>
            </>
          )}
        </div>
      )}
    </>
  );
}
