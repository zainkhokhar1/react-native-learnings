import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { View, StatusBar } from "react-native";

function SafeAreaWrapper({ children }) {
        const insets = useSafeAreaInsets();
        let marginTop = StatusBar.currentHeight || insets.top;

        return (
                <View style={{ flex: 1, paddingTop: marginTop, backgroundColor: "#37353E" }}>
                        {children}
                </View>
        );
}

export default function UseSafeAreaHook({ children }){
        return (
                <SafeAreaProvider style={{flex: 1}}>
                        <SafeAreaWrapper>
                                {children}
                        </SafeAreaWrapper>
                </SafeAreaProvider>
        );
}