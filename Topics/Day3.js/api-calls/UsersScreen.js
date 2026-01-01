import { useEffect, useState } from "react";
import getUsersApi from "./getUsersApi";
import { ActivityIndicator, FlatList, ScrollView, Text, View } from "react-native";
import TextComponent from "../../Day1/TextComponent";


export default function UsersScreen(){
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    const fetchUsers = async () => {
        let users = await getUsersApi();
        setUsers(users);
        setLoading(false);
    };

    const onRefresh = async () => {
        setRefreshing(true);
        console.log('Refreshing...');
        await fetchUsers();
        setRefreshing(false);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return <View style={{ flex:1, backgroundColor:'#37353E' }}>
        <TextComponent text={"Users List"} />

      {
        loading ? <ActivityIndicator size="large" color="#efff3aff" style={{ marginTop:20 }} /> : <FlatList
            data={users}
            renderItem={({item})=> <View key={item.id} style={{ marginBottom:15, padding:10, borderWidth:1, borderColor:'#ccc', borderRadius:8 }}>
                        <Text style={{ fontSize:18, fontWeight:'bold', color:'white' }}>{item.name}</Text>
                        <Text style={{ color:'white' }}>{item.email}</Text>
                        <Text style={{ color:'white' }}>{item.phone}</Text>
                    </View>
                    }
            keyExtractor={item => item.id.toString()}
            ListEmptyComponent={()=> <Text>No Records Found!</Text>}
            initialNumToRender={5}
            NumberOfLines={1}
            refreshing={refreshing}
            onRefresh={onRefresh}
            style={{ flex:1 }}
            contentContainerStyle={{ padding:20, paddingBottom:40 }}>
        </FlatList>
      }  

    </View>

}