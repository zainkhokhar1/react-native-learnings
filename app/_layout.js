import { Slot, Stack } from 'expo-router';
import { Text } from 'react-native';
import { View } from 'react-native';

export default function RootLayout() {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: 80, backgroundColor: '#6200ee',display: 'flex',alignItems:'center',justifyContent:'center' }} >
                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', textAlign: 'center', lineHeight: 50 }}>Header
                </Text>
            </View>
            <Slot
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#37353E',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />
            <View style={{ height: 80, backgroundColor: '#ee4300ff',display: 'flex',alignItems:'center',justifyContent:'center' }} >
                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', textAlign: 'center', lineHeight: 50 }}>Footer
                </Text>
            </View>
        </View>
    );
}