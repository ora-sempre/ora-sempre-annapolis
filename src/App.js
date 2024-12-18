import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import PrivateRoute from './components/PrivateRoute';
import Footer from './components/layout/Footer';
import Treatments from './pages/Treatments';
import About from './pages/About';
import ContactForm from './components/ContactForm';
import Ingredients from './components/Ingredients';
import Collections from './pages/Collections';
import Collection from './pages/Collection';
import Product from './pages/Product';
import Credits from './pages/Credits';
import Packages from './pages/Packages';
import Technology from './pages/Technology';
import TechnologyProduct from './pages/TechnologyProduct';
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
                    <Route path="/ingredients" element={<Ingredients />} />
                    <Route path="/packages" element={<Packages />} />
                    <Route path="/treatments" element={<Treatments />} />
                    <Route path="/collections" element={<Collections />} />
                    <Route
                      path="/collection/:collectionName"
                      element={<Collection />}
                    />
                    <Route
                      path="/collection/:collectionName/:productId"
                      element={<Product />}
                    />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact-us" element={<ContactForm />} />
                    <Route path="/profile" element={<PrivateRoute />}>
                      <Route path="/profile" element={<Profile />} />
                    </Route>
                    <Route path="/technology" element={<Technology />} />
                    <Route
                      path="/technology/:productId"
                      element={<TechnologyProduct />}
                    />
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
