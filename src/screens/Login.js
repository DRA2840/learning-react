import React, {Component} from 'react'
import {SafeAreaView, ScrowView, Image, TextInput, Button, View, StyleSheet, KeyboardAvoidingView, Alert} from 'react-native'


const img = require('../assets/TodoList.png')
export default class Login extends Component{

  constructor(props){
    super(props);

    this.state = {
      email: props.email,
      password: ''
    }
  }

  render(){
    return(
      <View style={styles.main}>
          <KeyboardAvoidingView behavior='padding'>
            <View style={styles.topView}>
              <Image source={img} />
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
              <Button title='Sign in'
                onPress={() => Alert.alert(`Email: ${this.state.email} \nSenha: ${this.state.password}`)}/>
            </View>
          </KeyboardAvoidingView>
      </View>
    );
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50
  },
  bottomView:{
    flexDirection: 'column',
    paddingRight: 20,
    paddingLeft: 20
  },
  img: {
    width: 200,
    height: 200
  }
});
