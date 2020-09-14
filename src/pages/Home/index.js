import React, {Component} from 'react';

import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import {Banner} from '../../assets';
import {HeaderInformation, Layanan} from '../../components';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layanan: 'booking',
    };
  }

  clikLayanan(value) {
    this.setState({
      layanan: value,
    });
  }

  render() {
    return (
      <View style={styles.page}>
        <View style={styles.wrapperHeader}>
          <HeaderInformation />
          <Image source={Banner} style={styles.banner} />
        </View>
        <View style={styles.wrapperLable}>
          <Text style={styles.lable}>
            Ayo Main <Text style={styles.textBold}>Futsal</Text>
          </Text>
        </View>
        <View style={styles.layanan}>
          <Layanan
            title="Paket Langganan"
            onPress={() => this.clikLayanan('paket')}
            active={this.state.layanan === 'paket' ? true : false}
          />
          <Layanan
            title="Booking Langganan"
            onPress={() => this.clikLayanan('booking')}
            active={this.state.layanan === 'booking' ? true : false}
          />
          <Layanan
            title="Join Team"
            onPress={() => this.clikLayanan('join')}
            active={this.state.layanan === 'join' ? true : false}
          />
        </View>
      </View>
    );
  }
}

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
  lable: {
    fontSize: 18,
    fontFamily: 'Poppins-Light',
  },
  textBold: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
  },
  wrapperLable: {
    paddingHorizontal: 30,
    marginTop: 14,
  },
  layanan: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    // margin: 27,
    justifyContent: 'space-between',
    marginTop: windowHeight * 0.055,
  },
});
