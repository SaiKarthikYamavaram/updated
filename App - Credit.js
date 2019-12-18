import Header from './components-20/header';
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Credits from './components-24/credits';
import ImageBtn from './components-20/imageBtn';
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      credits: 0, //Default credit Score
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Header value={'Credits'} />
        <Credits value={this.state.credits} />
        <ImageBtn />
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
