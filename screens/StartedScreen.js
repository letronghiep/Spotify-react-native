import React, { useEffect, useLayoutEffect } from 'react'
import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import IconButton from '../components/Buttons/IconButton';
import {Colors} from '../constants/colors'
import Button from '../components/Buttons/Button';
import HeaderLogo from '../components/Header/HeaderLogo';
import AsyncStorage from '@react-native-async-storage/async-storage';
const StartedScreen = () => {
    const navigation = useNavigation();
    useEffect(() => {
      async  function fetchUser() {
       const accessToken = await AsyncStorage.getItem("token")
       if(accessToken) {
          navigation.replace("HomeNavigation");
       }else {
          AsyncStorage.removeItem("token")
       }
      }
      fetchUser();
    }, [])
  return (
    <ImageBackground source={require('../assets/home-group.png')} style={[styles.imageContainer]} imageStyle={styles.imageStyle}>
        <SafeAreaView style={styles.rootContainer}>
            {/* Header */}
            <HeaderLogo />
            <View style={styles.bodyContainer}>
                <View style={styles.textContainer}>
                <Text style={styles.title}>
                    Music for everyone
                </Text>
                <Text style={styles.description}>
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. 
                </Text>
                </View>
                <Button children="Get Started" onPress={() => navigation.navigate("ContinueScreen")} />
            </View>
        </SafeAreaView>
    </ImageBackground>
  )
}

export default StartedScreen;
const styles = StyleSheet.create({
    imageContainer: {
      flex: 1,
      width: '100%',
      height: 508,
      resizeMode: 'cover',
      backgroundColor: '#000'
      
    },
    imageStyle: {
      marginTop: 90,
      opacity: 0.7,
    },
    rootContainer: {
        flex: 1,
        justifyContent: 'space-between',

    },
    bodyContainer: {
        // flex: 1,
        alignItems: 'center',
        marginTop: 'auto',
        marginBottom: 66
    },
    textContainer: {
        paddingHorizontal: 22
    },
    title: {
        color: Colors.primaryColor,
        fontSize: 24,
        fontWeight:'bold',
        fontFamily: 'montserrat',
        textAlign: 'center',
        lineHeight: 32,
        marginBottom: 10
    },
    description: {
        color: 'white',
        fontSize: 14,
        lineHeight: 20,
        textAlign: "center",
        fontFamily: 'montserrat',
        marginHorizontal: 12,   
    }
  });
  