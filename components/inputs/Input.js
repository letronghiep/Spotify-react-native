import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { Colors } from '../../constants/colors';

function Input({ 
  placeholder, 
  // value, 
  keyboardType, 
  onUpdateValue, 
  isPassword,
  error,
  onFocus,
  props
}) {
  const [hidePassword, setHidePassword] = useState(isPassword);
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={styles.container}>
        <View>
          <TextInput 
              autoCorrect={false}
              onFocus={()=> {
                onFocus();
                setIsFocused(true)
              }}
              onBlur={() => setIsFocused(false)}
              style={[styles.input, error && styles.validText]} 
              autoCapitalize='none'
              keyboardType={keyboardType}
              placeholder={placeholder}
              placeholderTextColor= "rgba(255, 255, 255, 0.60)"
              secureTextEntry = {hidePassword}
              onChangeText={onUpdateValue}
              // value={value}
              {...props}
          />
          {isPassword && 
            <Ionicons 
                name={hidePassword ? 'eye-outline' : 'eye-off-outline'} 
                size={24} 
                color='#ccc'   
                style={styles.eyePass} 
                onPress={() => setHidePassword(!hidePassword)}
            /> 
          }
        </View>
          {error && <Text style={{marginTop: 7, marginLeft: 6, color: '#fcdcbf', fontSize: 12}}>
              {error}
          </Text>}
    </View>
  )
}

export default Input;
const styles = StyleSheet.create({
    container: {
      marginHorizontal: 30,
      width: '80%'
    },
    input: {
      borderWidth: 1,
      borderColor: '#ddd',
      paddingHorizontal: 18,
      paddingVertical: 18,
      borderRadius: 24,
      fontFamily: 'montserrat',
      fontSize: 12,  
      color: 'white',
    }, 
    eyePass: {
      position: 'absolute',
      top: 11,
      right: 16,
      padding: 10,
      zIndex: 999
    },
    validText: {
      borderColor: '#fcdcbf',
      color: '#f37c13'
    }
})