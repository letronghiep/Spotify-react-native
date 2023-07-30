import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Colors } from '../../constants/colors'

export default function Button({children, textStyle, onPress}) {
  return (
    <Pressable style={({pressed}) =>[styles.button, pressed && styles.pressed]} onPress={onPress}>
        <View style={styles.innerButton}>
            <Text style={[styles.text, textStyle]}>
                {children}
            </Text>
        </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 100,
        width: '80%',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: Colors.primaryColor,
        backgroundColor: "#42c83c",
        marginTop: 32,
        // marginBottom: 66,
    },
    innerButton:{
        marginHorizontal: 42,
        paddingVertical: 14,

    },
    text: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'montserrat',
        fontSize: 26
    },
    pressed: {
        opacity: 0.8
    }
})