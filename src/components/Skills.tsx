import React, { ReactNode } from 'react';
import { Heading } from './Heading';

type KnowledgePercentageProps = {
  skill: ReactNode;
  percentage: string;
};

const KnowledgePercentage = ({
  skill,
  percentage,
}: KnowledgePercentageProps) => (
  <div>
    <p>{skill}</p>
    <div className="w3-light w3-round-xlarge">
      <div
        className="w3-round-xlarge w3-blue size"
        style={{ width: `${percentage}` }}
      ></div>
    </div>
  </div>
);
export const Skills = () => (
  <>
    <Heading name="Skills" />
    <div className="bars">
      <KnowledgePercentage skill="HTML" percentage="60%" />
      <KnowledgePercentage skill="CSS" percentage="30%" />
      <KnowledgePercentage skill="JavaScript" percentage="40%" />
      <KnowledgePercentage skill="React" percentage="25%" />
      <KnowledgePercentage skill="LabVIEW" percentage="20%" />
      <KnowledgePercentage skill="C" percentage="10%" />
    </div>
  </>
);
