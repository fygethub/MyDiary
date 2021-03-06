import React,{ Component } from 'react';
import styles from '../../style/content.css'
import pureRender from 'pureRender';
import renderLog from 'renderLog';
import CardList from './CardList';
import TodoApp from './TodoApp';
@pureRender
@renderLog
class Content extends Component {

    render(){
        return (
            <section className={styles.section}>
                <CardList/>
                <TodoApp/>
            </section>
        )
    }
}

export default Content;