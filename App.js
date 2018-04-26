/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  TextInput,
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import { store } from './src/reducers/store';
//import { Fancy } from './src/components/Fancy';  
//import { Reddit } from './src/components/Reddit';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: ''
    };
  }

/*  componentWillMount() {
    fetch('http://192.168.0.105:3000/todos', {
      headers: {
        Accept: 'application/json'
      }
    })
    .then(res => res.json())
    .then(todos => this.setState({ todos }));
  }*/

  handleChange(text) {
    this.setState({ newTodo: text });
    console.log(this.state.newTodo);
  }

  handlePress() {
    fetch('http://192.168.0.105:3000/todos', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.newTodo
      })
    })
    .then(res => res.json())
    .then(todo => {
      const todos = [todo, ...this.state.todos];
      this.setState({ todos, newTodo: '' });
    });


    const todos = [...this.state.todos, this.state.newTodo];
    this.setState({ todos, newTodo: '' });
  }

  render() {
    return (
//    <Fancy />
// <Reddit />
//    <Provider store={store}>
      <View>
        
        <View style={styles.container}>
      
        <View style={styles.form}>
          <TextInput 
          value={this.state.newTodo} 
          onChangeText={this.handleChange.bind(this)} 
          style={styles.input}
          />
          <TouchableOpacity
          onPress={this.handlePress.bind(this)}
          style={styles.button} 
          >
            <Text style={styles.buttonText}>Press</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.todos}>
        {this.state.todos.map((todo, i) => (
            <Text style={styles.todo} key={i}>{todo.name}</Text>
            ))}
        </View>
      </View>
      </View>

//    </Provider>
    
    );
  }
}

export default App;

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
  },
  input: {
    flex: 0.7,
    fontSize: 24,

  },
  button: {
    flex: 0.3,
    borderWidth: 1,
    height: 50,
    borderColor: 'blue',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    padding: 20
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  todos: {
    marginTop: 60,
  },
  todo: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    marginBottom: 10,
    fontSize: 24
  }
});
