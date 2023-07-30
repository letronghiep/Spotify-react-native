import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const WaitingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={require('../assets/logo.png')} />
    </SafeAreaView>
  )
}

export default WaitingScreen

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain'
    }
})