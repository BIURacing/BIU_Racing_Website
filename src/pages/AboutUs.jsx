import React from 'react';
import { Target, Trophy, Users, Zap } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-biu-gold to-yellow-200">Story</span>
          </h2>
          <div className="w-24 h-1 bg-biu-green mx-auto rounded-full shadow-[0_0_15px_rgba(0,78,54,0.6)] mb-12"></div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            We are the first official Formula Student team in the history of Bar-Ilan University. 
            Born from a desire to bridge the gap between theoretical academics and hands-on, high-end engineering.
          </p>
        </div>

        {/* Magazine Style Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          
          {/* Main Story Column */}
          <div className="lg:col-span-7 space-y-12">
            <article className="prose prose-invert lg:prose-lg max-w-none">
              <p className="text-gray-300 leading-relaxed">
                The initiative was born out of a profound desire to experience practical creation alongside our degrees. Founded by Shahar Admoni, the team began with a vision to bridge the gap between classroom theoretical studies and the relentless, hands-on engineering demands of the modern tech industry.
              </p>
              
              <blockquote className="border-l-4 border-biu-gold pl-6 py-2 my-8 bg-white/5 rounded-r-2xl pr-4 italic text-white font-medium">
                "I can accept failure, everyone fails at something. But I can't accept not trying." <br/>
                <span className="text-sm text-gray-400 not-italic mt-2 block">— Michael Jordan (Our Team Philosophy)</span>
              </blockquote>
              
              <h3 className="text-2xl font-bold text-white mt-12 mb-4">Aiming High</h3>
              <p className="text-gray-300 leading-relaxed">
                When people ask if we "jumped too high" attempting to build a race car as students, we take it as a compliment. For those aiming at high-end industries like VLSI or Electro-Optics, mediocrity is not an option. You have to try and dare. Israeli teams have stood on European podiums, proving it is possible. This project is our ticket to accumulating premium engineering experience.
              </p>
            </article>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/10">
              <div className="bg-white/5 p-8 rounded-3xl border border-white/5 hover:border-biu-green/50 transition-colors">
                <Target className="w-10 h-10 text-biu-green mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">Our Vision</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Producing better, worldly-experienced engineers ready for the workforce.
                </p>
              </div>
              <div className="bg-white/5 p-8 rounded-3xl border border-white/5 hover:border-biu-gold/50 transition-colors">
                <Trophy className="w-10 h-10 text-biu-gold mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">Our Target</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Summer 2027. We aim to manufacture and race a fully electric race car on European tracks.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar / Competition Details */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* What is Formula Student Card */}
            <div className="bg-gradient-to-br from-[#004e36] to-black border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              <Zap className="absolute -top-10 -right-10 w-40 h-40 text-white/5" />
              <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-wider">What is Formula Student?</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Formula Student (FSAE) is the world's most established educational engineering competition. Student teams from around the globe design, build, test, and race a small-scale formula style racing car.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 rounded-full bg-biu-gold shrink-0 shadow-[0_0_8px_rgba(234,179,8,1)]"></div>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    <strong className="text-white block mb-1">Global Prestige</strong>
                    Over 600 of the world's most prestigious universities participate, including MIT, ETH Zurich, and TU Delft.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 rounded-full bg-biu-gold shrink-0 shadow-[0_0_8px_rgba(234,179,8,1)]"></div>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    <strong className="text-white block mb-1">Extreme Performance</strong>
                    Student-led cars are accelerating from 0 to 100 km/h in less than 1.5 seconds.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 rounded-full bg-biu-gold shrink-0 shadow-[0_0_8px_rgba(234,179,8,1)]"></div>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    <strong className="text-white block mb-1">World-Class Judging</strong>
                    Vehicles are evaluated on professional tracks by senior engineers from top-tier brands like Porsche, Mercedes, and Ferrari.
                  </p>
                </li>
              </ul>
            </div>

            {/* Diverse Team Card */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
              <Users className="w-8 h-8 text-biu-gold mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">More Than Just Engineering</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                We are evaluated not only on track performance but as a real business entity. We must present highly accurate cost analytics and a viable business model.
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                This is why our team integrates students from <strong>Economics, Law, and Exact Sciences</strong>. With over 130 pages of detailed competition regulations, we run BIU Racing just like a high-end tech startup.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
