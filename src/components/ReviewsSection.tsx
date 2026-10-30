import React from 'react';
import { REVIEWS, BUSINESS_INFO } from '../data/cafeData';
import { Star, MessageSquare, ExternalLink, ShieldCheck, Quote } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-[#FAF7F2] text-[#1E293B] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 mb-12 border-b border-stone-200">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D89B2B]">
              Verified Diner Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#123038] tracking-tight">
              What Kendrapara Diners Say
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Genuine testimonials gathered from local diners, families, and highway travelers on Cuttack-Chandbali Road.
            </p>
          </div>

          {/* Aggregated Rating Card */}
          <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-xs flex items-center gap-5 self-start md:self-auto">
            <div className="text-center">
              <span className="block font-serif text-4xl font-bold text-[#123038] leading-none">
                {BUSINESS_INFO.googleRating}
              </span>
              <div className="flex items-center gap-0.5 text-[#D89B2B] mt-1.5 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
            </div>

            <div className="h-10 w-px bg-stone-200" />

            <div className="space-y-1 text-xs">
              <span className="font-semibold text-stone-900 block">
                {BUSINESS_INFO.reviewCount}+ Verified Ratings
              </span>
              <span className="text-stone-500 block">
                Google & Local Delivery Ratings
              </span>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D89B2B] hover:underline font-medium inline-flex items-center gap-1"
              >
                <span>Read all on Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white p-7 rounded-xl border border-stone-200/90 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between space-y-5"
            >
              <div className="space-y-3">
                {/* Review Header: Stars, Tag & Source */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#D89B2B]">
                    {[...Array(Math.floor(review.rating))].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                    {review.rating % 1 !== 0 && (
                      <Star className="w-4 h-4 fill-[#D89B2B]/50" />
                    )}
                  </div>

                  <span className="text-[11px] font-mono text-stone-500">
                    {review.source}
                  </span>
                </div>

                {/* Review Body */}
                <p className="text-stone-700 text-sm leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Review Author & Tag */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-semibold text-stone-900">
                    {review.author}
                  </h4>
                  <span className="text-stone-400 text-[11px]">
                    {review.date}
                  </span>
                </div>

                <span className="text-stone-500 font-medium text-[11px]">
                  {review.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Review Action Banner */}
        <div className="mt-12 p-6 bg-[#123038] text-white rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-lg font-semibold text-white">
              Have you recently dined at DESTIN?
            </h4>
            <p className="text-xs text-stone-300">
              Share your dining story or review on Google Maps to help fellow travelers find us.
            </p>
          </div>

          <a
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-md bg-[#D89B2B] hover:bg-[#E5A836] text-[#123038] text-xs font-bold uppercase tracking-wider transition-colors whitespace-nowrap flex items-center gap-1.5"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Leave a Google Review</span>
          </a>
        </div>

      </div>
    </section>
  );
};
