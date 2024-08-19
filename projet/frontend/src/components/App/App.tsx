import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Categorie from './Routes/categorie';
import Homepage from './Routes/homepage';

const App: React.FC = () => {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/categorie" element={<Categorie />} />
          </Routes>
      </Router>
  );
}
export default App