import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
<<<<<<< HEAD
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
=======
import Box from './Components/box/box';
import registerServiceWorker from './registerServiceWorker';

  



ReactDOM.render(
<Box />, document.getElementById('root'));
>>>>>>> 9b41f5d2ca39b0801908d6ce713960501cf8376f
registerServiceWorker();
