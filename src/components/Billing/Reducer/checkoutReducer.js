export const BillingAddress = (state = [],action) => {
    switch(action.type){
        case "CHECKOUT":{
            console.log("Checkout Reducer Called");
            let tempData = action.data;
            return [...state,tempData];
        }
        case "CLEAR":{
            console.log("Checkout Reducer Called")
            state.length =0;
            return [];
        }
        default :{
            return state;
        }
    }
}