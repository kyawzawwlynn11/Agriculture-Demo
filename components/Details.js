import { ImageBackground, StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;



const {COLORS, SIZES} = require('../constants/theme')

const Details = ({route, navigation}) => {
 
const contentList = [
  {name: 'မြေပြုပြင်ခြင်း', key: 1},
  {name: 'စိုက်ပျိုးခြင်း', key: 2},
  {name: 'ပျိုးထောင်ခြင်း',key: 3},
  {name: 'မြေဩဇာကျွေးခြင်း',key: 4}
];
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.firstsection} source={route.params.src}>
       <View style={{backgroundColor: 'black', width: width-40, height: 80, flexDirection: 'row'}}>
       <View style={{backgroundColor: 'black', height: '100%', width: '30%', justifyContent: 'center', alignItems: 'center'}}>
       <Image source ={route.params.src} style={{width: 60, height: 60, borderRadius: 100}}/>
       </View>
       <View style={{backgroundColor: 'black' , width: '70%', paddingHorizontal: 10,alignItems: 'flex-start'}}>
       <Text style={{color:'#fff', marginLeft: 10, marginTop: 10}}>{route.params.weather} . {route.params.type}</Text>
       <Text style={{color:'#fff'}}>   ကုန်ကျစရိတ်  {route.params.price}   ကျပ်</Text>
       </View>
       </View>
      </ImageBackground>
 
      <View style={styles.secondsection}>
        <View style={{backgroundColor: '#fff', height: '100%', width: '33%', alignItems:'center', justifyContent: 'center'}}>
         <Text>sss</Text>
         </View>
         <View style={{backgroundColor: '#fff', height: '100%', width: '33%', alignItems:'center', justifyContent: 'center'}}>
         <Text>sdsd</Text>
         </View>
         <View style={{backgroundColor: '#fff', height: '100%', width: '33%', alignItems:'center', justifyContent: 'center'}}>
         <Text>sdss</Text>
         </View>

      </View>
    
      <View style={styles.thirdsection}>
      <FlatList
      data={contentList}
      renderItem={({item}) => {
        return(
         <TouchableOpacity style={styles.contents}>
          <Text style={{fontSize: SIZES.h3 }}>{item.name}</Text>
          <AntDesign name="plus" size={24} color ={COLORS.green} style={{marginLeft: 20}} />
         </TouchableOpacity>
        );
      }}
      />
        
        </View>
   
      
    
    
      
      
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        backgroundColor: '#fff',
    },
    firstsection: {
      width: width,
       flex: 0.30,
       justifyContent: 'flex-end',
       alignItems:'center',
      
    },
    secondsection: {
        flex: 0.07,
        backgroundColor: COLORS.mainbackground,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        marginTop: 3
    },
    thirdsection: {
      flex: 0.63,
      backgroundColor: COLORS.mainbackground,
      alignItems: 'center',
      width: '100%'
     
    
    },
    contents: {
     height: 80,
     width: width-30,
     backgroundColor: '#fff',
     marginVertical: 5,
     justifyContent: 'space-between',
     alignItems: 'center',
     flexDirection: 'row',
     paddingHorizontal: 20,
     borderRadius: 10,
     elevation: 2

     
    }
})