import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppContainer from './container';
import store from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import './stylesheets/index.css';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
    <Provider store={store}>
    <MuiThemeProvider>
      <AppContainer />
    </MuiThemeProvider>
  </Provider>, 
document.getElementById('root'));
registerServiceWorker();
