import { Alert, Animated, Image, LogBox, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
export default function Bai3({navigation}) {
    const [temp,setTemp]=useState(0);
    const random = useRef(Math.floor(Math.random() * 7) + 1).current;
    const setVT_C=()=>{
        setLocationc({
            marginLeft1: Math.floor(Math.random() * 350),
            marginTop1: Math.floor(Math.random() * 600),
            marginLeft2: Math.floor(Math.random() * 350),
            marginTop2: Math.floor(Math.random() * 600),
            marginLeft3: Math.floor(Math.random() * 350),
            marginTop3: Math.floor(Math.random() * 600),
          })

    }

    const [locationc, setLocationc] 
      = useState({
        marginLeft1: new Animated.Value(Math.floor(Math.random() * 350)),
        marginTop1: new Animated.Value(Math.floor(Math.random() * 600)),
        marginLeft2: new Animated.Value(Math.floor(Math.random() * 350)),
        marginTop2: new Animated.Value(Math.floor(Math.random() * 600)),
        marginLeft3: new Animated.Value(Math.floor(Math.random() * 350)),
        marginTop3: new Animated.Value(Math.floor(Math.random() * 600)  ),
      });
      function onPressc1(evt){
        setLocation({
            marginLeft: marginLeft1,
            marginTop: marginTop1,
          })
          setTemp(temp+1);
        setVT_C();
      }
      function onPressc2(evt){
        setLocation({
            marginLeft: marginLeft2,
            marginTop: marginTop2,
          })
          setTemp(temp+1);
        setVT_C();
      }
      function onPressc3(evt){
        setLocation({
            marginLeft: marginLeft3,
            marginTop: marginTop3,
          })
          setTemp(temp+1);
        setVT_C();
      }


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
      const {marginTop1, marginLeft1,marginTop2,marginLeft2,marginTop3,marginLeft3,} = locationc;

  return (
    <View 
        style={{flex:1}}
        onStartShouldSetResponder={()=>true}
        onMoveShouldSetResponder={()=>true}
        onResponderGrant={onPress}
        onResponderMove={onMove}
        onResponderRelease={onRelease}>
    <View style={{backgroundColor:'pink',justifyContent:'center',alignItems:'center',padding:10}}>
    <Text style={{fontSize:16}}>Mục tiêu: {random}</Text>    
    <Text style={{fontSize:16}}>Số lần chạm trúng: {temp}</Text>
    </View>
    {random===temp? Alert.alert(
        "Thông báo",
        "Game Kết thúc",[{
            text: "Chơi lại",
            // onPress: () => random = useRef(Math.floor(Math.random() * 7) + 1).current,
        }
        ]
    ):
    <View style={{flex:1, backgroundColor:'#fff'}}>
        <Animated.Image 
            source={{uri:'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403'}}
            style={{width:100,height:100,marginLeft:marginLeft,marginTop:marginTop}} />
        <Animated.View style={{marginLeft:marginLeft1,marginTop:marginTop1,position:'absolute'}}>
            <TouchableOpacity onPress={onPressc1}>
                <Image
                source={{uri:'http://thichthucung.com/wp-content/uploads/hamster-bear-2020.jpg'}}
                style={{width:100,height:100,}} 
                />
            </TouchableOpacity>
        </Animated.View>
        <Animated.View style={{marginLeft:marginLeft2,marginTop:marginTop2,position:'absolute'}}>
            <TouchableOpacity onPress={onPressc2}>
                <Image
                source={{uri:'https://quetsach.com/wp-content/uploads/2018/04/hinh-anh-con-chuot.png'}}
                style={{width:100,height:100,}} 
                />
            </TouchableOpacity>
        </Animated.View><Animated.View style={{marginLeft:marginLeft3,marginTop:marginTop3,position:'absolute'}}>
            <TouchableOpacity onPress={onPressc3}>
                <Image
                source={{uri:'https://static.wixstatic.com/media/2cd43b_da63d930da284b8a94f29afb7f2cdef9~mv2.png/v1/fill/w_320,h_224,q_90/2cd43b_da63d930da284b8a94f29afb7f2cdef9~mv2.png'}}
                style={{width:100,height:100,}} 
                />
            </TouchableOpacity>
        </Animated.View>
    </View>
    }
    </View>

  )
}

const styles = StyleSheet.create({})