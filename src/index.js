import React from 'react';
import { render } from "react-dom";
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";
const store = configureStore();

render(
<ReduxProvider store={store}>
    <Router> 
        <App />
    </Router>
</ReduxProvider>, document.getElementById('root'));

serviceWorker.unregister();
