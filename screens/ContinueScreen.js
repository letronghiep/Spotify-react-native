import { useLayoutEffect } from 'react';
import {  Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import Button from '../components/Buttons/Button';
import ModeButton from '../components/Buttons/ModeButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderLogo from '../components/Header/HeaderLogo';
import { Colors } from '../constants/colors';



function ContinueScreen() {
  const navigation = useNavigation() 
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])
  return (
    <ImageBackground source={require('../assets/home-group.png')} style={[styles.imageContainer]} imageStyle={styles.imageStyle}>
        <SafeAreaView style={styles.rootScreen}>
            {/* Header */}
            <HeaderLogo isNext />
    <View style={styles.container}>
        <Text style={styles.title}>Choose Mode</Text>
        <View style={styles.buttons}>
            <ModeButton icon='moon-outline' children='Dark Mode' size={30} color='white' iconStyle={{
              padding: 10,
              width: 73,
              height:73,
              flexShrink: 0,
              borderRadius: 60, 
              marginVertical: 26,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: Colors.neutral100,
            }} />
            <ModeButton icon='md-sunny-outline' size={30} children='Light Mode' color='white' iconStyle={{
              padding: 10,
              width: 73,
              height:73,
              flexShrink: 0,
              borderRadius: 60, 
              marginVertical: 26,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: Colors.neutral100,
            }} />
        </View>
        <Button children='Continue'
      onPress={() =>{
        navigation.navigate('LoginScreen')
        }}/>
    </View>
    </SafeAreaView>
    </ImageBackground>
  )
}

export default ContinueScreen;

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
        justifyContent: 'space-between',
    },
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
    container: {
        alignItems: 'center',
        marginBottom: 66
    },  
    buttons: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      columnGap: 36

    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight:'bold',
        textAlign: 'center',
        lineHeight: 28,
        marginHorizontal: 36,
        marginBottom: 8
    }
})