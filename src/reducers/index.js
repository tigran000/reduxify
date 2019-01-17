const initialState = {
    todos: [],
    ID: null,
    text: ''
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                todos:action.todos,
                text: '',
                ID: null
            }
        case 'DELETE':
            return {
                ...state,
                todos:action.todos
        }
        case 'HANDLE_CHANGE': 
            return {
                ...state,
                text: action.text
        }
        case 'EDIT_TODO':
            return {
                ...state,
                ID : action.id,
                text: state.todos.find(todo => todo._id === action.id).text
        }
        case 'INITIAL_REQUEST':
            return {
                ...state,
                todos:action.todos
        }
        default:
            return state
    }
}