export const increment = (data) => {
    return {
        type: "INCREMENT",
        data
    }
}

export const decrement = (data) => {
    return{
        type : "DECREMENT",
        data
    }
}