import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const EditText = ({
  placeholder = '',
  value = '',
  onChangeText = (text: string) => {},
  editable = true,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.inputField]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        editable={editable}
        placeholderTextColor="#888"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: '100%',
  },
  inputField: {
    width: '100%',
    padding: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: 'white',
    color: 'black',
  },
});

export default EditText;
