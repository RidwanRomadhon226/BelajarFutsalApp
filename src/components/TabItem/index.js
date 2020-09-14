import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {WARNA_SEKUNDER, WARNA_UTAMA} from '../../utils/constans';
import {
  IconAccount,
  IconAccountActive,
  IconHome,
  IconHomeActive,
  IconJadwal,
  IconJadwalActive,
} from '../../assets';

const TabItem = ({isFocused, label, onLongPress, onPress}) => {
  const Icon = () => {
    if (label === 'Home') {
      return isFocused ? <IconHomeActive /> : <IconHome />;
    }
    if (label === 'Jadwal') {
      return isFocused ? <IconJadwalActive /> : <IconJadwal />;
    }
    if (label === 'Account') {
      return isFocused ? <IconAccountActive /> : <IconAccount />;
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={isFocused ? styles.containerFocus : styles.container}>
      <Icon />
      {isFocused && <Text style={styles.text}>{label}</Text>}
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    padding: 5,
  },
  containerFocus: {
    alignContent: 'center',
    padding: 5,
    backgroundColor: '#88BBF2',
    borderRadius: 10,
    flexDirection: 'row',
  },
  text: {
    color: WARNA_UTAMA,
    fontSize: 18,
    marginLeft: 8,
    fontFamily: 'Poppins-Bold',
  },
});
