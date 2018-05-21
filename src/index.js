import React from 'react';
import ReactDOM from 'react-dom';
import RootContainer from "./containers/RootContainer/RootContainer";
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RootContainer />, document.getElementById('root'));
registerServiceWorker();
