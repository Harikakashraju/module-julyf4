import axios from 'axios';

const FETCH_ITEMS_REQUEST = 'FETCH_ITEMS_REQUEST';
const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
const FETCH_ITEMS_FAILURE = 'FETCH_ITEMS_FAILURE';

const fetchItemsRequest = () => ({ type: FETCH_ITEMS_REQUEST });
const fetchItemsSuccess = (data) => ({ type: FETCH_ITEMS_SUCCESS, payload: data });
const fetchItemsFailure = (error) => ({ type: FETCH_ITEMS_FAILURE, payload: error });

const fetchItems = () => {
  return (dispatch) => {
    dispatch(fetchItemsRequest());
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        dispatch(fetchItemsSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchItemsFailure(error.message));
      });
  };
};

export { fetchItems };
