import React from 'react';
import { connect } from 'react-redux';
import { changeLoading } from '../../redux/action'
import Loading from './loading/Loading';


const mapStateToProps = (state, ownProps) => {
    return {
        isLoading: state.isLoading
    }
}


const mapStateToDispatch = (dispatch, ownProps) => ({
    onClose: (change) => {dispatch(changeLoading(change))}
})

const LoadingContainer = connect(
    mapStateToProps,
    mapStateToDispatch
)(Loading)

export default LoadingContainer;