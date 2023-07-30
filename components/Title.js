import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Colors } from '../constants/colors';


function Title({ children }) {
  return (
    <View>
        <Text style={styles.title}>{children}</Text>
        <View style={styles.subTitle}>
          <Text style={styles.desc}>If You Need Any Support</Text>
          <Pressable style={({pressed}) => pressed && styles.pressed}>
            <Text style={styles.textBtn}>Click Here</Text>
          </Pressable>
          
        </View>

      </View>
  )
}

export default Title;
const styles = StyleSheet.create({
    
    title: {
      fontSize: 24,
      fontWeight: '700',
      color: '#fff',
      textAlign: 'center',
      fontFamily: 'montserrat',
      lineHeight: 32,
      marginBottom: 16
    },
    subTitle: {
      flexDirection: 'row',
      justifyContent: 'center',
      columnGap: 10,
      marginBottom: 10
    },
    desc: {
      color: 'white',
      fontWeight: '400',
      lineHeight: 20,
      fontSize: 12,
      fontFamily: 'montserrat'
    },
    pressed: {
      opacity: 0.8
    },
    textBtn: {
      color: Colors.primaryColor,
      fontWeight: '400',
      lineHeight: 20,
      fontSize: 12,
      fontFamily: 'montserrat'
    }
  })