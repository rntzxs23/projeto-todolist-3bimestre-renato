import { StatusBar } from 'expo-status-bar';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import logo from './assets/to-do-list.png'
import add from "./assets/add.png"
import { TextInput } from 'react-native-web';
import { useState } from 'react';


export default function App() {
  const [tarefa, setTarefa] = useState("")
  const btnAdicionar = () => {
    Alert.alert("TODO List", "Valor:" + tarefa);
    setTarefa("")
  };
  return (
    <View style={styles.container}>
      <View>
        <Image source={logo} style={styles.logo} />
        <Text>TODO list</Text>
      </View>
      <View style={styles.viewInput}>
        <TextInput
          placeholder='Digite a tarefa'
          value={tarefa}
          onChangeText={setTarefa}
        />
        <TouchableOpacity onPress={btnAdicionar}>
          <Image source={add} style={styles.add} />
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  logo: {
    height: 128,
    width: 128,
  },
  viewInput: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row"
  },
  add: {
    width: 32,
    height: 32
  }
});

