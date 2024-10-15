import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableHighlight, SafeAreaView,Image} from 'react-native';

export default function App() {

  const handlePress = () => console.log("text pressed");
  
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1}>Hello world!</Text>

      <TouchableHighlight onPress={() => console.log("Pressed image")}>
        <Image loadingIndicatorSource={require("./assets/favicon.png")} source={{
          width:200,
          height: 300,
          uri: "https://picsum.photos/200/300"}}/>
      </TouchableHighlight>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center",
  },
});

