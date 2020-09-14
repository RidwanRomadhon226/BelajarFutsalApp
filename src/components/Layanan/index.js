import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {act} from 'react-test-renderer';
import {IconBookingLapangan, IconJointTeam, IconLanganan} from '../../assets';
import {WARNA_SEKUNDER, WARNA_UTAMA} from '../../utils/constans';
const Layanan = ({title, active, onPress}) => {
  const Icon = () => {
    if (title === 'Paket Langganan') {
      return <IconLanganan />;
    }
    if (title === 'Booking Langganan') {
      return <IconBookingLapangan />;
    }
    if (title === 'Join Team') {
      return <IconJointTeam />;
    }
    return <IconJointTeam />;
  };

  return (
    <TouchableOpacity style={styles.container(active)} onPress={onPress}>
      <View style={styles.icon}>
        <Icon />
        <Text style={styles.text(active)}>{title.replace(' ', '\n')}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Layanan;

const styles = StyleSheet.create({
  container: (active) => ({
    alignItems: 'center',
    backgroundColor: active ? WARNA_UTAMA : '#ffffff',
    borderRadius: 10,
    padding: 10,
    borderColor: WARNA_SEKUNDER,
    borderWidth: active ? 0 : 2,
  }),
  text: (active) => ({
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    color: active ? '#ffffff' : WARNA_SEKUNDER,
    textAlign: 'center',
  }),
  icon: {
    marginTop: -30,
  },
});
