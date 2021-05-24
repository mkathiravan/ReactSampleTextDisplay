import React from "react";
import {View, Text, StyleSheet} from "react-native"

import SomeText from './components/SomeText'

export default class App extends React.Component
{
  render() {
    return (
      <View style={styles.classname} >

      <SomeText/>

      <SomeText/>
      
      </View>
    )
  }
}

const styles = StyleSheet.create({
  
  classname : {
    flex : 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green"
   },
   textstyle : {
     fontSize : 20,
     color : "white",
     backgroundColor: "orange",
     paddingHorizontal : 10,
     paddingVertical : 15,
     marginTop: 5

   }
})
