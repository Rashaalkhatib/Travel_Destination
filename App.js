import { Routes, Route } from "react-router-dom";

import { Routes, Route } from "react-router-dom";

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city/:id" element={<tour />} />
     
    </Routes>
  );
}

export default App;
