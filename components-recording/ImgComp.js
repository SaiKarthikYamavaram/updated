import React ,{Component} from 'react'
import {View,Text,Image,Dimensions,StyleSheet} from 'react-native'
// import from '../assets/assets-recording/previous-arrow.png'
export default class ImgComponent extends Component{
  render(){
    
    return(
      <View >
        <Image source={require('../assets/assets-recording/microphone.png')} style={styles.imgContainer} />       
      </View> 
    )
  }
}

 
var styles = StyleSheet.create(
  {
    imgContainer:{ 
      alignSelf:"center",  
      width: Dimensions.get('window').width * 0.35 ,
      height: Dimensions.get('window').width*0.35,
      marginBottom:10
  
          }
  }
)