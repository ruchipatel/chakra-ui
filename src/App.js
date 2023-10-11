import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PostPage from "./pages/PostPage";
import CartPage from "./pages/CartPage";
import NavBar from "./components/Navigation/NavBar";
import YourDetails from "./components/YourDetails";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/profile" element={<YourDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
