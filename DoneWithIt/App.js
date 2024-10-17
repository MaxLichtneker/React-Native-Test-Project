import { StyleSheet, Text, View,TouchableHighlight, SafeAreaView,Image, Button, Alert,Platform,StatusBar, Dimensions} from 'react-native';

export default function App() {

  const handlePress = () => console.log("text pressed");
  const containerStyle = {backgroundColor: "orange"};

  return (
    <SafeAreaView style={styles.container}>
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

      <SafeAreaView style={styles.container}>
        <view
          style={{
            backgroundColor: "dodgerblue",
            width: "50%",
            height:"70",
          }}
        />
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

