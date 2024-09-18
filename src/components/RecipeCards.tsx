import React, { useEffect, useState } from 'react';
import { fetchRecipes, Recipe, RecipesResponse } from '../services/RecipeApi';
import { NavLink } from 'react-router-dom';
import { LuClock9 } from "react-icons/lu";



const RecipeCards: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const data: RecipesResponse = await fetchRecipes();
        setRecipes(data.recipes); // Adjust according to the API response structure
        setLoading(false);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    getRecipes();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <div className='flex justify-center'>
     <div className='w-[70%] grid lg:grid-cols-3 md:grid-cols-2 gap-8'>
      {recipes.map((recipe) => (
        <NavLink to={`/RecipeDetails/${recipe.id}`} key={recipe.id} className="space-y-4">
        <h3
          style={{
            backgroundImage: `url(${recipe.image})`,
            backgroundSize: "cover",
          }}
          className="flex justify-center items-end p-6 text-white h-72 text-3xl
         font-Montez"
        >
          {recipe.cuisine}
        </h3>
        <div className="flex justify-between">
          <p>{recipe.name}</p>
          <p
            className="h-fit flex justify-center items-center bg-[#84BD00]
        w-[90px] "
          >
            Reviews:{recipe.reviewCount}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="flex items-center gap-2">
            <LuClock9 /> {recipe.cookTimeMinutes} minutes
          </p>
          <p>{recipe.mealType}</p>
        </div>
        <br />
        <br />
        <br />
      </NavLink>
      ))}
      </div>
      </div>
    </>
  );
};

export default RecipeCards;
