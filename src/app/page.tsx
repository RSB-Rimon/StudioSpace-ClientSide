import HomePage from "@/components/HomePage/HomePage";
import AboutPage from "./about-us/page";
import HowItWorks from "@/components/HowItWorks";
// import Image from "next/image";

export default function Home() {
  return (
     <div>  
      <HomePage />
      <AboutPage />
      <HowItWorks />
     </div>
  );
}
