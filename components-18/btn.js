import React, { Component } from 'react';
import {
  Button,
  View,
  Dimensions,
  Image,
  Text,
  StyleSheet,
} from 'react-native';

export default class Btn extends Component {
  render() {
    var Name = this.props.Name;
    return (
      <View style={styles.btn}>
        <Button
          onPress={() => {
            alert('hello');
          }}
          title={Name}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    // flex:1,
    // height:'100%',
    width: '90%',
    margin: '2%',
    marginLeft: '2%',
    marginRight: '2%',
    borderRadius: 5,
  },
});
