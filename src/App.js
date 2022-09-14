import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Prothomalo1st from './Prothomalo1st';
import Prothomalo2nd from './Prothomalo2nd';
function App() {
  return (
    <div className='w-full h-full App'>
      <Routes>
        <Route path="/" element={<Prothomalo1st />} />
        <Route path="/2nd" element={<Prothomalo2nd />} />
      </Routes>
    </div>
  );
}

export default App;
