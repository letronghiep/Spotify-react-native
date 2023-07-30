import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'


function FlatButton({ children, textStyle, btnStyle, onPress }) {
  return (
    <Pressable style={ ({pressed}) => [styles.container, pressed && styles.pressed, btnStyle]} onPress={onPress}>
        <View>
            <Text style={[styles.text, textStyle]}>
                {children}
            </Text>
        </View>
    </Pressable>
  )
}
export default FlatButton;

const styles = StyleSheet.create({
    container :{
        paddingHorizontal: 20,    
    },
    pressed: {
        opacity: 0.85
    },
    text: {
        fontWeight: 'bold',
        fontFamily: 'montserrat',
       
    }
})