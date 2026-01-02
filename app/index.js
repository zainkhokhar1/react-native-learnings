import { View, Text, Pressable, StyleSheet } from "react-native";
import { router } from 'expo-router';

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home Page</Text>
            <Text style={styles.subtitle}>Welcome to your React Native App with Expo Router</Text>

            <Pressable
                style={styles.button}
                onPress={() => router.push('/posts')}
            >
                <Text style={styles.buttonText}>Go to Posts</Text>
            </Pressable>

            <Pressable
                style={styles.button}
                onPress={() => router.push('/users')}
            >
                <Text style={styles.buttonText}>Go to Users</Text>
            </Pressable>

            <Pressable
            style={styles.button}
            onPress={() => router.push('/about')}
        >
            <Text style={styles.buttonText}>Go to About</Text>
        </Pressable>

        </View>
    );
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#37353E',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        color: '#ccc',
        marginBottom: 40,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#6200ee',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 8,
        marginVertical: 10,
        width: '80%',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
