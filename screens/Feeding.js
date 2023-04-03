import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput, TouchableOpacity,TouchableWithoutFeedback,Keyboard ,Image} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';

export default function Feeding() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <TouchableOpacity  style={[styles.Btn,{marginTop:'15%',borderWidth:0,flexDirection:'row',backgroundColor:'#4CD195'}]}>
          <Icon name='search'size={20} style={{marginTop:'12%',marginLeft:20,height:'100%',width:'10%',borderWidth:0}}/>
          <TextInput placeholder='တိုက်ရိုက်ရှာဖွေရန်' style={[styles.Btn,{marginTop:0,height:'100%',width:'80%',borderWidth:0}]}/>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.Btn,{}]}>
          <Text style={[styles.text,{color:'black'}]}>ဓာတ်မြေသြဇာ</Text>
          <Icon2 name='caretdown' style={{marginLeft:'65%'}}/>
        </TouchableOpacity>

        <View style={{borderBottomWidth:1,marginTop:15,width:'95%',marginLeft:10}}/>
        
        <View style={{flexDirection:'row',height:'10%',width:'95%',marginTop:25,marginLeft:10}}>
          <View style={{height:'100%',width:'25%',alignItems:'center',justifyContent:'center'}}>
            <Image source={require('../assets/1.jpg')} style={{height:'100%',width:'100%'}}/>
            <Text>ပတ်ကား(၁)...</Text>
          </View>
         
          <View style={{height:'100%',width:'25%',alignItems:'center',justifyContent:'center'}}>
            <Image source={require('../assets/1.jpg')} style={{height:'100%',width:'100%'}}/>
            <Text>ပတ်ကား(၂)...</Text>
          </View>

          <View style={{height:'100%',width:'25%',alignItems:'center',justifyContent:'center'}}>
            <Image source={require('../assets/1.jpg')} style={{height:'100%',width:'100%'}}/>
            <Text>ပတ်ကား(၃)...</Text>
          </View>

          <View style={{height:'100%',width:'25%',alignItems:'center',justifyContent:'center'}}>
            <Image source={require('../assets/1.jpg')} style={{height:'100%',width:'100%'}}/>
            <Text>ပတ်ကား(၄)...</Text>
          </View>
          
        </View>

        <View style={{flexDirection:'row',height:'10%',width:'95%',marginTop:25,marginLeft:10}}>
          <View style={{height:'100%',width:'25%',alignItems:'center',justifyContent:'center'}}>
            <Image source={require('../assets/2.jpg')} style={{height:'100%',width:'100%'}}/>
            <Text>အာမို(၁)...</Text>
          </View>
         
          <View style={{height:'100%',width:'25%',alignItems:'center',justifyContent:'center'}}>
            <Image source={require('../assets/2.jpg')} style={{height:'100%',width:'100%'}}/>
            <Text>အာမို(၂)...</Text>
          </View>

          <View style={{height:'100%',width:'25%',alignItems:'center',justifyContent:'center'}}>
            <Image source={require('../assets/2.jpg')} style={{height:'100%',width:'100%'}}/>
            <Text>အာမို(၃)...</Text>
          </View>

          <View style={{height:'100%',width:'25%',alignItems:'center',justifyContent:'center'}}>
            <Image source={require('../assets/2.jpg')} style={{height:'100%',width:'100%'}}/>
            <Text>အာမို(၄)...</Text>
          </View>
          
        </View>

        <View style={{flexDirection:'row',height:'10%',width:'95%',marginTop:25,marginLeft:10}}>
          <View style={{height:'100%',width:'25%',alignItems:'center',justifyContent:'center'}}>
            <Image source={require('../assets/3.jpg')} style={{height:'100%',width:'100%'}}/>
            <Text>မော်နီတာ(၁)...</Text>
          </View>
         
          <View style={{height:'100%',width:'25%',alignItems:'center',justifyContent:'center'}}>
            <Image source={require('../assets/3.jpg')} style={{height:'100%',width:'100%'}}/>
            <Text>မော်နီတာ(၂)...</Text>
          </View>

          <View style={{height:'100%',width:'25%',alignItems:'center',justifyContent:'center'}}>
            <Image source={require('../assets/3.jpg')} style={{height:'100%',width:'100%'}}/>
            <Text>မော်နီတာ(၃)...</Text>
          </View>

          <View style={{height:'100%',width:'25%',alignItems:'center',justifyContent:'center'}}>
            <Image source={require('../assets/3.jpg')} style={{height:'100%',width:'100%'}}/>
            <Text>မော်နီတာ(၄)...</Text>
          </View>
          
        </View>

        <View style={{flexDirection:'row',height:'10%',width:'95%',marginTop:25,marginLeft:10}}>
          <View style={{height:'100%',width:'25%',alignItems:'center',justifyContent:'center'}}>
            <Image source={require('../assets/4.png')} style={{height:'100%',width:'100%'}}/>
            <Text>ကောမက်(၁)...</Text>
          </View>
         
          <View style={{height:'100%',width:'25%',alignItems:'center',justifyContent:'center'}}>
            <Image source={require('../assets/4.png')} style={{height:'100%',width:'100%'}}/>
            <Text>ကောမက်(၂)...</Text>
          </View>

          <View style={{height:'100%',width:'25%',alignItems:'center',justifyContent:'center'}}>
            <Image source={require('../assets/4.png')} style={{height:'100%',width:'100%'}}/>
            <Text>ကောမက်(၃)...</Text>
          </View>

          <View style={{height:'100%',width:'25%',alignItems:'center',justifyContent:'center'}}>
            <Image source={require('../assets/4.png')} style={{height:'100%',width:'100%'}}/>
            <Text>ကောမက်(၄)...</Text>
          </View>
          
        </View>

        <View style={{flexDirection:'row',height:'10%',width:'95%',marginTop:25,marginLeft:10}}>
          <View style={{height:'100%',width:'25%',alignItems:'center',justifyContent:'center'}}>
            <Image source={require('../assets/5.jpg')} style={{height:'100%',width:'100%'}}/>
            <Text>၀ိစာရ(၁)...</Text>
          </View>
         
          <View style={{height:'100%',width:'25%',alignItems:'center',justifyContent:'center'}}>
            <Image source={require('../assets/5.jpg')} style={{height:'100%',width:'100%'}}/>
            <Text>၀ိစာရ(၂)...</Text>
          </View>

          <View style={{height:'100%',width:'25%',alignItems:'center',justifyContent:'center'}}>
            <Image source={require('../assets/5.jpg')} style={{height:'100%',width:'100%'}}/>
            <Text>၀ိစာရ(၃)...</Text>
          </View>

          <View style={{height:'100%',width:'25%',alignItems:'center',justifyContent:'center'}}>
            <Image source={require('../assets/5.jpg')} style={{height:'100%',width:'100%'}}/>
            <Text>၀ိစာရ(၄)...</Text>
          </View>
          
        </View>
       

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
    justifyContent:'center',
    marginTop:15,
    backgroundColor:'#4CD195',
    borderColor:'#2D3747',
    marginLeft:10,
  },
  text:{
    marginLeft:10,
    color:'white'
  },
  //ak first commit
});
