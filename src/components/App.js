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
    Link
} from 'react-router-dom';



class App extends  Component {

    getChildContext() {
        return { muiTheme: getMuiTheme(darkBaseTheme) };
    }

    render(){
        return(
            <Router history={history}>
                <div className={ appStyle.app }>
                    <Header/>
                    <Route path="/:id" component={ Header }/>
                    <div className={contentStyles.section}>
                        <Route exact path="/" component={Content}/>
                        <Route path="/content" component={Content}/>
                        <Route path="/lovelist" component={LoveList}/>
                        <Route path="/location" component={Location}/>
                    </div>
                    <Bottom/>
                </div>
            </Router>

        )
    }
}

App.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

export  default  App;