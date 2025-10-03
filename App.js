import { StatusBar } from 'expo-status-bar';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import logo from './assets/to-do-list.png';
import add from './assets/add.png';
import { useState } from 'react';
import { FlashList } from "@shopify/flash-list";
import btnTrashBin from "./assets/trash-bin.png"
import Checkbox from 'expo-checkbox';

export default function App() {
  const [tarefa, setTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]);

  const btnAdicionar = () => {
    if (tarefa.trim() === '') {
      //Alert.alert('Erro', 'Por favor, digite uma tarefa.');
      return;
    };

    //Alert.alert('TODO List', 'Valor: ' + tarefa);
    setTarefas([tarefa, ...tarefas]);
    setTarefa('');
  };

  const btnExcluir = (item) => {
    setTarefas(tarefas.filter((oldTarefas) => oldTarefas !== item));
  };

  const renderItem = ({ item }) => (
    <View style={styles.viewItemRender}>
      <Checkbox value={false} />
      <Text style={styles.textItemRender}>{item}</Text>
      <TouchableOpacity onPress={() => btnExcluir(item)}>
        <Image source={btnTrashBin} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View>
        <Image source={logo} style={styles.logo} />
        <Text>TODO list</Text>
      </View>
      <View style={styles.viewInput}>
        <TextInput
          placeholder="Digite a tarefa"
          value={tarefa}
          onChangeText={setTarefa}
          style={styles.input}
        />
        <TouchableOpacity onPress={btnAdicionar}>
          <Image source={add} style={styles.add} />
        </TouchableOpacity>
      </View>
      <View style={styles.viewTarefas}>
        <FlashList
          data={tarefas}
          renderItem={renderItem}
          estimatedItemSize={50}
          keyExtractor={(item, index) => index.toString()}
        />
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
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  add: {
    width: 32,
    height: 32,
  },
  viewTarefas: {
    width: "100%",
    flex: 1,
  },
  viewItemRender: {
    height: 50,
    width: "100%",
    flexDirection: "row",
    gap: 10
  },
  textItemRender: {
    flex: 1,
  }
});