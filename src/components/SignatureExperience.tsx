import React from 'react';
import { Sparkles, Utensils, Coffee, Flame, Award, Heart } from 'lucide-react';

interface SignatureExperienceProps {
  onSelectCategory: (category: string) => void;
}

export const SignatureExperience: React.FC<SignatureExperienceProps> = ({ onSelectCategory }) => {
  const experiences = [
    {
      id: 'tawa-pomfret',
      number: '01',
      title: 'The Coastal Tawa Pomfret Ritual',
      tagline: 'Fresh Marine Catch · Sizzling Iron Pan',
      category: 'mains',
      description:
        'A prized delicacy along the Odisha coast. Our whole fresh Pomfret is meticulously cleaned, scored with diamond slits, massaged in a pungent turmeric, red chili, and regional masala rub, then slow-crisped on a smoking cast-iron tawa until the skin crackles while keeping the flesh juicy.',
      highlight: 'Whole Fish • Made to Order',
      price: '₹1,080',
    },
    {
      id: 'artisanal-soups',
      number: '02',
      title: 'Simmered Lemon Coriander & Hot-Sour Soups',
      tagline: 'Cleansing Herbal Broths · High-Wok Fire',
      category: 'soups',
      description:
        'Far from powdery instant mixes, our kitchen simmers whole crushed coriander stems, fresh ginger julienne, lime juice, and seasonal vegetables to create an invigorating, restorative broth loved by regulars and weary highway drivers.',
      highlight: 'Veg & Chicken Varieties',
      price: 'From ₹160',
    },
    {
      id: 'cold-coffee-burger',
      number: '03',
      title: 'Thick Cold Coffee & The Café Hearth',
      tagline: 'Espresso Blends · Chilled Cream · Gourmet Burgers',
      category: 'cafe-beverages',
      description:
        'A youthful retreat designed for unhurried conversations. Enjoy our signature thick cold coffee crowned with rich vanilla bean ice cream, accompanied by herb-crusted veggie burgers or spicy chicken zinger patties.',
      highlight: 'Specialty Cold Brew & Shakes',
      price: 'From ₹90',
    },
    {
      id: 'dum-biryani-fried-rice',
      number: '04',
      title: 'Aromatic Dum Rice & Indo-Chinese Wok',
      tagline: 'Slow-Sealed Clay Pots · Wok-Tossed Fried Rice',
      category: 'rice-noodles',
      description:
        'Aged basmati rice sealed with hand-ground garam masala, saffron, and tender chicken or seasonal vegetables, alongside our signature Destin Special Veg Fried Rice prepared on roaring Asian wok burners.',
      highlight: 'Signature Basmati & Wok Noodles',
      price: 'From ₹180',
    },
  ];

  return (
    <section id="signature" className="py-20 bg-[#123038] text-white overflow-hidden relative">
      {/* Subtle gold accent lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D89B2B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D89B2B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 mb-12 border-b border-[#D89B2B]/20">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#E5A836]">
              Signature Culinary Distinction
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight">
              Why Diners Travel to DESTIN
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Every kitchen has dishes that define its soul. Here are the four signature experiences 
              that turn first-time highway travellers into lifelong regulars.
            </p>
          </div>

          <a
            href="#menu"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-xs uppercase font-bold tracking-wider text-[#123038] bg-[#D89B2B] hover:bg-[#E5A836] transition-colors self-start md:self-auto cursor-pointer"
          >
            <span>View Full Menu</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* 4 Distinctive Signature Cards in an Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="group relative bg-[#173D47]/70 hover:bg-[#1A4550] border border-stone-700/60 hover:border-[#D89B2B]/50 rounded-xl p-8 transition-all duration-300 flex flex-col justify-between space-y-6 shadow-md"
            >
              <div className="space-y-4">
                
                {/* Number & Tagline */}
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl font-light text-[#D89B2B] opacity-90">
                    {exp.number}
                  </span>
                  <span className="text-xs font-mono text-[#E5A836] bg-[#D89B2B]/10 px-2.5 py-1 rounded border border-[#D89B2B]/20">
                    {exp.highlight}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-serif text-white group-hover:text-[#E5A836] transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-xs text-stone-400 font-mono tracking-wide">
                    {exp.tagline}
                  </p>
                </div>

                <p className="text-stone-300 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>

              {/* Card Footer with Price and Filter Action */}
              <div className="pt-4 border-t border-stone-700/60 flex items-center justify-between text-xs">
                <span className="text-stone-300">
                  Verified Pricing: <strong className="text-white font-mono text-sm">{exp.price}</strong>
                </span>

                <button
                  onClick={() => {
                    onSelectCategory(exp.category);
                    const menuEl = document.getElementById('menu');
                    if (menuEl) menuEl.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-[#E5A836] hover:text-white font-medium flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Explore in Menu</span>
                  <span aria-hidden="true">→</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
