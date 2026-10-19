import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Formats from './pages/Formats';
import Contact from './pages/Contact';
import FormatDetail from './pages/FormatDetail';
import PrivacyPolicy from './pages/PrivacyPolicy'; 
import TermsConditions from './pages/TermsConditions';  
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import Attractions from './pages/Attractions';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/formats" element={<Formats />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/format/:formatName" element={<FormatDetail />} /> 
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsConditions />} /> 
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/attractions" element={<Attractions />} />
          </Routes>
        </main>
        <Footer />
      </div>
       <WhatsAppButton /> 
    </Router>
  );
}
export default App;