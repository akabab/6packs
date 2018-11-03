import React, { Component } from 'react'
import * as db from './db'
import './App.css'

const listId = window.location.pathname.split('/')[1] || '_'
const list = db.getList(listId)

const Item = ({ item }) =>
  <li>
    <button onClick={e => db.updateItem(item, { quantity: item.quantity - 1 })}>-</button>
    <span>( {item.quantity} )</span>
    <button onClick={e => db.updateItem(item, { quantity: item.quantity + 1 })}>+</button>
    <span className={item.archived ? 'line' : ''} onClick={e => db.updateItem(item, { archived: !item.archived })}> {item.value} </span>
    <button onClick={e => db.deleteItem(item)}>x</button>
  </li>

class App extends Component {

  state = {
    inputValue: '',
    items: []
  }

  handleSubmit = e => {
    e.preventDefault()

    db.addItem(list, this.state.inputValue)
  }

  handleChange = e => {
    this.setState({ inputValue: e.target.value })
  }

  componentDidMount() {
    // update state when 'items' collection changes
    this.unsubscribe = db.onListUpdate(list, items => this.setState({ items }))
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const items = this.state.items.sort((a, b) => a.value.localeCompare(b.value))

    return (
      <div className="App">
        <h2>Shopping list "{listId}"</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
          <input type="submit" value="add" />
        </form>
        <button onClick={() => db.deleteItems(items)}>clear</button>
        <div>
          <ul>{ items.map(item => <Item key={item.id} item={item} />) }</ul>
        </div>
      </div>
    )
  }
}

export default App
