import { View, Text, FlatList, Image, StyleSheet, ActivityIndicator, TouchableOpacity, RefreshControl } from "react-native";
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
        <View style={styles.recipeCard}>
            <Image
                source={{ uri: item.image }}
                style={styles.recipeImage}
                resizeMode="cover"
            />
            <View style={styles.recipeContent}>
                <Text style={styles.recipeTitle}>{item.title}</Text>

                <Text style={styles.sectionLabel}>Ingredients:</Text>
                {item.ingredients?.map((ingredient, index) => (
                    <Text key={index} style={styles.ingredientText}>• {ingredient}</Text>
                ))}

                <Text style={styles.sectionLabel}>Instructions:</Text>
                <Text style={styles.instructionsText}>{item.instructions}</Text>
            </View>
        </View>
    );

    if (loading) {
        return (
            <View style={styles.centerContainer}>
                <ActivityIndicator size="large" color="#6200ee" />
                <Text style={styles.loadingText}>Loading recipes...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.centerContainer}>
                <Text style={styles.errorText}>{error}</Text>
                <TouchableOpacity style={styles.retryButton} onPress={fetchRecipes}>
                    <Text style={styles.retryButtonText}>Retry</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Recipes</Text>
            {recipes.length === 0 ? (
                <View style={styles.centerContainer}>
                    <Text style={styles.emptyText}>No recipes found</Text>
                </View>
            ) : (
                <FlatList
                    data={recipes}
                    renderItem={renderRecipeItem}
                    keyExtractor={(item) => item._id}
                    contentContainerStyle={styles.listContainer}
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['#6200ee']} />
                    }
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        paddingHorizontal: 16,
        paddingVertical: 20,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    loadingText: {
        marginTop: 10,
        fontSize: 16,
        color: '#666',
    },
    errorText: {
        fontSize: 16,
        color: '#d32f2f',
        textAlign: 'center',
        marginBottom: 20,
    },
    emptyText: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
    },
    retryButton: {
        backgroundColor: '#6200ee',
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 8,
    },
    retryButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    listContainer: {
        padding: 16,
    },
    recipeCard: {
        backgroundColor: '#fff',
        borderRadius: 12,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        overflow: 'hidden',
    },
    recipeImage: {
        width: '100%',
        height: 200,
        backgroundColor: '#e0e0e0',
    },
    recipeContent: {
        padding: 16,
    },
    recipeTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 12,
    },
    sectionLabel: {
        fontSize: 16,
        fontWeight: '600',
        color: '#6200ee',
        marginTop: 12,
        marginBottom: 8,
    },
    ingredientText: {
        fontSize: 14,
        color: '#555',
        marginBottom: 4,
        paddingLeft: 8,
    },
    instructionsText: {
        fontSize: 14,
        color: '#555',
        lineHeight: 20,
    },
});