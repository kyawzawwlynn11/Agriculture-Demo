import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View,TouchableWithoutFeedback,Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Fontisto';

export default function Rating() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <Text style={{marginTop:50,marginLeft:15}}>သီးနှံအထွက်နှုန်း</Text>
      <View style={[styles.Btn,{backgroundColor:'#EDF2F6',borderWidth:0}]}>
        <TextInput placeholder='အထွက်နှုန်း' style={{color:'white', borderColor:'#2D3747',alignItems:'center',justifyContent:'center', width:'74%',height:'100%', borderWidth:1, borderRadius:5, backgroundColor:'#4CD195',}}/>
        <TouchableOpacity style={[styles.Btn,{flexDirection:'row',width:'23%',height:'100%',marginTop:0,marginLeft:10}]}>
          <Text style={styles.text}>ယူနစ်</Text>
          <Icon name='caretdown' size={14} style={{marginLeft:10}}/>
        </TouchableOpacity>
      </View>
        <Text style={{marginTop:10,marginLeft:15}}>သီးနှံအရည်အသွေးရွေးချယ်ပါ</Text>
        <TouchableOpacity style={[styles.Btn,{marginTop:5}]}>
          <Icon2 name='radio-btn-passive' size={14} style={{marginLeft:10}}/>
          <Text style={{marginLeft:10,color:'white'}}>အရည်အသွေးကောင်း</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Btn}>
          <Icon2 name='radio-btn-active' size={14} style={{marginLeft:10}}/>
          <Text style={{marginLeft:10,color:'black'}}>အသင့်တင့်</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Btn}>
          <Icon2 name='radio-btn-passive' size={14} style={{marginLeft:10}}/>
          <Text style={{marginLeft:10,color:'white'}}>အရည်အသွေးညံ့</Text>
        </TouchableOpacity>

        <TextInput placeholder='ခန့်မှန်းပေါက်စျေး' keyboardType='numeric' style={{color:'white', borderColor:'#2D3747',alignItems:'center',justifyContent:'center', marginTop:15,marginLeft:10,width:'95%',height:'8%', borderWidth:1, borderRadius:5, backgroundColor:'#4CD195',}}/>

        <View style={[styles.Btn,{backgroundColor:'#EDF2F6',borderWidth:0}]}>
        <TouchableOpacity style={[styles.Btn,{width:'48.5%',height:'100%',marginTop:0,marginLeft:0}]}>
          <Icon2 name='radio-btn-passive' size={14} style={{marginLeft:10}}/>
          <Text style={{marginLeft:10,color:'white'}}>ရောင်းပြီး</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.Btn,{width:'48.5%',height:'100%',height:'100%',marginTop:0}]}>
          <Icon2 name='radio-btn-active' size={14} style={{marginLeft:10}}/>
          <Text style={{marginLeft:10,color:'black'}}>မရောင်းရသေး</Text>
        </TouchableOpacity>
        </View>

        <TextInput placeholder='မှတ်ချက်' keyboardType='default' style={{color:'white', borderColor:'#2D3747',alignItems:'center',justifyContent:'center', marginTop:15,marginLeft:10,width:'95%',height:'8%', borderWidth:1, borderRadius:5, backgroundColor:'#4CD195',}}/>

        <TouchableOpacity style={[styles.Btn,{backgroundColor:'#2D3747',alignItems:'center',justifyContent:'center',marginTop:'17%'}]}>
          <Text style={{color:'white'}}>သိမ်းမည်</Text>
        </TouchableOpacity>

      </View>
     
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDF2F6',
  },
  Btn:{
    borderWidth:1,
    width:'95%',
    height:'8%',
    borderRadius:5,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
    marginTop:15,
    backgroundColor:'#4CD195',
    borderColor:'#2D3747',
    marginLeft:10,
  },
  text:{
    marginLeft:10,
    color:'white'
  },
  
});
