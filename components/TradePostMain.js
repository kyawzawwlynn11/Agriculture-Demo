import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import Icon2 from 'react-native-vector-icons/FontAwesome'

export default function TradePostMain({navigation}){
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row',marginTop:'10%'}}>
          <TouchableOpacity style={styles.view}>
            <Text>အ၀ယ်ပိုစ့်</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.view}>
            <Text>အရောင်းပိုစ့်</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.view,{flexDirection:'row',justifyContent:'space-between',width:'35%'}]}>
            <Text>သီးနှံအားလုံး</Text>
            <Icon name='caretdown' size={12}/>
          </TouchableOpacity>
      </View>
      <View style={{borderRadius:5,width:'90%',height:'20%',marginLeft:'5%',marginTop:'6%',borderWidth:1,borderColor:'gray',elevation:1,shadowColor:'#E4DCCF'  }}>
        <View style={{flexDirection:'row',marginTop:6}}>
          <View style={{padding:10,backgroundColor:'#E4DCCF',borderWidth:1,marginLeft:15,marginTop:20,borderRadius:100,width:50,height:50,justifyContent:'center',alignContent:'center',alignItems:'center'}}>
            <Icon2 name='user' size={16}/>
          </View>
          <TouchableOpacity style={{padding:10,backgroundColor:'#AEC2B6',borderWidth:1,marginLeft:15,marginTop:20,borderRadius:100,width:235,height:50,justifyContent:'center',alignContent:'center',alignItems:'center'}}>
            <Text style={{marginLeft:10}}>ဒီနေရာမှာ မေးပါ၊ ရောင်းပါ။</Text>
          </TouchableOpacity>
          
        </View>
        <View style={{flexDirection:'row',marginTop:40,marginLeft:150,justifyContent:'space-between',width:150,height:40}}>
          <TouchableOpacity onPress={() => navigation.navigate('Sell')}>
            <Text style={{color:'green',fontWeight:'bold'}}>ရောင်းမယ်</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Buy')}>
            <Text style={{color:'green',fontWeight:'bold'}}>၀ယ်မယ်</Text>
          </TouchableOpacity>
          
        </View>
      </View>
    </View>

  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDF2F6',
  },
  view:{
    marginLeft:'5%',
    borderWidth:1,
    padding:7,
    borderRadius:20,
    textAlign:'center',
    alignItems:'center',
    justifyContent:'center',
    borderColor:'gray',
    backgroundColor:'#F9F5EB',
    
  }
})