import { useState } from "react";
import { TextInput, View, Text } from "react-native";

export default function CustomInput() {

    const [text, setText] = useState('');

    return <View>
        <TextInput
            autoCorrect={false}
            autoCapitalize="none"
            value={text}
            onChangeText={(text) => setText(text)}
            textContentType="password"
            placeholder="Enter Email"
            placeholderTextColor={'white'}
            style={{ width: "90%", height: 45, paddingBlock: 4, borderWidth: 1, borderColor: 'white', borderRadius: 10, marginInline: 'auto', marginBlock: 15, color: 'white', fontSize: 18, paddingLeft: 10 }}>
        </TextInput>

        <View>
            <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: '700', color: 'white', letterSpacing: 3 }}>
                {
                    text ? text : 'No text for now' 
                }
            </Text>
        </View>

        <TextInput 
        placeholder="Feedback"
         placeholderTextColor={'white'} 
         style={{ color:'white',height:300,width:'90%',dingBlock: 4, borderWidth: 1, borderColor: 'white', borderRadius: 10, marginInline: 'auto', marginBlock: 15, color: 'white', fontSize: 18, paddingLeft: 10, textAlignVertical:'top' }}
         multiline
         >
                
        </TextInput>

    </View>
}