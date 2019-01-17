import { connect } from 'react-redux'
import Input from '../Input/Input'
import { addToDo } from '../actions/index'
import {handleChange} from '../actions/index'
import {handleSubmit} from '../actions/index'

const f1 = state => ({
    text: state.text,
    ID: state.ID
  })
  
const f2 = dispatch => ({
    handleChange : text => dispatch(handleChange(text)),
    addToDo: (text, id) => dispatch(addToDo(text,id))
  })

export default connect(f1,f2)(Input)