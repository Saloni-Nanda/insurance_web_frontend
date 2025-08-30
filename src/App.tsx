import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Service from "./pages/Service/Service"
import Contact from "./pages/Contact/Contact"
import Header from "./pages/Header/Header"
import Footer from "./pages/Footer/Footer"
import "./App.css"
import ScrollToTop from "./components/scroll_control/ScrollToTop"
import {  HelmetProvider } from "react-helmet-async";

const App = () => {
    return (
      <HelmetProvider>
        <div className="relative bg-[url('/meeting.jpg')] bg-cover bg-center min-h-screen w-full">
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Page content */}
  <div className="relative text-white">
    <BrowserRouter>
    <ScrollToTop/>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </div>
</div>
</HelmetProvider>
    )
}

export default App
