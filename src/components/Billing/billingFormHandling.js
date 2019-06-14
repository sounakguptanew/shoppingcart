
const validateEmail = (value) => {
    let error;
    if (!value) {
        error = 'Email Field cannot be blank!!!';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Invalid email address';
    }
    return error;
}

const validateName = (value) => {
    let error;
    if (!value) {
        error = 'Name field cannot be blank!!!';
    }
    return error;

}
const validateZip=(value='')=>{
    let error;
    if (!value){
        error='Pincode cannot be blank!!!';
    }else if (value.length > 6){
        error="Invalid pincode!!!"
    }
    return error;
}

export {
    validateName,validateEmail,validateZip
}