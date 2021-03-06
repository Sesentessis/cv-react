import '../AboutProject.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { MyUl } from '../components/MyUl';
import { IoMdArrowDropleftCircle } from 'react-icons/io';
import { GITHUB_REPO } from '../components/Links';
type IssueProps = {
  date: string;
  issueNr: number;
};

const Issue = ({ date, issueNr }: IssueProps) => (
  <div>
    <div className="leftsidebar">
      <p>{date}</p>
      <a
        href={`${GITHUB_REPO}/issues/${issueNr}`}
        rel="noreferrer"
        target="_blank"
      >
        Issue #{issueNr}
      </a>
    </div>
  </div>
);

export const AboutProject = () => (
  <div>
    <div className="abouthedding">
      <h1>CV implemented in React & TypeScript</h1>
    </div>
    <div className="tocvlink">
      <IoMdArrowDropleftCircle color="#0778e9" />
      <Link className="nounderline" to="/">
        Back to CV
      </Link>
    </div>
    <div className="description">
      <p>
        My CV website I implemented in React + Typescript. My mentor planned
        Issues for me and I accomplished them one by one. It was meant to
        simulate working with a PO. Mateusz also code reviewed my changes, as
        you can see in linked GitHub pull requests.
      </p>
      Code is available
      <a href={GITHUB_REPO} rel="noreferrer" target="_blank">
        {' '}
        on GitHub
      </a>
      .
    </div>
    <div id="issuewrapper">
      <Issue date="22.03.2022" issueNr={5} />
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
      <Issue date="20.03.2022" issueNr={2} />
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
      <Issue date="20.03.2022" issueNr={1} />
      <div className="specifics">
        <div className="issuetitle">
          Title: "Add TypeScript and types to all of the components"
        </div>
        <MyUl>added typescript to my React project </MyUl>
        <MyUl>changed .js files to .ts & .tsx files </MyUl>
        <MyUl>added types to props off components</MyUl>
        <MyUl>fixed errors</MyUl>
      </div>
    </div>
  </div>
);
