import { Pressable,Text } from "react-native";

export default function PressableComponent({openModal,setOpenModal}){
    return <Pressable onPress={()=>setOpenModal(!openModal)}>
            <Text style={{color:"white", fontSize:24, textAlign:'center', marginBlock:30}}>
              Open Modal
            </Text>
           </Pressable>
}