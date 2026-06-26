import React from 'react';
import SubTeamTemplate from '../../components/SubTeamTemplate';

const teamLead = {
  name: 'Rotem Sillam',
  role: 'Head of Electrical Engineering',
  image: null,
};

const members = [
  { name: 'Shlomi', role: 'High Voltage Systems', image: null },
  { name: 'Amit', role: 'Low Voltage Systems', image: null },
];

const Electrical = () => (
  <SubTeamTemplate
    teamName="Electrical Team"
    missionText="The Electrical Team powers the performance. From the high-voltage tractive system to the low-voltage control circuits, we design and manufacture the car's energy storage, wiring harness, and power distribution modules ensuring safety and reliability."
    teamLead={teamLead}
    members={members}
  />
);

export default Electrical;
