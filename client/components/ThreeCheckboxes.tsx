import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Animated} from 'react-native';

const ThreeCheckboxes = ({list = [''], onPress = (index: number) => {}}) => {
  const [selected, setSelected] = useState(0); // Track the selected checkbox

  const handlePress = (index: number) => {
    setSelected(index); // Update the selected index
    onPress(index);
  };

  return (
    <View style={styles.container}>
      {list.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.checkboxContainer}
          onPress={() => handlePress(index)}>
          <View
            style={[styles.checkbox, selected === index && styles.checked]}
          />
          <Text style={styles.label}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  checkbox: {
    width: 28,
    height: 28,
    borderWidth: 2,
    borderColor: '#007BFF',
    borderRadius: 6,
    marginRight: 10,
    backgroundColor: '#FFF',
  },
  checked: {
    backgroundColor: '#007BFF',
    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  label: {
    fontSize: 18,
    color: '#000',
  },
});

export default ThreeCheckboxes;
