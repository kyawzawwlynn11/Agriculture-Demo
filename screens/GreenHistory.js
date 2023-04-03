import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainScreen from '../components/MainScreen'
import Details from '../components/Details'

const GreenHistory = ({navigation}) => {
  const Stack = createNativeStackNavigator();
  return (
    
      <Stack.Navigator initialRouteName='Main' screenOptions={{ headerShown: true}} >
      <Stack.Screen 
      name =  'Main' 
      component={MainScreen}
      options={{
        headerShown: false
      }}
      />
      <Stack.Screen 
      name= 'Details'
      component={Details}
      options={{
         headerShown: false
      }}
    
      />
      </Stack.Navigator>

    
  )
}

export default GreenHistory

const styles = StyleSheet.create({})