import React,{  Component } from 'react';
import { Link } from 'react-router-dom';
export  default  class LoveList extends Component{
    render() {
        return (
            <div>
                <header> LOVE LIST </header>

                <Link to="/location">to location</Link>
            </div>
        )
    }
}