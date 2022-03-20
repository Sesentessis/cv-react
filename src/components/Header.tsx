import phone from "../assets/icons/phone.svg";
import mailBox from "../assets/icons/mailBox.svg";
import React from "react";

export const Header = () => (
  <header className="App-header">
    <div className="name">
      <h1>Magdalena Drewnowska</h1>
    </div>
    <div className="contact">
      <div>
        <img src={phone} alt="phone icon" />
      </div>
      <div className="fontBahnschrift">
        <strong>+48 535 787 577</strong>
      </div>
      <div>
        <img src={mailBox} alt="mail box icon" />
      </div>
      <div className="fontBahnschrift">
        <strong>magdalenadrewnowska@gmail.com</strong>
      </div>
    </div>
  </header>
);
