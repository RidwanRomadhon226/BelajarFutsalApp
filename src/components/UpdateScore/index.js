import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {LogoAnnahl, LogoVamos, LogoVefc, LogoVictorycome} from '../../assets';
import {WARNA_UTAMA} from '../../utils/constans';

const UpdateScore = ({klub1, klub2, score1, score2, date}) => {
  const Logo = (klub) => {
    if (klub.klub === 'Vamos FC') {
      return <Image source={LogoVamos} style={styles.logo} />;
    }
    if (klub.klub === 'FIFC') {
      return <Image source={LogoVefc} style={styles.logo} />;
    }
    if (klub.klub === 'Victoria Come') {
      return <Image source={LogoVictorycome} style={styles.logo} />;
    }
    if (klub.klub === 'ANNAHL') {
      return <Image source={LogoAnnahl} style={styles.logo} />;
    }

    return <Image source={LogoAnnahl} style={styles.logo} />;
  };
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.match}>
        <View style={styles.boxlub}>
          <Logo klub={klub1} />
          <Text style={styles.text}>{klub1}</Text>
        </View>
        <View style={styles.scour}>
          <Text style={styles.textScor}>
            {score1}:{score2}
          </Text>
        </View>
        <View style={styles.boxlub}>
          <Logo klub={klub2} />
          <Text style={styles.text}>{klub2}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default UpdateScore;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginRight: 10,
  },
  logo: {
    width: 52,
    height: 52,
  },
  text: {
    fontSize: 10,
    fontFamily: 'Poppins-Bold',
    color: '#000000',
  },
  match: {
    flexDirection: 'row',
  },
  boxlub: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 1,
    marginBottom: 10,
  },
  textScor: {
    fontSize: 10,
    fontFamily: 'Poppins-Bold',
    color: '#000000',
  },
  scour: {
    height: 21,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 3,
    position: 'relative',
    marginHorizontal: -15,
    zIndex: 1,
  },
});
