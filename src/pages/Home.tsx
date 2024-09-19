import React, { Suspense } from "react";
import Header from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import SearchBar from "../components/SearchBar";
import NavigationMenu from "../components/NavigationMenu";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
const RecipeCards = React.lazy(() => import("../components/RecipeCards"));

function Home() {
  return (
    <>
    <div className="space-y-4">
      <Header />
      <div className="flex flex-col md:flex-row md:items-center">
        <Logo />
        <SearchBar />
      </div>
      <HeroSection />
      <NavigationMenu />
      <Suspense fallback={<div>Loading...</div>}>
        <RecipeCards />
      </Suspense>
      <Footer />
      </div>
    </>
  );
}

export default Home;
