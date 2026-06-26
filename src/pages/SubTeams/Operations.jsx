import React from 'react';
import SubTeamTemplate from '../../components/SubTeamTemplate';

const teamLead = {
  name: 'Tair Sackstein',
  role: 'Head of Operations',
  image: null,
};

const members = [
  { name: 'Nohar', role: 'External Relations, Fundraising & Electrical Ops Lead', image: null },
  { name: 'Avigail', role: 'Marketing, Social Media & Mechanical Ops Lead', image: null },
];

const Operations = () => (
  <SubTeamTemplate
    teamName="Operations Team"
    missionText="The Operations Team is the backbone of the project. We manage logistics, procurement, sponsorships, and ensure that the engineering teams have everything they need to succeed both in the workshop and at global competitions."
    teamLead={teamLead}
    members={members}
  />
);

export default Operations;
