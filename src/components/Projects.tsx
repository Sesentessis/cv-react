import React from 'react';
import { Heading } from './Heading';
import { MyUl } from './MyUl';
export const Projects = () => (
  <>
    <Heading name="Projects"></Heading>
    <div className="content">
      <div>
        <p className="bolder">React & Typescript</p>
        <MyUl>
          CV single page application you are reading now. Usage of React Router,
          Functional Components and TypeScript. Implementation of simple Unit
          Tests. I have also added prettier configuration to the project.
        </MyUl>
        <MyUl>
          Weather App: querying external endpoints to fetch weather data. Usage
          of axios within React based app.
        </MyUl>
      </div>
      <div>
        <p className="bolder">HTML & CSS</p>
        <div>
          <MyUl>
            Product Landing page: image banner, pricing options, custom design.
          </MyUl>
          <MyUl>
            Simple Technical Documentation page design - to mimic real
            documentation, implemented from scratch in plain CSS.
          </MyUl>
          <MyUl>
            First version of this CV page was implemented in pure HTML & CSS,
            you can <a href="">check it out here.</a>
          </MyUl>
        </div>
      </div>
    </div>
  </>
);
