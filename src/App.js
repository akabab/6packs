import React, { Component } from 'react'
import { db } from './firebase'

class App extends Component {

  state = {
    inputValue: '',
    todos: []
  }

  handleSubmit = e => {
    e.preventDefault()

    const todo = {
      value: this.state.inputValue,
      quantity: 1
    }

    db.collection('todos').doc(todo.value).set(todo)
  }

  handleChange = e => {
    this.setState({ inputValue: e.target.value })
  }

  componentDidMount() {
    // update state when 'todos' collection changes
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
        <h2>shopping list</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
          <input type="submit" value="add" />
        </form>
        <div>
          { this.state.todos.map((todo, i) =>
            <ul key={i}>
              <li>
                <button onClick={e => db.collection('todos').doc(todo.value).update({ quantity: todo.quantity - 1 })}>-</button>
                <span>( {todo.quantity} )</span>
                <button onClick={e => db.collection('todos').doc(todo.value).update({ quantity: todo.quantity + 1 })}>+</button>
                <span> {todo.value} </span>
                <button onClick={e => db.collection('todos').doc(todo.value).delete()}>x</button>
              </li>
            </ul>) }
        </div>
      </div>
    )
  }
}

export default App
