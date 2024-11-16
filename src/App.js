import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './Contact';
import About from './About';
import Students from './Students';
import Nav from './Nav';
import Addstudent from './AddStudent';



function App() { 
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
    
      <Routes>
      <Route path='/' element={<h1>Welcome</h1>}/>
      <Route path='/About' element={<  About About="About page" name="RaaZ"/>} />
      <Route path='/Contact' element={<Contact />} /> 
      <Route path='/Students' element={<Students />} />
      <Route path='/AddStudent' className="Addstud" element={<Addstudent />} />

      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
