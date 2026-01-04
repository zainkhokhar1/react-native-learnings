import { View, Text, Pressable, StyleSheet } from "react-native";
import { Link, router } from 'expo-router';

export default function Home() {
    return (
        // <View style={styles.container}>
        //     <Text style={styles.title}>Home Page</Text>
        //     <Text style={styles.subtitle}>Welcome to your React Native App with Expo Router</Text>

        //     <Pressable
        //         style={styles.button}
        //         onPress={() => router.push('/posts')}
        //     >
        //         <Text style={styles.buttonText}>Go to Posts</Text>
        //     </Pressable>

        //     <Pressable
        //         style={styles.button}
        //         onPress={() => router.push('/users')}
        //     >
        //         <Text style={styles.buttonText}>Go to Users</Text>
        //     </Pressable>

        //     <Pressable
        //     style={styles.button}
        //     onPress={() => router.push('/about')}
        // >
        //     <Text style={styles.buttonText}>Go to About</Text>
        // </Pressable>

        // <Link href={'/modal'}
        //     style={[styles.button, { textAlign: 'center' }]}
        // >
        //     <Text style={styles.buttonText}>Open Modal</Text>
        // </Link>

        // </View>

        <View className="flex-1 bg-gray-800 items-center justify-center p-5">
            <Text className="text-4xl font-bold text-white mb-2">Home Page</Text>
            <Text className="text-lg text-gray-300 mb-10 text-center">Welcome to your React Native App with Expo Router and Nativewind</Text>

            <Pressable

                className="bg-purple-600 py-4 px-8 rounded-lg mb-4 w-4/5 items-center"
                onPress={() => router.push('/posts')}
            >
                <Text className="text-white text-lg font-bold">Go to Posts</Text>
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
