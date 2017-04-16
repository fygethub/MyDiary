import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {selectReddit, fetchPostsIfNeeded, invalidateReddit } from '../../../redux/action';
import Picker from '../asyncLoade/Picker'
import Posts from '../asyncLoade/Posts'

class AsyncLoader extends Component{
    static propTypes = {
        selectedReddit: PropTypes.string.isRequired,
        posts: PropTypes.array.isRequired,
        isFetching: PropTypes.bool.isRequired,
        lastUpdated: PropTypes.number,
        dispatch: PropTypes.func.isRequired,
    }


    componentDidMount() {
        const { dispatch, selectedReddit } = this.props;
        dispatch(fetchPostsIfNeeded((selectedReddit)))
    }


    componentWillReceiveProps(nextProps) {
        if(nextProps.selectedReddit !== this.props.selectedReddit){
            const { dispatch, selectedReddit } = nextProps;
            dispatch(fetchPostsIfNeeded(selectedReddit))
        }
    }

    handleChange = nextReddit => {
        this.props.dispatch(selectReddit(nextReddit))
    }

    handleRefreshClick = e => {
        e.preventDefault();

        const { dispatch, selectedReddit } = this.props;
        dispatch(invalidateReddit(selectedReddit))
        dispatch(fetchPostsIfNeeded(selectedReddit))
    }

    render() {
        const { selectedReddit, posts, isFetching, lastUpdated } = this.props;
        const isEmpty = posts.length === 0;
        return (
            <div>
                <Picker value={selectedReddit}
                        onChange={this.handleChange}
                        options={['reactjs','frontend','vuejs']}
                />
                <p>
                    {
                        lastUpdated &&
                            <span>
                               Last update at { new Date(lastUpdated).toLocaleTimeString()}
                                {' '}
                               </span>
                    }
                    {
                        !isFetching &&
                        <a href="#"
                           onClick={this.handleRefreshClick}
                        >
                            Refresh
                        </a>
                    }
                </p>
                {
                    isEmpty ?
                        (isFetching ? <h2>Loading ... </h2> : <h2>Empty.</h2>)
                        : <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                            <Posts posts={posts} />
                        </div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { selectedReddit, postsByReddit } = state;
    const {
        isFetching,
        lastUpdated,
        items: posts,
    } = postsByReddit[selectedReddit] || {
        isFetching: true,
        items: []
    }

    console.log(posts);

    return {
        selectedReddit,
        posts,
        isFetching,
        lastUpdated
    }
}

export default connect(mapStateToProps)(AsyncLoader)














