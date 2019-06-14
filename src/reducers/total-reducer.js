const initialState ={
    total:0
}
const totalReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'addItem':{
            let tempState ={...state};
            let total = tempState.total+action.data.price;
            return {
                ...state,
                total
            }
        }
        case 'INCREMENT':{
            let tempState ={...state};
            let total = tempState.total+action.data.price;
            return {
                ...state,
                total
            }


        }
        case 'DECREMENT':{
            let tempState ={...state};
            let total = tempState.total-action.data.price;
            return {
                ...state,
                total
            }
        }
        case "CLEAR": {
            return state=initialState
        }

        default:{
            return state;
        }


    }
}
export default totalReducer;