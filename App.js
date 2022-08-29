import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
  <View style = {styles.container}>
    <View style={styles.box}>
     <Text>Square 1</Text>
    </View>
    <View style={[styles.box,{backgroundColor:"#4dc2c2"}]}>
     <Text>Square 2</Text>
    </View>
    <View style={[styles.box,{backgroundColor:"#ff637c"}]}>
     <Text>Square 3</Text>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container:  
  {
    flexDirection : "row",
    flex : 1,
    alignItems : 'center',
    justifyContent : "space-around",
  },
  box: {
    width : 100,
    height : 100,
    backgroundColor : "#7ce0f9",
    alignItems : "center",
    justifyContent : "center",
  },
});
