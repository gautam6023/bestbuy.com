
import { Routes,Route } from 'react-router-dom';
import './App.css';
import { Cart } from './component/Cart/Cart';
import { Prod } from './component/Cart/Prod';
import { ProdDetail } from './component/Cart/ProdDetail'
function App() {
  return (
    <div className="App">
     <Cart/>
      <Routes>
      <Route path="/:id" element={<ProdDetail/>} />
      <Route path="/prod" element={<Prod/>} />
      {/* <Route path="/cart" element={<Cart/>} /> */}
      {/* <Route path="/checkout" element={<Checkout/>} /> */}
      </Routes>
    </div>
  );
}


export default App;
