
import { ActivityIndicator } from "react-native";

export default function ActivityIndicatorComponent({isLoading}){
    console.log(isLoading)
    return <ActivityIndicator animating={isLoading} color={"white"} size={50} style={{position:'absolute', alignContent:'center',justifyContent:'center',height:'100%',width:'100%'}}/>
}