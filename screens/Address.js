import { FlatList, ImageBackground, StatusBar, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/theme'
import { Dimensions } from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Address = () => {


  return (
    
      <View  style={styles.container}>
         <TouchableOpacity style={styles.card}>
            <Image  source={require('../assets/group.jpeg')} style={styles.image}/>
            <Text>အဖွဲ့အစည်းများ</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
        <Image  source={require('../assets/departments.png')} style={styles.image}/>
            <Text>အစိုးရဌာနများ</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
        <Image  source={require('../assets/tractor.png')} style={styles.image}/>
            <Text>အငှားဝန်ဆောင်မှုများ</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
        <Image  source={require('../assets/location.png')} style={styles.image}/>
            <Text>သွင်းအားစုဆိုင်များ</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
        <Image  source={require('../assets/covid.jpg')} style={styles.image}/>
            <Text>COVID-19</Text>
            <Text>အကြောင်းကြားရန်</Text>
            <Text>ဖုန်းနံပါတ်များ</Text>
        </TouchableOpacity>

      <StatusBar/>
      </View>
   
  )
}

export default Address

const styles = StyleSheet.create({
    container :{
        width: width, 
        flex: 1,
        flexDirection: 'row',
        backgroundColor: COLORS.mainbackground,
        padding: 40,
        flexWrap: 'wrap',
        gap: 10
        

    },
    card: {
       width:160,
       height: 200,
       backgroundColor: '#fff',
       justifyContent: 'center',
       alignItems: 'center',
       borderRadius: 5,
       elevation: 3
       
    },
    image: {
        width: 90,
        height: 90,
        marginBottom: 10,
        borderRadius: 50,
        resizeMode: 'contain'
    }
})