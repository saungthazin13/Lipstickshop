import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import Cart from "@/pages/Cart";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
