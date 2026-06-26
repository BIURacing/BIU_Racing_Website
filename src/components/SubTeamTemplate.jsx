import React from 'react';
import { Crown } from 'lucide-react';

const getInitials = (name) =>
  name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

const MemberCard = ({ member, isLead = false }) => (
  <div
    className={`flex flex-col items-center text-center group transition-all duration-300 hover:-translate-y-2 ${
      isLead
        ? 'bg-gradient-to-b from-biu-green/20 to-white/5 border border-biu-green/40 rounded-3xl p-8 hover:border-biu-gold/50 hover:shadow-[0_10px_40px_rgba(234,179,8,0.15)]'
        : 'bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-biu-gold/30 hover:shadow-[0_8px_25px_rgba(234,179,8,0.1)]'
    }`}
  >
    {/* Avatar */}
    <div className={`relative mb-4 ${isLead ? 'mb-6' : ''}`}>
      {isLead && (
        <div className="absolute -top-3 -right-3 w-8 h-8 bg-biu-gold rounded-full flex items-center justify-center shadow-[0_0_12px_rgba(234,179,8,0.6)] z-10">
          <Crown className="w-4 h-4 text-biu-dark" />
        </div>
      )}
      <div
        className={`rounded-full overflow-hidden border-2 transition-colors flex items-center justify-center ${
          isLead
            ? 'w-28 h-28 sm:w-36 sm:h-36 border-biu-green/50 group-hover:border-biu-gold'
            : 'w-20 h-20 sm:w-24 sm:h-24 border-white/10 group-hover:border-biu-gold/50'
        }`}
      >
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div
            className={`w-full h-full flex items-center justify-center font-black text-white select-none ${
              isLead
                ? 'bg-gradient-to-br from-biu-green to-biu-green/50 text-3xl'
                : 'bg-gradient-to-br from-white/15 to-white/5 text-xl'
            }`}
          >
            {getInitials(member.name)}
          </div>
        )}
      </div>
    </div>

    <h4
      className={`font-bold text-white group-hover:text-biu-gold transition-colors leading-tight ${
        isLead ? 'text-xl sm:text-2xl mb-2' : 'text-base sm:text-lg mb-1'
      }`}
    >
      {member.name}
    </h4>

    <p
      className={`font-semibold uppercase tracking-wider ${
        isLead ? 'text-biu-gold text-sm' : 'text-gray-400 text-xs'
      }`}
    >
      {member.role}
    </p>

    {member.bio && (
      <p className="text-gray-400 text-sm mt-3 leading-relaxed">{member.bio}</p>
    )}
  </div>
);

const SubTeamTemplate = ({ teamName, missionText, teamLead, members = [] }) => {
  return (
    <div className="pt-32 min-h-screen flex flex-col">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 w-full pb-20">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-white">{teamName}</h2>
          <div className="w-24 h-1 bg-biu-gold mx-auto rounded-full shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
        </div>

        {/* Mission */}
        <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-2xl backdrop-blur-sm max-w-4xl mx-auto mb-20 text-center">
          <h3 className="text-2xl font-bold mb-6 text-biu-gold">Our Mission</h3>
          <p className="text-lg text-gray-300 leading-relaxed font-light">
            {missionText}
          </p>
        </div>

        {/* Team Lead */}
        {teamLead && (
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <div className="flex-1 h-px bg-white/10"></div>
              <span className="text-biu-gold text-sm uppercase tracking-widest font-bold px-4">Team Lead</span>
              <div className="flex-1 h-px bg-white/10"></div>
            </div>
            <div className="max-w-xs mx-auto">
              <MemberCard member={teamLead} isLead={true} />
            </div>
          </div>
        )}

        {/* Team Members */}
        {members.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-10">
              <div className="flex-1 h-px bg-white/10"></div>
              <span className="text-gray-400 text-sm uppercase tracking-widest font-bold px-4">
                Team Members
              </span>
              <div className="flex-1 h-px bg-white/10"></div>
            </div>
            <div
              className={`grid gap-6 ${
                members.length <= 2
                  ? 'grid-cols-1 sm:grid-cols-2 max-w-lg mx-auto'
                  : members.length <= 4
                  ? 'grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 max-w-3xl mx-auto'
                  : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
              }`}
            >
              {members.map((member, idx) => (
                <MemberCard key={idx} member={member} />
              ))}
            </div>
          </div>
        )}

        {/* Coming soon placeholder when no members yet */}
        {members.length === 0 && !teamLead && (
          <div className="text-center py-12 text-gray-600">
            <p className="text-sm uppercase tracking-widest">Team roster coming soon</p>
          </div>
        )}

        {members.length === 0 && teamLead && (
          <div className="text-center mt-4">
            <span className="inline-block px-6 py-2 rounded-full border border-white/10 text-gray-500 text-sm">
              Team roster coming soon
            </span>
          </div>
        )}
      </div>

      {/* Team in Action — Scrolling Photos */}
      <div className="py-12 bg-black border-y border-white/10 overflow-hidden relative mt-auto">
        <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
          <h3 className="text-biu-green text-sm uppercase tracking-widest font-bold">Team In Action</h3>
        </div>

        <div className="relative w-full overflow-hidden flex bg-black items-center h-48 sm:h-64">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>

          <div className="flex animate-[scroll_40s_linear_infinite] whitespace-nowrap items-center w-max">
            {[
              '/Team_Mangment.jpeg',
              '/opening_event.jpeg',
              '/opening_event2.jpeg',
              '/Team_Mangment.jpeg',
              '/opening_event.jpeg',
            ].map((src, idx) => (
              <div
                key={`img-${idx}`}
                className="w-64 h-40 sm:w-80 sm:h-48 bg-gray-800/50 border border-white/10 rounded-lg mx-4 shrink-0 overflow-hidden group"
              >
                <img
                  src={src}
                  alt="Team In Action"
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                />
              </div>
            ))}
            {[
              '/Team_Mangment.jpeg',
              '/opening_event.jpeg',
              '/opening_event2.jpeg',
              '/Team_Mangment.jpeg',
              '/opening_event.jpeg',
            ].map((src, idx) => (
              <div
                key={`dup-img-${idx}`}
                className="w-64 h-40 sm:w-80 sm:h-48 bg-gray-800/50 border border-white/10 rounded-lg mx-4 shrink-0 overflow-hidden group"
              >
                <img
                  src={src}
                  alt="Team In Action"
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubTeamTemplate;
