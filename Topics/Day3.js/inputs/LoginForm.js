import { useState } from "react";
import { Pressable, TextInput, View,Text,Switch, KeyboardAvoidingView } from "react-native";


export default function LoginForm(){

    const [save,setSave] = useState(false);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const validateForm = () =>{

        if(!email.includes('@')){
            alert('Please enter a valid email address');
            return false;
        }
        if(password.length < 6){
            alert('Password must be at least 6 characters long');
            return false;
        }

        return true;
    }

    const handleSubmit = () => {
        if(validateForm()){
            alert('Form submitted successfully!');
        }
    }

    return <KeyboardAvoidingView behavior="padding" style={{ width:'90%', height:'auto',minHeight:'95%',marginInline:'auto' }}>
        <TextInput 
        placeholder="Enter Email"
        placeholderTextColor={'white'}
        autoCorrect={false}
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={(value)=>setEmail(value)}
        style={{ color:'white',height:50,width:'100%',dingBlock: 4, borderWidth: 1, borderColor: 'white', borderRadius: 10, marginInline: 'auto', marginBlock: 15, color: 'white', fontSize: 18, paddingLeft: 10, textAlignVertical:'top' }}
/>

        <TextInput 
        style={{ color:'white',height:50,width:'100%',dingBlock: 4, borderWidth: 1, borderColor: 'white', borderRadius: 10, marginInline: 'auto', marginBlock: 15, color: 'white', fontSize: 18, paddingLeft: 10, textAlignVertical:'top' }}
        value={password}
        onChangeText={(value)=>setPassword(value)}
        placeholder="Enter Password"  
        placeholderTextColor={'white'}
        secureTextEntry/>

        <View style={{ display:'flex',alignContent:'start',justifyContent:'start' }}>
            <Text style={{ fontSize:18, fontWeight:'400',color:'white', letterSpacing:2 }}>
                Save Password
            </Text>
            <Switch 
                trackColor={{ false:'#ccc', true:'black' }}
                thumbColor={'#f0f0f0'}
                value={save}
                onValueChange={()=>setSave(!save)}
            />
        </View>

        <Pressable style={{ color:'white',backgroundColor:'pink',borderRadius:12,marginTop:'auto' }}
        onPress={handleSubmit}
        >
            <Text style={{ fontSize:20,fontWeight:'600', textAlign:'center',paddingBlock:10 }}>
                Login
            </Text>
        </Pressable>

    </KeyboardAvoidingView>
}