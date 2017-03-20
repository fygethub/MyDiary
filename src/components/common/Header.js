import React ,{  Component } from 'react';
import styles from "../../style/header.css"

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import SvgIcon from 'material-ui/SvgIcon';
import renderLog from  'renderLog';
import pureRender from 'pureRender';

const _styles = {
    title: {
        cursor: 'pointer',
        textAlign: 'center',
        position: 'absolute',
        top: '0',
    },
    headerRight: {
        margin: '0 !important',
    },
    fontSizeBase: {
        fontSize: '12px !important',
    }

};

const MenuList = (props) => (
    <SvgIcon {...props} >
        <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
    </SvgIcon>
)

const HeaderRightMenu = (props) => (
    <span {...props}>save</span>
)

@pureRender
@renderLog
class  Header extends  Component {

    constructor(props){
        super(props);
        this.state = {
            index:1
        }
        this.handleTouchTap = this.handleTouchTap.bind(this);
    }

     handleTouchTap() {
         console.log('tap !');
    }

    render() {
        let { match } = this.props;
        const title = match.params.id || 'Home'
        return (
            <AppBar
                className={styles.header}
                title={ title }
                onTitleTouchTap={this.handleTouchTap}
                iconElementLeft={<IconButton><MenuList /></IconButton>}
                iconElementRight={<FlatButton label={<HeaderRightMenu style={_styles.fontSizeBase }/>} style={ _styles.headerRight } />}
                iconStyleLeft={{marginLeft: '-5px', marginRight: '36px'}}
            />
        )

    }
}

export  default Header;