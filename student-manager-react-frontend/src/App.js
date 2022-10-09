import logo from './logo.svg';
import './App.css';
import { StudentsListComponent } from './components/StudentsListComponent';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AddStudentComponent } from './components/AddStudentComponent';

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route exact path="/" element={<StudentsListComponent/>} />
          <Route exact path="/addStudent" element={<AddStudentComponent/>} />
          {/* <Route exact path="/allProjects/currentSelectedProject" element={<SeeProjectDetails/>} /> */}
        </Routes>
      </Router>

    </div>
  );
}

export default App;
