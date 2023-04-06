import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity, TextInput,TouchableWithoutFeedback,Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import Icon2 from 'react-native-vector-icons/FontAwesome'
import Icon3 from 'react-native-vector-icons/Entypo'


export default function Sell() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
          <View style={{flexDirection:'row',marginTop:20,marginLeft:10}}>
              <View style={{padding:10,backgroundColor:'orange',borderWidth:1,marginLeft:15,marginTop:20,borderRadius:100,width:50,height:50,justifyContent:'center',alignContent:'center',alignItems:'center',elevation:10}}>
                <Icon2 name='user' size={16}/>
              </View>
              <TouchableOpacity style={{flexDirection:'row',padding:10,backgroundColor:'white',borderWidth:1,marginLeft:15,marginTop:20,borderRadius:20,width:100,height:50,justifyContent:'center',alignContent:'center',alignItems:'center',elevation:10}}>
                <Text style={{color:'green'}}>အရောင်း</Text>
                <Icon name='caretdown' size={12} color={'green'} style={{marginLeft:10}}/>
              </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row',marginTop:20,marginLeft:20}}>
              <TouchableOpacity style={{flexDirection:'row',borderWidth:1,borderRadius:20,justifyContent:'center',alignItems:'center',height:50,width:170,backgroundColor:'#EEEEEE',elevation:10}}>
                <Text>သီးနှံအမျိုးအစား</Text>
                <Icon name='caretdown' size={12} style={{marginLeft:10}}/>
              </TouchableOpacity>
              <TouchableOpacity style={{flexDirection:'row',borderWidth:1,borderRadius:20,justifyContent:'center',alignItems:'center',height:50,width:90,backgroundColor:'#EEEEEE',elevation:10,marginLeft:20}}>
                <Text>ယူနစ်</Text>
                <Icon name='caretdown' size={12} style={{marginLeft:10}}/>
              </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row',marginTop:15,marginLeft:20}}>
            <TextInput placeholder='နှုန်း            0.0ကျပ်' keyboardType='numeric' style={{paddingLeft:15,borderWidth:1,width:155,height:50,borderRadius:10}}/>
            <TextInput placeholder='ဖုန်း   0978965432' keyboardType='numeric' style={{marginLeft:15,paddingLeft:15,borderWidth:1,width:155,height:50,borderRadius:10}}/> 
          </View>
         
          <View style={{flexDirection:'row',marginTop:15,marginLeft:20,borderWidth:1,width:'90%',height:'50%',borderRadius:10}}>
            <TextInput placeholder='Add more about your product.' multiline={true} keyboardType='default' style={{paddingLeft:15,paddingBottom:300}}/> 
          </View>
          <View style={{flexDirection:'row',marginTop:15,marginLeft:20}}>
            <TouchableOpacity  style={{flexDirection:'row',borderWidth:1,borderRadius:20,justifyContent:'center',alignItems:'center',height:50,width:120,backgroundColor:'#EEEEEE',elevation:10,backgroundColor:'#BEF0CB'}}>
              <Icon3 name='image-inverted' size={20}/>
              <Text style={{marginLeft:10}}>ပုံယူ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:10,flexDirection:'row',borderWidth:1,borderRadius:20,justifyContent:'center',alignItems:'center',height:50,width:120,backgroundColor:'#EEEEEE',elevation:10,backgroundColor:'#BEF0CB'}}>
              <Icon name='camera' size={20}/>
              <Text style={{marginLeft:10}}>ပုံရိုက်</Text>
            </TouchableOpacity>
            
          </View>
        </View>
    </TouchableWithoutFeedback>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDF2F6',
  },
  view:{
    marginLeft:'5%',
    marginTop:20,
    borderWidth:1,
    padding:'7%',
    borderRadius:20,
    textAlign:'center',
    alignItems:'center',
    justifyContent:'center',
    borderColor:'gray',
    backgroundColor:'#F9F5EB',
    
  }
});
