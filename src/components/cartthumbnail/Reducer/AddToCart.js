
export const AddToCart = (state = [],action) => {
    switch(action.type) {
        case "addItem" : {
            console.log("ACTION DATA",action.data);
            const existedItem = state.find(item => item.key === action.data.key);
            console.log("ACTION DATA KEY",action.data.key);
            if (existedItem) {
                console.log("ACTION DATA",existedItem);
                if(existedItem.color === action.data.color && existedItem.size === action.data.size){
                    existedItem.quantity += 1;
                    return state.map(item => {
                        if (item.key === existedItem.key) {
                            return existedItem;
                        }
                        return item;
                    })
                } else {
                    action.data.key = action.data.key +15;
                    action.data.quantity =1;
                    return [...state,action.data]
                }

            } else {
                action.data.quantity = 1;
                return [...state, action.data]
            }
        }
        case "CLEAR_DATA" : {
            state.length = 0;
            return [];
        }
        case "INCREMENT" : {
            const findItem = state.find(item => item.key === action.data.id);
            findItem.quantity+=1;
            return state.map(item=>{
                if(item.key === action.data.id){
                    return findItem;
                }
                return item;
            })

        }
        case "DECREMENT" : {
            const findItem = state.find(item => item.key === action.data.id);
            findItem.quantity-=1;
            return state.map(item=>{
                if(item.key === action.data.id){
                    return findItem;
                }
                return item;
            })

        }

        case "DELETE_ITEM" : {
            const findIndex = state.findIndex(item=>item.key===action.id)
            return [...state.slice(0,findIndex),
                ...state.slice(findIndex+1,state.length)
            ];
        }

        case "UPDATE_CART":{
            const findValue = state.find(item => item.key === action.data.id);
            console.log("FIND VALUE",findValue)
            findValue.size = action.data.size;
            findValue.color = action.data.color;
            return state.map(item => {
                if(item.key === action.data.id){
                    return findValue;
                }
                return item;
            })
        }
        case "CLEAR" : {
            state.length = 0;
            return []
        }
        default:{
            return state;
        }
    }
}

