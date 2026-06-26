import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { ExternalLink } from 'lucide-react';

const photos = [
  {
    src: '/Team_Mangment.jpeg',
    title: 'Leadership Team',
    description: 'The founding leadership of BIU Racing — Team Captain and Department Heads.',
    date: 'January 2026',
  },
  {
    src: '/opening_event.jpeg',
    title: 'Official Launch Event',
    description: 'Over 300 students gathered at the Engineering Building for our historic first recruitment event.',
    date: 'January 6, 2026',
  },
  {
    src: '/opening_event2.jpeg',
    title: 'Launch — The Crowd',
    description: 'Students from every discipline at Bar-Ilan University came to be part of something historic.',
    date: 'January 6, 2026',
  },
];

const Media = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">Media Gallery</h2>
          <div className="w-24 h-1 bg-biu-gold mx-auto rounded-full shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
          <p className="mt-8 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Glimpses into our journey — from the very first meeting to the workshop floor.
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {photos.map((photo, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-biu-gold/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(234,179,8,0.1)]"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-biu-gold text-xs font-semibold uppercase tracking-widest mb-1">{photo.date}</span>
                <h3 className="text-white font-bold text-lg leading-tight">{photo.title}</h3>
                <p className="text-gray-300 text-sm mt-1 leading-snug">{photo.description}</p>
              </div>
              {/* Always-visible title below on mobile */}
              <div className="p-4 lg:hidden">
                <h3 className="text-white font-semibold text-base">{photo.title}</h3>
                <p className="text-gray-400 text-xs mt-1">{photo.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* More on Instagram */}
        <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/20 border border-purple-500/20 rounded-3xl p-10 md:p-14 text-center mb-16 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <FaInstagram className="w-12 h-12 text-pink-400 mx-auto mb-5" />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">More Photos on Instagram</h3>
            <p className="text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
              We share regular behind-the-scenes content, workshop progress, and team moments on our Instagram page. Follow us to watch the car come to life.
            </p>
            <a
              href="https://www.instagram.com/biu_racing/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold py-4 px-10 rounded-full transition-all hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(236,72,153,0.4)]"
            >
              <FaInstagram size={20} />
              @biu_racing
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* LinkedIn Updates */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center">
          <FaLinkedin className="w-10 h-10 text-[#0077b5] mx-auto mb-5" />
          <h3 className="text-2xl font-bold text-white mb-4">Engineering Updates on LinkedIn</h3>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            For detailed technical updates, team milestones, and industry insights, follow our LinkedIn page.
          </p>
          <a
            href="https://www.linkedin.com/company/bar-ilan-racing/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#0077b5] hover:bg-[#006396] text-white font-bold py-4 px-10 rounded-full transition-all hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,119,181,0.3)]"
          >
            <FaLinkedin size={20} />
            Bar-Ilan Racing
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
};

export default Media;
