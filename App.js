import {StyleSheet, Text, View, Pressable, ViewComponent} from 'react-native';
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
        <Pressable
          onPress={decrementCounter}
          style={[styles.button, styles.decrementButton, counter === 0 && styles.disabledButton]}
        >
          <Text style={styles.buttonText}>-</Text>
        </Pressable>
        <Pressable
          onPress={incrementCounter}
          style={[styles.button, styles.incrementButton]}
        >
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#05dddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  counterHead: {
    fontSize: 60,
  },
  counterText: {
    fontSize: 50,
  },
  buttonContainer: {
    flexDirection: 'row'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 10
  },
  incrementButton: {
    backgroundColor: 'green'
  },
  decrementButton: {
    backgroundColor: 'red'
  },
  buttonText: {
    fontSize: 24,
    color: 'white'
  },
  disabledButton: {
    backgroundColor: 'grey'
  }
});
