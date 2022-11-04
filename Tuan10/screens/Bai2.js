import { Animated, Image, LogBox, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Bai2() {
    const [location, setLocation] 
      = useState({
        marginLeft1: new Animated.Value(Math.floor(Math.random() * 350)),
        marginTop1: new Animated.Value(Math.floor(Math.random() * 600)),
        marginLeft2: new Animated.Value(Math.floor(Math.random() * 350)),
        marginTop2: new Animated.Value(Math.floor(Math.random() * 600)),
        marginLeft3: new Animated.Value(Math.floor(Math.random() * 350)),
        marginTop3: new Animated.Value(Math.floor(Math.random() * 600)  ),
      });
      function onPress(evt){
        // var x = evt.nativeEvent.locationX;
        // var y = evt.nativeEvent.locationY;
        // console.log('Click:',x,",",y);
        setLocation({
          marginLeft1: Math.floor(Math.random() * 350),
          marginTop1: Math.floor(Math.random() * 600),
          marginLeft2: Math.floor(Math.random() * 350),
          marginTop2: Math.floor(Math.random() * 600),
          marginLeft3: Math.floor(Math.random() * 350),
          marginTop3: Math.floor(Math.random() * 600),
        })
        console.log(marginLeft1);
        console.log(marginTop1);
      }
      function onMove(evt){
        console.log("onMove!");
      }
      function onRelease(){
        console.log("Realse!");
      }
      const {marginTop1, marginLeft1,marginTop2,marginLeft2,marginTop3,marginLeft3,} = location;

  return (
    <SafeAreaView 
        style={{flex:1,backgroundColor:'#fff'}}
        // onStartShouldSetResponder={()=>true}
        // onMoveShouldSetResponder={()=>true}
        // onResponderGrant={onPress}
        // onResponderMove={onMove}
        // onResponderRelease={onRelease}

        >
     <Animated.View style={{marginLeft:marginLeft1,marginTop:marginTop1,position:'absolute'}}>
        <TouchableOpacity onPress={onPress}>
            <Image
             source={{uri:'http://thichthucung.com/wp-content/uploads/hamster-bear-2020.jpg'}}
             style={{width:100,height:100,}} 
            />
        </TouchableOpacity>
    </Animated.View>
    <Animated.View style={{marginLeft:marginLeft2,marginTop:marginTop2,position:'absolute'}}>
        <TouchableOpacity onPress={onPress}>
            <Image
             source={{uri:'http://thichthucung.com/wp-content/uploads/hamster-bear-2020.jpg'}}
             style={{width:100,height:100,}} 
            />
        </TouchableOpacity>
    </Animated.View><Animated.View style={{marginLeft:marginLeft3,marginTop:marginTop3,position:'absolute'}}>
        <TouchableOpacity onPress={onPress}>
            <Image
             source={{uri:'http://thichthucung.com/wp-content/uploads/hamster-bear-2020.jpg'}}
             style={{width:100,height:100,}} 
            />
        </TouchableOpacity>
    </Animated.View>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({})