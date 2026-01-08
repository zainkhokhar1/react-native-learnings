import { Slot, Stack, Tabs } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Text } from 'react-native';
import { View } from 'react-native';
import "../global.css";
import { Provider } from 'react-redux';
import store from '../redux-store/store';

import { CounterProvider } from "../hooks/CounterHook";

export default function RootLayout() {
    return (
        // <CounterProvider>
        //     <View style={{ flex: 1 }}>

        //         {/* <View style={{ height: 80, backgroundColor: '#6200ee', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
        //         <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', textAlign: 'center', lineHeight: 50 }}>Header
        //         </Text>
        //     </View> */}

        //         <Stack
        //             screenOptions={{
        //                 headerStyle: {
        //                     height: 80,
        //                     backgroundColor: '#6200ee',
        //                 },
        //                 headerTintColor: '#fff',
        //                 headerTitleStyle: {
        //                     fontWeight: 'bold',
        //                 },
        //                 headerRight: () => (
        //                     <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', marginRight: 10 }}>My App</Text>
        //                 ),
        //                 headerTitleAlign: 'center',
        //             }}
        //         >
        //             <Stack.Screen name="index" options={{ title: 'Home' }} />
        //             <Stack.Screen name="about" options={{ title: 'About' }} />
        //             <Stack.Screen name="contact" options={{ title: 'Contact' }} />
        //             <Stack.Screen name='+not-found' options={{ title: 'Oops!' }} />

        //             <Stack.Screen
        //                 name="modal"
        //                 options={{
        //                     title: 'Modal',
        //                     presentation: 'modal',
        //                     href: null, // this will hide the tab from the bottom tab bar  
        //                 }}
        //             />

        //         </Stack>

        //         {/* <Tabs
        //         screenOptions={{
        //             headerStyle: {
        //                 height: 80,
        //                 backgroundColor: '#6200ee',
        //             },
        //             headerTintColor: '#fff',
        //             headerTitleStyle: {
        //                 fontWeight: 'semibold',
        //                 fontSize: 18
        //             },
        //             headerRight: () => (
        //                 <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', marginRight: 10 }}>My App</Text>
        //             ),
        //             headerTitleAlign: 'left',
        //         }}
        //     >
        //         <Tabs.Screen
        //             name="index"
        //             options={{
        //                 title: 'Home',
        //                 tabBarBadge: 3,
        //                 tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />
        //             }} />

        //         <Tabs.Screen
        //             name="users"
        //             options={{
        //                 title: 'Users',
        //                 tabBarIcon: ({ color }) => <FontAwesome size={28} name="users" color={color} />
        //             }} />

        //         <Tabs.Screen
        //             name="posts"
        //             options={{
        //                 title: 'Posts',
        //                 tabBarIcon: ({ color }) => <FontAwesome size={28} name="file-text" color={color} />
        //             }}
        //         />

        //         <Tabs.Screen
        //             name='+not-found'
        //             options={{
        //                 title: 'Not found',
        //                 href: null, // this will hide the tab from the bottom tab bar  
        //                 tabBarIcon: ({ color }) => <FontAwesome size={28} name="exclamation-triangle" color={color} />
        //             }}
        //         />

        //     </Tabs> */}

        //         {/* <Drawer >
        //         <Drawer.Screen
        //             name="index" // This is the name of the page and must match the url from root
        //             options={{
        //                 drawerLabel: 'Home',
        //                 title: 'overview',
        //             }}
        //         />
        //         <Drawer.Screen
        //             name="user" // This is the name of the page and must match the url from root
        //             options={{
        //                 drawerLabel: 'User',
        //                 title: 'overview',
        //             }}
        //         />
        //     </Drawer> */}

        //         {/* <View style={{ height: 80, backgroundColor: '#ee4300ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
        //         <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', textAlign: 'center', lineHeight: 50 }}>Footer
        //         </Text>
        //     </View> */}

        //     </View>
        // </CounterProvider>

        <Provider store={store}>
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

                   {/* <Stack.Screen name="about" options={{ title: 'About' }} />
                    <Stack.Screen name="contact" options={{ title: 'Contact' }} />
                    <Stack.Screen name='+not-found' options={{ title: 'Oops!' }} />

                    <Stack.Screen
                        name="modal"
                        options={{
                            title: 'Modal',
                            presentation: 'modal',
                            href: null, // this will hide the tab from the bottom tab bar
                        }}
                    /> */}

                </Stack>

                {/* <Tabs
                screenOptions={{
                    headerStyle: {
                        height: 80,
                        backgroundColor: '#6200ee',
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
                    name="users"
                    options={{
                        title: 'Users',
                        tabBarIcon: ({ color }) => <FontAwesome size={28} name="users" color={color} />
                    }} />

                <Tabs.Screen
                    name="posts"
                    options={{
                        title: 'Posts',
                        tabBarIcon: ({ color }) => <FontAwesome size={28} name="file-text" color={color} />
                    }}
                />

                <Tabs.Screen
                    name='+not-found'
                    options={{
                        title: 'Not found',
                        href: null, // this will hide the tab from the bottom tab bar  
                        tabBarIcon: ({ color }) => <FontAwesome size={28} name="exclamation-triangle" color={color} />
                    }}
                />

            </Tabs> */}

                {/* <Drawer >
                <Drawer.Screen
                    name="index" // This is the name of the page and must match the url from root
                    options={{
                        drawerLabel: 'Home',
                        title: 'overview',
                    }}
                />
                <Drawer.Screen
                    name="user" // This is the name of the page and must match the url from root
                    options={{
                        drawerLabel: 'User',
                        title: 'overview',
                    }}
                />
            </Drawer> */}

                {/* <View style={{ height: 80, backgroundColor: '#ee4300ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', textAlign: 'center', lineHeight: 50 }}>Footer
                </Text>
            </View> */}

            </View>
        </Provider>
        
    );
}