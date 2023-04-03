import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Feeding from './screens/Feeding';
import GreenHistory from './screens/GreenHistory';
import Rating from './screens/Rating';
import SeasonClose from './screens/SeasonClose';

const {COLORS} = require('./constants/theme')

import SideMenu from './screens/Sidemenu'
import ToDoQRCode from './screens/ToDoQRCode';
import TotalCostEntry from './screens/TotalCostEntry';


export default function App() {

  const Drawer =  createDrawerNavigator();
  return (
   
      <NavigationContainer >
        <Drawer.Navigator drawerContent={props => <SideMenu {...props} navigationOptions={{header: null}} />}>
          <Drawer.Screen name='အစိမ်းရောင်မှတ်တမ်း' 
          component={GreenHistory } 
          options={{
            headerShown: true,
            drawerType: 'front',
            headerTitleAlign: 'center',
            headerStyle: {
             backgroundColor: COLORS.green,
            },
            headerTintColor: 'white',
            
          }}
            
          />
          <Drawer.Screen 
          name = 'သွင်းအားစုတွက်ချက်ရန်'
          component={TotalCostEntry}
          options ={{
            headerShown: false
          }}
          />
          
          <Drawer.Screen 
          name = 'ပြင်ဆင်ချက်များ'
          component={ToDoQRCode}
          options ={{
            headerShown: false
          }}
          />

          <Drawer.Screen
          name= 'ဝယ်ယူမှုမှတ်တမ်း'
          component={Feeding}
          options ={{
            headerShown: false
          }}
          />

          <Drawer.Screen
          name= 'သင့်အဖွဲ့အစည်းများ'
          component={Rating}
          options ={{
            headerShown: false
          }}
          />
         
         <Drawer.Screen
          name= 'အသုံးဝင်သောလိပ်စာများ'
          component={SeasonClose}
          options ={{
            headerShown: false
          }}
          />
        </Drawer.Navigator>

      </NavigationContainer>
     
  );
}


