import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Fontisto';
import Icon3 from 'react-native-vector-icons/Entypo';
import { RadioButton } from 'react-native-paper';

export default function ToDoQRCode() {

  const [checked,setChecked]=useState('မြေပုံနှင့်အတိအကျဖော်ပြမည်')

  return (
    <View style={styles.container}>
        <TouchableOpacity style={[styles.Btn,{flexDirection:'row',height:'10%',marginTop:50}]}>
          <View style={{flexDirection:'column'}}>
            <Text style={[styles.text,{fontSize:14,fontWeight:'normal'}]}>လယ်ကွက်အမည်</Text>
            <Text style={[styles.text,{fontSize:18,fontWeight:'500',marginTop:10}]}>အလယ်တော</Text>
          </View>
          <Icon name='caretright' size={16} style={{marginLeft:'55%'}}/>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.Btn,{flexDirection:'row',height:'10%'}]}>
          <View style={{flexDirection:'column'}}>
            <Text style={[styles.text,{fontSize:14,fontWeight:'normal'}]}>စိုက်ပျိုးရာသီ</Text>
            <Text style={[styles.text,{fontSize:18,fontWeight:'500',marginTop:10}]}>ဆောင်းရာသီ (ကြက်သွန်နီ)</Text>
          </View>
          <Icon name='caretdown' size={16} style={{marginLeft:'25%'}}/>
        </TouchableOpacity>

        <Text style={{marginTop:'10%',fontWeight:'bold'}}>စိုက်ခင်းတည်နေရာ</Text>
        <View style={{marginTop:'3%',width:'95%',backgroundColor:'#4CD195',height:'20%',borderRadius:5,borderColor:'#2D3747',borderWidth:1}}>
          <View style={{flexDirection:'row',marginTop:12, justifyContent: 'space-between'}}>
              <Text style={[styles.text,{color:'white',fontSize:16}]}>မြေပုံနှင့်အတိအကျဖော်ပြမည်</Text>
              <RadioButton
                color='black'
                value='မြေပုံနှင့်အတိအကျဖော်ပြမည်'
                status={checked==='မြေပုံနှင့်အတိအကျဖော်ပြမည်'?'checked':'unchecked'}
                onPress={()=>setChecked('မြေပုံနှင့်အတိအကျဖော်ပြမည်')}
                style={styles.radioBtn}
              />
          </View>
          <View style={{flexDirection:'row',marginTop:12, justifyContent: 'space-between'}}>
            <Text style={[styles.text,{fontSize:16}]}>မြို့နယ်အဆင့်အထိပြမည်</Text>
            <RadioButton
                color='black'
                value='မြို့နယ်အဆင့်အထိပြမည်'
                status={checked==='မြို့နယ်အဆင့်အထိပြမည်'?'checked':'unchecked'}
                onPress={()=>setChecked('မြို့နယ်အဆင့်အထိပြမည်')}
                style={styles.radioBtn}
              />
          </View>
          <View style={{flexDirection:'row',marginTop:12, justifyContent: 'space-between'}}>
            <Text style={[styles.text,{fontSize:16}]}>ကျေးရွာအဆင့်အထိပြမည်</Text>
            <RadioButton
                color='black'
                value='ကျေးရွာအဆင့်အထိပြမည်'
                status={checked==='ကျေးရွာအဆင့်အထိပြမည်'?'checked':'unchecked'}
                onPress={()=>setChecked('ကျေးရွာအဆင့်အထိပြမည်')}
                style={styles.radioBtn}
              />
          </View>
        </View>
        <View style={{backgroundColor:'#4CD195',marginTop:15,borderRadius:5,borderColor:'#2D3747',borderWidth:1,height:'10%',width:'95%'}}>
            <Text style={[styles.text,{marginTop:5,fontSize:14,fontWeight:'100',color:'white'}]}>ဖုန်းနံပါတ်</Text>
            <View style={{flexDirection:'row'}}>
              <Text style={[styles.text,{marginLeft:30,marginTop:5,fontWeight:'400',fontSize:16,color:'white'}]}>09965810246</Text>
              <TouchableOpacity style={{marginLeft:'49%'}}>
                <Icon3 name='switch' size={30} />
              </TouchableOpacity>
            </View>
        </View>

        <View style={{backgroundColor:'#4CD195',marginTop:15,borderRadius:5,borderColor:'#2D3747',borderWidth:1,height:'10%',width:'95%'}}>
            <Text style={[styles.text,{marginTop:5,fontSize:14,fontWeight:'100'}]}>သွင်းအားစုပါ၀င်နှုန်းပြမည်</Text>
            <View style={{flexDirection:'row'}}>
              <Text style={[styles.text,{marginLeft:30,marginTop:5,fontWeight:'400',fontSize:16,color:'white'}]}>ဥပမာ - မြေပြုပြင်ခြင်း ပုလဲ(၁)အိတ်</Text>
              <TouchableOpacity style={{marginLeft:'7%'}}>
                <Icon3 name='switch' size={30} />
              </TouchableOpacity>
            </View>
        </View>

        <View style={{backgroundColor:'#4CD195',marginTop:15,borderRadius:5,borderColor:'#2D3747',borderWidth:1,height:'10%',width:'95%'}}>
            <Text style={[styles.text,{marginTop:5,fontSize:14,fontWeight:'100'}]}>အထွက်နှုန်းပမာဏပြမည်</Text>
            <View style={{flexDirection:'row'}}>
              <Text style={[styles.text,{marginLeft:30,marginTop:5,fontWeight:'400',fontSize:16,color:'white'}]}>ဥပမာ - (၈၀)တင်း</Text>
              <TouchableOpacity style={{marginLeft:'44%'}}>
                <Icon3 name='switch' size={30} />
              </TouchableOpacity>
            </View>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDF2F6',
    marginLeft:10,
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
  },
  text:{
    marginLeft:10,
    color:'white'
  },
  radioBtn:{
    marginLeft:20,
  }
});
