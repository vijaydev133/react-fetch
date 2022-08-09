import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Detail from './Pages/Detail';
import {Routes,Route} from "react-router-dom"
import Nav from './Pages/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element= {<Home/>}></Route>
        <Route path='/detail/:id' element={<Detail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
