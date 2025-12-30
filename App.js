import { useState } from 'react';
import { Text, ScrollView, Pressable, StatusBar, View } from 'react-native';
import PressableComponent from './Topics/Day1/PressableComponent';
import ModalComponent from './Topics/Day2/ModalComponent';
import ImageComponent from './Topics/Day1/ImageComponent';
import TextComponent from './Topics/Day1/TextComponent';
import StatusBarComponent from './Topics/Day1/StatusBarComponent';
import ActivityIndicatorComponent from './Topics/Day2/ActivityIndicatorComponent';
import AlertComponent from './Topics/Day2/AlertComponent';
import stylesTwo from './Topics/Styles/Day2.js'
import PlatformSpecificCode from './Topics/Day3.js/platformSpecificCode.js';
import UseSafeAreaHook from "./Topics/Day3.js/UseSafeAreaHook.js"
import CustomBtn from './Topics/Day3.js/components/CustomButton/CustomButton';
import FlatListComponent from "./Topics/Day3.js/lists/FlatListComponent.js"
import MovieListComponent from './Topics/Day3.js/lists/MovieListComponent.js';
import SectionListComponent from './Topics/Day3.js/lists//SectionListComponent.js';
import CustomInput from './Topics/Day3.js/inputs/CustomInput.js';
import CustomSwitch from './Topics/Day3.js/inputs/CustomSwitch.js';
import LoginForm from './Topics/Day3.js/inputs/LoginForm.js';

export default function App() {
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <UseSafeAreaHook>

      <View style={{ flex: 1, backgroundColor: '#37353E' }}>

        {  /*

    <TextComponent text={'Home Page'}/>

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

       <PlatformSpecificCode />

       <CustomBtn styling = { [stylesTwo.btnText] }/> */}

        {/* <TextComponent text={'Users List'} />
       <FlatListComponent /> */}


        {/* <MovieListComponent /> */}

        {/* <SectionListComponent /> */}

        {/* <CustomInput /> */}

        {/* <CustomSwitch /> */}

        <LoginForm />

      </View>

    </UseSafeAreaHook>

  );
}
