import { Pressable, Text } from "react-native";

export default function DefaultBtn({ styling, title, onPress }) {
    return (
        <Pressable onPress={onPress} style={({ pressed }) => [
            {
                backgroundColor: pressed ? '#5D3FD3' : '#7B5FFF',
            },
            ...styling
        ]}>
            <Text style={{ color: 'white', textAlign: 'center', padding: 10, fontWeight: '600' }}>
                {title ? title : 'Custom Button'}

            </Text>
        </Pressable>
    );

}
