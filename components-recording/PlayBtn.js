import React ,{Component} from 'react'
import {View,Text,Image,Dimensions,TouchableOpacity,StyleSheet} from 'react-native'
import ImgComp from './ImgComp'
export default class PlayBtn extends Component{
  constructor(){
    super()
    this.state=
      {
         isrecording:false 
      }
    
  }
  render(){
    var src=require('../assets/assets-recording/play-button.png')
    var src2 =require('../assets/assets-recording/rec.png')
    
     var recording=()=>{
       if(this.state.isrecording)
      this.setState({isrecording:false})
      else
      this.setState({isrecording:true}) 
    } 
    if( !this.state.isrecording ){
    return(
      <View style={styles.side}>
      <Text style={styles.status}>  </Text>
      <ImgComp/>
      <TouchableOpacity onPress={()=>recording()}>
        <Image source ={src} style={styles.image} />
      </TouchableOpacity>  
        
      </View>
    
    )
    }
    else{
         return(
      <View style={styles.side}>
      <TouchableOpacity onPress={()=>recording()}>
        <Text style={styles.status}> Recording </Text>
        <ImgComp/>
        <Image source ={src2} style={styles.image} />
      </TouchableOpacity>  
        
      </View>
    
    ) 
    }
    
  }
}

const styles =StyleSheet.create({
  side:{
    
    alignItems:'center',
    
  },
  status:{
    margin:10,
    padding:5
  },
  image:{
    borderRadius: Math.round( Dimensions.get('window').height)*0.2 +Math.round( Dimensions.get('window').width)*0.2 ,width: Dimensions.get('window').width * 0.2 ,height: Dimensions.get('window').width*0.2,
    marginBottom:10
  },
  
})