// import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Acerdata from './components/ACER/Acerdata';
import Detailsitem from './components/DETAILS/Detailsitem'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Acerdata/>
     <Detailsitem/>
     </BrowserRouter>
    </div>
  );
}

export default App;
