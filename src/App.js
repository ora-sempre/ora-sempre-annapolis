import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Footer from './components/layout/Footer';
import Treatments from './pages/Treatments';
import Packages from './pages/Packages';
import About from './pages/About';
import Credits from './components/Credits';
import 'leaflet/dist/leaflet.css';
import PrivacyPolicy from './components/PrivacyPolicy';
import ShippingPolicy from './components/ShippingPolicy';
import ReturnPolicy from './components/ReturnPolicy';
import StoreHours from './components/StoreHours';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="*"
            element={
              <div className="page">
                <Navbar />
                <main>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/credits" element={<Credits />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route
                      path="/shipping-policy"
                      element={<ShippingPolicy />}
                    />
                    <Route path="/return-policy" element={<ReturnPolicy />} />
                    <Route path="/store-hours" element={<StoreHours />} />
                    <Route path="/treatments" element={<Treatments />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/packages" element={<Packages />} />
                  </Routes>
                </main>
                <Footer />
              </div>
            }
          />
        </Routes>
      </Router>

      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
