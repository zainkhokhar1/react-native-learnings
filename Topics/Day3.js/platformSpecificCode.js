
import { Platform, StyleSheet,Text } from "react-native";

export default function PlatformSpecificCode(){

    return <>
        <Text style={[styles.text]}>
            Platform Specific is here.
        </Text>
    </>

}

const styles = StyleSheet.create({
  text : { 
    ...Platform.select({
        ios:{
            color:'red',
            fontSize:20,
            textAlign:'center'
        },
        android:{
            color:'white',
            fontSize:26,
            textAlign:'center'
        }
    })
}
})