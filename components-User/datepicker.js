import React,{Component} from "react"
import {TextInput,Text,StyleSheet,View,DatePickerAndroid} from 'react-native'

export default class datePicker extends Component{
  render(){
    return(


try {
  const {action, year, month, day} = await DatePickerAndroid.open({
    // Use `new Date()` for current date.
    // May 25 2020. Month 0 is January.
    date: new Date(2020, 4, 25),
  });
  if (action !== DatePickerAndroid.dismissedAction) {
    // Selected year, month (0-11), day
  }
} catch ({code, message}) {
  console.warn('Cannot open date picker', message);
}
    )
}
}