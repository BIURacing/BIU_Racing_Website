import React from 'react';
import SubTeamTemplate from '../../components/SubTeamTemplate';

const teamLead = {
  name: 'Ido Samoha',
  role: 'Head of Product Management',
  image: null,
};

const members = [
  { name: 'Kian', role: 'Operations PM', image: null },
  { name: 'Ofir', role: 'Embedded Systems PM', image: null },
  { name: 'Aya', role: 'Mechanical Engineering PM', image: null },
  { name: 'Amit', role: 'Electrical Engineering PM', image: null },
];

const ProductManagement = () => (
  <SubTeamTemplate
    teamName="Product Management"
    missionText="We bridge the gap between engineering and project execution. The Product Management Team monitors timelines, sets milestones, tracks the budget, and ensures the final race car meets all competition requirements and team goals."
    teamLead={teamLead}
    members={members}
  />
);

export default ProductManagement;
