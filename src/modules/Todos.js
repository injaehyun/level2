// 액션 타입 정의
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const DELETE_TODO = 'DELETE_TODO';

// 초기 상태
const initialState = {
  todos: [
    { id: 1, title: '리액트를 배워봅시다', memo: '어렵지만 배워봅시다. 도움이 되겠지...', completed: false }
  ]
};

// 액션 생성자
export const addTodo = (title, memo) => ({
  type: ADD_TODO,
  payload: { title, memo }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  id
});

// 리듀서
function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        id: state.todos.length + 1,
        title: action.payload.title,
        memo: action.payload.memo,
        completed: false
      };
      return { ...state, todos: [...state.todos, newTodo] };

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        )
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      };

    default:
      return state;
  }
}

export default reducer
