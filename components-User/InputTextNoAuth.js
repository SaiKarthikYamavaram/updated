import React, { Component } from 'react';
import { TextInput, Text, StyleSheet, View } from 'react-native';

export default class InputTextNoAuth extends Component {
  constructor() {
    super();
    this.state = {
      keycount: 0,
      val: '',
      touched: false,
    };
  }
  updateProgress = () => {
    if (this.state.val.length) {
      this.props.progress(this.state.val);
    }
  };

  render() {
    return (
      <View>
        <TextInput
          style={styles.input}
          onEndEditing={this.updateProgress}
          maxLength={30}
          placeholder={this.props.placeholder}
          textContentType={this.props.type}
          onChangeText={text => this.setState({ val: text })}
          selectionColor={'skyblue'}
          placeholderTextColor={'#ffffff'}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  input: {
    marginTop: 5,
    marginLeft: 6,
    marginRight: 6,
    marginBottom: 15,
    borderRadius: 10,
    borderWidth: 1.5,
    height: 50,
    borderColor: 'white',
  },
});
