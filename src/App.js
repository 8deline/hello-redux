import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import reducer from './reducers'// a reducing function that returns the new state
import {createStore} from 'redux'
const initialState = {tech: "React"}
const store = createStore(reducer, initialState)
//createStore takes in arguments. a mandatory one is reducer
//creatiom of the store needs to be invoked with the reducer
// reducer is a reducing function wiith arguments state and action passed into the reducer using createsStore

//calling the getState method on the created store will return the current state of your application
class App extends Component {
  render() {
  return <HelloWorld tech= {store.getState().tech} />;

  }
} 
  
  

export default App;
