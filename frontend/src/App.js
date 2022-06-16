import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import RightStart from './Component/Navbar/RightStart';
import Footer from './Component/Footer/Footer';
import Checkout from './Component/Checkout/Checkout';
import Payment from './Component/Payment/Payment';

function App() {
  return (
    <div className="App">
     <Navbar/>
     {/* <Checkout/> */}
    {/* <Footer/> */}
    <Payment/>

    </div>
  );
}

export default App;
