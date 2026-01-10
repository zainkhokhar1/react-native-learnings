import { View, Text, FlatList, Image, ActivityIndicator, TouchableOpacity, RefreshControl } from "react-native";
import { useState, useEffect } from "react";
import { recipesApi } from "../../services/recipesApi";

export default function Recipe() {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [refreshing, setRefreshing] = useState(false);

    const fetchRecipes = async () => {
        try {
            setError(null);
            console.log('Fetching recipes...');
            const data = await recipesApi.getAllRecipes();
            console.log('API Response:', data);
            console.log('Recipes data:', data.data);
            console.log('Number of recipes:', data.data?.length);
            setRecipes(data.data || []);
        } catch (err) {
            setError('Failed to load recipes. Make sure the backend server is running.');
            console.error('Error fetching recipes:', err);
        } finally {
            setLoading(false);
        }
    };

    const onRefresh = async () => {
        setRefreshing(true);
        await fetchRecipes();
        setRefreshing(false);
    };

    useEffect(() => {
        fetchRecipes();
    }, []);

    const renderRecipeItem = ({ item }) => (
        <View className="bg-white rounded-xl mb-4 shadow-lg overflow-hidden">
            <Image
                source={{ uri: item.image }}
                className="w-full h-52 bg-gray-200"
                resizeMode="cover"
            />
            <View className="p-4">
                <Text className="text-2xl font-bold text-gray-800 mb-3">{item.title}</Text>

                <Text className="text-base font-semibold text-purple-600 mt-3 mb-2">Ingredients:</Text>
                {item.ingredients?.map((ingredient, index) => (
                    <Text key={index} className="text-sm text-gray-600 mb-1 pl-2">• {ingredient}</Text>
                ))}

                <Text className="text-base font-semibold text-purple-600 mt-3 mb-2">Instructions:</Text>
                <Text className="text-sm text-gray-600 leading-5">{item.instructions}</Text>
            </View>
        </View>
    );

    if (loading) {
        return (
            <View className="flex-1 justify-center items-center p-5">
                <ActivityIndicator size="large" color="#6200ee" />
                <Text className="mt-2.5 text-base text-gray-600">Loading recipes...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View className="flex-1 justify-center items-center p-5">
                <Text className="text-base text-red-700 text-center mb-5">{error}</Text>
                <TouchableOpacity className="bg-purple-600 px-6 py-3 rounded-lg" onPress={fetchRecipes}>
                    <Text className="text-white text-base font-bold">Retry</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View className="flex-1 bg-gray-100">
            <Text className="text-3xl font-bold text-gray-800 px-4 py-5 bg-white border-b border-gray-200">Recipes</Text>
            {recipes.length === 0 ? (
                <View className="flex-1 justify-center items-center p-5">
                    <Text className="text-base text-gray-600 text-center">No recipes found</Text>
                </View>
            ) : (
                <FlatList
                    data={recipes}
                    renderItem={renderRecipeItem}
                    keyExtractor={(item) => item._id}
                    contentContainerStyle={{ padding: 16 }}
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['#6200ee']} />
                    }
                />
            )}
        </View>
    );
}