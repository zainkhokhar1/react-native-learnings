import { Text, View } from "react-native";
import { router } from "expo-router";
import { Pressable } from "react-native";
import { styles } from "./index.js";

export default function NotFound() {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#37353E' }}>
            <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>404 - Page Not Found</Text>
            <Text style={{ color: '#ccc', fontSize: 16 }}>The page you are looking for does not exist.</Text>

            <Pressable
                style={styles.button}
                onPress={() => router.push('/')}
            >
                <Text style={styles.buttonText}>Go to Home</Text>
            </Pressable>

        </View>
    );
}
