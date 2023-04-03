import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Fontisto';
import Icon3 from 'react-native-vector-icons/Entypo';

export default function ToDoQRCode() {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={[styles.Btn,{flexDirection:'row',height:'13%',marginTop:50}]}>
          <View style={{flexDirection:'column'}}>
            <Text style={[styles.text,{fontSize:14,fontWeight:'normal'}]}>လယ်ကွက်အမည်</Text>
            <Text style={[styles.text,{fontSize:18,fontWeight:'500',marginTop:10}]}>အလယ်တော</Text>
          </View>
          <Icon name='caretright' size={16} style={{marginLeft:'55%'}}/>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.Btn,{flexDirection:'row',height:'13%'}]}>
          <View style={{flexDirection:'column'}}>
            <Text style={[styles.text,{fontSize:14,fontWeight:'normal'}]}>စိုက်ပျိုးရာသီ</Text>
            <Text style={[styles.text,{fontSize:18,fontWeight:'500',marginTop:10}]}>ဆောင်းရာသီ (ကြက်သွန်နီ)</Text>
          </View>
          <Icon name='caretdown' size={16} style={{marginLeft:'25%'}}/>
        </TouchableOpacity>

        <Text style={{marginTop:15}}>စိုက်ခင်းတည်နေရာ</Text>
        <View style={{width:'95%',backgroundColor:'#4CD195',height:'20%',borderRadius:5,borderColor:'#2D3747',borderWidth:1}}>
          <TouchableOpacity style={{flexDirection:'row',marginTop:15}}>
            <Text style={[styles.text,{color:'black'}]}>မြေပုံနှင့်အတိအကျဖော်ပြမည်</Text>
            <Icon2 name='radio-btn-active' size={18} style={{marginLeft:'34%'}}/>
          </TouchableOpacity>
          <TouchableOpacity style={{flexDirection:'row',marginTop:15}}>
            <Text style={styles.text}>မြို့နယ်အဆင့်အထိပြမည်</Text>
            <Icon2 name='radio-btn-passive' size={18} style={{marginLeft:'41%'}}/>
          </TouchableOpacity>
          <TouchableOpacity style={{flexDirection:'row',marginTop:15}}>
            <Text style={styles.text}>ကျေးရွာအဆင့်အထိပြမည်</Text>
            <Icon2 name='radio-btn-passive' size={18} style={{marginLeft:'39.5%'}}/>
          </TouchableOpacity>
        </View>
        <View style={{backgroundColor:'#4CD195',marginTop:15,borderRadius:5,borderColor:'#2D3747',borderWidth:1,height:'10%',width:'95%'}}>
            <Text style={[styles.text,{marginTop:5,fontSize:14,fontWeight:'100'}]}>ဖုန်းနံပါတ်</Text>
            <View style={{flexDirection:'row'}}>
              <Text style={[styles.text,{marginLeft:30,marginTop:5,fontWeight:'400',fontSize:16,color:'black'}]}>09965810246</Text>
              <TouchableOpacity style={{marginLeft:'49%'}}>
                <Icon3 name='switch' size={30} />
              </TouchableOpacity>
            </View>
        </View>

        <View style={{backgroundColor:'#4CD195',marginTop:15,borderRadius:5,borderColor:'#2D3747',borderWidth:1,height:'10%',width:'95%'}}>
            <Text style={[styles.text,{marginTop:5,fontSize:14,fontWeight:'100'}]}>သွင်းအားစုပါ၀င်နှုန်းပြမည်</Text>
            <View style={{flexDirection:'row'}}>
              <Text style={[styles.text,{marginLeft:30,marginTop:5,fontWeight:'400',fontSize:16,color:'black'}]}>ဥပမာ - မြေပြုပြင်ခြင်း ပုလဲ(၁)အိတ်</Text>
              <TouchableOpacity style={{marginLeft:'7%'}}>
                <Icon3 name='switch' size={30} />
              </TouchableOpacity>
            </View>
        </View>

        <View style={{backgroundColor:'#4CD195',marginTop:15,borderRadius:5,borderColor:'#2D3747',borderWidth:1,height:'10%',width:'95%'}}>
            <Text style={[styles.text,{marginTop:5,fontSize:14,fontWeight:'100'}]}>အထွက်နှုန်းပမာဏပြမည်</Text>
            <View style={{flexDirection:'row'}}>
              <Text style={[styles.text,{marginLeft:30,marginTop:5,fontWeight:'400',fontSize:16,color:'black'}]}>ဥပမာ - (၈၀)တင်း</Text>
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
});
