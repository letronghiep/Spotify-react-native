import 'expo-dev-client'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import {Provider, useDispatch} from 'react-redux'
import { useFonts } from 'expo-font';
import AppNavigation from './navigation/appNavigation';
import { store } from './features/store';


import WaitingScreen from './screens/WaitingScreen';

export default function App() {
  const [fontLoaded] = useFonts({
    'montserrat': require('./assets/fonts/Montserrat/static/Montserrat-Regular.ttf'),
    'montserrat-bold': require('./assets/fonts/Montserrat/static/Montserrat-SemiBold.ttf')
  })


  if(!fontLoaded) return <WaitingScreen />
  return (
    <>
      <StatusBar style='light' backgroundColor='auto' />
      <Provider store={store}>
        <AppNavigation />
      </Provider>
     
    </>
  );
}

const styles = StyleSheet.create({
  
});
