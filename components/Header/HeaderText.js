import { StyleSheet, Text, Touchable, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const HeaderText = ({bgText, children}) => {
  return (
    <View style={[styles.container, bgText]}>
      <Text style={styles.title}>{children}</Text>
        <Ionicons style={{marginLeft: 'auto'}} name='ellipsis-horizontal' size={24} color='white' />
    </View>
  )
}

export default HeaderText

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 24,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.15,
        shadowRadius: 8
    },
    title: {
        color: 'white',
        textAlign: 'center',
        fontSize: 26,
        fontWeight: 'bold',
        marginLeft: 'auto'
    }
})