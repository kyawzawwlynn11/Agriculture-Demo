import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View,TouchableWithoutFeedback,Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Fontisto';
import { useState } from 'react';
import { RadioButton } from 'react-native-paper';

export default function Rating() {

  const [checked,setChecked]=useState('အရည်အသွေးကောင်း')
  const [checked2,setChecked2]=useState('မရောင်းရသေး')
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <Text style={{marginTop:50,marginLeft:15}}>သီးနှံအထွက်နှုန်း</Text>
      <View style={[styles.Btn,{backgroundColor:'#EDF2F6',borderWidth:0}]}>
        <TextInput placeholderTextColor={'white'} placeholder='အထွက်နှုန်း' style={{paddingLeft:15,color:'white', borderColor:'#2D3747',width:'74%',height:'100%', borderWidth:1, borderRadius:5, backgroundColor:'#4CD195'}}/>
        <TouchableOpacity style={[styles.Btn,{flexDirection:'row',width:'23%',height:'100%',marginTop:0,marginLeft:10}]}>
          <Text style={styles.text}>ယူနစ်</Text>
          <Icon name='caretdown' size={14} style={{marginLeft:10}}/>
        </TouchableOpacity>
      </View>
        <Text style={{marginTop:10,marginLeft:15}}>သီးနှံအရည်အသွေးရွေးချယ်ပါ</Text>
        <View style={[styles.Btn,{marginTop:5,}]}>
              <RadioButton
                color='black'
                value='အရည်အသွေးကောင်း'
                status={checked==='အရည်အသွေးကောင်း'?'checked':'unchecked'}
                onPress={()=>setChecked('အရည်အသွေးကောင်း')}
              />
            <Text style={{marginLeft:10,color:'white'}}>အရည်အသွေးကောင်း</Text>
        </View>

        <View style={[styles.Btn,{}]}>
            <RadioButton
                color='black'
                value='အသင့်တင့်'
                status={checked==='အသင့်တင့်'?'checked':'unchecked'}
                onPress={()=>setChecked('အသင့်တင့်')}
              />
          <Text style={{marginLeft:10,color:'white'}}>အသင့်တင့်</Text>
        </View>

        <View style={[styles.Btn,{}]}>
            <RadioButton
                color='black'
                value='အရည်အသွေးညံ့'
                status={checked==='အရည်အသွေးညံ့'?'checked':'unchecked'}
                onPress={()=>setChecked('အရည်အသွေးညံ့')}
              />
          <Text style={{marginLeft:10,color:'white'}}>အရည်အသွေးညံ့</Text>
        </View>

        <TextInput placeholderTextColor={'white'} placeholder='ခန့်မှန်းပေါက်စျေး' keyboardType='numeric' style={{paddingLeft:15,color:'white', borderColor:'#2D3747',alignItems:'center',justifyContent:'center', marginTop:15,marginLeft:10,width:'95%',height:'8%', borderWidth:1, borderRadius:5, backgroundColor:'#4CD195',}}/>

        <View style={[styles.Btn,{backgroundColor:'#EDF2F6',borderWidth:0}]}>
        <TouchableOpacity style={[styles.Btn,{width:'48.5%',height:'100%',marginTop:0,marginLeft:0}]}>
            <RadioButton
                color='black'
                value='ရောင်းပြီး'
                status={checked2==='ရောင်းပြီး'?'checked':'unchecked'}
                onPress={()=>setChecked2('ရောင်းပြီး')}
              />
          <Text style={{marginLeft:10,color:'white'}}>ရောင်းပြီး</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.Btn,{width:'48.5%',height:'100%',height:'100%',marginTop:0}]}>
            <RadioButton
                color='black'
                value='မရောင်းရသေး'
                status={checked2==='မရောင်းရသေး'?'checked':'unchecked'}
                onPress={()=>setChecked2('မရောင်းရသေး')}
              />
          <Text style={{marginLeft:10,color:'white'}}>မရောင်းရသေး</Text>
        </TouchableOpacity>
        </View>

        <TextInput placeholderTextColor={'white'} placeholder='မှတ်ချက်' keyboardType='default' style={{color:'white', borderColor:'#2D3747',alignItems:'center',justifyContent:'center', marginTop:15,marginLeft:10,width:'95%',height:'8%', borderWidth:1, borderRadius:5, backgroundColor:'#4CD195', paddingLeft:15}}/>

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
