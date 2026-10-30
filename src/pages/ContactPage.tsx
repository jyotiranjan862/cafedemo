import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/cafeData';
import { MapPin, Phone, Clock, Navigation, Copy, Check, ExternalLink, Car, Send } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [sentInquiry, setSentInquiry] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.address.fullFormatted);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  const handleSendInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    let text = `*INQUIRY - DESTIN CAFÉ & RESTAURANT*\n`;
    text += `*Name:* ${inquiryName}\n`;
    text += `*Phone:* ${inquiryPhone}\n`;
    text += `*Message:* ${inquiryMessage}\n`;
    text += `_Sent from DESTIN Website Contact Page_`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encoded}`, '_blank', 'noopener,noreferrer');
    setSentInquiry(true);
  };

  const schedule = [
    { day: 'Monday', hours: '10:30 AM – 10:30 PM' },
    { day: 'Tuesday', hours: '10:30 AM – 10:30 PM' },
    { day: 'Wednesday', hours: '10:30 AM – 10:30 PM' },
    { day: 'Thursday', hours: '10:30 AM – 10:30 PM' },
    { day: 'Friday', hours: '10:30 AM – 10:30 PM' },
    { day: 'Saturday', hours: '10:30 AM – 10:30 PM' },
    { day: 'Sunday', hours: '10:30 AM – 10:30 PM' },
  ];

  const todayIndex = new Date().getDay();
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const todayName = dayNames[todayIndex];

  return (
    <div className="pt-24 lg:pt-32 pb-24 bg-[#FAF7F2] text-[#1E293B] space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase font-mono tracking-widest text-[#D89B2B] font-semibold">
            Visit & Contact
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#123038] tracking-tight">
            Location, Directions & Highway Access
          </h1>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Positioned directly along Cuttack-Chandbali Road in Jajang, Kapaleswar, opposite Bharat Petroleum.
          </p>
        </div>

        {/* 2-Column Info & Maps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Postal details, Phones & Schedule (5 Cols) */}
          <div className="lg:col-span-5 bg-white p-7 sm:p-8 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              
              {/* Address */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-mono font-semibold text-[#D89B2B] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Exact Address</span>
                  </span>
                  <button
                    onClick={handleCopyAddress}
                    className="text-xs text-stone-500 hover:text-stone-900 flex items-center gap-1 cursor-pointer"
                  >
                    {copiedAddress ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedAddress ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs space-y-1">
                  <strong className="block text-sm font-serif font-bold text-stone-900">
                    DESTIN CAFÉ & RESTAURANT
                  </strong>
                  <p className="text-stone-600 leading-relaxed">
                    Plot No-16, Jajang, (Opp. Bharat Petroleum),<br />
                    Kapaleswar, Cuttack Chandbali Rd,<br />
                    Kendrapara, Odisha - 754250
                  </p>
                </div>
              </div>

              {/* Highway Landmark & Parking */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-stone-50 border border-stone-200">
                  <span className="text-stone-400 font-mono text-[10px] uppercase block">Landmark</span>
                  <strong className="text-stone-900 block font-semibold mt-0.5">Opp. Bharat Petroleum</strong>
                </div>
                <div className="p-3 rounded-lg bg-stone-50 border border-stone-200">
                  <span className="text-stone-400 font-mono text-[10px] uppercase block">Front Parking</span>
                  <strong className="text-stone-900 block font-semibold mt-0.5">Spacious Paver Yard</strong>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="space-y-2">
                <span className="text-xs uppercase font-mono font-semibold text-stone-500 block">
                  Direct Contact Numbers
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {BUSINESS_INFO.phones.map((phone) => (
                    <a
                      key={phone.raw}
                      href={`tel:${phone.raw}`}
                      className="p-3 rounded-lg bg-stone-50 hover:bg-[#123038] hover:text-white border border-stone-200 transition-colors flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-[#D89B2B]" />
                        <span className="font-mono text-xs font-semibold">{phone.display}</span>
                      </div>
                      <span className="text-[10px] text-stone-400 group-hover:text-stone-200">
                        {phone.primary ? 'Primary' : 'Alt'}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Schedule */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono uppercase font-semibold text-stone-500 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#D89B2B]" />
                    <span>Operating Hours</span>
                  </span>
                  <span className="font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 text-[11px]">
                    Open All 7 Days
                  </span>
                </div>

                <div className="divide-y divide-stone-100 text-xs border border-stone-200 rounded-lg overflow-hidden">
                  {schedule.map((item) => {
                    const isToday = item.day === todayName;
                    return (
                      <div
                        key={item.day}
                        className={`flex justify-between items-center px-3.5 py-2 ${
                          isToday ? 'bg-[#123038] text-white font-medium' : 'text-stone-600 bg-white'
                        }`}
                      >
                        <span className="flex items-center gap-1.5">
                          {isToday && <span className="w-1.5 h-1.5 rounded-full bg-[#E5A836]" />}
                          <span>{item.day}</span>
                        </span>
                        <span className="font-mono">{item.hours}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-md bg-[#D89B2B] hover:bg-[#E5A836] text-[#123038] font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <Navigation className="w-4 h-4" />
              <span>Open in Google Maps App</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

          </div>

          {/* Right Column: Google Maps Interactive View & Driving Guide (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Embedded Google Maps Frame */}
            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs flex flex-col">
              <div className="p-4 bg-[#123038] text-white flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#D89B2B]" />
                  <span className="font-medium">Google Maps Navigation Preview</span>
                </div>
                <span className="text-stone-300 font-mono text-[11px]">
                  Kendrapara · Kapaleswar · Cuttack-Chandbali Rd
                </span>
              </div>

              <div className="relative h-80 sm:h-96 w-full bg-stone-100">
                <iframe
                  title="DESTIN Café and Restaurant Location Map"
                  src="https://maps.google.com/maps?q=Kapaleswar+Kendrapara+Odisha+754250&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 absolute inset-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="p-4 bg-stone-50 border-t border-stone-200 text-xs text-stone-600 flex items-center justify-between">
                <span>Easily reachable by two-wheelers, cars, and highway cruisers.</span>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#123038] font-semibold hover:text-[#D89B2B] flex items-center gap-1"
                >
                  <span>Get Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Quick WhatsApp Inquiry Form */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200 shadow-xs space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase text-[#D89B2B] font-semibold">
                  Send a Direct Message
                </span>
                <h3 className="font-serif font-bold text-stone-900 text-lg">
                  Ask a Question or Plan an Event
                </h3>
              </div>

              {sentInquiry ? (
                <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs space-y-1">
                  <strong>Message dispatched to WhatsApp!</strong>
                  <p>Our manager will reply promptly. You can also call directly at +91 9124866535.</p>
                </div>
              ) : (
                <form onSubmit={handleSendInquiry} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      className="px-3 py-2 text-xs rounded-md bg-stone-50 border border-stone-300 focus:outline-none focus:border-[#D89B2B]"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Your Phone Number"
                      value={inquiryPhone}
                      onChange={(e) => setInquiryPhone(e.target.value)}
                      className="px-3 py-2 text-xs rounded-md bg-stone-50 border border-stone-300 focus:outline-none focus:border-[#D89B2B]"
                    />
                  </div>

                  <textarea
                    rows={2}
                    required
                    placeholder="How can we help? (e.g. Birthday party hall booking, highway catering, large takeaway order)"
                    value={inquiryMessage}
                    onChange={(e) => setInquiryMessage(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-md bg-stone-50 border border-stone-300 focus:outline-none focus:border-[#D89B2B]"
                  />

                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-md bg-[#123038] hover:bg-[#1C4854] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5 text-[#D89B2B]" />
                    <span>Send via WhatsApp</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
