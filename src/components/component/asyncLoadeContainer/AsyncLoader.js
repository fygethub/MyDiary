import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {selectReddit, fetchPostsIfNeeded, invalidateReddit } from '../../../redux/action';
import Picker from '../asyncLoade/Picker'
import Posts from '../asyncLoade/Posts'

class AsyncLoader extends Component{
    static propTypes = {
        selectedReddit: PropTypes.string.isRequired,
        Posts: PropTypes.array.isRequired,
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

}


















