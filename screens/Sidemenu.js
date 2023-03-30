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
  {title:"Profile", icon:<MaterialCommunityIcons name="human-greeting-variant" size={28} color="black" />,key : 1},
  {title:"Messages", icon:<MaterialCommunityIcons name="android-messages" size={28} color="black" />, key: 2},
  {title: "Activity", icon:<Feather name="activity" size={28} color="black" />, key: 3},
  {title: "Lists", icon:<Feather name="list" size={28} color="black" />, key: 4},
  {title: 'Reports', icon:<AntDesign name="profile" size={28} color="black" />, key:5},
  {title: "Statistics", icon:<Ionicons name="stats-chart-outline" size={28} color="black" />, key:6},
  {title: "Sign Out", icon:<Octicons name="sign-out" size={28} color="black" />,key:7}
];

bottomList = [
  {title: "Tell a friend", icon:<AntDesign name="sharealt" size={28} color="black" />,key:8},
  {title: "Help and feeback", icon:<Feather name="help-circle" size={28} color="black" />, key: 9 }
];
  const [selectedId, setSelectedId] = useState(null);

  const pressHandler = (key, title) => {
       setSelectedId(key);
       navigation.navigate(title)
       console.log(selectedId)
  }


  return (
    <View style = {styles.container}>
      <View style = {styles.topsection}>
        <Image 
           source = {require('../assets/profile.jpeg')}
           style= {styles.profile}
        />
      <Text style={{fontWeight: FONTWEIGHT.bold, fontSize: SIZES.h1, marginTop: 20, color: '#311D3F'}}>Suzan</Text>
      <Text style={{ fontSize: SIZES.h3, marginTop: 5, color:'#311D3F'}}>3032 Followers</Text>
      
      </View>
      <View style = {styles.midsection}>
      <FlatList 
      data= {contentsList}
      renderItem={({item}) => {
        return (
          <TouchableOpacity  key = {item.key}style = {[styles.content, selectedId === item.key && {backgroundColor:COLORS.lightPurple}]} onPress = {()=>pressHandler(item.key, item.title)}>
            {item.icon}
            <Text style = {[{marginLeft: 20, fontSize: SIZES.h3, marginTop: 5}, selectedId === item.key && {color: COLORS.primary}]}>{item.title}</Text>
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
          <TouchableOpacity  key = {item.key} style = {[styles.bottomcontent, selectedId === item.key && {backgroundColor:COLORS.lightPurple}]} onPress={()=>pressHandler(item.key)}>
            {item.icon}
            <Text style = {[{marginLeft: 20, fontSize: SIZES.h3, marginTop: 5}, selectedId === item.key && {color: COLORS.primary}]}>{item.title}</Text>
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
    flex: 0.25,
    backgroundColor: COLORS.primary,
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingVertical: 29
  },
  midsection: {
    flex: 0.65,
    backgroundColor: COLORS.white,
   

  },
  bottomsection: {
    flex: 0.2,
    backgroundColor: COLORS.white
  },
  profile: {
    width: 100,
    height: 100,
    borderRadius: 100
  },
  content: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginVertical: 1
    
  },
  bottomcontent: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingVertical: 14,
    paddingHorizontal: 20,
    marginVertical: 1
    
  }

})