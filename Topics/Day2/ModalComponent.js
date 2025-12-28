
import { Text,Modal,View,Pressable,Button } from "react-native"

export default function ModalComponent({openModal,setOpenModal}){
    return <Modal animationType='slide' presentationStyle='pageSheet' visible={openModal} style={{position:'relative'}} onRequestClose={()=>setOpenModal(!openModal)}>
            <View>
              <Text>
                Modal details
              </Text>
              <Button title="Click me!" />
            </View>
    
            <Pressable onPress={()=>setOpenModal(!openModal)}>
              <Text style={{position:'absolute', top:10, right:25, fontSize:20,backgroundColor:"cyan",padding:10}}>
              Close Me
            </Text>
            </Pressable>
              
            </Modal> 
}