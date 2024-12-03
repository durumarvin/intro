import { StyleSheet, Text, View, Image, } from 'react-native'
import React from 'react'
import CustomBtn from '../components/CustomBtn'

const Duolingo = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./../assets/d-image.png')} style={styles.image} />
      <Text style={styles.duolingotext}>Duolingo</Text>
      <Text style={styles.description}> The free, fun, and effective way to learn a language</Text>
    
      <CustomBtn title={'GET STARTED'} textcolor={'black'} backgroundColor={'#2BD800'} />
      <CustomBtn title={'I ALREADY HAVE AN ACCOUNT'} textcolor={'#2BD800'} borderWidth={2} borderColor={'#525D70'} />

    </View>
  )
}

export default Duolingo

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        backgroundColor: 'black'
    },

    image:{
      width: 163,
      height: 153,
    },

    duolingotext:{
        color: 'green',
        fontSize: 40,
        fontweight: 'bold',
        textAlign: 'center',
        margintop: 20,
    },

    description:{
      fontSize: 18,
      color: 'white',
      fontweight: 'regular',
      textAlign: 'center',
      width: 255,
      margintop: 20,
    }
})