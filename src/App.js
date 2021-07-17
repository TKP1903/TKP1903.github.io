import { useState, useEffect } from "react";
import Home from "./components/Home/Home";
import MenuPage from "./components/MenuPage/MenuPage";
import FranchiseUpdated from "./components/FranchiseUpdated/FranchiseUpdated";
import Contact from "./components/Franchise Enquiry/Contact";
import Gallery from "./components/Gallery/Gallery";
import Contd from "./components/Contact/Contd";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About1 from "./components/About1/About1";
import Loader from "./components/loader/load";
import Work from "./components/Workwithus/Work";
import Popup from "./components/Popup/Popup";
import Scroll from "./components/Scroll/Scroll";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1400);
  }, []);
  // window.location.reload("/public/index.html");
  return (
    <Router>
      <div className="App">
        {loading ? (
          <Loader />
        ) : (
          <div>
            <Popup />
            <Scroll />
            <Navbar />
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About1} />
            <Route path="/menu" component={MenuPage} />
            <Route path="/franchise" component={FranchiseUpdated} />
            <Route path="/franchise-enquiry" component={Contact} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/contact" component={Contd} />
            <Route path="/workwithus" component={Work} />
            <Footer />
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
