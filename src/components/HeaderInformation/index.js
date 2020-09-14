import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconDefaultUser, IconJadwal, IconJadwalHome} from '../../assets';

const HeaderInformation = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <IconDefaultUser />
        <View style={styles.textWrapper}>
          <Text style={styles.hello}>Hello Bro,</Text>
          <Text style={styles.userName}>Ridwan Romadhon</Text>
        </View>
      </View>
      <View style={styles.userJadwal}>
        <View>
          <Text style={styles.jam}>19.00 WIB</Text>
          <Text style={styles.tanggal}>10 Januari 2020</Text>
        </View>
        <View style={styles.iconJadwal}>
          <IconJadwalHome />
          <Text style={styles.lableNext}>Next Jadwal</Text>
        </View>
      </View>
    </View>
  );
};

export default HeaderInformation;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userInfo: {
    flexDirection: 'row',
  },
  hello: {
    fontSize: 13,
    fontFamily: 'Poppins-Light',
  },
  userName: {
    fontSize: 13,
    fontFamily: 'Poppins-Bold',
  },
  textWrapper: {
    marginLeft: 9,
  },
  jam: {
    textAlign: 'right',
    fontSize: 11,
    fontFamily: 'Poppins-Bold',
  },
  tanggal: {
    textAlign: 'right',
    fontSize: 11,
    fontFamily: 'Poppins-Light',
  },
  userJadwal: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  iconJadwal: {
    alignItems: 'center',
  },
  lableNext: {
    fontFamily: 'Poppins-Light',
    fontSize: 11,
  },
});
