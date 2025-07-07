import React from 'react';
import Automatic from './Automatic';
import CreateNewAutomation from './CreateNewAutomation';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Automatic />} />
        <Route path="/create-new-automation" element={<CreateNewAutomation />} />
      </Routes>
    </Router>
  );
};

export default App;
