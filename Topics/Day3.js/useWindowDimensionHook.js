import { useWindowDimensions } from "react-native";

export default function useWindowDimensionHookComponent(){
    
    const windowHeight = useWindowDimensions().height;
    const windowWidth = useWindowDimensions().width;

    return {
        windowHeight,
        windowWidth
    }

}