import React from 'react'
import { Text, View, StyleSheet } from 'react-native'



function Line() {
  return (
    <View style={styles.container}>
        <View style={styles.lineLeft} />
        <Text style={styles.textLine}>Or</Text>
        <View style={styles.lineRight} />
    </View>
  )
}

export default Line;
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 16
      },
    textLine: {
      color: '#ddd',
      textAlign: 'center',
      paddingHorizontal: 12
    },
    lineLeft: {
        flex: 1,
        height: 1,
        backgroundColor: '#ddd',
        marginLeft: 44
      },
      lineRight: {
        flex: 1,
        height: 1,
        backgroundColor: '#ddd',
        marginRight: 44
      }
})