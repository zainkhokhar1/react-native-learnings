
import { View,Text, FlatList,TextInput, Pressable } from "react-native"
import TextComponent from "../../Day1/TextComponent"
import { useState } from "react";

export default function PostsScreen(){

    const [posts,setPosts] = useState([
        {id:'1',title:'Post One'},{id:'2',title:'Post Two'},{id:'3',title:'Post Three'},{id:'4',title:'Post Four'},{id:'5',title:'Post Five'}
    ]);

    const [postCreateData,setPostCreateData] = useState({
        title:''
        });

    const handleinputChange = (value,fieldName) => {
        setPostCreateData({
            ...postCreateData,
            [fieldName]:value
        });
    }

    const handleCreatePost = () => {
        setPosts([
            ...posts,
            {
                id: (posts.length + 1).toString(),
                title: postCreateData.title
            }
        ])
    }
    return <View>

        <TextComponent text={'Posts Screen'} />

        <View>
            <Text style={{ color:'white', fontSize:20, fontWeight:'600', textAlign:'center', marginVertical:10 }}>
                Create a post
            </Text>
            <View style={{ color:'white',backgroundColor:'#555',padding:10,marginHorizontal:20,borderRadius:10 }}>  
                <TextInput 
                onChangeText={(value)=> handleinputChange(value,"title")}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Title"
                style={{ color:'white', fontSize:16, borderColor:'#eaeaeaff', borderWidth:1,marginBottom:14, borderRadius:10,paddingLeft:10 }}
/>

                <Pressable style={{ backgroundColor:'pink', padding:10, borderRadius:8, marginTop:10, alignItems:'center' }}
                onPress={handleCreatePost}
                >
                    <Text style={{ fontSize:18, fontWeight:'600' }}>
                        Submit Post
                    </Text>
                </Pressable>
            </View> 

        </View>

        <FlatList 
        data={posts}
        keyExtractor={item => item.id}
        renderItem ={({item})=> <Text style={{ color:'white', fontSize:18, padding:10, borderBottomWidth:1, borderBottomColor:'#555' }}>{item.title}</Text>}
        />
    
        </View>
}