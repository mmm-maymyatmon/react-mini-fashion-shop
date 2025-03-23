import Cart from '@/pages/Cart';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import { BrowserRouter as Router, Routes, Route } from 'react-router';


function App() {
  return (
    <Router>
      <div className="container">
        <h1>App</h1>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
