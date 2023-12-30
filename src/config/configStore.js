// 스토어 설정 파일

import { createStore, combineReducers } from 'redux';
import reducer from '../modules/Todos';

const rootReducer = combineReducers({
  todos: reducer
});

const store = createStore(rootReducer);

export default store;
