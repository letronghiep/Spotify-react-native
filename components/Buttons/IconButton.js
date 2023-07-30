import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { View, Pressable, StyleSheet, GestureResponderEvent } from 'react-native'

function IconButton({
    icon,
    size,
    color,
    buttonStyle,
    onPress
}) {
  return (
    <Pressable style={({pressed}) => [buttonStyle, pressed && styles.pressed]} onPress={onPress}>
        <View>
        <Ionicons  name={icon} size={size} color={color} />
        </View>
    </Pressable>
  )
}

export default IconButton;
const styles = StyleSheet.create({
    pressed: {
        opacity: 0.8
    }
})