const initialState = {
    main: {
        count: 0,
    }
}

const mainReducer = (state = {initialState}, action) => {
    switch(action.type){
        case "INCREMENT": 
            return {
                ...state,
                main : {
                    ...state.main,
                    count = count + action.payload
                }
            }
        default: return state   
    }
}

export default mainReducer