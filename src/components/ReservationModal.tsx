import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/cafeData';
import { ReservationData } from '../types/cafe';
import { X, Calendar, Clock, Users, Utensils, Send, CheckCircle2 } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<ReservationData>({
    name: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    time: '19:30',
    guests: 2,
    seatingPreference: 'Indoor Dining',
    specialNotes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let message = `*TABLE RESERVATION REQUEST - DESTIN CAFÉ & RESTAURANT*\n`;
    message += `*Name:* ${formData.name}\n`;
    message += `*Phone:* ${formData.phone}\n`;
    message += `*Date:* ${formData.date}\n`;
    message += `*Time:* ${formData.time}\n`;
    message += `*Guests:* ${formData.guests} Persons\n`;
    message += `*Seating Preference:* ${formData.seatingPreference}\n`;
    if (formData.specialNotes?.trim()) {
      message += `*Occasion / Notes:* ${formData.specialNotes.trim()}\n`;
    }
    message += `--------------------------------\n`;
    message += `_Sent via DESTIN Official Website_`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encoded}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-lg rounded-2xl bg-white shadow-2xl overflow-hidden border border-stone-200">
          
          {/* Header */}
          <div className="bg-[#123038] text-white p-6 border-b border-[#D89B2B]/30 flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-xs uppercase font-mono tracking-widest text-[#E5A836]">
                Table Reservation
              </span>
              <h3 className="text-xl font-serif font-bold">
                Book a Table at DESTIN
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded text-stone-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form Content */}
          {isSubmitted ? (
            <div className="p-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-serif font-bold text-stone-900">
                Reservation Dispatched!
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed max-w-sm mx-auto">
                Your reservation details have been forwarded to DESTIN staff via WhatsApp.
                Our team will confirm table availability shortly. For urgent inquiries, call{' '}
                <strong className="text-stone-900 font-mono">+91 9124866535</strong>.
              </p>
              <button
                onClick={handleReset}
                className="mt-4 px-6 py-2.5 rounded-md bg-[#123038] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#1A4550] transition-colors"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ananya Rout"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-md bg-stone-50 border border-stone-300 focus:outline-none focus:border-[#D89B2B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Contact Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9123456789"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-md bg-stone-50 border border-stone-300 focus:outline-none focus:border-[#D89B2B]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-md bg-stone-50 border border-stone-300 focus:outline-none focus:border-[#D89B2B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Time *
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-md bg-stone-50 border border-stone-300 focus:outline-none focus:border-[#D89B2B]"
                  >
                    <option value="11:00">11:00 AM (Early Lunch)</option>
                    <option value="12:30">12:30 PM (Lunch)</option>
                    <option value="13:30">01:30 PM (Lunch)</option>
                    <option value="15:30">03:30 PM (Café / Tea)</option>
                    <option value="17:00">05:00 PM (Snacks & Coffee)</option>
                    <option value="18:30">06:30 PM (Evening Bites)</option>
                    <option value="19:30">07:30 PM (Dinner)</option>
                    <option value="20:30">08:30 PM (Dinner)</option>
                    <option value="21:30">09:30 PM (Late Dinner)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Guests *
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                    className="w-full px-3 py-2 text-xs rounded-md bg-stone-50 border border-stone-300 focus:outline-none focus:border-[#D89B2B]"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Seating Area Preference
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['Indoor Dining', 'Café Lounge', 'Family Table'] as const).map((pref) => (
                    <button
                      type="button"
                      key={pref}
                      onClick={() => setFormData({ ...formData, seatingPreference: pref })}
                      className={`py-2 px-2 text-xs rounded-md border text-center transition-all cursor-pointer ${
                        formData.seatingPreference === pref
                          ? 'bg-[#123038] text-white border-[#123038] font-semibold'
                          : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100'
                      }`}
                    >
                      {pref}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Occasion or Special Requests (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Birthday dinner, high chair needed, table near window"
                  value={formData.specialNotes}
                  onChange={(e) => setFormData({ ...formData, specialNotes: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-md bg-stone-50 border border-stone-300 focus:outline-none focus:border-[#D89B2B]"
                />
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3 rounded-md bg-[#D89B2B] hover:bg-[#E5A836] text-[#123038] font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Reservation Request</span>
                </button>
                <p className="text-[10px] text-center text-stone-500 pt-2">
                  No advance fee required. DESTIN accepts cash, UPI & card payments on arrival.
                </p>
              </div>

            </form>
          )}

        </div>
      </div>
    </div>
  );
};
