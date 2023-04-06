import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TradePostMain from '../components/TradePostMain';
import Buy from '../components/Buy';
import Sell from '../components/Sell';

const TradePost = () => {

    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName='Main'>
        <Stack.Screen name='Main' component={TradePostMain} options={{headerShown: false}}/>
        <Stack.Screen name='Buy' component={Buy} options={{headerShown: false}}/>
        <Stack.Screen name='Sell' component={Sell} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}

export default TradePost

