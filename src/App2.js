/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.bigBlue}>Big Blue</Text>
        <Text style={styles.smallRed}>Small red</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bigBlue:{
    color: 'blue',
    fontSize: 50
  },
  smallRed:{
    color: 'red',
    fontSize: 5
  }
});
