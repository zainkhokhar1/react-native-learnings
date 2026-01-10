import { View, Text, FlatList, Image, ActivityIndicator, TouchableOpacity, RefreshControl, Modal, TextInput, ScrollView, KeyboardAvoidingView, Platform, Alert } from "react-native";
import { useState, useEffect } from "react";
import { recipesApi } from "../../services/recipesApi";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Recipe() {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [refreshing, setRefreshing] = useState(false);

    // Modal and form state
    const [modalVisible, setModalVisible] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState(['']);
    const [instructions, setInstructions] = useState('');
    const [imageUrl, setImageUrl] = useState("data:image/jpeg;base64,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");
    const [errors, setErrors] = useState({});

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

    // Form validation
    const validateForm = () => {
        const newErrors = {};

        if (!title.trim()) {
            newErrors.title = 'Title is required';
        } else if (title.trim().length < 3) {
            newErrors.title = 'Title must be at least 3 characters';
        }

        const validIngredients = ingredients.filter(ing => ing.trim());
        if (validIngredients.length === 0) {
            newErrors.ingredients = 'At least one ingredient is required';
        }

        if (!instructions.trim()) {
            newErrors.instructions = 'Instructions are required';
        } else if (instructions.trim().length < 10) {
            newErrors.instructions = 'Instructions must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Ingredients management
    const addIngredientField = () => {
        setIngredients([...ingredients, '']);
    };

    const removeIngredientField = (index) => {
        if (ingredients.length > 1) {
            setIngredients(ingredients.filter((_, i) => i !== index));
        }
    };

    const updateIngredient = (index, value) => {
        const newIngredients = [...ingredients];
        newIngredients[index] = value;
        setIngredients(newIngredients);
    };

    // Form handlers
    const resetForm = () => {
        setTitle('');
        setIngredients(['']);
        setInstructions('');
        setImageUrl('');
        setErrors({});
    };

    const handleCloseModal = () => {
        if (title || instructions || imageUrl || ingredients.some(ing => ing.trim())) {
            Alert.alert(
                'Discard Changes?',
                'You have unsaved changes. Are you sure you want to close?',
                [
                    { text: 'Cancel', style: 'cancel' },
                    {
                        text: 'Discard',
                        style: 'destructive',
                        onPress: () => {
                            resetForm();
                            setModalVisible(false);
                        }
                    }
                ]
            );
        } else {
            setModalVisible(false);
        }
    };

    const handleCreateRecipe = async () => {
        if (!validateForm()) {
            return;
        }

        setSubmitting(true);

        try {
            const validIngredients = ingredients.filter(ing => ing.trim());

            const recipeData = {
                title: title.trim(),
                ingredients: validIngredients,
                instructions: instructions.trim(),
                image: imageUrl.trim()
            };

            const response = await recipesApi.createRecipe(recipeData);

            if (response.data) {
                Alert.alert('Success', 'Recipe created successfully!');
                resetForm();
                setModalVisible(false);
                await fetchRecipes();
            } else {
                Alert.alert('Error', response.message || 'Failed to create recipe');
            }
        } catch (error) {
            console.error('Error creating recipe:', error);
            Alert.alert('Error', 'Failed to create recipe. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

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

            {/* Floating Action Button */}
            <TouchableOpacity
                className="absolute bottom-6 right-4 w-12 h-12 rounded-full bg-purple-700 flex items-center justify-center"
                style={{
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.3,
                    shadowRadius: 6,
                    elevation: 8,
                }}
                onPress={() => setModalVisible(true)}
                activeOpacity={0.8}
            >
                <FontAwesome name="plus" size={20} color="white" />
            </TouchableOpacity>

            {/* Create Recipe Modal */}
            <Modal
                animationType="slide"
                presentationStyle="pageSheet"
                visible={modalVisible}
                onRequestClose={handleCloseModal}
            >
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    className="flex-1"
                >
                    <View className="flex-1 bg-gray-100">
                        {/* Header */}
                        <View className="bg-purple-600 px-4 py-6 flex-row items-center justify-between">
                            <Text className="text-2xl font-bold text-white">Create New Recipe</Text>
                            <TouchableOpacity onPress={handleCloseModal}>
                                <FontAwesome name="times" size={24} color="white" />
                            </TouchableOpacity>
                        </View>

                        {/* Form Content */}
                        <ScrollView
                            className="flex-1 px-4 py-4"
                            showsVerticalScrollIndicator={false}
                            keyboardShouldPersistTaps="handled"
                        >
                            {/* Title Input */}
                            <View className="mb-4">
                                <Text className="text-base font-semibold text-gray-700 mb-2">
                                    Recipe Title *
                                </Text>
                                <TextInput
                                    className="bg-white border border-gray-300 rounded-lg px-4 py-3 text-base"
                                    placeholder="e.g., Chocolate Chip Cookies"
                                    value={title}
                                    onChangeText={(text) => {
                                        setTitle(text);
                                        if (errors.title) setErrors({ ...errors, title: null });
                                    }}
                                    editable={!submitting}
                                />
                                {errors.title && (
                                    <Text className="text-red-600 text-sm mt-1">{errors.title}</Text>
                                )}
                            </View>

                            {/* Image URL Input */}
                            <View className="mb-4">
                                <Text className="text-base font-semibold text-gray-700 mb-2">
                                    Image URL *
                                </Text>
                                <TextInput
                                    className="bg-white border border-gray-300 rounded-lg px-4 py-3 text-base"
                                    placeholder="https://example.com/image.jpg"
                                    value={imageUrl}
                                    onChangeText={(text) => {
                                        setImageUrl(text);
                                        if (errors.imageUrl) setErrors({ ...errors, imageUrl: null });
                                    }}
                                    keyboardType="url"
                                    autoCapitalize="none"
                                    editable={!submitting}
                                />
                                {errors.imageUrl && (
                                    <Text className="text-red-600 text-sm mt-1">{errors.imageUrl}</Text>
                                )}
                            </View>

                            {/* Ingredients Section */}
                            <View className="mb-4">
                                <Text className="text-base font-semibold text-gray-700 mb-2">
                                    Ingredients *
                                </Text>
                                {ingredients.map((ingredient, index) => (
                                    <View key={index} className="flex-row items-center mb-2">
                                        <TextInput
                                            className="flex-1 bg-white border border-gray-300 rounded-lg px-4 py-3 text-base"
                                            placeholder={`Ingredient ${index + 1}`}
                                            value={ingredient}
                                            onChangeText={(text) => {
                                                updateIngredient(index, text);
                                                if (errors.ingredients) setErrors({ ...errors, ingredients: null });
                                            }}
                                            editable={!submitting}
                                        />
                                        {ingredients.length > 1 && (
                                            <TouchableOpacity
                                                className="ml-2 w-10 h-10 bg-red-500 rounded-lg items-center justify-center"
                                                onPress={() => removeIngredientField(index)}
                                                disabled={submitting}
                                            >
                                                <FontAwesome name="times" size={16} color="white" />
                                            </TouchableOpacity>
                                        )}
                                    </View>
                                ))}
                                <TouchableOpacity
                                    className="bg-purple-100 border border-purple-300 border-dashed rounded-lg px-4 py-3 flex-row items-center justify-center mt-2"
                                    onPress={addIngredientField}
                                    disabled={submitting}
                                >
                                    <FontAwesome name="plus" size={16} color="#9333ea" />
                                    <Text className="text-purple-600 font-semibold ml-2">Add Ingredient</Text>
                                </TouchableOpacity>
                                {errors.ingredients && (
                                    <Text className="text-red-600 text-sm mt-1">{errors.ingredients}</Text>
                                )}
                            </View>

                            {/* Instructions Input */}
                            <View className="mb-6">
                                <Text className="text-base font-semibold text-gray-700 mb-2">
                                    Instructions *
                                </Text>
                                <TextInput
                                    className="bg-white border border-gray-300 rounded-lg px-4 py-3 text-base"
                                    placeholder="Step by step cooking instructions..."
                                    value={instructions}
                                    onChangeText={(text) => {
                                        setInstructions(text);
                                        if (errors.instructions) setErrors({ ...errors, instructions: null });
                                    }}
                                    multiline
                                    numberOfLines={6}
                                    textAlignVertical="top"
                                    editable={!submitting}
                                    style={{ minHeight: 120 }}
                                />
                                {errors.instructions && (
                                    <Text className="text-red-600 text-sm mt-1">{errors.instructions}</Text>
                                )}
                            </View>

                            {/* Submit Button */}
                            <TouchableOpacity
                                className={`rounded-lg px-6 py-4 mb-8 ${submitting ? 'bg-gray-400' : 'bg-purple-600'
                                    }`}
                                onPress={handleCreateRecipe}
                                disabled={submitting}
                            >
                                {submitting ? (
                                    <View className="flex-row items-center justify-center">
                                        <ActivityIndicator size="small" color="white" />
                                        <Text className="text-white text-lg font-bold ml-2">Creating...</Text>
                                    </View>
                                ) : (
                                    <Text className="text-white text-lg font-bold text-center">
                                        Create Recipe
                                    </Text>
                                )}
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </KeyboardAvoidingView>
            </Modal>
        </View>
    );
}