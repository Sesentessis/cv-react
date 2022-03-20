import React, { ReactNode } from "react";
import listItemIcon from "../assets/icons/bullet.svg";
import { Heading } from "./Heading";

type CourseItemProps = {
  icon?: string;
  children: ReactNode;
};

const CourseItem = ({ icon = listItemIcon, children }: CourseItemProps) => (
  <div>
    <img className="indent" src={icon} alt="Item: " /> {children}
  </div>
);

export const Courses = () => (
  <>
    <Heading name="Szkolenia/Certyfikaty" />
    <div className="content">
      <CourseItem>CSWA, w trakcje przygotowań do CSWP</CourseItem>
      <CourseItem>praca w zespole, umiejętności miękkie</CourseItem>
    </div>
  </>
);
