import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import { useState } from 'react';
import { RadioButton } from 'react-native-paper';

export default function SeasonClose() {
  const [checked,setChecked]=useState('ရိတ်သိမ်းပီးစီး')
  return (
    <View style={styles.container}>
     <Text style={{marginTop:60,marginLeft:15}}>ရာသီပိတ်သိမ်းခြင်းအကြောင်းအရင်း</Text>
     <View style={styles.Btn}>
     <RadioButton
                color='black'
                value='ရိတ်သိမ်းပီးစီး'
                status={checked==='ရိတ်သိမ်းပီးစီး'?'checked':'unchecked'}
                onPress={()=>setChecked('ရိတ်သိမ်းပီးစီး')}
                style={styles.radioBtn}
              />
      <Text style={{marginLeft:10,color:'white'}}>ရိတ်သိမ်းပီးစီး</Text>
     </View>

     <View style={styles.Btn}>
     <RadioButton
                color='black'
                value='ပိုး/ရောဂါကျရောက်'
                status={checked==='ပိုး/ရောဂါကျရောက်'?'checked':'unchecked'}
                onPress={()=>setChecked('ပိုး/ရောဂါကျရောက်')}
                style={styles.radioBtn}
              />
      <Text style={{marginLeft:10,color:'white'}}>ပိုး/ရောဂါကျရောက်</Text>
     </View>

     <View style={styles.Btn}>
     <RadioButton
                color='black'
                value='အခြား'
                status={checked==='အခြား'?'checked':'unchecked'}
                onPress={()=>setChecked('အခြား')}
                style={styles.radioBtn}
              />
      <Text style={{marginLeft:10,color:'white'}}>အခြား</Text>
     </View>

     <View style={styles.Btn}>
     <RadioButton
                color='black'
                value='သဘာ၀ဘေးအန္တရာယ်'
                status={checked==='သဘာ၀ဘေးအန္တရာယ်'?'checked':'unchecked'}
                onPress={()=>setChecked('သဘာ၀ဘေးအန္တရာယ်')}
                style={styles.radioBtn}
              />
      <Text style={{marginLeft:10,color:'white'}}>သဘာ၀ဘေးအန္တရာယ်</Text>
     </View>

     <View style={styles.Btn}>
      <RadioButton
                color='black'
                value='တိရိစ္ဆာန်ဖျက်ဆီး'
                status={checked==='တိရိစ္ဆာန်ဖျက်ဆီး'?'checked':'unchecked'}
                onPress={()=>setChecked('တိရိစ္ဆာန်ဖျက်ဆီး')}
                style={styles.radioBtn}
              />
      <Text style={{marginLeft:10,color:'white'}}>တိရိစ္ဆာန်ဖျက်ဆီး</Text>
     </View>

     <TouchableOpacity style={[styles.Btn,{backgroundColor:'#2D3747',justifyContent:'center',marginTop:'60%'}]}>
      <Text style={{marginLeft:10,color:'white'}}>ပိတ်သိမ်းမည်</Text>
     </TouchableOpacity>

    </View>
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
