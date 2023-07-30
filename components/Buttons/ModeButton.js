import React from 'react'
import { Text, Pressable, View } from 'react-native'
import { Ionicons } from  '@expo/vector-icons'
import { StyleSheet } from 'react-native'
import { Colors } from '../../constants/colors'

function ModeButton({ children,  icon, size, color, iconStyle, onPress }) {
  return (
    <Pressable style={({pressed}) =>[styles.buttonContainer, pressed && styles.pressed]} onPress={onPress}>
        <View style={styles.innerContainer}>
            <View style={iconStyle}>
                <Ionicons name={icon} size={size} color={color} />
            </View>
            <Text style={styles.text}>{children}</Text>
        </View>
    </Pressable>
  )
}

export default ModeButton

const styles = StyleSheet.create({
    buttonContainer: {

    },
    innerContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
      color: 'white',
      fontSize: 16,
      marginBottom: 28,
      fontFamily: 'montserrat-bold',
      // fontWeight: 400

    },
    pressed: {
        opacity: 0.7
    }
})