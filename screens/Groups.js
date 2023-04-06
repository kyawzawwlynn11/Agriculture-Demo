import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View,Image, ScrollView } from 'react-native';

export default function Groups() {
  return (
    <View style={styles.container}>
      <View style={{marginTop:20,marginLeft:20,flexDirection:'row'}}>
        <TouchableOpacity style={styles.btn}>
          <Text>မိမိအဖွဲ့</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn,{marginLeft:20,width:180,backgroundColor:'#609966'}]}>
          <Text style={{color:'white'}}>ပါ၀င်နိင်သည့်အဖွဲ့များ</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={{marginTop:20}}>
        <View style={{marginTop:30}}>
          <TouchableOpacity style={styles.btnView}>
            <View style={{elevation:20,shadowColor:'#3E54AC',backgroundColor:'white',width:71,height:71,borderRadius:100}}> 
              <Image source={require('../assets/8.jpg')} style={{width:70,height:70,borderRadius:100}}/>
            </View>
            <View style={{marginLeft:20}}>
              <Text style={{fontWeight:'bold'}}>စိုက်မွေးအတွေ့အကြုံမျှ၀ေရာ</Text>
              <Text style={{color:'gray',marginTop:3}}>အများဆိုင်အဖွဲ့</Text>
              <Text style={{color:'#19A7CE',marginTop:3}}>run by Greenovator</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btnView,{marginTop:15}]}>
            <View style={{elevation:20,shadowColor:'#3E54AC',backgroundColor:'white',width:71,height:71,borderRadius:100}}> 
              <Image source={require('../assets/fish.jpg')} style={{width:70,height:70,borderRadius:100}}/>
            </View>
            <View style={{marginLeft:20}}>
              <Text style={{fontWeight:'bold'}}>ငါးမွေးတောင်သူများအဖွဲ့</Text>
              <Text style={{color:'gray',marginTop:3}}>အများဆိုင်အဖွဲ့</Text>
              <Text style={{color:'#19A7CE',marginTop:3}}>run by WorldFish</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btnView,{marginTop:15 }]}>
            <View style={{elevation:20,shadowColor:'#3E54AC',backgroundColor:'white',width:71,height:71,borderRadius:100}}> 
              <Image source={require('../assets/farmShop.jpg')} style={{width:70,height:70,borderRadius:100}}/>
            </View>
            <View style={{marginLeft:20}}>
              <Text style={{fontWeight:'bold'}}>Market Place by FARM SHOP</Text>
              <Text style={{color:'gray',marginTop:3}}>အများဆိုင်အဖွဲ့</Text>
              <Text style={{color:'#19A7CE',marginTop:3}}>run by FARM SHOP</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btnView,{marginTop:15 }]}>
            <View style={{elevation:20,shadowColor:'#3E54AC',backgroundColor:'white',width:71,height:71,borderRadius:100}}> 
              <Image source={require('../assets/plants.jpg')} style={{width:70,height:70,borderRadius:100}}/>
            </View>
            <View style={{marginLeft:20}}>
              <Text style={{fontWeight:'bold'}}>မြေသြဇာကိုယ်တိုင်ပြုလုပ်သုံးစွဲသူများ</Text>
              <Text style={{color:'gray',marginTop:3}}>အများဆိုင်အဖွဲ့</Text>
              <Text style={{color:'#19A7CE',marginTop:3}}>run by Greenovator gp</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btnView,{marginTop:15 }]}>
            <View style={{elevation:20,shadowColor:'#3E54AC',backgroundColor:'white',width:71,height:71,borderRadius:100}}> 
              <Image source={require('../assets/girl.jpg')} style={{width:70,height:70,borderRadius:100}}/>
            </View>
            <View style={{marginLeft:20}}>
              <Text style={{fontWeight:'bold'}}>နှီးနှောဖလှယ်တောင်သူမယ်</Text>
              <Text style={{color:'gray',marginTop:3}}>သီးသန့်အဖွဲ့</Text>
              <Text style={{color:'#19A7CE',marginTop:3}}>run by အမျိုးသမီးတောင်သူများ</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btnView,{marginTop:15 }]}>
            <View style={{elevation:20,shadowColor:'#3E54AC',backgroundColor:'white',width:71,height:71,borderRadius:100}}> 
              <Image source={require('../assets/girlTeam.jpg')} style={{width:70,height:70,borderRadius:100}}/>
            </View>
            <View style={{marginLeft:20}}>
              <Text style={{fontWeight:'bold'}}>အမျိုးသမီးတောင်သူများအဖွဲ့</Text>
              <Text style={{color:'gray',marginTop:3}}>သီးသန့်အဖွဲ့</Text>
              <Text style={{color:'#19A7CE',marginTop:3}}>run by အမျိုးသမီးတောင်သူများ</Text>
            </View>
        </TouchableOpacity>
        
        </View>
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDF2F6',
  },
  btn:{
    width:100,
    height:50,
    borderWidth:1,
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
    elevation:10,
    
  },
  btnView:{
    flexDirection:'row',
    width:'90%',
    height:100,
    marginLeft:20,
    
  },
 
});
