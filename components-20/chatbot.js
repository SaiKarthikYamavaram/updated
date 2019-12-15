import React ,{Component} from 'react'
import {View,Image,Dimensions,TouchableOpacity,StyleSheet} from 'react-native'

export default class ChatBot extends Component{
  render(){
    var src=require('../assets/assets-20/chatbot.png')
    return(
      <View style={styles.side}>
      <TouchableOpacity onPress={()=>alert("move to chat bot")}>
        <Image source ={src} style={styles.image} />
      </TouchableOpacity>  
        
      </View>
    )
  }
}

const styles =StyleSheet.create({
  side:{
    marginTop:'4%',
    alignItems:'center'
  },
 
  image:{
    borderRadius: Math.round( Dimensions.get('window').height)*0.2 +Math.round( Dimensions.get('window').width)*0.2 ,width: Dimensions.get('window').width * 0.2 ,height: Dimensions.get('window').width*0.2,
    marginBottom:10
  }
})