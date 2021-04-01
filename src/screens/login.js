import React, {Component} from 'react';
import { 
    View,
    Text,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    ToastAndroid,
} from "react-native";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

GoogleSignin.configure({webClientId: 'Your_webclientID_copied_from_firebase_console',});

Login =()=>{
    
    async function onGoogleButtonPress() {
        const { idToken } = await GoogleSignin.signIn();
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        ToastAndroid.showWithGravity(
            "logged in successfully",
            ToastAndroid.LONG,
            ToastAndroid.CENTER );
        return auth().signInWithCredential(googleCredential);
      }
    return( 
        
        <View style={styles.container}>
             <StatusBar backgroundColor={'#413175'}  barStyle={'light-content'}/>
             <TouchableOpacity style={styles.btnContainer}
             onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!')).catch((er)=>
             {
                ToastAndroid.showWithGravity(
                    "Error"+er,
                    ToastAndroid.LONG,
                    ToastAndroid.BOTTOM
                  );
                  console.log('Error',er)})
             }>
                 <Text style={styles.btnText}>Sign In with Google</Text>
            </TouchableOpacity>
        </View>
    )
  }
  export default Login;
  const styles= StyleSheet.create({
      container:{
          flex:1,
          backgroundColor:'#413175',
          alignItems:'center',
          justifyContent:'center'
      },
      btnContainer:{
          backgroundColor:'#483a78',
          alignSelf:'center',
          height:60,
          width:'70%',
          borderRadius:30,
          flexDirection:'row',
          justifyContent:'center',
          alignItems:'center',
          elevation:40,
      },
      btnText:{
          marginHorizontal:5,
          color:'#fff',
          fontSize:20,
         },
     })