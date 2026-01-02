import { Text, View } from "react-native";
import UsersScreen from ".";

export default function UserLayout() {
    return (
        <View style={{ width:'100%',height:'82%', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
                User Layout
            </Text>

            <UsersScreen />
        </View>
    );
}