import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable,Button,Modal} from 'react-native';
import PressableComponent from './Topics/PressableComponent';
import ModalComponent from './Topics/ModalComponent';
import ImageComponent from './Topics/ImageComponent';
import TextComponent from './Topics/TextComponent';
import StatusBarComponent from './Topics/StatusBarComponent';

export default function App() {
  const [openModal,setOpenModal] = useState(false);

  return (

    <View style={styles.container}>  

    <TextComponent />

     <ImageComponent />

      <PressableComponent openModal={openModal} setOpenModal={setOpenModal}/>


       <ModalComponent openModal={openModal} setOpenModal={setOpenModal}/>

       <StatusBarComponent />

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
