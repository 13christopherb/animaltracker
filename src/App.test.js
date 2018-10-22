import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import reducer from './reducers/animals.reducer'
import thunk from 'redux-thunk';
import { store } from './helpers/store'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}>
            <App />
        </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
