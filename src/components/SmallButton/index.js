import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {WARNA_UTAMA} from '../../utils/constans';

const SmallButton = ({text}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default SmallButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: WARNA_UTAMA,
    padding: 3,
    borderRadius: 5,
    height: 19,
  },
  text: {
    color: '#ffffff',
    fontSize: 10,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },
});
