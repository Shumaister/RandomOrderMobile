import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'


const WelcomeScreen = () => {
  const [counter, setCounter] = useState(10)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Contador: {counter}
      </Text>
      <TouchableOpacity style={styles.fabLocationBR}
        onPress={() => { setCounter(counter + 1) }}
      >
        <View style={styles.fab}>
          <Text style={styles.fabText}>+1</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.fabLocationBL}
        onPress={() => { setCounter(counter -1) }}
      >
        <View style={styles.fabMinius}>
          <Text style={styles.fabText}>-1</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 42,
    textAlign: 'center'
  },
  fabLocationBR: {
    position: 'absolute',
    bottom: 25,
    right: 25
  },
  fabLocationBL: {
    position: 'absolute',
    bottom: 25,
    left: 25
  },
  fab: {
    backgroundColor: 'green',
    borderRadius: 100,
    justifyContent: 'center',
    height: 75,
    width: 75
  },
  fabMinius: {
    backgroundColor: 'red',
    borderRadius: 100,
    justifyContent: 'center',
    height: 75,
    width: 75
  },
  fabText: {
    color: 'white',
    fontSize: 21,
    fontWeight: 'bold',
    alignSelf: 'center'
  }
})


export default WelcomeScreen
