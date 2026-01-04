import { Slot, Stack, Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Text } from 'react-native';
import { View } from 'react-native';

export default function RootLayout() {
    return (
        <View style={{ flex: 1 }}>

            {/* <View style={{ height: 80, backgroundColor: '#6200ee', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', textAlign: 'center', lineHeight: 50 }}>Header
                </Text>
            </View> */}

            {/* <Stack
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

            </Stack> */}

            <Tabs
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
                        fontWeight: 'semibold',
                        fontSize: 18
                    },
                    headerRight: () => (
                        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', marginRight: 10 }}>My App</Text>
                    ),
                    headerTitleAlign: 'left',
                }}
            >
                <Tabs.Screen
                    name="index"
                    options={{
                        title: 'Home',
                        tabBarBadge: 3,
                        tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />
                    }} />
                <Tabs.Screen
                    name="about"
                    options={{ title: 'About' ,
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="info-circle" color={color} />
                    }}
                />
                
                <Tabs.Screen 
                    name="users"
                    options={{ title: 'Users' ,
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="users" color={color} />
                    }} />

                <Tabs.Screen
                    name="posts"
                    options={{ title: 'Posts' ,
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="file-text" color={color} />
                    }}
                />

                <Tabs.Screen
                    name="contact"
                    options={{ title: 'Contact' ,
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="phone" color={color} />
                    }}

                />
                <Tabs.Screen
                    name='+not-found'
                    options={{ title: 'Not found',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="exclamation-triangle" color={color} />
                     }}
                />

            </Tabs>

            {/* <View style={{ height: 80, backgroundColor: '#ee4300ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', textAlign: 'center', lineHeight: 50 }}>Footer
                </Text>
            </View> */}

        </View>
    );
}