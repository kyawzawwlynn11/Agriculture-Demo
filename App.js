import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Profile from './screens/Profile';
import Messages from './screens/Messages';
import SideMenu from './screens/Sidemenu'

export default function App() {

  const Drawer =  createDrawerNavigator();
  return (
   
      <NavigationContainer >
        <Drawer.Navigator drawerContent={props => <SideMenu {...props}/>} >
          <Drawer.Screen name='Profile' component={Profile} />
          <Drawer.Screen name='Messages' component={Messages} />
         
        </Drawer.Navigator>

      </NavigationContainer>
     
  );
}


