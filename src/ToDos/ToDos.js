import React, { Fragment } from 'react'
import {deleteToDo} from '../actions/index'
import {editToDo} from '../actions/index'
import { connect} from 'react-redux'

const ToDos = (props) => props.todos.map(todo => (
        <Fragment key={todo._id}>
            <h1> {todo.text}</h1>
            <button onClick={() => props.deleteToDo(todo._id)}>DELETE</button>
            <button onClick={() => props.editToDo(todo._id)}>EDIT</button>
            <hr />
        </Fragment >
    ))

const f1 = state => ({
    todos:state.todos,
    text: state.text,
    ID: state.ID
})

const f2 = dispatch => ({
    deleteToDo : (id) => dispatch(deleteToDo(id)),
    editToDo: (id) => dispatch(editToDo(id))
})

export default connect(f1, f2)(ToDos)