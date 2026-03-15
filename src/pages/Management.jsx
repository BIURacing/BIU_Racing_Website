import React from 'react';
import { User } from 'lucide-react';

const ProfileCard = ({ member, isTopTier = false }) => (
  <div className={`bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(234,179,8,0.15)] hover:border-biu-gold/30 group ${isTopTier ? 'w-full max-w-md mx-auto transform scale-105' : 'w-full'}`}>
    <div className={`rounded-full bg-white/10 mb-6 flex items-center justify-center overflow-hidden border-2 border-transparent group-hover:border-biu-gold transition-colors ${isTopTier ? 'w-32 h-32 sm:w-40 sm:h-40' : 'w-24 h-24 sm:w-32 sm:h-32'}`}>
      {member.image ? (
        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
      ) : (
        <User className={`text-gray-400 group-hover:text-biu-gold transition-colors ${isTopTier ? 'w-16 h-16 sm:w-20 sm:h-20' : 'w-12 h-12 sm:w-16 sm:h-16'}`} />
      )}
    </div>
    <h4 className={`font-bold text-white mb-2 group-hover:text-biu-gold transition-colors ${isTopTier ? 'text-2xl sm:text-3xl' : 'text-xl'}`}>{member.name}</h4>
    <p className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wider whitespace-nowrap truncate w-full px-2">
      {member.role}
    </p>
  </div>
);

const Management = () => {
  const captain = { name: "Shahar Admoni", role: "Team Captain", image: null };

  const teamLeaders = [
    { name: "Yonatan Ben Bassat", role: "Head of Embedded Sys.", image: null },
    { name: "Rotem Sillam", role: "Head of Electrical", image: null },
    { name: "Beny Provetorov", role: "Head of Mechanical", image: null },
    { name: "Ido Samoha", role: "Head of Product Mgmt.", image: null },
    { name: "Roni Mordekhayev", role: "Head of Operations", image: null }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 md:mb-28">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">Management</h2>
          <div className="w-24 h-1 bg-biu-gold mx-auto rounded-full shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
          <p className="mt-8 text-gray-400 max-w-2xl mx-auto text-lg">
            The driving force behind BIU Racing. Our leadership structure is designed for maximum efficiency, pure engineering excellence, and track domination.
          </p>
        </div>

        <div className="space-y-20 md:space-y-28">
          {/* Captain Tier */}
          <div>
            <div className="flex justify-center">
              <ProfileCard member={captain} isTopTier={true} />
            </div>
          </div>

          {/* Department Heads Tier */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center text-gray-200">Department Heads</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {teamLeaders.map((member, idx) => (
                <ProfileCard key={idx} member={member} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Management;
