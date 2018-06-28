import React, {Component} from 'react'
import {SafeAreaView, ScrowView, Text, Image, TextInput, Button, View, StyleSheet, KeyboardAvoidingView, Alert} from 'react-native'


const img = require('../assets/TodoList.png')

export default class Register extends Component{
  constructor(props){
    super(props);

    this.state = {
      email: props.email,
      password: ''
    }
  }

  render(){
    return (
      <View style={styles.main}>
          <KeyboardAvoidingView behavior='padding'>
            <View style={styles.topView}>
              <Image source={img} style={styles.img} />
              <Text style={styles.title}>Registering new User</Text>
            </View>
            <View style={styles.bottomView}>
              <TextInput placeholder='Email'
                style={styles.textInput}
                autoCapitalize={'none'}
                keyboardType={'email-address'}
                value={this.state.email}
                onChangeText={ (text) => this.setState({email: text}) } />
              <TextInput placeholder='Password'
                style={styles.textInput}
                secureTextEntry={true}
                onChangeText={ (text) => this.setState({password: text}) } />
              <Button title='Register User'
                onPress={() => Alert.alert(`Email: ${this.state.email} \nSenha: ${this.state.password}`)}/>
            </View>
          </KeyboardAvoidingView>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column'
  },
  textInput: {
    marginBottom: 20
  },
  topView:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 50,
    paddingBottom: 50,
  },
  bottomView:{
    flexDirection: 'column',
    paddingRight: 20,
    paddingLeft: 20
  },
  img: {
    width: 50,
    height: 50
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});
