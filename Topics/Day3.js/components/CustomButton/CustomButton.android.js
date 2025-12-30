
import { Pressable, Text } from "react-native";

export default function CustomButton(){
    return <Pressable style={{ marginTop:20,width:"80%",marginInline:"auto" }}>
        <Text style={{ textAlign:"center",fontSize:20,paddingBlock:10,color:"black",backgroundColor:"yellow", borderRadius:10 }}>
            Android Button
    </Text>
    </Pressable>
};