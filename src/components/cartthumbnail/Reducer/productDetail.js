export const productDetails  = (state = [],action) => {
    switch(action.type){
        case "PRODUCT_DATA":{
            return [...state,action.data]
        }
        case "DELETE" : {
            return []
        }
        default :{
            return state
        }
    }
}