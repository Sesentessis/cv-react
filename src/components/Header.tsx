import phone from '../assets/icons/phone.svg';
import mailBox from '../assets/icons/mailBox.svg';
import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowDroprightCircle } from 'react-icons/io';

export const Header = () => (
  <header className="App-header">
    <div className="name">
      <h1>Magdalena</h1>
      <h1>Drewnowska</h1>
    </div>
    <div className="contact">
      <div>
        <img src={phone} alt="phone icon" />
      </div>
      <div className="contactspecyfics">+48 535 787 577</div>
      <div>
        <img src={mailBox} alt="mail box icon" />
      </div>
      <div className="contactspecyfics">magdalenadrewnowska7@gmail.com</div>
      <div className="toaboutlink">
        <Link className="nounderline" to="/aboutproject">
          CV changelog
        </Link>
        <IoMdArrowDroprightCircle color="#0778e9" />
      </div>
    </div>
  </header>
);
