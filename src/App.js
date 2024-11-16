import logo from './logo.svg';
import './App.css';

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
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
