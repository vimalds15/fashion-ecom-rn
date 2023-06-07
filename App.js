import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/navigation/TabNavigator';
import { useState } from 'react';
import {AuthProvider} from './src/features/authContext';


export default function App() {
  const [isLoggedIn,setIsLoggedIn]=useState(false)
  const [currentUser,setCurrentUser]=useState(null)

  return (
    <AuthProvider value={{isLoggedIn,setIsLoggedIn,currentUser,setCurrentUser}}>
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
    </AuthProvider>
  );
}


