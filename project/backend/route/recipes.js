import express from "express";
const router = express.Router();
import recipes from "../models/recipes.js";

router.get('/',async(req,res)=>{
    try {

        let reciepes = await recipes.find();
        
        reciepes  ? res.status(200).json({
            message: "Got request in Reciepe",
            data: reciepes
        }) :  res.status(200).json({
            message: "Got request in Reciepe"
        })
    } catch (error) {
        console.log('Something went wrong');
        res.status(500).json({
            message:"Internal server error"
        })
    }
});

router.get('/add',async(req,res)=>{
    try {

        let data = [
            {
                title: "Spaghetti Carbonara",
                ingredients: ["200g spaghetti", "100g pancetta", "2 eggs", "50g Parmesan cheese", "Black pepper"],
                instructions: "Cook spaghetti in salted boiling water. Fry pancetta until crispy. Whisk eggs with cheese. Drain pasta, mix with pancetta, then add egg mixture off heat. Season with pepper.",
                image: "https://www.google.com/imgres?q=vegetables%20image&imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1597362925123-77861d3fbac7%3Ffm%3Djpg%26q%3D60%26w%3D3000%26ixlib%3Drb-4.1.0%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D&imgrefurl=https%3A%2F%2Funsplash.com%2Fphotos%2Fa-pile-of-different-types-of-vegetables-on-a-white-surface-5aJVJvJ9rG8&docid=JFA128EuCeXYQM&tbnid=2MfGQKAKvOgDZM&vet=12ahUKEwiR7O6bgfmRAxUeSPEDHXdCNtsQM3oECBoQAA..i&w=3000&h=2000&hcb=2&ved=2ahUKEwiR7O6bgfmRAxUeSPEDHXdCNtsQM3oECBoQAA"
            },
            {
                title: "Chicken Curry",
                ingredients: ["500g chicken breast", "2 onions", "2 garlic cloves", "1 tbsp curry powder", "400ml coconut milk", "Salt and pepper"],
                instructions: "Chop onions and garlic. Cook in oil until soft. Add curry powder, then chicken. Cook until chicken is browned. Add coconut milk, simmer for 20 minutes. Season to taste.",
                image: "https://www.google.com/imgres?q=vegetables%20image&imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1597362925123-77861d3fbac7%3Ffm%3Djpg%26q%3D60%26w%3D3000%26ixlib%3Drb-4.1.0%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D&imgrefurl=https%3A%2F%2Funsplash.com%2Fphotos%2Fa-pile-of-different-types-of-vegetables-on-a-white-surface-5aJVJvJ9rG8&docid=JFA128EuCeXYQM&tbnid=2MfGQKAKvOgDZM&vet=12ahUKEwiR7O6bgfmRAxUeSPEDHXdCNtsQM3oECBoQAA..i&w=3000&h=2000&hcb=2&ved=2ahUKEwiR7O6bgfmRAxUeSPEDHXdCNtsQM3oECBoQAA"
            },
            {
                title: "Chocolate Cake",
                ingredients: ["200g flour", "200g sugar", "200g butter", "4 eggs", "50g cocoa powder", "1 tsp baking powder"],
                instructions: "Preheat oven to 180°C. Cream butter and sugar. Add eggs one by one. Mix dry ingredients, fold in. Bake for 30-35 minutes.",
                image: "https://www.google.com/imgres?q=vegetables%20image&imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1597362925123-77861d3fbac7%3Ffm%3Djpg%26q%3D60%26w%3D3000%26ixlib%3Drb-4.1.0%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D&imgrefurl=https%3A%2F%2Funsplash.com%2Fphotos%2Fa-pile-of-different-types-of-vegetables-on-a-white-surface-5aJVJvJ9rG8&docid=JFA128EuCeXYQM&tbnid=2MfGQKAKvOgDZM&vet=12ahUKEwiR7O6bgfmRAxUeSPEDHXdCNtsQM3oECBoQAA..i&w=3000&h=2000&hcb=2&ved=2ahUKEwiR7O6bgfmRAxUeSPEDHXdCNtsQM3oECBoQAA"
            },
            {
                title: "Caesar Salad",
                ingredients: ["1 romaine lettuce", "50g Parmesan cheese", "Croutons", "Caesar dressing", "Anchovies (optional)"],
                instructions: "Chop lettuce. Toss with dressing, cheese, croutons, and anchovies if using. Serve immediately.",
                image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Ffresh-vegetables&psig=AOvVaw3hpz9f9hW9DQdH9bTEQZTa&ust=1767860886413000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPCRnZOB-ZEDFQAAAAAdAAAAABAE"
            },
            {
                title: "Pancakes",
                ingredients: ["200g flour", "2 eggs", "300ml milk", "1 tbsp sugar", "1 tsp baking powder", "Butter for frying"],
                instructions: "Mix dry ingredients. Whisk in eggs and milk. Heat butter in pan. Pour batter, cook until bubbles form, flip and cook other side.",
                image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Ffresh-vegetables&psig=AOvVaw3hpz9f9hW9DQdH9bTEQZTa&ust=1767860886413000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPCRnZOB-ZEDFQAAAAAdAAAAABAE"
            },
            {
                title: "Vegetable Stir Fry",
                ingredients: ["1 bell pepper", "1 carrot", "100g broccoli", "2 garlic cloves", "Soy sauce", "Vegetable oil"],
                instructions: "Chop vegetables. Heat oil, fry garlic. Add vegetables, stir fry for 5-7 minutes. Add soy sauce, cook for another minute.",
                image: "https://www.google.com/imgres?q=vegetables%20image&imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1597362925123-77861d3fbac7%3Ffm%3Djpg%26q%3D60%26w%3D3000%26ixlib%3Drb-4.1.0%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D&imgrefurl=https%3A%2F%2Funsplash.com%2Fphotos%2Fa-pile-of-different-types-of-vegetables-on-a-white-surface-5aJVJvJ9rG8&docid=JFA128EuCeXYQM&tbnid=2MfGQKAKvOgDZM&vet=12ahUKEwiR7O6bgfmRAxUeSPEDHXdCNtsQM3oECBoQAA..i&w=3000&h=2000&hcb=2&ved=2ahUKEwiR7O6bgfmRAxUeSPEDHXdCNtsQM3oECBoQAA"
            }
        ];

        let createRecipes = await recipes.insertMany(data);
        if(!createRecipes) return res.status(400).json({message:"failed to insert data"})
         res.status(200).json({
            message: "data inserted successfully!"
        })
    } catch (error) {
        console.log('Something went wrong');
        res.status(500).json({
            message:"Internal server error"
        })
    }
})

export default router;