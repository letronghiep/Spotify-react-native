import React from 'react'
import {View, StyleSheet} from 'react-native'
import IconButton from '../Buttons/IconButton'

function ListButton() {
  return (
    <View style={styles.container}>
        <IconButton buttonStyle={{
          paddingVertical: 12,
          paddingHorizontal: 36,
          borderWidth: 1,
          borderColor: "#333",
          borderRadius: 8
          
        }} icon='logo-facebook' size={24} color='white' />
        <IconButton buttonStyle={{
          paddingVertical: 12,
          paddingHorizontal: 36,
          borderWidth: 1,
          borderColor: "#333",
          borderRadius: 8
          
        }} icon='logo-google' size={24} color='white' />
        <IconButton buttonStyle={{
          paddingVertical: 12,
          paddingHorizontal: 36,
          borderWidth: 1,
          borderColor: "#333",
          borderRadius: 8
          
        }} icon='logo-apple' size={24} color='white' />
    </View>
  )
}

export default ListButton;
const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    justifyContent: 'space-between',
    columnGap: 24,
    marginVertical: 14
  }
})    