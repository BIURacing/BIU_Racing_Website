import React from 'react';
import { Target, Trophy, Users, Zap, Rocket, BookOpen, Globe } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-biu-gold text-sm uppercase tracking-widest font-bold">Bar-Ilan University</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mt-3 mb-6 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-biu-gold to-yellow-200">Story</span>
          </h1>
          <div className="w-24 h-1 bg-biu-green mx-auto rounded-full shadow-[0_0_15px_rgba(0,78,54,0.6)] mb-10"></div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            The <strong className="text-white font-semibold">first Formula Student team</strong> in Bar-Ilan University's history —
            born from a desire to bridge the gap between academic theory and real-world engineering.
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-24">
          {[
            { value: '6', label: 'Sub-Teams' },
            { value: '600+', label: 'Universities Compete Globally' },
            { value: '2027', label: 'Target Race Season' },
            { value: '1st', label: 'Formula Student Team at BIU' },
          ].map(({ value, label }) => (
            <div key={label} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-biu-gold/30 transition-colors">
              <div className="text-3xl md:text-4xl font-black text-biu-gold mb-2">{value}</div>
              <div className="text-gray-400 text-sm leading-snug">{label}</div>
            </div>
          ))}
        </div>

        {/* Origin Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-biu-green/20 border border-biu-green/30 flex items-center justify-center shrink-0">
                <Rocket className="w-5 h-5 text-biu-green" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">How It Started</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Founded by <strong className="text-white">Shahar Admoni</strong>, BIU Racing was born from a simple but powerful idea:
              that the best engineering education happens when you build something real, not just study it.
            </p>
            <p className="text-gray-300 leading-relaxed mb-8">
              The initiative grew quickly. On January 6th, 2026, over <strong className="text-white">300 students</strong> packed the Engineering Building
              for our launch event — from Mechanical and Electrical Engineering to Economics and Law.
              The passion in that room was undeniable. BIU Racing was officially born.
            </p>

            <blockquote className="border-l-4 border-biu-gold pl-6 py-3 bg-white/5 rounded-r-2xl pr-6">
              <p className="italic text-white font-medium leading-relaxed">
                "I can accept failure, everyone fails at something. But I can't accept not trying."
              </p>
              <span className="text-sm text-gray-400 mt-2 block">— Michael Jordan &nbsp;|&nbsp; Our Team Philosophy</span>
            </blockquote>
          </div>

          <div className="space-y-4">
            {[
              {
                icon: BookOpen,
                color: 'text-biu-gold',
                bg: 'bg-biu-gold/10 border-biu-gold/20',
                title: 'Theory Meets Practice',
                desc: 'We bridge the gap between classroom studies and the demanding engineering realities of the modern tech industry.',
              },
              {
                icon: Globe,
                color: 'text-blue-400',
                bg: 'bg-blue-500/10 border-blue-500/20',
                title: 'Aiming at Europe',
                desc: 'When people ask if we "jumped too high" — we take it as a compliment. Israeli teams have stood on European Formula Student podiums. We intend to join them in Summer 2027.',
              },
              {
                icon: Users,
                color: 'text-emerald-400',
                bg: 'bg-emerald-500/10 border-emerald-500/20',
                title: 'Everyone Has a Role',
                desc: 'Engineering is not the only skill we need. Our team includes students from Economics, Law, and Sciences — because we run BIU Racing like a high-end tech startup.',
              },
            ].map(({ icon: Icon, color, bg, title, desc }) => (
              <div key={title} className={`flex gap-4 p-5 rounded-2xl border ${bg} transition-colors hover:border-opacity-50`}>
                <div className="shrink-0 mt-0.5">
                  <Icon className={`w-6 h-6 ${color}`} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">{title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision & Target */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-biu-green/40 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-biu-green/20 border border-biu-green/30 flex items-center justify-center mb-5">
              <Target className="w-6 h-6 text-biu-green" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Our Vision</h3>
            <p className="text-gray-400 leading-relaxed">
              To produce better, worldly-experienced engineers who are ready for the workforce the moment they graduate —
              having already built, tested, and raced a real electric vehicle.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-biu-gold/40 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-biu-gold/10 border border-biu-gold/20 flex items-center justify-center mb-5">
              <Trophy className="w-6 h-6 text-biu-gold" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Our Target</h3>
            <p className="text-gray-400 leading-relaxed">
              Summer 2027. We aim to manufacture and race a fully electric Formula Student car on European tracks,
              competing against teams from MIT, ETH Zurich, TU Delft, and hundreds more.
            </p>
          </div>
        </div>

        {/* What is Formula Student */}
        <div className="bg-gradient-to-br from-[#004e36] to-black border border-white/10 rounded-3xl p-8 md:p-14 relative overflow-hidden">
          <Zap className="absolute -top-8 -right-8 w-48 h-48 text-white/5" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5 text-biu-gold" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wide">What is Formula Student?</h2>
            </div>

            <p className="text-gray-300 text-lg mb-10 leading-relaxed max-w-3xl">
              Formula Student (FSAE) is the world's most established educational engineering competition.
              Student teams design, build, test, and race a small-scale formula-style car — and are judged as a real business, not just as engineers.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Global Prestige',
                  desc: 'Over 600 of the world\'s top universities participate — including MIT, ETH Zurich, and TU Delft.',
                },
                {
                  title: 'Extreme Performance',
                  desc: 'Student-built electric cars accelerate from 0 to 100 km/h in under 1.5 seconds.',
                },
                {
                  title: 'Industry-Grade Judging',
                  desc: 'Senior engineers from Porsche, Mercedes, Ferrari, and other top brands evaluate teams on real tracks across Europe.',
                },
              ].map(({ title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-2 h-2 mt-2 rounded-full bg-biu-gold shrink-0 shadow-[0_0_8px_rgba(234,179,8,1)]"></div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{title}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
