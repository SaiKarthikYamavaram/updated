import React,{Component} from "react"
import {TextInput,Text,StyleSheet,View} from 'react-native'

export default class InputText extends Component{
  constructor(){
    super()
    this.state={
      keycount:0,
      val:'',
      touched:false
    }
  }
 
 setValue=()=>{
   this.setState({val:this.value})
   alert(this.props.reference)
 } 
  render(){
    return(
      <View>
      <TextInput ref={this.props.reference} style={styles.input}
      onFocus={()=>this.setState({touched:true})}
      maxLength={30} placeholder={this.props.placeholder}   textContentType={this.props.type} secureTextEntry={this.props.isPassword}  onChangeText={(text) => this.setState({val:text})} selectionColor={"skyblue"} 
       value={this.state.text}>
      </TextInput>
      <Warning len={this.state.val.length} touched={this.state.touched} />    
 
      </View>
    )
  } 
} 
export class Warning extends Component{
  render(){
    
    if(this.props.len < 8 & this.props.touched ){
      return(
        
        <Text> Enter Minimum of 8 characters </Text>
      )}
      else{
        return(
          <View> 
          </View>
        )
      }
    }
}
const styles = StyleSheet.create(
  {
    input:{
      margin:20,
      borderRadius:10,
      borderWidth:1.5,
      height:50,
      borderColor:'white',
    }
  }
)