import { Heading } from "./Heading";
import diving from "../assets/icons/diving.svg";
import draving from "../assets/icons/draving.svg";
import skis from "../assets/icons/skis.svg";
import dance from "../assets/icons/dance.svg";
import games from "../assets/icons/games.svg";

const Hobby = ({ className, content, icon, alt }) => (
  <div className={`hobby ${className}`}>
    <div>
      <img className="hobby-img" src={icon} alt={alt} />
    </div>
    <div className="content">{content}</div>
  </div>
);

export const Hobbies = () => (
  <div id="hobbieswrapper">
    <Heading name="Zainteresowania" />
    <div id="hobbies">
      <Hobby
        className="diver"
        content="nurkowanie"
        icon={diving}
        alt="diver icon"
      />
      <Hobby
        className="draving"
        content="rysowanie"
        icon={draving}
        alt="dvaving icon"
      />
      <Hobby
        className="skis"
        content="narciarstwo"
        icon={skis}
        alt="skiing icon"
      />
      <Hobby
        className="dance"
        content="taniec"
        icon={dance}
        alt="dancer icon"
      />
      <Hobby
        className="games"
        content="gry"
        icon={games}
        alt="controll pad icon"
      />
    </div>
    <p className="content">
      Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb
      niezbędnych do realizacji procesu rekrutacji zgodnie z Rozporządzeniem
      Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w
      sprawie ochrony osób fizycznych w związku z przetwarzaniem danych
      osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia
      dyrektywy 95/46/WE (RODO).
    </p>
  </div>
);
