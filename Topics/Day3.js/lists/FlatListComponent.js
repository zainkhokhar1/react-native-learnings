
import { FlatList,Text,View } from "react-native";
import { users } from "../../../Data.json"

export default function FlatListComponent(){

    return <FlatList
        initialNumToRender={10}
        windowSize={10}
        style={{ paddingHorizontal:20,paddingVertical:10,marginTop:10,marginBottom:25 }}
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item})=>{
            return <View style={{marginBottom: 12, padding: 15, backgroundColor: '#2A2831', borderRadius: 8}}>

                        <Text style={{color:"white", fontSize: 18, fontWeight: 'bold'}}>
                            {item.name}
                        </Text>

                        <Text style={{color:"white", marginTop: 5}}>
                            Age: {item.age}
                        </Text>

                        <Text style={{color:"white", marginTop: 5}}>
                            {item.phone}
                        </Text>

                        <Text style={{color:"#999", marginTop: 5, fontSize: 12}}>
                            {item.email}
                        </Text>
                </View>
        }}
    />
}