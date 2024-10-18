import { ImageBackground, StyleSheet, Text, View,Image} from 'react-native'
import React from 'react'

export default function ViewImageScreen() {
  return (

    <View style={styles.background}>
        <View style={styles.buttonsContainer}>
            <View style={styles.buttonLeft}/>
            <View style={styles.buttonRight}/>
        </View>
        <Image style={styles.viewedImage} source={{uri:"https://picsum.photos/1200/1200"}}/>
    </View>
  )
}

const styles = StyleSheet.create({
    background:{
        backgroundColor:"black",
        flex:1,
        alignItems:"center",
        justifyContent: "center",
    },

    viewedImage:{
        position:"absolute",
        width:"100%",
        height:"70%",
    },

    buttonsContainer:{
        position:"absolute",
        flexDirection:"row",
        top:10,
        gap:250
    },

    buttonLeft:{
        height:50,
        width:50,
        backgroundColor:"tomato",
    },

    buttonRight:{
        height:50,
        width:50,
        backgroundColor:"blue",
    },
})