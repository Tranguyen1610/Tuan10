import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={{flex:1,justifyContent:'space-around',alignItems:'center'}}>
      <Button title='Bai1' onPress={()=>navigation.navigate('Bai1')}/>
      <Button title='Bai2' onPress={()=>navigation.navigate('Bai2')}/>
      <Button title='Bai3' onPress={()=>navigation.navigate('Bai3')}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})