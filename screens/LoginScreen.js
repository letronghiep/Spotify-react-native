import {View, StyleSheet} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import * as WebBrowser from 'expo-web-browser';
import {  useAuthRequest, makeRedirectUri, ResponseType } from 'expo-auth-session'
import LoginButton from '../components/Buttons/LoginButton';
import HeaderLogo from '../components/Header/HeaderLogo';
import { useEffect, useLayoutEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
WebBrowser.maybeCompleteAuthSession();
const discovery = {
  authorizationEndpoint: 'https://accounts.spotify.com/authorize',
  tokenEndpoint: 'https://accounts.spotify.com/api/token',
};

function LoginScreen() {
  const navigation = useNavigation()
  useEffect(() => {
    const checkTokenValidity = async () => {
      const accessToken = await AsyncStorage.getItem("token");
      
      console.log("access token",accessToken);
    

      if(accessToken){
        navigation.replace("HomeNavigation");
      }
      else {
        // token would be expired so we need to remove it from the async storage
        await AsyncStorage.removeItem("token");
        
      }
    }

    checkTokenValidity();
  },[])
  const [request, response, promptAsync] = useAuthRequest(
    {
      responseType: ResponseType.Token,
      clientId: "595aac06b728416a9af959e41287f93a",
      scopes: [
      "user-read-email",
      "user-library-read",
      "user-follow-read",
      "user-read-recently-played",
      "user-top-read",
      "playlist-read-private",
      "playlist-read-collaborative",
      "playlist-modify-public",
    
    ],
      usePKCE: false,
      redirectUri: "exp://localhost:19000/--/spotify-auth-callback",
    },
    discovery
  );
  useEffect(() => {
    async function setToken() {
      if (response?.type === 'success') {
        if (response.params.error) {
          console.error('Error:', response.params.error);
        } else {
          
          const { access_token } = response.params;
          console.log('====================================');
          console.log("token", access_token);
          console.log('====================================');
          await AsyncStorage.setItem("token", access_token);
          navigation.navigate("HomeNavigation")
        }
      }
    }
    setToken();
  }, [response]);
  return (
    <SafeAreaView style={styles.rootScreen}>
      <HeaderLogo isNext />
      <View style={styles.innerContainer}>
        <LoginButton children='Sign in with Spotify' textStyle={{fontSize: 16}} buttonStyle={{backgroundColor: "#42c83c",}} disabled={!request} onPress={() => promptAsync() } />
        <LoginButton children='Continue with phone number' textStyle={{color: 'white'}}  icon="phone-portrait-outline" size={20} color='white' />
        <LoginButton children='Continue with Google' textStyle={{color: 'white'}}   icon="logo-google" size={20} color='white' onPress={()=>{}} />
        <LoginButton children='Continue with Facebook' textStyle={{color: 'white'}} icon="logo-facebook" size={20} color='white' />
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen;

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
        justifyContent: 'space-between', 
        backgroundColor: "#000"
    },
    innerContainer: {
      flex: 1,
      width: '100%',
      justifyContent: 'flex-end',
      alignItems: 'center',  
      rowGap: 12,
      marginBottom: 60
    }
})