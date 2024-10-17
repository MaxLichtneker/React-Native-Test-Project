import { StyleSheet, Text, View,TouchableHighlight, SafeAreaView,Image, Button, Alert,Platform,StatusBar, Dimensions} from 'react-native';
import{useDeviceOrientation} from '@react-native-community/hooks';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      
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

