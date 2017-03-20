import React,{  Component } from 'react';
import { Link } from 'react-router-dom';
export default class  Location extends Component {
    render() {
        return (
            <section>
                <h1> locatoion page</h1>
                <Link to="/lovelist">to LoveList</Link>
            </section>
        );
    }
}

