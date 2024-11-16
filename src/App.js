import Footer from "./components/Footer";
import Header from "./components/Header";
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductCatalogue from "./pages/ProductCatalogue";
import ProductDetails from "./pages/ProductDetails";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <div className="w-full mx-auto bg-white">
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:category" element={<ProductCatalogue />} />
          {/* Dynamic route for product details */}
          <Route
            path="/categories/:category/:product"
            element={<ProductDetails />}
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
