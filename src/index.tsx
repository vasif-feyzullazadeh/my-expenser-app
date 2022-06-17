import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import 'antd/dist/antd';

import rootReducer from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = createStore(rootReducer, applyMiddleware(thunk));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
