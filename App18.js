import React, { Component } from 'react';
import { Text, View,StyleSheet } from 'react-native';
import ProfilePic from './components-18/profilePic'
import Btn from './components-18/btn'
import Close from './components-18/close'
import Uname from './components-18/uname' 

export default class App extends Component{
  constructor(){
    super()
    this.state= {
      touched : false
    }
  }
  onpress =()=>{
    this.setState({touched : true
  })}
  render(){
    return(
      <View style={styles.container}>
      <Close onpress={this.onpress}/>
      <ProfilePic src='./assets/srk.jpg'  />
       
      <Uname uname="hello" />
      <Btn Name="My Profile"/>
      <Btn Name="My Credits"/>
      <Btn Name="Tasks"/>
      <Btn Name="Precautions"/>
      
      <Btn Name="Log out"/>

      </View>
    )
  }
} 

const styles = StyleSheet.create(
{   
  container:{
    // marginTop:'10%',
    height: "100%",
    backgroundColor:'grey',
    width:"75%",
    // display:"none"
  }
    
}
)