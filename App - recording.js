import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Cancel from './components-recording/cancel';
import PlatBtn from './components-recording/PlayBtn';

export default class App extends Component {
  imguri = { recording: '../assets/assets-recording/cancel.png' };
  render() {
    return (
      <View style={styles.container}>
        <PlatBtn />
        <Cancel />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'grey',
  },
});
