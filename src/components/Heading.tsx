import React from "react";

type HeadingProps = {
  name: string;
};

export const Heading = ({ name }: HeadingProps) => (
  <div>
    <h2 className="cv-heading">{name}</h2>
  </div>
);
