import { StyleSheet, Text, View,TouchableHighlight, SafeAreaView,Image, Button, Alert,Platform,StatusBar, Dimensions} from 'react-native';
import{useDeviceOrientation} from '@react-native-community/hooks';

export default function App() {

  console.log(useDeviceOrientation());

  const handlePress = () => console.log("text pressed");
  const containerStyle = {backgroundColor: "orange"};

  const{landscape} = useDeviceOrientation();

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "50%",
          height: landscape ? "100%" : "30%",
        }}
      ></View>
      <Text numberOfLines={1}>Hello world!</Text>

      <SafeAreaView>
        <TouchableHighlight onPress={() => console.log("Pressed image")}>
          <Image loadingIndicatorSource={require("./assets/favicon.png")} source={{
            width:200,
            height: 300,
            uri: "https://picsum.photos/200/300"}}/>
        </TouchableHighlight>
      </SafeAreaView>

      <SafeAreaView style={styles.container}>
      <Button color="orange" title='Click me' onPress={() => console.log("Button Tapped")}/>
      </SafeAreaView>

      <SafeAreaView style={styles.container}>
        <Button title='Click me' 
        onPress={() => Alert.alert("My title","My Message",[{text: "Yes"}, {text: "No"},])}/>  
      </SafeAreaView>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center"
  },
});

