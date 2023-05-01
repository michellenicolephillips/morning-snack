import './App.scss';
import "./fonts/lulo-clean-one.ttf";
import Home from '../src/pages/Home';
import Order from './pages/Order';
import Catering from '../src/pages/Catering';
import About from '../src/pages/About';
import Header from '../src/components/header';
import Footer from '../src/components/footer';
import {
     BrowserRouter as Router,
     Routes,
     Route
} from "react-router-dom";

function App() {
     return (
          <div className="App">
               <Header />
               <Router basename='/'>
                    <Routes>
                         <Route exact path="/" element={<Home />} />
                         <Route exact path="/catering" element={<Catering />} />
                         <Route exact path="/about" element={<About />} />
                         <Route exact path="/order" element={<Order />} />
                    </Routes>
               </Router>
               <Footer />
          </div>

     );
}

export default App;
