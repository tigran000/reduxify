import { connect } from 'react-redux'
import { addToDo } from '../actions/index'
import { handleChange } from '../actions/index'
import React from 'react'
const Input = (props) => (
  <>
    <input onChange={(e) => props.handleChange(e.target.value)}
      value={props.text} />
    <button onClick={() => props.addToDo(props.text, props.ID)}>
      ADD
        </button>
  </>
)

const f1 = state => ({
  text: state.text,
  ID: state.ID
})

const f2 = dispatch => ({
  handleChange: text => dispatch(handleChange(text)),
  addToDo: (text, id) => dispatch(addToDo(text, id))
})

export default connect(f1, f2)(Input)