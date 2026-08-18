import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Potentials from "./pages/Potentials";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-beras-100">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<Profile />} />
          <Route path="/berita" element={<News />} />
          <Route path="/berita/:slug" element={<NewsDetail />} />
          <Route path="/potensi" element={<Potentials />} />
          <Route path="/layanan" element={<Services />} />
          <Route path="/galeri" element={<Gallery />} />
          <Route path="/kontak" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
