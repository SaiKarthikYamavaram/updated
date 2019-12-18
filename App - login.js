import Header from './components-20/header';
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import InputText from './components-login/InputText';
import PlatBtn from './components-recording/PlayBtn';
import Btn from './components-18/btn';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header value={'Login'} />
        <InputText
          placeholder={'    E-mail'}
          type="text"
          reference={'username'}
        />
        <InputText
          placeholder={'    Password'}
          type="password"
          isPassword={true}
          reference={'password'}
        />
        <Btn Name={'Submit'} />
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
