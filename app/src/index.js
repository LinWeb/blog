import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
import App from './router/index';
import { Provider } from 'react-redux'
import store from './store'
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/atom-one-light.css'
hljs.registerLanguage('javascript', javascript);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));





// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
