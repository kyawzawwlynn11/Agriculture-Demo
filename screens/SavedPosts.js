import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/theme'

const SavedPosts = () => {
  return (
    <View style={styles.container}>
      <Text>ဖော်ပြရန်အချက်အလက်မရှိသေးပါ။</Text>
    </View>
  )
}

export default SavedPosts

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.mainbackground,
        justifyContent: 'center',
        alignItems: 'center'
      }
})