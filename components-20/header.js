import React, { Component } from 'react';
import { Text, View,StyleSheet,Image,TouchableOpacity } from 'react-native';

export default class Header extends Component{
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.headContainer}>
              <TouchableOpacity activeOpacity={0.5} >
                <Image source={require('../assets/assets-20/left-chevron.png')}/>
        
              </TouchableOpacity>
          <Text style={styles.headText}>{this.props.value}</Text>
        </View>
      </View>
    )
  }
} 

const styles = StyleSheet.create(
{   
    container:{
      marginTop:'7%',
      backgroundColor:'grey',
      width:"100%",
      display:"flex",
      flexDirection:"column"
      
    },
    
    headText:{
      color:'white',
      textAlign:"center",
      fontSize:23,
      padding:"5%",
      fontFamily:'newRoman',
    },

    headContainer:{
      
      backgroundColor:"skyblue",
      display:"flex",
      
    }
      
}
)