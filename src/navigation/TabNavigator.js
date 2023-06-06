import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { CartStackNavigator, MainStackNavigator, OrderStackNavigator, ProfileStackNavigator } from './StackNavigator'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator 
        initialRouteName='Home'
        screenOptions={{
        headerShown:false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
        tabBarStyle:{
            borderTopLeftRadius:40,
            borderTopRightRadius:40,
            overflow:"hidden",
            backgroundColor:"#fff",
            height:60
        }
    }}>
      <Tab.Screen name='Home'  component={MainStackNavigator} 
        options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name="home" size={size} color={color} />
            ),
          }}
      />
      <Tab.Screen name='Cart' component={CartStackNavigator} 
       options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialIcons name="shopping-cart" size={size} color={color} />
        ),
      }}
      />
      <Tab.Screen name='Order' component={OrderStackNavigator} 
       options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialIcons name="list-alt" size={size} color={color} />
        ),
      }}
      />
      <Tab.Screen name='Profile' component={ProfileStackNavigator} 
       options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialIcons name="account-circle" size={size} color={color} />
        ),
      }}
      />
    </Tab.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({})