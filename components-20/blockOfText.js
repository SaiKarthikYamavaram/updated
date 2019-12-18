import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class BlockOfText extends Component {
  render() {
    let heading = this.props.heading;
    let content = this.props.content;
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>{heading}</Text>
        <Text style={styles.content}>{content}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // borderColor:"black",

    margin: 5,
    padding: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    borderColor: 'black',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  heading: {
    fontsize: 10,
    margin: 3,
    fontWeight: 'bold',
  },
  content: {
    fontsize: 9,
    marginLeft: 10,
  },
});
