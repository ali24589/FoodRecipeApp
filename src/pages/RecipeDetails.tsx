import React, { useEffect, useState } from "react";
import { fetchRecipeById, Recipe } from "../services/RecipeApi";
import { useParams } from "react-router-dom"; // Assuming you're using react-router for routing
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import NavigationMenu from "../components/NavigationMenu";
import Footer from "../components/Footer";
// import Group6 from "../assets/images/Group6.png";

const RecipeDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the recipe ID from the route parameter
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getRecipe = async () => {
      try {
        const data: Recipe = await fetchRecipeById(Number(id)); // Fetch recipe by ID
        setRecipe(data);
        setLoading(false);
        console.log(recipe);
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      }
    };

    getRecipe();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <Navbar />
      <HeroSection />
      <NavigationMenu />

      <div className="w-[100%] flex justify-center">
        <div className="w-[90%] grid lg:grid-cols-2 gap-20 md:gap-60 ">
          <div className="w-[100%] p-[20px] bg-[#8B888836] rounded-xl flex flex-col gap-y-4">
            <p className="font-bold text-xl">{recipe?.name}</p>
            <p>{recipe?.instructions}</p>
            <p className="border-b-2 border-[#44414136] font-bold pb-4">
              Ingredients
            </p>
            <ul>
              {recipe?.ingredients.map((ingredients,index) => (
                <div>
                  
                  <li key={index}>{ingredients}</li>
                </div>
              ))}
            </ul>
          </div>
          <div className="h-96">
          <img src={recipe?.image} className="h-fit w-fit" />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default RecipeDetails;
