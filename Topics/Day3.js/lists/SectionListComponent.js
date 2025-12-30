import { Text, View, SectionList } from "react-native";
import stylesTwo from "../../Styles/Day2";

let SectionListData;
try {
    SectionListData = require("../../../SectionListData.json");
} catch (error) {
    console.error("Error loading SectionListData.json:", error);
    SectionListData = { data: [] };
}

export default function SectionListComponent(){

    const data = SectionListData?.data || [];
    
    return (
        <SectionList
            style={{ marginBottom:16 }}
            sections={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => <SingleItem item={item} />}
            renderSectionHeader={({section}) => (
                <Text style={[stylesTwo.movieCardMainHeading, {
                    textAlign:'center',
                    backgroundColor: '#1a1a1a',  
                    padding: 10
                }]}>
                    {section.title}
                </Text>
            )}
            ListHeaderComponent={() => (
                <View>
                    <Text style={[stylesTwo.movieCardMainHeading,{ textAlign:'center', marginVertical: 15 }]}>
                        Section List Component
                    </Text>
                </View>
            )}
            ListEmptyComponent={() => (
                <Text style={{ color: 'white', textAlign: 'center', padding: 20 }}>
                    No sections found!
                </Text>
            )}
        />
    );
}

const SingleItem = ({ item }) => {
    return (
        <View style={{
            padding: 15,
            backgroundColor: '#2A2831',
            marginHorizontal: 20,
            marginVertical: 5,
            borderRadius: 8
        }}>
            <Text style={{ color: 'white', fontSize: 16, marginBottom: 8 }}>
                {item.para || 'No content'}
            </Text>
            <Text style={{ color: 'black', fontSize: 16, paddingVertical:8, textAlign:'center',backgroundColor:'#FFD700', borderRadius:8,marginTop:8 }}>
                {item.btnText || 'No button text'}
            </Text>
        </View>
    );
}
