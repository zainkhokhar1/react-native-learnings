import { Platform } from 'react-native';

// For Android Emulator, use 10.0.2.2 instead of localhost
// For iOS Simulator, localhost works fine
// For physical devices, replace with your computer's IP address (e.g., 192.168.x.x)
const getBaseUrl = () => {
  if (Platform.OS === 'android') {
    return 'http://10.0.2.2:3000/api';
  }
  // For iOS or physical device, you may need to replace localhost with your computer's IP
  return 'http://localhost:3000/api';
};

const BASE_URL = getBaseUrl();

export const recipesApi = {
  // Fetch all recipes
  getAllRecipes: async () => {
    try {
      const response = await fetch(`${BASE_URL}/recipes`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching recipes:', error);
      throw error;
    }
  },

  // Seed recipes (bulk insert)
  seedRecipes: async () => {
    try {
      const response = await fetch(`${BASE_URL}/recipes/seed`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error seeding recipes:', error);
      throw error;
    }
  },

  // Create a new recipe
  createRecipe: async (recipeData) => {
    try {
      const response = await fetch(`${BASE_URL}/recipes/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(recipeData),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error creating recipe:', error);
      throw error;
    }
  },
};
