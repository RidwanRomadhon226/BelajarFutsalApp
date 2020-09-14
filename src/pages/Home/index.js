import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import {Banner} from '../../assets';
import {HeaderInformation} from '../../components';

const Home = () => {
  return (
    <View style={styles.page}>
      <View style={styles.wrapperHeader}>
        <HeaderInformation />
        <Image source={Banner} style={styles.banner} />
      </View>
    </View>
  );
};

export default Home;

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  wrapperHeader: {
    paddingTop: 30,
    paddingHorizontal: 30,
  },
  banner: {
    width: '100%',
    height: windowHeight * 0.125,
    marginTop: windowHeight * 0.016,
  },
});
