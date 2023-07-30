import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const HomeHeader = ({leftIcon, rightIcon, color, size, onSearch, onSettings}) => {
  return (
    <View style={styles.rootContainer}>
      <Pressable style={styles.leftIcon} onPress={onSearch}>
            <Ionicons name={leftIcon} color={color} size={size} />
      </Pressable>
      <Image source={require("../../assets/logo.png")} />
        <Pressable style={styles.rightIcon} onPress={onSettings}>
            <Ionicons name={rightIcon} color={color} size={size}  />
        </Pressable>
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
    rootContainer: {
        flexDirection: 'row',
        backgroundColor: '#000',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 30,
    },
    leftIcon: {
        marginLeft: 18
    },
    rightIcon: {
        marginRight: 18
    }
})