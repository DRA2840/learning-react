import React, {Component} from 'react'

import {View, StyleSheet} from 'react-native'

export default class App extends Component{

  render(){
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View ref='first' style={[styles.first, styles.common]}>
          <View style={styles.subview} />
          <View style={styles.subview} />
          <View style={styles.subview} />
        </View>
        <View ref='second' style={[styles.second, styles.common]}>
          <View style={styles.subview} />
          <View style={styles.subview} />
          <View style={styles.subview} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  first: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  second: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  common:{
    margin: 40,
    borderColor: 'red',
    borderWidth: 1
  },
  subview:{
    height: 50,
    width: 50,
    backgroundColor: 'blue'
  }
});
