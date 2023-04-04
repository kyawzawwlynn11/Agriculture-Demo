import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput, TouchableOpacity,TouchableWithoutFeedback,Keyboard ,Image,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';

export default function Feeding() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <TouchableOpacity  style={[styles.Btn,{marginTop:'15%',borderWidth:0,flexDirection:'row',backgroundColor:'#4CD195'}]}>
          <Icon name='search'size={20} color={'white'} style={[{marginTop:'12%',marginLeft:20,height:'100%',width:'10%',borderWidth:0}]}/>
          <TextInput placeholderTextColor={'white'} placeholder='တိုက်ရိုက်ရှာဖွေရန်' style={[styles.Btn,{marginTop:0,height:'100%',width:'80%',borderWidth:0}]}/>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.Btn,{}]}>
          <Text style={[styles.text,{}]}>ဓာတ်မြေသြဇာ</Text>
          <Icon2 name='caretdown' style={{marginLeft:'65%'}}/>
        </TouchableOpacity>

     
        <View style={{borderBottomWidth:1,borderBottomColor:'gray',marginTop:15,width:'95%',marginLeft:10}}/>
        
        {/* <ScrollView >  
          <View> */}
        <View style={{flexDirection:'row',height:'15%',width:'95%',marginTop:25,marginLeft:10}}>
          <View style={styles.imgView}>
            <Image source={require('../assets/6.1.jpg')} style={styles.img}/>
            <Text style={styles.imgText}>မြင်းကျား-အ၀ါ</Text>
          </View>
         
          <View style={styles.imgView}>
            <Image source={require('../assets/6.2.jpg')} style={styles.img}/>
            <Text style={styles.imgText}>မြင်းကျား-လိမ္မော်</Text>
          </View>

          <View style={styles.imgView}>
            <Image source={require('../assets/6.3.jpg')} style={styles.img}/>
            <Text style={styles.imgText}>မြင်းကျား-အနီ</Text>
          </View>

          
        </View>

        <View style={{flexDirection:'row',height:'15%',width:'95%',marginTop:25,marginLeft:10}}>
           <View style={styles.imgView}>
            <Image source={require('../assets/6.4.jpg')} style={styles.img}/>
            <Text style={styles.imgText}>မြင်းကျား-အပြာ</Text>
          </View>
         
          <View style={styles.imgView}>
            <Image source={require('../assets/2.1.jpg')} style={styles.img}/>
            <Text style={styles.imgText}>ရွှေကောမက်</Text>
          </View>

          <View style={styles.imgView}>
            <Image source={require('../assets/2.2.jpg')} style={styles.img}/>
            <Text style={styles.imgText}>ကောမက်-Hi-K</Text>
          </View>

        </View>

        <View style={{flexDirection:'row',height:'15%',width:'95%',marginTop:25,marginLeft:10}}>
          <View style={styles.imgView}>
            <Image source={require('../assets/4.png')} style={styles.img}/>
            <Text style={styles.imgText}>ကောမက်(၁)...</Text>
          </View>
         
          <View style={styles.imgView}>
            <Image source={require('../assets/5.jpg')} style={styles.img}/>
            <Text style={styles.imgText}>ကောမက်(၂)...</Text>
          </View>

          <View style={styles.imgView}>
            <Image source={require('../assets/4.png')} style={styles.img}/>
            <Text style={styles.imgText}>ကောမက်(၃)...</Text>
          </View>
          
        </View>

        <View style={{flexDirection:'row',height:'15%',width:'95%',marginTop:25,marginLeft:10}}>
          <View style={styles.imgView}>
            <Image source={require('../assets/5.jpg')} style={styles.img}/>
            <Text style={styles.imgText}>၀ိစာရ(၁)...</Text>
          </View>
         
          <View style={styles.imgView}>
            <Image source={require('../assets/3.jpg')} style={styles.img}/>
            <Text style={styles.imgText}>၀ိစာရ(၂)...</Text>
          </View>

          <View style={styles.imgView}>
            <Image source={require('../assets/4.png')} style={styles.img}/>
            <Text style={styles.imgText}>၀ိစာရ(၃)...</Text>
          </View>

        </View>

        <View style={{flexDirection:'row',height:'15%',width:'95%',marginTop:25,marginLeft:10}}>
          <View style={styles.imgView}>
            <Image source={require('../assets/3.jpg')} style={styles.img}/>
            <Text style={styles.imgText}>မော်နီတာ(၁)...</Text>
          </View>
         
          <View style={styles.imgView}>
            <Image source={require('../assets/3.jpg')} style={styles.img}/>
            <Text style={styles.imgText}>မော်နီတာ(၂)...</Text>
          </View>

          <View style={styles.imgView}>
            <Image source={require('../assets/3.jpg')} style={styles.img}/>
            <Text style={styles.imgText}>မော်နီတာ(၃)...</Text>
          </View>
          
        </View>

        {/* </View>
      </ScrollView>  */}

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
  imgView:{
    height:'100%',
    width:'30%',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    backgroundColor:'white',
    marginLeft:'3%',
    // elevation:'20',
    shadowColor:'#52006A'
  },
  imgText:{
    height:'20%',
  },
  img:{
    height:'70%',
    width:'90%',
    borderRadius:10,
  }
  //ak first commit
});
