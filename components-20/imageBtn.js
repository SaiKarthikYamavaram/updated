import React,{Component} from 'react'
import {Dimensions,Image,View,TouchableOpacity,StyleSheet} from 'react-native'


export  class ImageBtn extends Component{
  render(){
    // var src =this.props.src
    return (
      <View>
            <TouchableOpacity style={styles.imgbtn} activeOpacity={0.5} onPress={()=>alert("Go to home")}>
 
         <Image style={styles.icon}
          source={require("../assets/assets-20/house.png")}
          />
 
         <View style={styles.SeparatorLine} />
       </TouchableOpacity>
      </View>
    )
  } 
}

const styles =StyleSheet.create({
  
  imgbtn:{
//  justifyContent:'center',
 alignSelf:'center',
width:"100%",
 backgroundColor:"skyblue" ,
 paddingTop: 4,
 paddingBottom:4,
//  borderRadius:15,
 elevation:5

  }
  ,
  icon:{
    position:'relative',
    left:Dimensions.get('window').width*0.4
  }

})