import React from 'react';
import myPhoto from '../assets/images/cv-photo.jpg';
type MyPhotoProps = {
  className?: string;
};
export const MyPhoto = ({ className }: MyPhotoProps) => (
  <div className={`photo ${className}`}>
    <img id="photoofme" src={myPhoto} alt="Magdalena Drewnowska" />
  </div>
);
