/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Platform, StyleSheet, Text,TouchableOpacity, View} from 'react-native';
import Sound from 'react-native-sound';


export default function App() {

  let musicPath = ('http://172.17.0.3:9000/youapp/Good%20Day.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ZNV63TEKLA4A79IOX341%2F20211011%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20211011T174458Z&X-Amz-Expires=604799&X-Amz-Security-Token=eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NLZXkiOiJaTlY2M1RFS0xBNEE3OUlPWDM0MSIsImV4cCI6MzYwMDAwMDAwMDAwMCwicG9saWN5IjoiY29uc29sZUFkbWluIn0.WLQDW_4v6uAPuSoAV5zJaAfbo7656AAf1nGx3msrp3nu02v9syKB90tEoVLewRsbfEpVHxzAYlg0wOSOQBNMOw&X-Amz-SignedHeaders=host&versionId=null&X-Amz-Signature=f54d7856ae98c0bc7fc8401937429b64da76a8723fb162d08595b83fa304f075');
  var music = new Sound(musicPath,null,(error)=>{
      if(error){
        Alert.alert ("Falló la reproducción ...");
      }
  });
  

  return(
    <View style={styles.container}>
      <TouchableOpacity style={{marginTop:15}} onPress={()=>{music.play()}}>
          <Text style={{color:'#4398ff',fontSize:20}}>
                                      Pon música local
          </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{marginTop:15}} onPress={()=>{music.pause()}}>
          <Text style={{color:'#4398ff',fontSize:20}}>
                                      se acabó el tiempo 
          </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{marginTop:15}} onPress={()=>{music.stop(()=>{music.play()})}}>
          <Text style={{color:'#4398ff',fontSize:20}}>
                                      reiniciar 
          </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{marginTop:15}} onPress={()=>{music.stop(()=>{music.release()})}}>
          <Text style={{color:'#4398ff',fontSize:20}}>
                                      detener 
          </Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    alignItems:'center'
  }
});
