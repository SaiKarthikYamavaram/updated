import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Medicine from './medicine';

export default class MedicineCont extends Component {
  render() {
    return (
      <View style={styles.cont}>
        <Medicine style={styles.image} />
        <Text style={styles.text}>Medicine Price</Text>
        <Text style={styles.text}>{'$ ' + this.props.price}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cont: {
    backgroundColor: 'white',
    width: 0.4 * Dimensions.get('window').width,
    margin: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 8,
  },
  text: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {},
});
