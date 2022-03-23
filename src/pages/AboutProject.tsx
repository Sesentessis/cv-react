import '../AboutProject.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { MyUl } from '../components/MyUl';
import { IoMdArrowDropleftCircle } from 'react-icons/io';

type IssueProps = {
  date: string;
  nr: string;
  link: string;
};

const Issue = ({ date, link, nr }: IssueProps) => (
  <div>
    <div className="leftsidebar">
      <p>{date}</p>
      <a href={link} rel="noreferrer">
        Issue #{nr}
      </a>
    </div>
  </div>
);

export const AboutProject = () => (
  <div>
    <div className="abouthedding">
      <h1>CV wykonane w React & TypeScript</h1>
    </div>
    <div className="description">
      <p>
        Stronę z moim CV przygotowałam w React + TypeScript. Moim mentorem był
        Mateusz który planował rozwój jako fake PO i wykonywał code review moich
        zmian.
      </p>
      Kod tej strony
      <a href="https://github.com/Sesentessis/cv-react" rel="noreferrer">
        {' '}
        jest dostępny na GitHubie.
      </a>
    </div>
    <div id="issuewrapper">
      <Issue
        date={'22.03.2022'}
        nr={'3'}
        link={'https://github.com/Sesentessis/cv-react/issues/5'}
      ></Issue>
      <div className="specifics">
        <div className="issuetitle">
          Title: "As a User i want to see a changelog page that describes this
          project"
        </div>

        <MyUl>added React Router to project </MyUl>
        <MyUl>
          added rutes to App() and moved the previous content to separate file
          "CV"
        </MyUl>
        <MyUl>created new component called "AboutProject"</MyUl>
        <MyUl>added hyperlink to to Github project</MyUl>
        <MyUl>created and styled the list of cards showing progress</MyUl>
      </div>
      <Issue
        date={'20.03.2022'}
        nr={'2'}
        link={'https://github.com/Sesentessis/cv-react/issues/2'}
      ></Issue>
      <div className="specifics">
        <div className="issuetitle">
          Title: "Add automatic code formatter settings (prettier)"
        </div>

        <MyUl>
          added .prettierrc file with configuration for automatic code
          formatting
        </MyUl>
        <MyUl>
          reformated files so that everything is compliant with code style guide
        </MyUl>
        <MyUl>
          fixed error that the file .prettierrc.json was encoded in UTF-16LE,
          not UTF-8.
        </MyUl>
      </div>
      <Issue
        date={'20.03.2022'}
        nr={'1'}
        link={'https://github.com/Sesentessis/cv-react/issues/1'}
      ></Issue>
      <div className="specifics">
        <div className="issuetitle">
          Title: "Add TypeScript and types to all of the components"
        </div>

        <MyUl>added typescript to my React project </MyUl>
        <MyUl>changed types of files </MyUl>
        <MyUl>added types to props off components</MyUl>
        <MyUl>fixed errors</MyUl>
      </div>
    </div>
    <div className="tocvlink">
      <IoMdArrowDropleftCircle color="#b79193" />
      <Link to="/">Powrót do CV</Link>
    </div>
  </div>
);
