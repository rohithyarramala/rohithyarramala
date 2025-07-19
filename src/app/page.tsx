import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Footer from "@/components/Footer";
import SocialSidebar from "@/components/SocialSidebar";
import Metrics from "@/components/Metrics";
import Timeline from "@/components/Timeline";
import Services from "@/components/Services";
import Partner from "@/components/Partner";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <>
      <NavBar/>
      <HeroSection/>
      <About/>
      <Metrics/>
      <Timeline/>
      <Services/>
      <Partner/>
      <SocialSidebar/>
      <Contact/>
      <Footer/>
    </>
  );
}
