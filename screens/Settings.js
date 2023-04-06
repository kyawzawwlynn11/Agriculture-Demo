import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/theme'
import { Entypo } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Settings = ({navigation}) => {

    const contents = [
    {name: 'ကိုယ်ရေးအချက်အလက်ပြင်ရန်', icon: <Ionicons name="person" size={26} color= '#17938b'/>, key: 1},
    {name: 'အသိပေးချက် ပြင်ဆင်ရန်', icon: <Ionicons name="notifications-outline" size={26} color="#17938b" />, key: 2},
    {name: 'သူငယ်ချင်းများ ဖိတ်ခေါ်ရန်', icon: <Ionicons name="person-add" size={26} color="#17938b" />, key: 3},
    {name: 'ဘလော့ထားသူများစာရင်း', icon: <Ionicons name="person-remove" size={26} color="#17938b" />, key: 4},
    {name: 'Application အကြောင်း', icon: <FontAwesome5 name="clipboard-list" size={26} color="#17938b" />, key: 5},
    {name: 'ဆက်သွယ်ရန်', icon: <Feather name="phone-call" size={26} color="#17938b" />, key: 6},
    {name: 'မေးခွန်းမေးနည်း', icon: <Feather name="message-square" size={26} color="#17938b" />, key: 7},
    {name: 'ထွက်မည်', icon: <FontAwesome name="sign-out" size={26} color="#ec9006" />, key: 8},
    ];
   
    
  return (
    <View style={styles.container}>
       <View style={styles.firstsection}>
        <TouchableOpacity>
       <Entypo name="cross" size={32} color="#2D3747"  onPress={()=> navigation.openDrawer()}/>
       </TouchableOpacity>
       </View>

       <View style={styles.secondsection}>
          <FlatList 
          data={contents}
          renderItem={({item}) => {
            return (
            <TouchableOpacity style={styles.content}>
                {item.icon}
                <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>
            );
          }}
          />
       </View>

       <View style={styles.thirdsection}>
             <TouchableOpacity  style={styles.content}>
             <MaterialIcons name="delete-forever" size={26} color="red" />
                <Text style={styles.text}>အကောင့်အပြီးဖျက်သိမ်းမည်</Text>
            </TouchableOpacity>
       </View>
       <StatusBar/>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: COLORS.mainbackground,
    },
    firstsection: {
        flex: 0.10,
        backgroundColor: COLORS.mainbackground,
        justifyContent: 'center',
        alignItems: 'flex-end',
        width: width- 15,
        alignSelf: 'center'
    },
    secondsection:{
        flex: 0.80,
        backgroundColor: COLORS.mainbackground,
        width: width- 15,
        alignSelf: 'center',
    
    },
    thirdsection: {
        flex:0.10,
        backgroundColor: COLORS.mainbackground ,
        width: width- 15,
        alignSelf: 'center'
    },
    content:{
    
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 25,
        margin: 2,
        alignItems: 'center',
        borderRadius: 10,
    },
    text:{
        marginLeft: 40
    }
})