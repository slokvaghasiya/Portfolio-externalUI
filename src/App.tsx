import { Navbar } from "./layout/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage";
import WorkPage from "./pages/WorkPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import ContactPage from "./pages/ContactPage";
const App = () => {
  return (
    <>
      <Navbar />
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-black pt-16">
        <HomePage />
        <AboutPage />
        <ServicePage />
        <WorkPage />
        <TestimonialsPage />
        <ContactPage />
      </div>
    </>
  );
};

export default App; 
