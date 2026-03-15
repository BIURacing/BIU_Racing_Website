import React from 'react';

const Media = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6">Media Gallery</h2>
        <div className="w-24 h-1 bg-biu-gold mx-auto rounded-full shadow-[0_0_10px_rgba(234,179,8,0.5)] mb-12"></div>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-16">
          Glimpses into our journey, from the workshop to the global stage. 
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { src: "/Team_Mangment.jpeg", alt: "Team Management" },
            { src: "/opening_event.jpeg", alt: "Opening Event" },
            { src: "/opening_event2.jpeg", alt: "Opening Event 2" }
          ].map((image, idx) => (
            <div key={idx} className="group relative rounded-2xl overflow-hidden aspect-video bg-white/5 border border-white/10 hover:border-biu-gold/50 transition-colors">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="text-white font-bold text-lg">{image.alt}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Media;
