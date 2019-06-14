export const billingAction = (data)  => {
    console.log("billing Action Called");
    return {
        type: "CHECKOUT",
        data
    }
}