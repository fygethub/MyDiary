
 const isLoading = (state = false, action) => {
    switch (action.type){
        case 'START_LOADING':
            return action.isLoading;
        default :
            return state;
     }

}

 export default isLoading;