import React, { Component} from 'react'
import './App.css'
import ToDos from '../ToDos/ToDos'
import Input from '../Input/Input'

class App extends Component {
  render() {
    return (
      <>
        <Input/>
        <ToDos/>
      </>
    )
  }
}

export default App