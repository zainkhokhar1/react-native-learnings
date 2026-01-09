import express from "express";
const router = express.Router();
import recipes from "../models/recipes.js";

router.get('/',async(req,res)=>{
    try {
        let allRecipes = await recipes.find();

        console.log('Found recipes:', allRecipes.length);

        res.status(200).json({
            message: "Got recipes successfully",
            data: allRecipes
        });
    } catch (error) {
        console.log('Error fetching recipes:', error);
        res.status(500).json({
            message:"Internal server error",
            error: error.message
        })
    }
});

router.post('/seed',async(req,res)=>{
    try {

        let data = [
            {
                title: "Spaghetti Carbonara",
                ingredients: ["200g spaghetti", "100g pancetta", "2 eggs", "50g Parmesan cheese", "Black pepper"],
                instructions: "Cook spaghetti in salted boiling water. Fry pancetta until crispy. Whisk eggs with cheese. Drain pasta, mix with pancetta, then add egg mixture off heat. Season with pepper.",
                image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=500"
            },
            {
                title: "Chicken Curry",
                ingredients: ["500g chicken breast", "2 onions", "2 garlic cloves", "1 tbsp curry powder", "400ml coconut milk", "Salt and pepper"],
                instructions: "Chop onions and garlic. Cook in oil until soft. Add curry powder, then chicken. Cook until chicken is browned. Add coconut milk, simmer for 20 minutes. Season to taste.",
                image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=500"
            },
            {
                title: "Chocolate Cake",
                ingredients: ["200g flour", "200g sugar", "200g butter", "4 eggs", "50g cocoa powder", "1 tsp baking powder"],
                instructions: "Preheat oven to 180°C. Cream butter and sugar. Add eggs one by one. Mix dry ingredients, fold in. Bake for 30-35 minutes.",
                image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500"
            },
            {
                title: "Caesar Salad",
                ingredients: ["1 romaine lettuce", "50g Parmesan cheese", "Croutons", "Caesar dressing", "Anchovies (optional)"],
                instructions: "Chop lettuce. Toss with dressing, cheese, croutons, and anchovies if using. Serve immediately.",
                image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=500"
            },
            {
                title: "Pancakes",
                ingredients: ["200g flour", "2 eggs", "300ml milk", "1 tbsp sugar", "1 tsp baking powder", "Butter for frying"],
                instructions: "Mix dry ingredients. Whisk in eggs and milk. Heat butter in pan. Pour batter, cook until bubbles form, flip and cook other side.",
                image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=500"
            },
            {
                title: "Vegetable Stir Fry",
                ingredients: ["1 bell pepper", "1 carrot", "100g broccoli", "2 garlic cloves", "Soy sauce", "Vegetable oil"],
                instructions: "Chop vegetables. Heat oil, fry garlic. Add vegetables, stir fry for 5-7 minutes. Add soy sauce, cook for another minute.",
                image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500"
            }
        ];

        let createRecipes = await recipes.insertMany(data);
        if(!createRecipes) return res.status(400).json({message:"failed to insert data"})
         res.status(200).json({
            message: "data inserted successfully!",
            data: createRecipes
        })
    } catch (error) {
        console.log('Something went wrong');
        res.status(500).json({
            message:"Internal server error"
        })
    }
})

router.post('/add',async(req,res)=>{
    try {
        if (!req.body) return res.status(500).json({
            message:"No Data sent!"
        })
        let { title,ingredients,instructions,image } = req?.body;

        if(!title || !ingredients || !instructions || !image){
            return res.status(400).json({
            message:"All fields are required!"
        })
    }

        const newRecipe = await recipes.create({
            title,
            ingredients,
            instructions,
            image
        });

        if(!newRecipe) return res.status(500).json({
            message:"Failed to create Recipe!"
        });

        return res.status(201).json({
            message:"Recipe created Successfully!",
            data:newRecipe
        })

    } catch (error) {
        console.log(error);
        res.send(500).json({
            message: "Failed to send the message"
        })
    }
})

export default router;