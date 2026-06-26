import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { updates, categoryStyles } from '../data/updates';

const CATEGORIES = ['All', 'Mechanical', 'Electrical', 'General', 'Milestone'];

const SourceIcon = ({ source }) => {
  if (source === 'linkedin') return <FaLinkedin className="w-4 h-4 text-[#0077b5]" />;
  if (source === 'instagram') return <FaInstagram className="w-4 h-4 text-pink-400" />;
  return null;
};

const UpdateCard = ({ update }) => (
  <article className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-biu-gold/30 hover:bg-white/[0.08] transition-all duration-300 group flex flex-col">
    <div className="flex items-center justify-between mb-5 gap-3 flex-wrap">
      <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${categoryStyles[update.category] || 'bg-white/10 text-gray-400 border-white/10'}`}>
        {update.category}
      </span>
      <div className="flex items-center gap-2 text-gray-500 text-xs shrink-0">
        <Calendar className="w-3.5 h-3.5" />
        {update.date}
        <SourceIcon source={update.source} />
      </div>
    </div>

    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-biu-gold transition-colors leading-snug">
      {update.title}
    </h3>

    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
      {update.summary}
    </p>

    <div className="flex flex-wrap gap-2 mt-auto">
      {update.tags.map((tag) => (
        <span key={tag} className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded-md">
          #{tag}
        </span>
      ))}
    </div>
  </article>
);

const Updates = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? updates
      : updates.filter((u) => u.category === activeCategory);

  return (
    <div className="pt-32 pb-24 min-h-screen relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            Latest{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-biu-gold to-yellow-200">
              Updates
            </span>
          </h2>
          <div className="w-24 h-1 bg-biu-gold mx-auto rounded-full shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
          <p className="mt-8 text-gray-400 max-w-2xl mx-auto text-lg">
            Follow our journey — from the workshop floor to the European track.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all ${
                activeCategory === cat
                  ? 'bg-biu-gold text-biu-dark border-biu-gold shadow-[0_0_15px_rgba(234,179,8,0.4)]'
                  : 'bg-white/5 text-gray-400 border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((update) => (
              <UpdateCard key={update.id} update={update} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-600">
            <p className="text-sm uppercase tracking-widest">No updates in this category yet</p>
          </div>
        )}

        {/* Social Follow CTA */}
        <div className="mt-20 bg-white/5 border border-white/10 rounded-3xl p-10 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Stay in the Loop</h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            We post regular updates on Instagram and LinkedIn — follow us to see the car come to life in real time.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.instagram.com/biu_racing/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold py-3 px-7 rounded-full transition-all hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(236,72,153,0.3)]"
            >
              <FaInstagram size={18} />
              Follow on Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/bar-ilan-racing/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-[#0077b5] hover:bg-[#006396] text-white font-bold py-3 px-7 rounded-full transition-all hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,119,181,0.3)]"
            >
              <FaLinkedin size={18} />
              Follow on LinkedIn
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Updates;
