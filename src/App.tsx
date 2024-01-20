
import './App.css';

import { Routes, Route } from 'react-router-dom';
import Aud from './pages/home/Aud';
import Home from './pages/home/page';



function App() {
  return (

    <div className='body'>
        <Routes>
      {/* ... other routes */}
      <Route path="/Aud" element={<Aud />} />
    </Routes>
      <Home/>
     
    </div>
  );
}

export default App;




