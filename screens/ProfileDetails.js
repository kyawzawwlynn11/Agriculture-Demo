import { StyleSheet, Text, View , ScrollView, Image, StatusBar} from 'react-native'
import React from 'react'
import { COLORS } from '../constants/theme'
import { Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const ProfileDetails = ({navigation}) => {



  return (
    <View style={styles.container}>
    
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('အစိမ်းရောင်မှတ်တမ်း')}>
      <Ionicons name="arrow-back-sharp" size={28} color="black" />
      </TouchableOpacity>
      </View>
      <View style={styles.firstsection}>
          <Image
          style={{width: 120, height: 120, borderRadius: 100}}
          source={require('../assets/profile.png')}
          />
          <Text>Daw Nwe Aye</Text>
          <Text>တောင်သူလယ်သမား</Text>
      </View>
      <ScrollView style={styles.secondsection}>
          <View style={{backgroundColor: "#faf9f6", width: width-20,height: 250, alignSelf: 'center', marginTop: 20,}}>
             <View style={{backgroundColor: "#fff", width: '100%', height: '15%', flexDirection: 'row',alignItems: 'center'}}>
            <View style={{backgroundColor: "#fff", width: '80%', height: '100%', flexDirection: 'row', gap : 20, paddingLeft: 25 ,alignItems: 'center'}}>
              <Ionicons name="person" size={24} color="black" />
              <Text>အခြေခံအချက်အလက်များ</Text>
            </View>
             <Text style={{color: COLORS.green}}>ပြန်ပြင်</Text>
            
             </View>
             <View style={styles.contentContainer}>
               <View style={{backgroundColor: "#fff",padding: 12, width: '80%', gap: 3}}>
                 <Text style={{fontWeight: 'bold'}}>09123123</Text>
                 <Text>ဖုန်းနံပါတ်</Text>
               </View>
               <View style={{backgroundColor: "#fff", width: '20%', justifyContent: 'center', alignItems: 'flex-start', paddingLeft: 10}}>
               <AntDesign name="eyeo" size={25} color="black" />
               </View>
               
             </View>
             <View style={styles.contentContainer}>
             <View style={{backgroundColor: "#fff",padding: 14, width: '80%', gap: 3}}>
                 <Text style={{fontWeight: 'bold'}}>မ</Text>
                 <Text>ကျား/မ</Text>
               </View>
               <View style={{backgroundColor: "#fff", width: '20%', justifyContent: 'center', alignItems: 'flex-start',paddingLeft: 10}}>
               <FontAwesome name="edit" size={25} color="black" />
               </View>

             </View>
             <View style={styles.contentContainer}>
             <View style={{backgroundColor: "#fff",padding: 14, width: '80%', gap: 3}}>
                 <Text style={{fontWeight: 'bold'}}>၄၃</Text>
                 <Text>အသက်</Text>
               </View>
               <View style={{backgroundColor: "#fff", width: '20%', justifyContent: 'center', alignItems: 'flex-start',paddingLeft: 10}}>
               <FontAwesome name="edit" size={25} color="black" />
               </View>

             </View>
             
             
          </View>

          <View style={{backgroundColor: "#faf9f6", width: width-20,height: 250, alignSelf: 'center', marginTop: 20,}}>
             <View style={{backgroundColor: "#fff", width: '100%', height: '15%', flexDirection: 'row',alignItems: 'center'}}>
            <View style={{backgroundColor: "#fff", width: '80%', height: '100%', flexDirection: 'row', gap : 20, paddingLeft: 25 ,alignItems: 'center'}}>
            <Ionicons name="location-outline" size={25} color="black" />
              <Text>နေရပ်လိပ်စာ</Text>
            </View>
             <Text style={{color: COLORS.green}}>ပြန်ပြင်</Text>
            
             </View>
             <View style={styles.contentContainer}>
               <View style={{backgroundColor: "#fff",padding: 14, width: '80%', gap: 3}}>
                 <Text style={{fontWeight: 'bold'}}>စစ်ကိုင်းတိုင်း</Text>
                 <Text>လိပ်စာ</Text>
               </View>
               <View style={{backgroundColor: "#fff", width: '20%', justifyContent: 'center', alignItems: 'flex-start', paddingLeft: 10}}>
               <FontAwesome name="edit" size={25} color="black" />
               </View>
               
             </View>
             <View style={styles.contentContainer}>
             <View style={{backgroundColor: "#fff",padding: 14, width: '80%', gap: 3}}>
                 
                 <Text>ထပ်ထည့်ရန်</Text>
               </View>
               <View style={{backgroundColor: "#fff", width: '20%', justifyContent: 'center', alignItems: 'flex-start',paddingLeft: 10}}>
               <AntDesign name="plus" size={25} color="black" />
               </View>

             </View>
             <View style={styles.contentContainer}>
             <View style={{backgroundColor: "#fff",padding: 14, width: '80%', gap: 3}}>

                 <Text>ထပ်ထည့်ရန်</Text>
               </View>
               <View style={{backgroundColor: "#fff", width: '20%', justifyContent: 'center', alignItems: 'flex-start',paddingLeft: 10}}>
               <AntDesign name="plus" size={25} color="black" />
               </View>

             </View>
             
             
          </View>

          <View style={{backgroundColor: "#faf9f6", width: width-20,height: 250, alignSelf: 'center', marginTop: 20,}}>
             <View style={{backgroundColor: "#fff", width: '100%', height: '15%', flexDirection: 'row',alignItems: 'center'}}>
            <View style={{backgroundColor: "#fff", width: '80%', height: '100%', flexDirection: 'row', gap : 20, paddingLeft: 25 ,alignItems: 'center'}}>
            <MaterialIcons name="work-outline" size={25} color="black" />
              <Text>အလုပ်အကိုင်</Text>
            </View>
             <Text style={{color: COLORS.green}}>ပြန်ပြင်</Text>
            
             </View>
             <View style={styles.contentContainer}>
               <View style={{backgroundColor: "#fff",padding: 14, width: '80%', gap: 3}}>
                 <Text style={{fontWeight: 'bold'}}>တောင်သူလယ်သမား</Text>
                 <Text>လက်ရှိအလုပ်အကိုင်</Text>
               </View>
               <View style={{backgroundColor: "#fff", width: '20%', justifyContent: 'center', alignItems: 'flex-start', paddingLeft: 10}}>
               <FontAwesome name="edit" size={25} color="black" />
               </View>
               
             </View>
             <View style={styles.contentContainer}>
             <View style={{backgroundColor: "#fff",padding: 14, width: '80%', gap: 3}}>
                
                 <Text>ထပ်ထည့်ရန်</Text>
               </View>
               <View style={{backgroundColor: "#fff", width: '20%', justifyContent: 'center', alignItems: 'flex-start',paddingLeft: 10}}>
               <AntDesign name="plus" size={25} color="black" />
               </View>

             </View>
             <View style={styles.contentContainer}>
             <View style={{backgroundColor: "#fff",padding: 14, width: '80%', gap: 3}}>
                
                 <Text>ထပ်ထည့်ရန်</Text>
               </View>
               <View style={{backgroundColor: "#fff", width: '20%', justifyContent: 'center', alignItems: 'flex-start',paddingLeft: 10}}>
               <AntDesign name="plus" size={25} color="black" />
               </View>

             </View>
             
             
          </View>

          <View style={{backgroundColor: "#faf9f6", width: width-20,height: 250, alignSelf: 'center', marginTop: 20,}}>
             <View style={{backgroundColor: "#fff", width: '100%', height: '15%', flexDirection: 'row',alignItems: 'center'}}>
            <View style={{backgroundColor: "#fff", width: '80%', height: '100%', flexDirection: 'row', gap : 20, paddingLeft: 25 ,alignItems: 'center'}}>
            <MaterialCommunityIcons name="palm-tree" size={25} color="black" />
              <Text>စိုက်ပျိုးသီးနှံများ</Text>
            </View>
             <Text style={{color: COLORS.green}}>ပြန်ပြင်</Text>
            
             </View>
             <View style={styles.contentContainer}>
               <View style={{backgroundColor: "#fff",padding: 14, width: '80%', gap: 3}}>
                 <Text style={{fontWeight: 'bold'}}>ကြက်သွန်နီ</Text>
                 <Text>ဘောင်စောက်</Text>
               </View>
               <View style={{backgroundColor: "#fff", width: '20%', justifyContent: 'center', alignItems: 'flex-start', paddingLeft: 10}}>
               <FontAwesome name="edit" size={25} color="black" />
               </View>
               
             </View>
             <View style={styles.contentContainer}>
             <View style={{backgroundColor: "#fff",padding: 14, width: '80%', gap: 3}}>
                 
                 <Text>ထပ်ထည့်ရန်</Text>
               </View>
               <View style={{backgroundColor: "#fff", width: '20%', justifyContent: 'center', alignItems: 'flex-start',paddingLeft: 10}}>
               <AntDesign name="plus" size={25} color="black" />
               </View>

             </View>
             <View style={styles.contentContainer}>
             <View style={{backgroundColor: "#fff",padding: 14, width: '80%', gap: 3}}>
                 
                 <Text>ထပ်ထည့်ရန်</Text>
               </View>
               <View style={{backgroundColor: "#fff", width: '20%', justifyContent: 'center', alignItems: 'flex-start',paddingLeft: 10}}>
               <AntDesign name="plus" size={25} color="black" />
               </View>

             </View>
             
             
          </View>


          <View style={{backgroundColor: "#faf9f6", width: width-20,height: 100, alignSelf: 'center', marginTop: 20,}}>
             <View style={{backgroundColor: "#fff", width: '100%', height: '55%', flexDirection: 'row',alignItems: 'center'}}>
            <View style={{backgroundColor: "#fff", width: '80%', height: '100%', flexDirection: 'row', gap : 20, paddingLeft: 25 ,alignItems: 'center'}}>
            <MaterialCommunityIcons name="cow" size={25} color="black" />
              <Text>မွေးမြူရေး</Text>
            </View>
             <Text style={{color: COLORS.green}}>ပြန်ပြင်</Text>
             
             </View>
             
             
          </View>


        

          
      </ScrollView>
     <StatusBar/>
    </View>
  )
}

export default ProfileDetails

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:COLORS.mainbackground,
    },
    header:{
        height: 50,
        backgroundColor: COLORS.mainbackground,
        width: width,
        justifyContent: 'center',
        
    },
    firstsection:{
        width: width-20,
        height: 200,
        backgroundColor: COLORS.mainbackground,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
        alignSelf: 'center'
    },
    secondsection:{
        
        backgroundColor: COLORS.mainbackground,
        width: width,
    },
    contentContainer:{
         width: '100%',
         backgroundColor: 'yellow',
         height: '26%',
         marginVertical: 3,
         flexDirection: 'row'
         
    }
})