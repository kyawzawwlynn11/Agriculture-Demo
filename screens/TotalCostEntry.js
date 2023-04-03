import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity, TextInput,TouchableWithoutFeedback, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'

export default function TotalCostEntry() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
    <View style={styles.container}>
        <Text style={{marginTop:40,justifyContent:'flex-start'}}>ရက်စွဲ</Text>
        <TouchableOpacity style={styles.Btn}>
          <Text style={{marginLeft:10,color:'white'}}>ယနေ့ . ဖေဖော်၀ါရီ ၂၁၊ ၂၀၂၃</Text>
          <TouchableOpacity>
            <Icon name='left' size={20} style={{marginLeft:70}}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name='right' size={20}style={{marginLeft:20}}/>
          </TouchableOpacity>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.Btn,{height:'15%'}]}>
          <View style={{flexDirection:'column'}}>
            <Text style={{fontSize:12,fontWeight:'normal',marginLeft:10,color:'white'}}>ကုန်ကျသည့်အကြောင်းအရင်း</Text>
            <Text style={{fontSize:14,fontWeight:'500',marginLeft:10,marginTop:10,color:'white'}}>မြေသြဇာကျွေးခြင်း</Text>
          </View>
            <Icon name='caretdown' size={12} style={{marginLeft:130}}/>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.Btn,{height:'7%'}]}>
            <Icon name='plus' size={20} style={styles.icon}/> 
            <Text style={styles.text}>လုပ်အားခ/လူ/ကျွဲနွား/မိသားစု</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.Btn,{height:'7%'}]}>
            <Icon name='plus' size={20} style={styles.icon}/> 
            <Text style={styles.text}>စက်ပစ္စည်းအသုံးစရိတ်</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.Btn,{height:'7%'}]}>
            <Icon name='plus' size={20} style={styles.icon}/> 
            <Text style={styles.text}>သွင်းအားစု</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.Btn,{height:'10%',borderStyle:'dashed'}]}>
            <Icon name='camera' size={20} style={styles.icon}/> 
            <Text style={styles.text}>ဓာတ်ပုံမှတ်တမ်း</Text>
        </TouchableOpacity>
        <TextInput keyboardType='default' placeholder='မှတ်ချက်ရေးသားရန်' style={[styles.Btn,{height:'8%',backgroundColor:'#4CD195',color:'white',textAlign:'center'}]}/>
        <TouchableOpacity style={[styles.Btn,{height:'7%',marginTop:50 , backgroundColor:'#2D3747',borderColor:'gray',justifyContent:'center'}]}>
            <Text style={{color:'white'}}> သိမ်းမည် </Text>
        </TouchableOpacity>
        
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDF2F6',
    marginLeft:10,
  },
  text:{
    marginLeft:10,
    color:'white'
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
  icon :{
    //color:'#408E91',
    marginLeft:10,
  }

});
