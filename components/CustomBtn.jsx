import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const CustomBtn = ({title, onPress, backgroundColor, textcolor, borderWidth, borderColor, style}) => {
    return (
      <View style={style}>
        <TouchableOpacity style={[styles.button, {backgroundColor:backgroundColor || 'transparent', borderWidth:borderWidth || 0, borderColor:borderColor || 'transparent' }]} onPress={onPress}>
          <Text style={[styles.textStyle, {color: textcolor}]}>{title}</Text>
        </TouchableOpacity>
      </View>
    )
  }
  

export default CustomBtn

const styles = StyleSheet.create({
    button:{
        width: 312,
        paddingVertical: 14,
        borderRadius: 16,
        marginTop: 20,
    },

    textStyle:{
        fontSize: 17,
        fontWeight: 'condensedBold',
        textAlign: 'center'
    }
})