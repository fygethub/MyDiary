import React from 'react';
import ReactDOM from 'react-dom';

import './style/reset.css';

import  RouteConfig from './components/App';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

ReactDOM.render(
        <RouteConfig/>,
    document.getElementById('root')
)



