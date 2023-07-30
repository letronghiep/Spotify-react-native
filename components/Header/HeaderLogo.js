import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IconButton from '../Buttons/IconButton'
import { useNavigation } from '@react-navigation/native'

const HeaderLogo = ({isNext}) => {
    const navigation = useNavigation()
  return (
    <View style={styles.headerContainer}>
               {isNext &&  <IconButton icon='chevron-back-circle-outline' size={30} color='white' buttonStyle={{
                    left: 20
                }} onPress={() => navigation.goBack()} />}
                <Image style={styles.headerImage} source={require('../../assets/logo.png')} />
    </View> 
  )
}

export default HeaderLogo

const styles = StyleSheet.create({
      
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 34,
        backgroundColor: '#000'
    },
    headerImage: {
        alignSelf:'center',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
})