import React, { Component } from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';

export default class ProfilePic extends Component {
  render() {
    var src = require('../assets/srk.jpg');
    return (
      <View style={styles.side}>
        <Image source={src} style={styles.image} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  side: {
    marginTop: '4%',
    alignItems: 'center',
  },

  image: {
    borderRadius:
      Math.round(Dimensions.get('window').height) * 0.35 +
      Math.round(Dimensions.get('window').width) * 0.35,
    width: Dimensions.get('window').width * 0.35,
    height: Dimensions.get('window').width * 0.35,
    marginBottom: 10,
  },
});
