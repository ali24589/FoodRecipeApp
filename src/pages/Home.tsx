
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import RecipeCards from "../components/RecipeCards";
import Navbar from "../components/Navbar";
import NavigationMenu from "../components/NavigationMenu";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
    <Header />
        <Navbar/>
        <HeroSection/>
        <NavigationMenu/>
        <RecipeCards/>
        <Footer/>
    </>
  )
}

export default Home
