import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/nav/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store';
import { loadPokemons} from './actionsCreators'

store.dispatch(loadPokemons());


/*BrowserRouter should be used whe you  have a server that will handle dynamic request
HashRouter should be userd for static websites*/
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>


  , document.getElementById('root'));
registerServiceWorker();
