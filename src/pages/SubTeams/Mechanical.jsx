import React from 'react';
import SubTeamTemplate from '../../components/SubTeamTemplate';

const teamLead = {
  name: 'Beny Provetorov',
  role: 'Head of Mechanical Engineering',
  image: null,
};

const members = [
  { name: 'Shoam', role: 'Chassis & Bodywork', image: null },
  { name: 'Amir', role: 'Vehicle Dynamics & Suspensions', image: null },
  { name: 'Roni', role: 'Electrical Enclosures & Cooling Systems', image: null },
  { name: 'Omer', role: 'Drivetrain', image: null },
];

const Mechanical = () => (
  <SubTeamTemplate
    teamName="Mechanical Team"
    missionText="The Mechanical Team is responsible for the physical structure, aerodynamics, suspension, and braking systems of the car. We ensure the vehicle is lightweight, aerodynamically efficient, and capable of withstanding extreme dynamic forces on the track."
    teamLead={teamLead}
    members={members}
  />
);

export default Mechanical;
