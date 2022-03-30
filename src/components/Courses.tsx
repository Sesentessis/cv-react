import React from 'react';
import { Heading } from './Heading';
import { MyUl } from './MyUl';

export const Courses = () => (
  <>
    <Heading name="Courses" />
    <div className="content">
      <MyUl>CSS: 1) Flexbox 2) Grid 3) RWD basics</MyUl>
      <MyUl>JavaScript: Understanding the "Weird" Parts</MyUl>
      <MyUl>React library: Building SPA with React</MyUl>
    </div>
  </>
);
