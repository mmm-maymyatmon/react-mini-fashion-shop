import Cart from '@/pages/Cart';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col ">
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/shop" element={<Shop />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
