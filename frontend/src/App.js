// import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Acerdata from './components/ACER/Acerdata';
import Detailsitem from './components/DETAILS/Detailsitem';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Acerdata/>
     <Routes>
     <Route path="/:id" element={<Detailsitem/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
