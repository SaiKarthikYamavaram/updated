import React, { Component } from 'react';
import { View, Dimensions, Text, StyleSheet } from 'react-native';

export default class Credits extends Component {
  render() {
    return (
      <View style={styles.credit}>
        <Text style={styles.text}>{this.props.value + ' Credits'}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  credit: {
    width: 0.5 * Dimensions.get('window').width,
    height: 0.25 * Dimensions.get('window').height,
    backgroundColor: 'brown',
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 10,
    borderRadius: 12,
  },
  text: {
    textAlign: 'center',
    textAlignVertical: 40,
    fontSize: 23,
    color: 'white',
    fontWeight: 'bold',
  },
});
