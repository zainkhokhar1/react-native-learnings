
import { Alert,Pressable,Text} from "react-native";

export default function AlertComponent(){
    return <Pressable 
    onPress={()=>Alert.alert("Confimration","Are you sure you want to delete this page?",
        [
            {
                text:"No",
                onPress : ()=>console.log('Pressing No'),
            },
             {
                text:"Yes",
                onPress : ()=>console.log('Pressing Yes')
            },
        ]
    )}
>
            <Text style={{color:"white",fontSize:20,textAlign:'center', marginBlock:10, backgroundColor:"yellow",color:"black",paddingBlock:14, width:"80%",marginInline:"auto"}}>
              Show Alert
            </Text>
           </Pressable>
}