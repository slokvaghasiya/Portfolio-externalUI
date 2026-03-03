import { Navbar } from "./layout/Navbar";
import { Footer } from "./layout/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage";
import WorkPage from "./pages/WorkPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import ContactPage from "./pages/ContactPage";
import { useLenis } from "./hook/useLenis";

const App = () => {
  useLenis();

  return (
    <>
      <Navbar />
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden pt-16 bg-background">
        <HomePage />
        <AboutPage />
        <ServicePage />
        <WorkPage />
        <TestimonialsPage />
        <ContactPage />
      </div>
      <Footer />
    </>
  );
};

export default App; 
