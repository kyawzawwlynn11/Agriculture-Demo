import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Feeding from './screens/Feeding';
import GreenHistory from './screens/GreenHistory';
import ProfileDetails from './screens/ProfileDetails';
import Questions from './screens/Questions';
import Rating from './screens/Rating';
import SavedPosts from './screens/SavedPosts';
import SeasonClose from './screens/SeasonClose';
import TradePost from './screens/TradePost';

const {COLORS} = require('./constants/theme')

import SideMenu from './screens/Sidemenu'
import Suggestion from './screens/Suggestion';
import ToDoQRCode from './screens/ToDoQRCode';
import TotalCostEntry from './screens/TotalCostEntry';
import Address from './screens/Address';
import Settings from './screens/Settings';
import Groups from './screens/Groups';


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
          name = 'ပြင်ဆင်ချက်များ'
          component={Settings}
          options ={{
            headerShown: false
          }}
          />

          <Drawer.Screen
          name= 'ဝယ်ယူမှုမှတ်တမ်း'
          component={Feeding}
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
          name= 'သင့်အဖွဲ့အစည်းများ'
          component={Groups}
          options ={{
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
          name= 'အကြံပြုရန်'
          component={Suggestion}
          options ={{
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
          name= 'ကိုယ်ပိုင် မေးခွန်းများ'
          component={Questions}
          options ={{
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
          name= 'စိတ်ကြိုက်ပို့စ်များ'
          component={SavedPosts}
          options ={{
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
          name= 'Profile Details'
          component={ProfileDetails}
          options ={{
            headerShown: false,
            drawerType: 'front',
            headerTitleAlign: 'center',
            headerStyle: {
             backgroundColor: COLORS.green,
            },
            headerTintColor: 'white',
          }}
          />

           <Drawer.Screen
          name= 'အသုံးဝင်သောလိပ်စာများ'
          component={Address}
          options ={{
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
          name= "ကိုယ်ပိုင် ရောင်းဝယ်ပို့စ်"
          component={TradePost}
          options ={{
            headerShown: true,
            drawerType: 'front',
            headerTitleAlign: 'center',
            headerStyle: {
             backgroundColor: COLORS.green,
            },
            headerTintColor: 'white',
          }}
          />

         
        </Drawer.Navigator>

      </NavigationContainer>
     
  );
}


