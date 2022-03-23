import React from 'react';
import { Heading } from './Heading';
import { MyUl } from './MyUl';

export const Courses = () => (
  <>
    <Heading name="Szkolenia/Certyfikaty" />
    <div className="content">
      <MyUl>CSWA, w trakcje przygotowań do CSWP</MyUl>
      <MyUl>praca w zespole, umiejętności miękkie</MyUl>
    </div>
  </>
);
