import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Employee from "./components/Employee";

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Employee/>}/>
        </Routes>
      </Router>
  );
};

export default App;