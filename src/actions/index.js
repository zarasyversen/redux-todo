//
// Actions are payloads of information that send data from your application to your store. 
// They are the only source of information for the store. You send them to the store using store.dispatch().
//

// Actions are plain JavaScript objects. 
// Actions must have a type property that indicates the type of action being performed. 
// Types should typically be defined as string constants.

// Other Consts
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

// Action Creators - functions that create actions.
let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

