import React from 'react';
import SubTeamTemplate from '../../components/SubTeamTemplate';

const teamLead = {
  name: 'Michelle Tobias',
  role: 'Head of Embedded Systems',
  image: null,
};

const members = [
  { name: 'Eitan', role: 'Integration', image: null },
  { name: 'Nimrod', role: 'VCU', image: null },
  { name: 'Oron', role: 'Dashboard', image: null },
  { name: 'Ido', role: 'Data Acquisition', image: null },
  { name: 'Snir', role: 'Powertrain', image: null },
];

const EmbeddedSystems = () => (
  <SubTeamTemplate
    teamName="Embedded Systems"
    missionText="The Embedded Systems Team is the brain of the car. We develop the firmware, telemetry, and control algorithms that process sensor data in real-time, managing the motor controllers, battery management systems, and driver interfaces."
    teamLead={teamLead}
    members={members}
  />
);

export default EmbeddedSystems;
