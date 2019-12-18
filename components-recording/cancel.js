import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
// import from '../assets/assets-recording/previous-arrow.png'
export default class Cancel extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => alert('cancel')}>
          <Image
            source={require('../assets/assets-recording/cancel.png')}
            style={styles.imgContainer}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  imgContainer: {
    alignSelf: 'center',
    width: Dimensions.get('window').width * 0.2,
    height: Dimensions.get('window').width * 0.2,
    margin: 20,
  },
});
