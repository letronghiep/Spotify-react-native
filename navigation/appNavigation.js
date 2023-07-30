import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StartedScreen from '../screens/StartedScreen';
import ContinueScreen from '../screens/ContinueScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import PlaylistScreen from '../screens/PlaylistScreen';
import { AntDesign, FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProfileScreen from '../screens/ProfileScreen';
const AppStack = createNativeStackNavigator();
const Tab =  createBottomTabNavigator();
const Stack = createStackNavigator()



const StartedNavigation = () => {
  return (
      <Stack.Navigator>
          <Stack.Screen name='StatedScreen' component={StartedScreen} options={{
            headerShown: false,
          }}  />
          <Stack.Screen name='ContinueScreen' component={ContinueScreen} />
          <Stack.Screen name='LoginScreen' component={LoginScreen} options={{
            headerShown: false
          }} />
      </Stack.Navigator>
  )
}

const HomeNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarStyle: {backgroundColor: '#333'},
    }}>
      <Tab.Screen name='HomeScreen' component={HomeScreen} options={{
        headerShown: false,
        
        tabBarLabel: 'Home',
        tabBarLabelStyle: {color: 'white'},
        tabBarIcon: ({color, focused}) => focused ? <Ionicons name='home' size={24} color="green" /> : <Ionicons name='home-outline' size={24} color={color} />
      }}/>
      <Tab.Screen name='PlaylistScreen' component={PlaylistScreen} options={{
        headerShown: false,
        tabBarLabel: 'white',
        tabBarLabel: 'Playlist',
        tabBarIcon: ({color, focused}) => focused ? <MaterialCommunityIcons name='playlist-music' size={24} color='green' /> : <MaterialCommunityIcons name='playlist-music-outline' size={24} color='white' />
      }}/>
      <Tab.Screen name='ProfileScreen' component={ProfileScreen} options={{
        headerShown: false,
       
        tabBarLabel: 'Profile',
        tabBarLabelStyle: {color: 'white'},
        tabBarIcon: ({focused}) => focused ? <FontAwesome name='user' size={24} color='green' /> :  <FontAwesome name='user-o' size={22} color='white' />
      }}/>
    </Tab.Navigator>
  )
}

const AppNavigation = () => {
  const [accessToken, setAccessToken] = useState('');
  useEffect(()=> {
    const checkToken = async () => {
      const access_token = await AsyncStorage.getItem('token');
      setAccessToken(access_token);
    }
    checkToken();
  }, [accessToken])
  console.log('====================================');
  console.log("Acc", accessToken);
  console.log('====================================');
  return (
      <NavigationContainer>
            <AppStack.Navigator>
        
            <AppStack.Screen name='StartedNavigation' component={StartedNavigation} options={{
                headerShown: false,
                contentStyle: {backgroundColor: '#000'}
              }} 

            />
              <AppStack.Screen name='HomeNavigation' component={HomeNavigation} initialParams={{id: "home"}} options={{
                headerShown: false
              }} 

              /> 
           
    
             
            </AppStack.Navigator>
      </NavigationContainer>
  )
}

export default AppNavigation
