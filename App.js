import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    

      <Pressable style={styles.pressable}>
        <Text style={styles.button}>FELICITATIONS</Text>
      </Pressable>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressable: {
    width: "60%",
    
  },
  button: {
    borderColor: "black",
    borderWidth: 1,
    color: "white",
    backgroundColor:"green",
    height: 50,
    textAlign: 'center',
    textAlignVertical: "center",
    elevation: 20,
    shadowColor: "black",
  },
 
});
