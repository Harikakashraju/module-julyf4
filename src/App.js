import React from 'react';
import { BrowserRouter as Router, Route, Switch,Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import HomePage from './Components/HomePage';
import ItemDetailPage from './Components/ItemDetailPage';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        {/* <Switch> */}<Routes>
          <Route exact path="/"  Component={HomePage} />
          <Route path="/item/:id" Component={ItemDetailPage} />
        {/* </Switch> */}</Routes>
      </Router>
    </Provider>
  );
};

export default App;

