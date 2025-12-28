import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable,Button,Modal} from 'react-native';
import PressableComponent from './Topics/Day1/PressableComponent';
import ModalComponent from './Topics/Day2/ModalComponent';
import ImageComponent from './Topics/Day1/ImageComponent';
import TextComponent from './Topics/Day1/TextComponent';
import StatusBarComponent from './Topics/Day1/StatusBarComponent';
import ActivityIndicatorComponent from './Topics/Day2/ActivityIndicatorComponent';
import AlertComponent from './Topics/Day2/AlertComponent';

export default function App() {
  const [openModal,setOpenModal] = useState(false);
  const [loading,setLoading] = useState(false);

  return (

    <View style={styles.container}>  

    <TextComponent />

     <ImageComponent />

      <PressableComponent openModal={openModal} setOpenModal={setOpenModal}/>


       <ModalComponent openModal={openModal} setOpenModal={setOpenModal}/>

       <StatusBarComponent />

       <Pressable onPress={()=>setLoading(!loading)}>
        <Text style={{color:"white",fontSize:20,textAlign:'center', marginBlock:10, backgroundColor:"green",paddingBlock:14, width:"80%",marginInline:"auto"}}>
          Show Loading
        </Text>
       </Pressable>

       <ActivityIndicatorComponent isLoading={loading}/>

       <AlertComponent/>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#37353E',
    alignItems: 'start',
    justifyContent: 'start',
    paddingInline:20,
    paddingBlock:30,
    color:'#D3DAD9'
  },
});
