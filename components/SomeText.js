import React from "react";
import {Text, StyleSheet} from "react-native";


export default class SomeText extends React.Component
{
  render() {
    return (
    
      <Text style = {styles.textstyle}> Kathiravan </Text>
    )
  }
}

const styles = StyleSheet.create({
  
   textstyle : {
     fontSize : 20,
     color : "white",
     backgroundColor: "orange",
     paddingHorizontal : 10,
     paddingVertical : 15,
     marginTop: 5

   }
})
