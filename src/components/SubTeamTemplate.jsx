import React from 'react';

const SubTeamTemplate = ({ teamName, missionText }) => {
  return (
    <div className="pt-32 min-h-screen flex flex-col">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-white">{teamName}</h2>
          <div className="w-24 h-1 bg-biu-gold mx-auto rounded-full shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
        </div>

        <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-2xl backdrop-blur-sm max-w-4xl mx-auto mb-20 text-center">
          <h3 className="text-2xl font-bold mb-6 text-biu-gold">Our Mission</h3>
          <p className="text-lg text-gray-300 leading-relaxed font-light">
            {missionText || "We are dedicated to pushing the boundaries of engineering. Our team focuses on integrating cutting-edge technology with high-performance execution to deliver maximum results on the track."}
          </p>
        </div>
      </div>

      {/* Infinite Horizontal Scrolling Images - Team in Action */}
      <div className="py-12 bg-black border-y border-white/10 overflow-hidden relative mt-auto">
        <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
          <h3 className="text-biu-green text-sm uppercase tracking-widest font-bold">Team In Action</h3>
        </div>
        
        <div className="relative w-full overflow-hidden flex bg-black items-center h-48 sm:h-64">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
          
          <div className="flex animate-[scroll_40s_linear_infinite] whitespace-nowrap items-center w-max">
            {/* First set */}
            {["/Team_Mangment.jpeg", "/opening_event.jpeg", "/opening_event2.jpeg", "/Team_Mangment.jpeg", "/opening_event.jpeg"].map((src, idx) => (
              <div key={`img-${idx}`} className="w-64 h-40 sm:w-80 sm:h-48 bg-gray-800/50 border border-white/10 rounded-lg mx-4 flex items-center justify-center shrink-0 overflow-hidden group">
                <img src={src} alt="Team In Action" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
              </div>
            ))}
            {/* Duplicated for seamless loop */}
            {["/Team_Mangment.jpeg", "/opening_event.jpeg", "/opening_event2.jpeg", "/Team_Mangment.jpeg", "/opening_event.jpeg"].map((src, idx) => (
              <div key={`dup-img-${idx}`} className="w-64 h-40 sm:w-80 sm:h-48 bg-gray-800/50 border border-white/10 rounded-lg mx-4 flex items-center justify-center shrink-0 overflow-hidden group">
                <img src={src} alt="Team In Action" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubTeamTemplate;
