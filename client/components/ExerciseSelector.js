import React from 'react';
import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native';

const exercisesCatalog = [
  { id: '1', name: 'Burpees' },
  { id: '2', name: 'HighKnees' },
  { id: '3', name: 'SquatRegularOverheadStatic' },
  { id: '4', name: 'Push-Up' },
  { id: '5', name: 'LungeFrontRight' },
  { id: '6', name: 'LungeFrontLeft' },
  { id: '7', name: 'Jefferson Curl' },
  { id: '8', name: 'Deadlift' },
  { id: '9', name: 'Burpee' },
  { id: '10', name: 'Mountain Climbers' },
  { id: '11', name: 'Sit-Up' },
  { id: '12', name: 'Leg Raises' },
  { id: '13', name: 'Russian Twists' },
  { id: '14', name: 'Bicycle Crunches' },
  { id: '15', name: 'Tricep Dips' },
  { id: '16', name: 'Shoulder Press' },
  // Add more exercises as needed
];

const ExerciseSelector = ({ selectedExercises, setSelectedExercises }) => {
  const toggleExercise = (exercise) => {
    if (selectedExercises.includes(exercise)) {
      setSelectedExercises(selectedExercises.filter(e => e !== exercise));
    } else {
      setSelectedExercises([...selectedExercises, exercise]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Exercises</Text>
      <FlatList
        data={exercisesCatalog}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={[styles.exerciseItem, selectedExercises.includes(item.name) && styles.selectedItem]}
            onPress={() => toggleExercise(item.name)}
          >
            <Text style={styles.exerciseText}>{item.name}</Text>
          </Pressable>
        )}
        showsVerticalScrollIndicator={false}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    maxHeight: 300, // Set a maximum height for the container
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  exerciseItem: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    borderRadius: 5,
  },
  selectedItem: {
    backgroundColor: '#FF6F61',
  },
  exerciseText: {
    fontSize: 18,
  },
  list: {
    flexGrow: 0, // Prevent the list from growing indefinitely
  },
});

export default ExerciseSelector;