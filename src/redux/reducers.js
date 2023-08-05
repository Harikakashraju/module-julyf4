import { combineReducers } from 'redux';

const itemsReducer = (state = { loading: true, items: [], error: '' }, action) => {
  switch (action.type) {
    case 'FETCH_ITEMS_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_ITEMS_SUCCESS':
      return { ...state, loading: false, items: action.payload, error: '' };
    case 'FETCH_ITEMS_FAILURE':
      return { ...state, loading: false, items: [], error: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  items: itemsReducer,
});

export default rootReducer;
