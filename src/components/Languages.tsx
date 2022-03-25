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
export const Languages = () => (
  <>
    <Heading name="Languages" />
    <div className="bars">
      <KnowledgePercentage skill="Polish [Native]" percentage="100%" />
      <KnowledgePercentage skill="English [fluent, B2]" percentage="60%" />
    </div>
  </>
);
