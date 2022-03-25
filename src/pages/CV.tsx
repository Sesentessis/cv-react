import { Header } from '../components/Header';
import { Projects } from '../components/Projects';
import { Education } from '../components/Education';
import { Courses } from '../components/Courses';
import { Skills } from '../components/Skills';
import { About } from '../components/About';
import { Hobbies } from '../components/Hobbies';
import { MyPhoto } from '../components/MyPhoto';
import React, { useEffect } from 'react';
import { Languages } from '../components/Languages';

export const CV = () => {
  const [isMobile, setMQuery] = React.useState<any>({
    matches: window.innerWidth < 767 ? true : false,
  });
  useEffect(() => {
    let mediaQuery = window.matchMedia('(max-width: 767px)');
    mediaQuery.addListener(setMQuery);
    return () => mediaQuery.removeListener(setMQuery);
  }, []);
  return (
    <div>
      <div id="cv">
        <div id="leftsection">
          <Header />
          {isMobile.matches && <MyPhoto className="leftsectionphoto" />}
          <About />
          <Projects />
          <Education />
          <Courses />
        </div>
        <div id="rightsection">
          {!isMobile.matches && <MyPhoto className="rightsectionphoto" />}
          <Skills />
          <Languages />
          <Hobbies />
        </div>
      </div>
    </div>
  );
};
