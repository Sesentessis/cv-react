import { Header } from '../components/Header';
import { History } from '../components/History';
import { Education } from '../components/Education';
import { Courses } from '../components/Courses';
import { Strengths } from '../components/Strengths';
import { Skills } from '../components/Skills';
import { About } from '../components/About';
import { Hobbies } from '../components/Hobbies';
import { MyPhoto } from '../components/MyPhoto';
import React from 'react';

export const CV = () => (
  <div>
    <Header />
    <div id="cv">
      <div id="rightsection">
        <History />
        <Education />
        <Courses />
        <About />
        <Strengths />
      </div>
      <div id="leftsection">
        <MyPhoto />
        <Skills />
      </div>
      <Hobbies />
    </div>
  </div>
);
