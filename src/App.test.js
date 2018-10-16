import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import reducer from './reducers/reducers'
import { createStore , applyMiddleware} from 'redux'
import thunk from 'redux-thunk';

it('renders without crashing', () => {
  const store = createStore(
    reducer,
    applyMiddleware(thunk)
  )
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}>
            <App />
        </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
