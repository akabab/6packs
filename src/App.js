import React, { Component } from 'react'

import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyA0d-9Xa0sIbn75OdH8EfKg2m_RxSVJORg",
  projectId: "todos-c769e",
  authDomain: "todos-c769e.firebaseapp.com",
  databaseURL: "https://todos-c769e.firebaseio.com",
  storageBucket: "todos-c769e.appspot.com",
}
firebase.initializeApp(config)

const db = firebase.firestore()
db.settings({ timestampsInSnapshots: true })

class App extends Component {

  state = {
    inputValue: '',
    todos: []
  }

  handleSubmit = e => {
    e.preventDefault()

    const value = this.state.inputValue

    db.collection('todos').doc(value).set({ value, quantity: 1 })
  }

  handleChange = e => {
    this.setState({ inputValue: e.target.value })
  }

  componentDidMount() {
    this.unsubscribe = db.collection('todos')
      .onSnapshot(snapshot => {
        const todos = []
        snapshot.forEach(doc => todos.push(doc.data()))

        this.setState({ todos })
      })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
          <input type="submit" value="add" />
        </form>
        <div>
          { this.state.todos.map((todo, i) =>
            <ul key={i}>
              <li>
                <span>({todo.quantity}) {todo.value} </span>
                <button onClick={e => db.collection('todos').doc(todo.value).delete()}>x</button>
              </li>
            </ul>) }
        </div>
      </div>
    )
  }
}

export default App
