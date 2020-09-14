import React, {Component} from 'react';

import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Banner} from '../../assets';
import {
  HeaderInformation,
  Layanan,
  SmallButton,
  UpdateScore,
} from '../../components';
import BoxClub from '../../components/BoxClub';

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
        <ScrollView vertical showsVerticalScrollIndicator={false}>
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
          <View style={styles.lableSparing}>
            <Text style={styles.lable}>
              Pilih Tim <Text style={styles.textBold}>Spating</Text> Kamu
            </Text>
            <SmallButton text="Lihat Semua" />
          </View>
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.club}>
                <BoxClub club="Vamos FC" statistik="WWDDSS" />
                <BoxClub club="FIFC" statistik="WWDDSS" />
                <BoxClub club="Victoria Come" statistik="WWDDSS" />
                <BoxClub club="ANNAHL" statistik="WWDDSS" />
                <BoxClub club="ANNAHL" statistik="WWDDSS" />
              </View>
            </ScrollView>
          </View>
          <View style={styles.lableSparing}>
            <Text style={styles.lable}>Update Score </Text>
            <SmallButton text="Lihat Semua" />
          </View>
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.score}>
                <UpdateScore
                  klub1="Vamos FC"
                  klub2="FIFC"
                  score1="3"
                  score2="5"
                  date="Rabu, 10 Januari 2020 19.00 WIB"
                />
                <UpdateScore
                  klub1="VANNAHL"
                  klub2="ictoria Come"
                  score1="5"
                  score2="7"
                  date="Rabu, 11Januari 2020 19.00 WIB"
                />
                <UpdateScore
                  klub1="VANNAHL"
                  klub2="ictoria Come"
                  score1="5"
                  score2="7"
                  date="Rabu, 11Januari 2020 19.00 WIB"
                />
              </View>
            </ScrollView>
          </View>
        </ScrollView>
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
  lableSparing: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    marginTop: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  club: {
    marginTop: 10,
    flexDirection: 'row',
  },
  score: {
    justifyContent: 'space-between',
    marginTop: 10,
    flexDirection: 'row',
  },
  wrapperScroll: {
    paddingHorizontal: 30,
  },
});
