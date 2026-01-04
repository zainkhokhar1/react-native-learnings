import { Slot, Stack } from 'expo-router';
import { Text } from 'react-native';
import { View } from 'react-native';

export default function RootLayout() {
    return (
        <View style={{ flex: 1 }}>
            {/* <View style={{ height: 80, backgroundColor: '#6200ee', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', textAlign: 'center', lineHeight: 50 }}>Header
                </Text>
            </View> */}
            <Stack
                screenOptions={{
                    headerStyle: {
                        height: 80,
                        backgroundColor: '#6200ee',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerRight: () => (
                        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', marginRight: 10 }}>My App</Text>
                    ),
                    headerTitleAlign: 'center',
                }}
            >
                <Stack.Screen name="index" options={{ title: 'Home' }} />
                <Stack.Screen name="about" options={{ title: 'About' }} />
                <Stack.Screen name="contact" options={{ title: 'Contact' }} />
                <Stack.Screen name='+not-found' options={{ title: 'Oops!' }} />

            </Stack>
            <View style={{ height: 80, backgroundColor: '#ee4300ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', textAlign: 'center', lineHeight: 50 }}>Footer
                </Text>
            </View>
        </View>
    );
}