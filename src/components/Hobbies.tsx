import { Heading } from './Heading';
import diving from '../assets/icons/diver.svg';
import skydiving from '../assets/icons/sky-diver.svg';
import skis from '../assets/icons/skier.svg';
import games from '../assets/icons/games.svg';
import React, { ReactNode } from 'react';

type HobbyProps = {
  content: ReactNode;
  icon: string;
  alt: string;
};

const Hobby = ({ content, icon, alt }: HobbyProps) => (
  <div className="hobby font-small">
    <div>
      <img className="hobby-img" src={icon} alt={alt} />
    </div>
    <div>{content}</div>
  </div>
);

export const Hobbies = () => (
  <div id="hobbieswrapper">
    <Heading name="Hobbies" />
    <div id="hobbies">
      <Hobby content="scuba diving" icon={diving} alt="diver icon" />
      <Hobby content="sky diving" icon={skydiving} alt="sky diver icon" />
      <Hobby content="skiing" icon={skis} alt="skiing icon" />
      <Hobby
        content="board & computer games"
        icon={games}
        alt="controll pad icon"
      />
    </div>
  </div>
);
