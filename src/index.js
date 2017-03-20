import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';
import injectTapEventPlugin from 'react-tap-event-plugin';
//AppContainer 是一个 HMR 必须的包裹(wrapper)组件
import './style/reset.css';

import  RouteConfig from './components/App';

injectTapEventPlugin();

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component/>
        </AppContainer>,
        document.getElementById('root')
    )
}

render(RouteConfig);

//模块热替换的 API
if(module.hot) {
    module.hot.accept('./components/App', () =>
        render(RouteConfig)
    );
}

