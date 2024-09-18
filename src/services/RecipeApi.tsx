// src/service/recipesApi.ts
import axios from 'axios';

// Define the type for a recipe
export interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
}

export interface RecipesResponse {
  recipes: Recipe[];
}

// Function to fetch all recipes
export const fetchRecipes = async (): Promise<RecipesResponse> => {
  try {
    const response = await axios.get<RecipesResponse>('https://dummyjson.com/recipes');
    return response.data; // Return the data from the API response
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
};

// Function to fetch a single recipe by ID
export const fetchRecipeById = async (id: number): Promise<Recipe> => {
  try {
    const response = await axios.get<Recipe>(`https://dummyjson.com/recipes/${id}`);
    return response.data; // Return the single recipe details
  } catch (error) {
    console.error(`Error fetching recipe with id ${id}:`, error);
    throw error;
  }
};
