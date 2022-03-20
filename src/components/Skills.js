import { Heading } from "./Heading";

const KnowledgePercentage = ({ skill, percentage }) => (
  <div>
    <p>{skill}</p>
    <div className="w3-light w3-round-xlarge">
      <div
        className="w3-round-xlarge w3-salmon size"
        style={{ width: `${percentage}` }}
      ></div>
    </div>
  </div>
);
export const Skills = () => (
  <>
    <Heading name="Umiejętności" />
    <div id="bars">
      <KnowledgePercentage skill="SolidWorks" percentage="75%" />
      <KnowledgePercentage skill="MS Office" percentage="80%" />
      <KnowledgePercentage skill="Angielski" percentage="70%" />
      <KnowledgePercentage skill="LabVIEW" percentage="65%" />
      <KnowledgePercentage skill="C++" percentage="65%" />
    </div>
  </>
);
