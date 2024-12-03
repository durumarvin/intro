import { StyleSheet, Text, View, Image, } from 'react-native'
import React from 'react'
import CustomBtn from '../components/CustomBtn'
import Swiper from 'react-native-swiper'

const Onscreen = () => {
  return (
    <View style={styles.container}>

      <Swiper
        paginationStyle={styles.paginationStyle}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        autoplay
      >
        <View style={styles.onboardingContainer}>
          <Image source={require('./../assets/on1.png')} />
          <Text style={styles.text}>Multiple delivery options</Text>
          <Text style={styles.description}> Enjoy best in the market exchange rates</Text>
          <CustomBtn title={'Get Started'} textcolor={'white'} backgroundColor={'#2BD800'} style={styles.buttonContainer} />
        </View>

        <View style={styles.onboardingContainer}>
          <Image source={require('./../assets/on2.png')} style={styles.on2Iimage} />
          <Text style={styles.text}>Multiple delivery options</Text>
          <Text style={styles.description}> Enjoy best in the market exchange rates</Text>
          <CustomBtn title={'Get Started'} textcolor={'white'} backgroundColor={'#2BD800'} style={styles.buttonContainer} />
        </View>

        <View style={styles.onboardingContainer}>
          <Image source={require('./../assets/on3.png')} />
          <Text style={styles.text}>Multiple delivery options</Text>
          <Text style={styles.description}> Enjoy best in the market exchange rates</Text>

          <View>
            <CustomBtn title={'Get Started'} textcolor={'white'} backgroundColor={'#2BD800'} buttonStyle={styles.twoButton} />
            <CustomBtn title={'Get Started'} textcolor={'white'} backgroundColor={'#2BD800'} buttonStyle={styles.twoButton} />
          </View>

        </View>
      </Swiper>
    </View>
  )
}

export default Onscreen

const styles = StyleSheet.create({

  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },

  text: {
    fontSize: 40,
    color: '#2BD800',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20
  },

  image: {
    width: 224,
    height: 241,
  },

  Onscreentext: {
    color: 'green',
    fontSize: 18,
    fontweight: 'bold',
    textAlign: 'center',
    margintop: 20,
  },

  description: {
    fontSize: 24,
    color: 'black',
    fontweight: 700,
    textAlign: 'center',
    width: 250,
    margintop: 20,
    marginBottom: 200,
  },

  onboardingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 10,
  },

  paginationStyle: {
    position: 'absolute',
    top: 550
  },

  buttonContainer: {
    position: 'absolute',
    bottom: 30,
  },

  dotStyle: {
    width: 20,
    height: 5,
    borderRadius: 6,
    // backgroundColor: '#90EE90'
  },

  activeDotStyle: {
    width: 20,
    height: 5,
    borderRadius: 6,
    backgroundColor: "#007B5D",
  },

  twoButtonContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 30,
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },

  twoButton: {
    width: 157
  }
})