import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React, {useState} from 'react'
import { COLORS, FONTWEIGHT, SIZES } from '../constants/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Sidemenu = ({navigation}) => {

contentsList = [
  {title:"အစိမ်းရောင်မှတ်တမ်း", icon:<Image source={require('../assets/leaflogo.png')} style={{width: 50, height:50, borderRadius: 100}}/>,key : 1},
  {title:"သွင်းအားစုတွက်ချက်ရန်", icon:<Image source={require('../assets/calculatoricon.png')} style={{width: 50, height:50, borderRadius: 100,}}/>,key : 2},
  {title:"ဝယ်ယူမှုမှတ်တမ်း", icon:<Image source={require('../assets/shoppingcarticon.jpeg')} style={{width: 50, height:50, borderRadius: 100,}}/>,key : 3},
  {title:"သင့်အဖွဲ့အစည်းများ", icon:<Image source={require('../assets/group.jpeg')} style={{width: 50, height:50, borderRadius: 100,}}/>,key : 4},
  {title:"အသုံးဝင်သောလိပ်စာများ", icon:<Image source={require('../assets/addressicon.jpg')} style={{width: 50, height:50, borderRadius: 100,}}/>,key : 5},
  {title:"စိတ်ကြိုက်ပို့စ်များ", icon:<Image source={require('../assets/saveicon.jpg')} style={{width: 50, height:50, borderRadius: 100,}}/>,key : 6},
  {title:"ကိုယ်ပိုင် မေးခွန်းများ", icon:<Image source={require('../assets/questions.png')} style={{width: 50, height:50, borderRadius: 100,}}/>,key : 7},
  {title:"အကြံပြုရန်", icon:<Image source={require('../assets/suggestions.png')} style={{width: 50, height:50, borderRadius: 100,}}/>,key : 8},
  {title:"ကိုယ်ပိုင် ရောင်းဝယ်ပို့စ်", icon:<Image source={require('../assets/tradeicon.png')} style={{width: 50, height:50, borderRadius: 100,}}/>,key : 9},
]


bottomList = [
  {title: 'ပြင်ဆင်ချက်များ' , icon: <Image source={require('../assets/settingicon.png')} style={{width: 35, height:35, borderRadius: 100, marginTop: 5}}/>, key: 10 }
];
  const [selectedId, setSelectedId] = useState(null);

  const pressHandler = (key,item) => {
       setSelectedId(key);
       console.log(item)
      navigation.navigate(item)
  }


  return (
    <View style = {styles.container}>
      <View style = {styles.topsection}>
        <View style={{flexDirection: 'row'}}>
        <Image 
           source = {require('../assets/profile.png')}
           style= {styles.profile}
        />
      <View>
        <Text style={{fontSize: SIZES.h2, fontWeight: FONTWEIGHT.bold, marginLeft: 15, marginTop: 10, color: COLORS.secondary}}>Daw Nwe Aye</Text>
        <Text style={{fontSize: SIZES.h5, fontWeight: 'normal', marginLeft: 15, marginTop: 2, color: COLORS.secondary}}>တောင်သူလယ်သမား-စစ်ကိုင်းတိုင်း</Text>
      </View>
      </View>
      <TouchableOpacity style = {{width: '98%', height: 35,backgroundColor: '#c5d3f7', justifyContent: 'center', alignItems: 'center', marginTop: 12, alignSelf: 'center', elevation: 10}} onPress={() => navigation.navigate('Profile Details')}>
        <Text style = {{color: '#00a7e7', fontSize: SIZES.h4, fontWeight: 'bold'}}> ကိုယ်ရေး အချက်အလက် သို့</Text>
      </TouchableOpacity>
      </View>
      <View style = {styles.midsection}>
      <FlatList 
      data= {contentsList}
      renderItem={({item}) => {
        return (
          <TouchableOpacity  key = {item.key}style = {[styles.content, selectedId === item.key && {backgroundColor:COLORS.lightPurple}]} onPress = {()=>pressHandler(item.key, item.title)}>
            {item.icon}
            <Text style = {[{marginLeft: 20, fontSize: SIZES.h4, marginTop: 17}, selectedId === item.key && {color: COLORS.primary}]}>{item.title}</Text>
          </TouchableOpacity>
        );
      }}
      />
      </View>
      <View style = {styles.bottomsection}>
      <FlatList 
      data= {bottomList}
      renderItem={({item}) => {
        return (
          <TouchableOpacity  key = {item.key} style = {[styles.bottomcontent, selectedId === item.key && {backgroundColor:COLORS.lightPurple}]} onPress={()=>pressHandler(item.key, item.title)}>
            <Text style = {[{marginLeft: 20, fontSize: SIZES.h3, marginTop: 9 }, selectedId === item.key && {color: COLORS.primary}]}>{item.title}</Text>
            {item.icon}
            
          </TouchableOpacity>
        );
      }}
      />
      </View>
    </View>
  )
}

export default Sidemenu

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  topsection: {
    flex: 0.15,
    backgroundColor: COLORS.mainbackground,
    paddingTop: 50,
    paddingHorizontal: 10,
    paddingVertical: 29
    
  },
  midsection: {
    flex: 0.75,
    backgroundColor: COLORS.mainbackground,
   

  },
  bottomsection: {
    flex: 0.10,
    backgroundColor: COLORS.mainbackground
  },
  profile: {
    width: 70,
    height: 75,
    borderRadius: 100
  },
  content: {
    backgroundColor: '#faf9f6',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 7,
    width: '95%',
    alignSelf: 'center',
    borderRadius: 12,

    
  },
  bottomcontent: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingVertical: 14,
    paddingHorizontal: 20,
    
    gap: 70
  }

})