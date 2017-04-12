import React,{ Component } from "react";
import appStyle from "../style/App.css";
import 'style/reset.css';
import contentStyles from '../style/content.css'
import Header from './common/Header';
import Content from "./component/Content"
import Bottom from './common/Bottom';
import Location from "./component/Location";
import LoveList from "./component/LoveList";

import darkBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom';

//const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;

console.log(process.env.NODE_ENV);


class App extends  Component {

    getChildContext() {
        return { muiTheme: getMuiTheme(darkBaseTheme) };
    }

    render(){
        return(
            <Router>
                <div className={ appStyle.app }>
                    <Route path="/" component={Header}/>
                    <div className={contentStyles.section}>
                        <Route exact path="/" component={Content}/>
                        <Route path="/lovelist" component={LoveList}/>
                        <Route path="/location" component={Location}/>
                    </div>
                    <Route path="/" exact render={() => <Bottom index="0"/>}/>
                    <Route path="/lovelist" render={() => <Bottom index="1"/>}/>
                    <Route path="/location" render={() => <Bottom index="2"/>}/>
                </div>
            </Router>
        )
    }
}

App.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

/*
*路由嵌套 问题不能和3.x版本一样使用 Route嵌套Route
**/

class  Roots extends Component {
    static  childContextTypes = {
        muiTheme: React.PropTypes.object.isRequired,
    }

    getChildContext() {
        return { muiTheme: getMuiTheme(darkBaseTheme) };
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
const RouteConfig =() => (
    <Router history={history}>
        <Roots>
            <div className={ appStyle.app }>
                <Route path="/" component={Header}/>
                <div className={contentStyles.section}>
                    <Route exact path="/" component={Content}/>
                    <Route path="/lovelist" component={LoveList}/>
                    <Route path="/location" component={Location}/>
                </div>
                <Route path="/" exact component={() => <Bottom index="0"/>}/>
                <Route path="/lovelist" component={() => <Bottom index="1"/>}/>
                <Route path="/location" component={() => <Bottom index="2"/>}/>
            </div>
        </Roots>
    </Router>
)

export  default  RouteConfig;
