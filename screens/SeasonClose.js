import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

export default function SeasonClose() {
  return (
    <View style={styles.container}>
     <Text style={{marginTop:60,marginLeft:15}}>ရာသီပိတ်သိမ်းခြင်းအကြောင်းအရင်း</Text>
     <TouchableOpacity style={styles.Btn}>
      <Icon name='radio-btn-active' size={14} style={{marginLeft:10}}/>
      <Text style={{marginLeft:10,color:'white'}}>ရိတ်သိမ်းပီးစီး</Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.Btn}>
      <Icon name='radio-btn-passive' size={14} style={{marginLeft:10}}/>
      <Text style={{marginLeft:10,color:'white'}}>ပိုး/ရောဂါကျရောက်</Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.Btn}>
      <Icon name='radio-btn-passive' size={14} style={{marginLeft:10}}/>
      <Text style={{marginLeft:10,color:'white'}}>အခြား</Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.Btn}>
      <Icon name='radio-btn-passive' size={14} style={{marginLeft:10}}/>
      <Text style={{marginLeft:10,color:'white'}}>သဘာ၀ဘေးအန္တရာယ်</Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.Btn}>
      <Icon name='radio-btn-passive' size={14} style={{marginLeft:10}}/>
      <Text style={{marginLeft:10,color:'white'}}>တိရိစ္ဆာန်ဖျက်ဆီး</Text>
     </TouchableOpacity>

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
