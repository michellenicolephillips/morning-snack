import './App.css';
import Navigation from '../src/components/navigation';
import Home from '../src/pages/Home';
import Checkout from '../src/pages/Checkout';
import Catering from '../src/pages/Catering';
import {
     BrowserRouter as Router,
     Routes,
     Route   } from "react-router-dom";

function App() {
  return (
          <Router>
               <Navigation/>
               <Routes>
                    <Route exact path="/"  element={<Home />}/>
                    <Route exact path="/reservations"  element={<Home />}/>
                    <Route exact path="/catering" element={<Catering />} />
                    <Route exact path="/about"  element={<Home />}/>
                    <Route exact path="/checkout" element={<Checkout />} />
               </Routes>
          </Router>
     );
}

export default App;
