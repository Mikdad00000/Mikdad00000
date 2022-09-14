import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Prothomalo1st from './Prothomalo1st';
import Prothomalo2nd from './Prothomalo2nd';
import Prothomalo3rd from './Prothomalo3rd';
function App() {
  return (
    <div className='w-full h-full App'>
      <Routes>
        <Route path="/" element={<Prothomalo1st />} />
        <Route path="/2nd" element={<Prothomalo2nd />} />
        <Route path="/3rd" element={<Prothomalo3rd />} />
      </Routes>
    </div>
  );
}

export default App;
