import React from 'react';
import { Heading } from './Heading';
import { MyUl } from './MyUl';
export const Education = () => (
  <>
    <Heading name="Education" />
    <div className="content">
      <div>
        Mechatronics <span className="bolder">Engineering</span> of Vehicles
      </div>
      <p className="font-small">2019-2022 Warsaw University of Technology</p>
      <div>
        <MyUl>Basics of C language</MyUl>
        <MyUl>Simple webpage implementation in JavaScript.</MyUl>
        <MyUl>Labview project on pathfinding of a robot.</MyUl>
      </div>
    </div>
  </>
);
