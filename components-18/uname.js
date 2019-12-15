import React, {Component} from 'react'
import {Text,StyleSheet} from 'react-native'

export default  class Uname extends Component{
  render(){
    var uname =this.props.uname 
    return(
      <Text style={styles.text}>
      {uname}
      </Text>
    )
  }
}

const styles=StyleSheet.create({
 text:{
   fontSize:18,
   color:"#ffddff",
   fontWeight:"bold",
    marginBottom:'2%',
    textAlign:'center',
    
  },
})