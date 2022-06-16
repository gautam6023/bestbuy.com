
import { Routes,Route } from 'react-router-dom';
import './App.css';
import { Cart } from './component/Cart page/Cart/Cart';
import { Prod } from './component/Cart page/Cart/Prod';
import { ProdDetail } from './component/Cart page/Cart/ProdDetail';
import { Nav } from './component/Nav';
function App() {
  return (
    <div className="App">
 <Nav/>
      <Routes>
      <Route path="/:id" element={<ProdDetail/>} />
      <Route path="/prod" element={<Prod/>} />
      <Route path="/cart" element={<Cart/>} />
      </Routes>
    </div>
  );
}


export default App;
