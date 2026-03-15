import React from 'react';
import { Scale, Timer, Zap, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-l from-biu-dark via-biu-dark/80 to-transparent z-10" />
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
                <span className="text-sm font-medium text-gray-300">2026 Season Kicks Off</span>
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
                <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-medium py-4 px-8 rounded-full transition-all hover:-translate-y-1">
                  Discover Our Car
                </button>
              </div>
            </div>

            {/* Right Column: Prominent Logo */}
            <div className="hidden lg:flex items-center justify-center relative animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="absolute inset-0 bg-biu-green/20 blur-[100px] rounded-full scale-110 -z-10"></div>
              <img 
                src="/BIURacingColorLogo.png" 
                alt="BIU Racing Logo Large" 
                className="w-full max-w-lg object-contain mix-blend-multiply drop-shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:drop-shadow-[0_0_40px_rgba(0,78,54,0.5)] transition-all duration-700 hover:scale-105 animate-[float_6s_ease-in-out_infinite]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hero Racing Animation */}
      <div className="w-full h-1 bg-white/10 relative overflow-hidden">
        {/* The Track Line */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-transparent via-biu-gold to-transparent opacity-50"></div>
        
        {/* Electric Car Blur Racing By */}
        <div className="absolute top-1/2 -translate-y-1/2 w-48 h-3 bg-biu-gold/80 blur-[6px] shadow-[0_0_20px_10px_rgba(234,179,8,0.5)] animate-race"></div>
        <div className="absolute top-1/2 -translate-y-1/2 w-32 h-2 bg-white flex items-center justify-end animate-race">
           <Zap className="w-6 h-6 text-biu-gold rotate-90 blur-[1px]" />
        </div>
      </div>

      {/* Car Specs Section */}
      <section className="py-24 bg-gradient-to-b from-transparent to-black/50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Performance</h2>
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

      {/* Sponsors Marquee Section */}
      <section className="py-16 bg-black border-y border-white/10 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
          <h3 className="text-biu-gold text-sm uppercase tracking-widest font-bold">Our Partners</h3>
        </div>
        
        {/* Infinite Scroll Container */}
        <div className="relative w-full overflow-hidden flex bg-black items-center h-24">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
          
          <div className="flex animate-[scroll_40s_linear_infinite] whitespace-nowrap items-center w-max">
            {/* First set */}
            {[...Array(10)].map((_, idx) => (
              <div key={`box-${idx}`} className="w-48 h-16 bg-white/5 border border-white/10 rounded flex items-center justify-center font-bold text-gray-500 mx-6 hover:border-biu-gold hover:text-white transition-all cursor-default">
                COMPANY
              </div>
            ))}
            {/* Duplicated for seamless loop */}
            {[...Array(10)].map((_, idx) => (
              <div key={`dup-box-${idx}`} className="w-48 h-16 bg-white/5 border border-white/10 rounded flex items-center justify-center font-bold text-gray-500 mx-6 hover:border-biu-gold hover:text-white transition-all cursor-default">
                COMPANY
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
