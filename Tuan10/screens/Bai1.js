import { Animated, Image, LogBox, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Bai1() {
    const [location, setLocation] 
      = useState({
        marginLeft: new Animated.Value(10),
        marginTop: new Animated.Value(10)
      });
      function onPress(evt){
        var x = evt.nativeEvent.locationX;
        var y = evt.nativeEvent.locationY;
        console.log('Click:',x,",",y);
        setLocation({
          marginLeft: x,
          marginTop: y
        })
      }
      function onMove(evt){
        console.log("onMove!");
      }
      function onRelease(){
        console.log("Realse!");
      }
      const {marginTop, marginLeft} = location;

  return (
    <SafeAreaView 
        style={{flex:1,backgroundColor:'#fff'}}
        onStartShouldSetResponder={()=>true}
        onMoveShouldSetResponder={()=>true}
        onResponderGrant={onPress}
        onResponderMove={onMove}
        onResponderRelease={onRelease}>
     <Animated.Image 
        source={{uri:'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403'}}
        style={{width:100,height:100,marginLeft:marginLeft,marginTop:marginTop}} />
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({})