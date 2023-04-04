import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/theme'

const Questions = () => {
  return (
    <View style={styles.container}>
      <Text>မေးမြန်းမှုမရှိသေးပါ။</Text>
    </View>
  )
}

export default Questions

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: COLORS.mainbackground,
      justifyContent: 'center',
      alignItems: 'center'
    }
})