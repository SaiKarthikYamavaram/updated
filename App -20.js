import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import ProfilePic from './components-18/profilePic';
import Header from './components-20/header';
import Uname from './components-18/uname';
import BlockOfText from './components-20/blockOfText';
import Btn from './components-18/btn';
import { ImageBtn } from './components-20/imageBtn';
import ChatBot from './components-20/chatbot';

export default class App extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Header />

        <View style={styles.imgAndUname}>
          <ProfilePic src="./assets/srk.jpg" />

          <Uname uname="USERNAME" />
        </View>
        <View style={styles.detailsCont}>
          <BlockOfText
            heading="About"
            content="Insert Content Here example :Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation "
          />

          <BlockOfText
            heading="Precautions to be taken"
            content="Insert Content Here :Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation "
          />
        </View>
        <ChatBot />
        <ImageBtn />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: '2%',
    backgroundColor: '#ccddff',
    width: '100%',
  },

  imgAndUname: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
