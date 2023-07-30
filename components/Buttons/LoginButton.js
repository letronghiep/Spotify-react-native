import { Ionicons } from '@expo/vector-icons'
import {GestureResponderEvent, Pressable, StyleSheet, Text, View} from 'react-native'

function LoginButton({
  icon,
  size,
  color,
  children,
  textStyle,
  buttonStyle,
  disabled,
  onPress

}) {
  return (
    <Pressable style={({pressed}) => [styles.buttonContainer, buttonStyle, pressed && styles.pressed]} onPress={onPress} disabled={disabled} > 
      <View style={[styles.button, icon ? {justifyContent: 'flex-start'} : {justifyContent: 'center'}]}>
          {icon && <Ionicons name={icon} size={size} color={color} />}
          <Text style={[styles.text, textStyle]}>{children}</Text>
      </View>
    </Pressable>

  )
}

export default LoginButton;
const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: 10,
    paddingHorizontal: 26,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 999,
    width: '85%',
  },
  button: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: 16
  },
  pressed: {
    opacity: 0.85
  },
  text: {
    
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 24,
    fontFamily: 'montserrat',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
})