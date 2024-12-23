import { Contact } from "@/components/Contact";
import Footer from "@/components/footer";
import HeroSection from "@/components/heroSection";
import { NavBar } from "@/components/NavBar";
import { Projects } from "@/components/Projects";
import { Resume } from "@/components/Resume";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Services />
      <Projects />
      <Resume />
      <Testimonials />
      <ToastContainer />
      <Contact />
      <Footer />
    </>
  );
}
