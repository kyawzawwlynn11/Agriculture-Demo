import { StatusBar, StyleSheet, Text, View, Image, TextInput , TouchableOpacity} from 'react-native';
import React from 'react';
import { Dimensions } from 'react-native';
import { COLORS } from '../constants/theme';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Suggestion = () => {
  return (
    <View style={styles.container}>
      <View style={styles.firstsection}>
         <View style={{flex: 0.5, width:width, backgroundColor: COLORS.mainbackground, justifyContent:'center', alignItems: 'center', padding: 10}}>
           <Image 
           source={require('../assets/suggestions.png')}
           style={{
            resizeMode: 'contain',
            width: 70,
            height: 70,
            borderRadius: 50
           }}
           
           />
            
         </View>
         <View style={{flex:0.5, width: width-20, backgroundColor: COLORS.mainbackground, paddingHorizontal:10, alignSelf: 'center', padding: 10}}>
           <Text style={{fontSize: 17}}>သင်၏ အကြံပြုချက်များသည် အခြားတောင်သူ များ/အသုံးပြုသူများ အတွက်လည်း အကျိုးပြု နိုင်ပါသည်။</Text>
         </View>
        
      </View>
      <View style={styles.secondsection}> 
           <TextInput
           style={styles.textinput}
            placeholder='အကြံပြုချက်အားရိုက်ထည့်ပါ'
            
           />
           <TouchableOpacity style={styles.button}>
            <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>ပို့မည်</Text>
          </TouchableOpacity>
        </View>
      
      <StatusBar/>
    </View>
  )
}

export default Suggestion

const styles = StyleSheet.create({
     container: {
        flex: 1,
        width: width,
        backgroundColor: COLORS.mainbackground
     },
     firstsection: {
        width: width,
        flex: 0.25,
        backgroundColor: COLORS.mainbackground,
     },
     secondsection:{
        width: width,
        flex: 0.75,
        backgroundColor: COLORS.mainbackground,
     } ,
     textinput:{
      width: width-25,
       backgroundColor: '#faf9f6',
       paddingLeft: 30,
       alignSelf: 'center',
       height: '18%',
       marginTop: 20, 
       borderRadius: 5,
       elevation: 2
       
      


     },
     button:{
     backgroundColor:COLORS.green,
     width: width-25,
     height: '8%',
     alignSelf: 'center',
     marginTop: 40,
     borderRadius: 5,
     justifyContent: 'center',
     alignItems: 'center',
     elevation: 5
     }
})