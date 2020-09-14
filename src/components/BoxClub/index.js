import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {LogoAnnahl, LogoVamos, LogoVefc, LogoVictorycome} from '../../assets';
import SmallButton from '../SmallButton';

const BoxClub = ({club, statistik}) => {
  const Logo = () => {
    if (club === 'Vamos FC') {
      return <Image source={LogoVamos} style={styles.logo} />;
    }
    if (club === 'FIFC') {
      return <Image source={LogoVefc} style={styles.logo} />;
    }
    if (club === 'Victoria Come') {
      return <Image source={LogoVictorycome} style={styles.logo} />;
    }
    if (club === 'ANNAHL') {
      return <Image source={LogoAnnahl} style={styles.logo} />;
    }

    return <Image source={LogoAnnahl} style={styles.logo} />;
  };
  return (
    <TouchableOpacity style={styles.container}>
      <Logo />
      <Text style={styles.text}>{club}</Text>
      <View style={styles.statistik}>
        <SmallButton text={statistik} />
      </View>
    </TouchableOpacity>
  );
};

export default BoxClub;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    marginRight: 10,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginBottom: 10,
  },
  logo: {
    width: 52,
    height: 52,
  },
  text: {
    fontSize: 10,
    fontFamily: 'Poppins-Bold',
  },
  statistik: {
    position: 'absolute',
    bottom: -10,
  },
});
