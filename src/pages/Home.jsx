import React from 'react';
import { Scale, Timer, Zap, ChevronRight, Users, Award, Globe, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { updates, categoryStyles } from '../data/updates';

const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-biu-dark via-biu-dark/85 to-biu-dark/40 z-10" />
          <img
            src="https://images.unsplash.com/photo-1541448834771-061245fae16d?q=80&w=2500&auto=format&fit=crop"
            alt="Formula Car on Track"
            className="w-full h-full object-cover object-center opacity-60"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Text & CTA */}
            <div className="max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6 mx-auto lg:mx-0">
                <span className="w-2 h-2 rounded-full bg-biu-gold animate-pulse"></span>
                <span className="text-sm font-medium text-gray-300">Targeting the 2027 Season</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight animate-fade-in-up">
                Developing the <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-biu-gold to-yellow-200">
                  Speed of Tomorrow
                </span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Bar-Ilan University's <strong className="text-white font-semibold">Formula Student</strong> team.<br className="hidden sm:block"/>
                Engineering the future of automotive.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <Link to="/team/management" className="bg-biu-green hover:bg-[#003827] text-white font-bold py-4 px-8 rounded-full transition-all flex items-center gap-2 group shadow-[0_0_20px_rgba(0,78,54,0.6)] hover:shadow-[0_0_30px_rgba(0,78,54,0.8)] hover:-translate-y-1">
                  Meet the Team
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="#performance" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-medium py-4 px-8 rounded-full transition-all hover:-translate-y-1">
                  Discover Our Car
                </a>
              </div>
            </div>

            {/* Right Column: Prominent Logo */}
            <div className="hidden lg:flex items-center justify-center relative animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="absolute inset-0 bg-biu-green/20 blur-[100px] rounded-full scale-110 -z-10"></div>
              <img
                src="/BIURacingColorLogo.png"
                alt="BIU Racing Logo"
                className="w-full max-w-lg object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:drop-shadow-[0_0_40px_rgba(0,78,54,0.5)] transition-all duration-700 hover:scale-105 animate-[float_6s_ease-in-out_infinite]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Racing Animation Line */}
      <div className="w-full h-1 bg-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-transparent via-biu-gold to-transparent opacity-50"></div>
        <div className="absolute top-1/2 -translate-y-1/2 w-48 h-3 bg-biu-gold/80 blur-[6px] shadow-[0_0_20px_10px_rgba(234,179,8,0.5)] animate-race"></div>
        <div className="absolute top-1/2 -translate-y-1/2 w-32 h-2 bg-white flex items-center justify-end animate-race">
           <Zap className="w-6 h-6 text-biu-gold rotate-90 blur-[1px]" />
        </div>
      </div>

      {/* Car Performance Specs */}
      <section id="performance" className="py-24 bg-gradient-to-b from-transparent to-black/50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-biu-gold text-sm uppercase tracking-widest font-bold">Engineering Excellence</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-4">Our Performance Targets</h2>
            <div className="w-24 h-1 bg-biu-gold mx-auto rounded-full shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors group relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-biu-gold/10 rounded-bl-[100px] -z-10 group-hover:scale-125 transition-transform duration-500"></div>
              <Scale className="w-12 h-12 text-biu-gold mb-6 group-hover:scale-110 transition-transform" />
              <div className="text-5xl font-black mb-2">230 <span className="text-2xl text-gray-400 font-medium">kg</span></div>
              <div className="text-gray-400 text-lg">Total Weight</div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors group relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-biu-green/20 rounded-bl-[100px] -z-10 group-hover:scale-125 transition-transform duration-500"></div>
              <Timer className="w-12 h-12 text-biu-green mb-6 group-hover:scale-110 transition-transform" />
              <div className="text-5xl font-black mb-2">2.9 <span className="text-2xl text-gray-400 font-medium">s</span></div>
              <div className="text-gray-400 text-lg">0 to 100 km/h</div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors group relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-biu-gold/10 rounded-bl-[100px] -z-10 group-hover:scale-125 transition-transform duration-500"></div>
              <Zap className="w-12 h-12 text-biu-gold mb-6 group-hover:scale-110 transition-transform" />
              <div className="text-5xl font-black mb-2">80 <span className="text-2xl text-gray-400 font-medium">kW</span></div>
              <div className="text-gray-400 text-lg">Electric Motor Power</div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-biu-green/30 to-black border border-biu-green/30 rounded-3xl p-10 md:p-16 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-biu-gold/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-biu-green/10 rounded-full blur-3xl"></div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center relative z-10">
              <div className="lg:col-span-2">
                <span className="text-biu-gold text-sm uppercase tracking-widest font-bold">Open for Recruitment</span>
                <h2 className="text-3xl md:text-5xl font-extrabold mt-3 mb-6">
                  Ready to Build a Race Car?
                </h2>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  We're looking for ambitious Bar-Ilan University students across all disciplines — Engineering, Economics, Law, and beyond. No experience required, only passion and dedication.
                </p>
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-biu-gold" />
                    <span className="text-gray-300 text-sm">Multi-disciplinary team</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-biu-gold" />
                    <span className="text-gray-300 text-sm">Compete across Europe</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-biu-gold" />
                    <span className="text-gray-300 text-sm">Industry-grade experience</span>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-biu-gold hover:bg-yellow-400 text-biu-dark font-bold py-4 px-8 rounded-full transition-all hover:-translate-y-1 shadow-[0_0_20px_rgba(234,179,8,0.4)] group"
                >
                  Join the Team
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="hidden lg:block">
                <img
                  src="/BIURacingColorLogo.png"
                  alt="BIU Racing"
                  className="w-full max-w-xs mx-auto opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates Preview */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-biu-gold text-sm uppercase tracking-widest font-bold">From the Workshop</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">Latest Updates</h2>
            </div>
            <Link
              to="/updates"
              className="flex items-center gap-1 text-biu-gold hover:text-yellow-300 font-semibold text-sm transition-colors group shrink-0"
            >
              See All Updates
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {updates.slice(0, 3).map((update) => (
              <Link
                key={update.id}
                to="/updates"
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-biu-gold/30 hover:bg-white/[0.08] transition-all duration-300 group block"
              >
                <div className="flex items-center justify-between mb-4 gap-2 flex-wrap">
                  <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${categoryStyles[update.category] || 'bg-white/10 text-gray-400 border-white/10'}`}>
                    {update.category}
                  </span>
                  <span className="text-gray-500 text-xs flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {update.date}
                  </span>
                </div>
                <h3 className="text-white font-bold text-base mb-2 group-hover:text-biu-gold transition-colors leading-snug line-clamp-2">
                  {update.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {update.summary}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Partner With Us Section */}
      <section className="py-24 bg-black border-y border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-biu-gold text-sm uppercase tracking-widest font-bold">Partnership</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">Become a Partner</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Support BIU Racing and gain visibility across Israel and European Formula Student competitions. Together we push the limits of what student teams can achieve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {[
              {
                title: "Brand Visibility",
                desc: "Your logo on our car, team gear, and digital presence throughout the European racing season.",
                icon: Globe,
              },
              {
                title: "Talent Pipeline",
                desc: "Direct access to top engineering graduates from Bar-Ilan University's rigorous STEM programs.",
                icon: Users,
              },
              {
                title: "Innovation Impact",
                desc: "Collaborate on real-world electric vehicle technology developed by the next generation of engineers.",
                icon: Zap,
              },
            ].map(({ title, desc, icon: Icon }) => (
              <div
                key={title}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-biu-gold/30 hover:bg-white/8 transition-all group"
              >
                <Icon className="w-10 h-10 text-biu-gold mb-5 group-hover:scale-110 transition-transform" />
                <h4 className="text-white font-bold text-xl mb-3">{title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-biu-gold hover:bg-yellow-400 text-biu-dark font-bold py-4 px-10 rounded-full transition-all hover:-translate-y-1 shadow-[0_0_20px_rgba(234,179,8,0.4)] group"
            >
              Partner With Us
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
