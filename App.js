import {StyleSheet, Text, View, TouchableOpacity, ViewComponent} from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [counter, setCounter] = useState(0)

  const incrementCounter = () => {
    setCounter(counter + 1)
  }
  const decrementCounter = () => {
    if(counter > 0) {
      setCounter(counter - 1)
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.counterContainer}>
        <Text style={styles.counterHead}>Let's count some stuff!</Text>
        <Text style={styles.counterText}>{counter}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={incrementCounter}
          style={[styles.button, styles.incrementButton]}
        >
        <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={incrementCounter}
          style={[styles.button, styles.decrementButton, counter === 0 && styles.disabledButton]}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
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
  counterContainer: {

  },
  counterHead: {

  },
  counterText: {

  },
  buttonContainer: {

  },
  button: {

  },
  incrementButton: {

  },
  decrementButton: {

  },
  buttonText: {

  },
  disabledButton: {

  }
});
