import React, { ReactNode } from 'react';
import listItemIcon from '../assets/icons/bullet.svg';

type MyUlProps = {
  icon?: string;
  children: ReactNode;
};

export const MyUl = ({ icon = listItemIcon, children }: MyUlProps) => (
  <div>
    <img className="indent" src={icon} alt="Item: " /> {children}
  </div>
);
