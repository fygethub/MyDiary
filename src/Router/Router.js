import react, { Component } from 'react';
import { Router, Route, Redirect, IndexRoute, broserHistory, hashHistory } from 'react';

import App from '../components/App';

class Roots extends Component {
    render(){
        return (
            <div>{ this.props.children }</div>
        );
    }
}

const history = process.env.NODE_ENV !== 'production' ? broserHistory : hashHistory;

const Location = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../components/component/Location').default)
    }, Location);
}


const LoveLIst = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../components/component/LoveList').default)
    }, LoveLIst);
}

const Content = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../components/component/Content').default)
    }, Content);
}


const RouterConfig = (
    <Router history={history}>
        <Route path="/" component={Roots}>
            <IndexRoute component={App}/>
            <Route path={Location} getComponent={Location}/>
            <Route path={LoveLIst} getComponent={LoveLIst}/>
            <Route path={Content} getComponent={Content}/>
            <Redirect from='*' to='/'  />
        </Route>
    </Router>
);