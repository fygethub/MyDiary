import  React, { Component } from 'react';
import pureRender from 'pureRender';
import renderLog from 'renderLog';

import bottomStyle from 'style/bottom.css';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import SvgIcon from 'material-ui/SvgIcon';
import { grey500, greenA200} from 'material-ui/styles/colors';
import { Link } from 'react-router-dom';
console.log(bottomStyle)

const HomeIcon = (props) => (
    <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
);
const HeartIcon = (props) => (
    <SvgIcon {...props}>
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </SvgIcon>
)

@pureRender
@renderLog
class Bottom extends  Component {
    constructor(props){
        super(props);
        this.state = {
            selectedIndex: Number(this.props.index),
        };
        this.handleSelect = this.handleSelect.bind(this);
        console.log('constructor--------------------');
    }

    componentWillMount(){
        console.log('componentWillMount--------------');
    }



    handleSelect(index) {
        this.setState({
            selectedIndex: index,
        });
    }

    render(){
        let index = this.props.index || this.state.selectedIndex;
        index = Number(index);
        return(
            <Paper zDepth={1} className={bottomStyle.bottom}>
                <BottomNavigation selectedIndex={index}>
                    <BottomNavigationItem
                        icon={<Link to="/"><HomeIcon color={this.state.selectedIndex === 0 ? greenA200 : grey500 }/></Link> }
                        onTouchTap={() => this.handleSelect(0)}
                        label={ <Link to="/">Home</Link> }
                    />
                    <BottomNavigationItem
                        icon={<Link to="/lovelist"><HeartIcon color={this.state.selectedIndex === 1 ? greenA200 : grey500 }/></Link> }
                        onTouchTap={() => this.handleSelect(1)}
                        label={ <Link to="/lovelist">Favorite</Link> }
                    />
                    <BottomNavigationItem
                        icon={ <Link to="/location"><IconLocationOn color={this.state.selectedIndex === 2 ? greenA200 : grey500 }/></Link>}
                        onTouchTap={()=> this.handleSelect(2) }
                        label={ <Link to="/location">Position</Link> }
                    />
                </BottomNavigation>
            </Paper>
        )
    }

}

export default Bottom;