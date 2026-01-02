import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function SingleUser() {

    const params = useLocalSearchParams();
    const { id } = params;

    return (
        <View >
            <Text >{id} User Page</Text>
            <Text >Details of a single user will be displayed here.</Text>
        </View>
    );
}