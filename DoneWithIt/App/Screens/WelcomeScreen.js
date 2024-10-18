import { StyleSheet, Text, View,Image,ImageBackground} from 'react-native'
import React from 'react'

export default function WelcomeScreen() {
  return (

    <ImageBackground
        style={styles.background}
        source={{uri:"https://picsum.photos/900/900"}}
    >
        <View style={styles.logoContainer}>
            <View style={styles.Logo}/>
            <Text>Sell what you don't need</Text>
        </View>
        <View style={styles.loginButton}/>
        <View style={styles.registerButton}/>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center",
    },

    loginButton:{
        width:"100%",
        height:70,
        backgroundColor:"#fc5c65",
    },

    registerButton:{
        width:"100%",
        height:70,
        backgroundColor:"#4ecdc4",
    },

    Logo:{
        backgroundColor:"yellow",
        width:100,
        height:100,
    },

    logoContainer:{
        position:"absolute",
        top:70,
        alignItems:"center",
    }
})
