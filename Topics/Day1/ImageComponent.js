import { Image, Dimensions } from "react-native";

export default function ImageComponent(){

    let screenHeight = Dimensions.get('window').height;

    return <Image source={{uri :'https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fHww'}} style={{marginTop:30, height: screenHeight > 600 ? '60%': '50%'}} 
    />
}