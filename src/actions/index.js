import axios from 'axios'
import Swal from 'sweetalert2'
const url = "http://localhost:5959/api/todos/"

export const addToDo = (text, id) => {
    return async dispatch => {
        if (!text) {
            Swal('Oops...', "Task should have some text", 'error')
            return
          }
        if(!id) {
        await axios.post(url, { text })
        const { data: todos } = await axios.get(url)
        dispatch(addTodoSuccess(todos))

        } else {
            await axios.put(url + id, { text})
            const { data: todos } = await axios.get(url)
            dispatch(addTodoSuccess(todos))
        }
    }
}

const addTodoSuccess = todos => ({
    type: 'ADD',
    todos
})
///////////////////////////////////////////////////////////////////////////////

const deleteToDoSuccess = todos => ({
    type: 'DELETE',
    todos
})

export const deleteToDo = id => {
    return async dispatch => {
        await axios.delete(url + id)
        const { data: todos } = await axios.get(url)
        dispatch(deleteToDoSuccess(todos))
    }
}


export const handleChange = text => ({
    type:'HANDLE_CHANGE',
    text
})


export const handleSubmit = text => ({
    type:'HANDLE_SUBMIT',
    text
})

export const editToDo = id => ({
    type:'EDIT_TODO',
    id
})