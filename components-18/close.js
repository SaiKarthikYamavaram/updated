import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';

export default class Close extends Component {
  render() {
    return (
      <View style={[styles.closebtn]}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            this.props.onpress();
          }}>
          <Image source={require('../assets/assets-18/close.png')} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  closebtn: {
    margin: 10,

    // backgroundColor:"yellow"
  },

});
