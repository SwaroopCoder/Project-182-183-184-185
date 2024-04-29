import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar,
  Image,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.headingContainer}>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            <Text style={styles.titleText1}>LOOK</Text>
            <Text style={styles.titleText2}> MEE...</Text>
          </View>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            <Text style={styles.subheading1}> </Text>
            <Text style={styles.subheading2}> </Text>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <View style={{ flex: 0.5 }}>
            <Text style={styles.contentText}>
              Look Mee is the best photo filter app for pic with the funny camera effects. With the stunning live photo filters direcctly on your face.
            </Text>
          </View>
          <View style={{ flexDirection: 'row', flex: 0.25 }}>
            <View style={{ flex: 0.5 }}>
              <Image
                source={require('../hat-pic1.png')}
                style={{ height: 66, width: 145 }}
              />
            </View>
            <View style={{ flex: 0.5 }}>
              <Image
                source={require('../hat-pic2.png')}
                style={{ height: 66, width: 145 }}
              />
            </View>
          </View>
          <View style={{ flexDirection: 'row', flex: 0.25 }}>
            <View style={{ flex: 0.5 }}>
              <Image
                source={require('../other-pic1.png')}
                style={{ height: 64, width: 160 }}
              />
            </View>
            <View style={{ flex: 0.5 }}>
              <Image
                source={require('../flower-pic2.png')}
                style={{ height: 64, width: 150 }}
              />
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Main')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Try Now!</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8fbc8f',
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  headingContainer: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText1: {
    fontSize: RFValue(30),
    fontWeight: 'bold',
    color: 'yellow',
    fontStyle: 'italic',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -7, height: 3.5 },
    textShadowRadius: 1,
  },
  titleText2: {
    fontSize: RFValue(30),
    fontWeight: 'bold',
    color: 'cyan',
    fontStyle: 'italic',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -4, height: 4 },
    textShadowRadius: 1,
  },
  subheading1: {
    fontSize: RFValue(20),
    color: '#efb141',
    fontStyle: 'italic',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -3, height: 3 },
    textShadowRadius: 1,
  },
  subheading2: {
    fontSize: RFValue(20),
    color: 'white',
    fontStyle: 'italic',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -3, height: 3 },
    textShadowRadius: 1,
  },
  contentContainer: {
    flex: 0.6,
    margin: RFValue(5),
    borderRadius: RFValue(15),
    backgroundColor: '#ffdab9',
    height: '100%',
    padding: RFValue(20),
  },
  contentText: {
    fontSize: RFValue(17),
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#efb141',
    paddingLeft: RFValue(50),
    paddingRight: RFValue(50),
    paddingTop: RFValue(20),
    paddingBottom: RFValue(20),
    borderRadius: RFValue(20),
  },
  buttonText: {
    fontSize: RFValue(25),
    fontStyle: 'italic',
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1,
  },
});
