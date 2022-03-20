import "./App.css";
import { Header } from "./components/Header";
import { History } from "./components/History";
import { Education } from "./components/Education";
import { Courses } from "./components/Courses";
import { Strengths } from "./components/Strengths";
import { Skills } from "./components/Skills";
import { About } from "./components/About";
import { Hobbies } from "./components/Hobbies";
import { MyPhoto } from "./components/MyPhoto";
const App = () => (
  <div className="App">
    <Header />
    <div id="cv">
      <div id="rightsection">
        <History />
        <Education />
        <Courses />
        <Strengths />
      </div>
      <div id="leftsection">
        <MyPhoto />
        <Skills />
        <About />
      </div>
      <Hobbies />
    </div>
  </div>
);
export default App;
