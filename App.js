import React, {useState} from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'red',
    width: '80%',
  },
});

export default function App() {
  const [value, setValue] = useState('');

  const isHermes = () => !!global.HermesInternal;

  return (
    <View style={styles.container}>
      <Text>{isHermes() ? 'Hermes' : 'JSC'}</Text>
      <TextInput
        placeholder="Edit me"
        style={styles.textInput}
        value={value}
        onChangeText={val => {
          setValue(val.toUpperCase());
        }}
      />
    </View>
  );
}
