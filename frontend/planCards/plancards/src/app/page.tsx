// pages/index.js

import HeroSection from "./Hero/Herosection";
import TrustedCompanies from "./Company/TrustedCompanies";
import Header from "./Header/Header";

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <HeroSection />
      <TrustedCompanies />
    </div>
  );
};

export default Home;
