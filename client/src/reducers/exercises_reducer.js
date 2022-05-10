const exercises_reducer = (state,action) => {

    if (action.type === 'FETCH_EXERCISES') {
        return {...state,exercises:action.payload}
    }

    if (action.type === 'FETCH_EXERCISES_ERROR') {
        console.log(action.type);
        return {...state};
    }

}

export default exercises_reducer;