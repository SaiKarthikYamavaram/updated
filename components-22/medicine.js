import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default class Medicine extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          style={styles.imgbtn}
          activeOpacity={0.5}
          onPress={() => alert('Redirecting to buy medicine...')}>
          <Image
            style={styles.icon}
            source={require('../assets/assets-22/medicine.jpg')}
          />

          <View style={styles.SeparatorLine} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imgbtn: {
    //  justifyContent:'center',
    // alignSelf:'center',
    //paddingTop: 4,
    //paddingBottom:4,
    //  borderRadius:15,
  },
  icon: {
    width: 0.2 * Dimensions.get('window').width,
    height: 0.2 * Dimensions.get('window').height,
    // position:'relative',
    // left:Dimensions.get('window').width*0.4
  },
});
