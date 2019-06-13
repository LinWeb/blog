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

hljs.registerLanguage('javascript', javascript);  // javascript语法高亮

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
