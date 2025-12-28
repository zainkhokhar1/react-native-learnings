import { useState } from 'react';
import { StyleSheet, Text, View, Pressable} from 'react-native';
import PressableComponent from './Topics/Day1/PressableComponent';
import ModalComponent from './Topics/Day2/ModalComponent';
import ImageComponent from './Topics/Day1/ImageComponent';
import TextComponent from './Topics/Day1/TextComponent';
import StatusBarComponent from './Topics/Day1/StatusBarComponent';
import ActivityIndicatorComponent from './Topics/Day2/ActivityIndicatorComponent';
import AlertComponent from './Topics/Day2/AlertComponent';
import stylesTwo from './Topics/Styles/Day2.js'


export default function App() {
  const [openModal,setOpenModal] = useState(false);
  const [loading,setLoading] = useState(false);

  return (

    <View style={stylesTwo.container}>  

    <TextComponent />

     <ImageComponent />

      <PressableComponent openModal={openModal} setOpenModal={setOpenModal}/>


       <ModalComponent openModal={openModal} setOpenModal={setOpenModal}/>

       <StatusBarComponent />

       <Pressable onPress={()=>setLoading(!loading)}>
        <Text style={[stylesTwo.btnText,stylesTwo.backgroundPurple]}>
          Show Loading
        </Text>
       </Pressable>

       <ActivityIndicatorComponent isLoading={loading}/>

       <AlertComponent/>

    </View>
  );
}
