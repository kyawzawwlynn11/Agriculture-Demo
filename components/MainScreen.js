import { StyleSheet, Text, View , Image, FlatList} from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';



const {COLORS, SIZES} = require('../constants/theme')
const MainScreen = ({navigation}) => {


const [menu, setMenu] = useState([
    {src: require('../assets/onion.jpg'),weather: 'ဆောင်းရာသီ', type : 'အလယ်တော', area: '၁ ဧက', price: '၁၇,၆၀၀၀', croptype: 'ကြက်သွန်နီ (ဘောင်စောက်)', key: 1},

    {src: require('../assets/farm1.jpeg'),weather: 'ဆောင်းရာသီ', type : 'အရှေ့တော', area: '၀.၃၄ ဧက',price: '၀',  key: 2},
    {src: require('../assets/farm2.jpeg'),weather: 'ဆောင်းရာသီ', type : 'ကန်ဘေး', area: '၀.၇၃ ဧက',price: '၀', key: 3},
    {src: require('../assets/farn3.jpeg'),weather: 'စိုက်ပျိုးရာသီ', type : 'အနောက်တော', area: '၀.၄၇ ဧက', price: '၀',key: 4},
    
    
]);

  return (
      <View style={styles.container}>
     <FlatList 
     data = {menu}
     renderItem = {({item}) => {
        return (
        
        <TouchableOpacity style={styles.contentContainer} onPress = {() => navigation.navigate('Details',{weather: item.weather, src: item.src, type: item.croptype, price: item.price})}>
        <View style={{width: '100%', backgroundColor:'#fff', height: '75%', flexDirection: 'row'}}>
          <View style={{backgroundColor: '#fff', width: 170, height: '85%', marginTop: 10, alignItems: 'center' , justifyContent: 'center'}}>
          <Image source = {item.src} style={{width: 150, height:120, resizeMode: 'cover'}}/>
        </View>
        <View style={{ backgroundColor: '#fff', width: '55%', height: '85%', marginTop: 10, alignItems: 'flex-start',padding: 30, gap: 9}}>
             <Text>{item.weather}</Text>
             <Text style={{fontSize: SIZES.h2 ,}}>{item.type}</Text>
             <Text>{item.area}</Text>
        </View>
        </View>
        
        <View style = {{backgroundColor: '#fff', height: '25%', flexDirection: 'row', width: '100%',}}>
            <View style={{backgroundColor: '#fff', flexDirection: 'row', height: '100%', width: '65%', alignItems: 'center'}}>
                <AntDesign name="plus" size={24} color ={COLORS.green} style={{marginLeft: 20}} />
                
                <Text style={{marginLeft: 10, color: COLORS.green}}>ကုန်ကျစရိတ်</Text>
            </View>
            <View style={{justifyContent: 'center', backgroundColor: '#fff', width: '35%', height: '100%'}}>
                <Text style={{marginLeft: 10, color: COLORS.green}}>{item.price} ကျပ်</Text>
            </View>
        </View>
           
            
        </TouchableOpacity>
    
        
        );
     }}     
     />
     </View>
      
  
  )
}

export default MainScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        backgroundColor: COLORS.mainbackground,
        
    },
    contentContainer: {
        backgroundColor: '#fff',
        height: 200,
        marginHorizontal: 15,
        padding: 2,
        marginTop: 10,
        borderRadius: 15,
        overflow: 'hidden',
        elevation: 2
        
    }
})