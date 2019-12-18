import Header from './components-20/header';
import React, { Component } from 'react';
import {
  ProgressBarAndroid,
  Text,
  ScrollView,
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
} from 'react-native';
import ImageBtn from './components-20/imageBtn';
import ProfilePic from './components-18/profilePic';
import Uname from './components-18/uname';
import InputTextNoAuth from './components-User/InputTextNoAuth';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      progress: 0,
    };
  }
  addProgress = value => {
    if (value) {
      this.setState({ progress: this.state.progress + 3 });
    } else {
      this.setState({ progress: this.state.progress - 3 });
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.notification} />
        <ScrollView style={styles.scroll}>
          <Header value={'User Profile'} />
          <View style={styles.transparent}>
            <View style={styles.content}>
              <ProfilePic src="./assets/srk.jpg" />
              <Uname uname="SRK" style={styles.text} />
              <ProgressBarAndroid
                styleAttr="Horizontal"
                indeterminate={false}
                progress={this.state.progress / 10}
                color="#2196F3"
              />
              <Text style={styles.text}>
                Complete your profile and get 10 credits{' '}
              </Text>
              <Text style={styles.text}>Fill in the Details</Text>

              <InputTextNoAuth
                placeholder={'    Occupation'}
                progress={this.addProgress}
                type="text"
              />

              <InputTextNoAuth
                placeholder={'    Gender'}
                type="text"
                progress={this.addProgress}
              />
            </View>
          </View>
        </ScrollView>
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
  transparent: {
    backgroundColor: 'rgba(255,255,255,.55)',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 0.9 * Dimensions.get('window').width,
    padding: 4,

    borderRadius: 9,
  },
  text: {
    color: 'black',
    fontStyle: 'italic',
    fontSize: 14,
    // letterSpacing:1.5,
    marginLeft: 4,
    marginBottom: 5,
  },
  scroll: {
    // flexWrap:'wrap'
  },
  content: {
    opacity: 1,
  },
  notification: {
    backgroundColor: 'black',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.03,
  },
});
