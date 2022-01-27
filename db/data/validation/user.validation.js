export const userValidation = ( userObj ) => {
    const whiteSpaceCheck = /\s/;
    const numbersCheck = /\d/;
    const specialCharacterCheck = /[^A-Za-z0-9]/;
    const {firstName , lastName , address , postCode , email , mobile , dob} = userObj;

    const checkFirstName = (firstName) => {
        if(!firstName || firstName.length < 3){
            const errMsg = "First Name Minimum of 3 Characters";
            userObj.msg = errMsg;
            return userObj;
        }else if(firstName.length > 24){
            const errMsg = "First Name Maximum of 24 Characters";
            userObj.msg = errMsg;
            return userObj;
        }else if(whiteSpaceCheck.test(firstName)){
            const errMsg = "First Name must not have whitespaces";
            userObj.msg = errMsg;
            return userObj;
        }else if(numbersCheck.test(firstName)){
            const errMsg = "First Name must not have numbers";
            userObj.msg = errMsg;
            return userObj;
        }else if(specialCharacterCheck.test(firstName)){
            const errMsg = "First Name must not have special characters";
            userObj.msg = errMsg;
            return userObj;
        }else{
            return firstName;
        }      
    }
    checkFirstName(firstName)

    const checkLastName = (lastName) => {
        if(!lastName || lastName.length < 3){
            const errMsg = "Last Name required Minimum of 3 Characters";
            userObj.msg = errMsg;
            return userObj;
        }else if(lastName.length > 24){
            const errMsg = "Last Name Maximum of 24 Characters";
            userObj.msg = errMsg;
            return userObj;
        }else if(whiteSpaceCheck.test(lastName)){
            const errMsg = "Last Name must not have whitespaces";
            userObj.msg = errMsg;
            return userObj;
        }else if(numbersCheck.test(lastName)){
            const errMsg = "Last Name must not have numbers";
            userObj.msg = errMsg;
            return userObj;
        }else if(specialCharacterCheck.test(lastName)){
            const errMsg = "Last Name must not have special characters";
            userObj.msg = errMsg;
            return userObj;
        }else{
            return lastName;
        }      
    }
    checkLastName(lastName)

    const checkAddress = (address) => {
        if(!address){
            return userObj.address = null;
        }else if(specialCharacterCheck.test(address)){
            const errMsg = "Address must not have special characters";
            userObj.msg = errMsg;
            return userObj;
        }else if(address.length > 24){
            const errMsg = "Address needs to be less than 24 characters";
            userObj.msg = errMsg;
            return userObj;
        }else{
            return address;
    
        }
    }
    checkAddress(address);

    const checkPostCode = (postCode) => {
        if(!postCode){
            return userObj.postCode = null;
        }else if(specialCharacterCheck.test(postCode)){
            const errMsg = "Post Code must not have special characters";
            userObj.msg = errMsg;
            return userObj;
        }else if(postCode.length > 24){
            const errMsg = "Address needs to be less than 24 characters";
            userObj.msg = errMsg;
            return userObj;
        }else{
            return postCode;
    
        }
    } 
    checkPostCode(postCode);

    const checkEmail = (email) => {
        if(!email){
            return userObj.email = null;
        }else{
            return email;
        }
    }
    checkEmail(email);

    const checkMobile = (mobile) => {
        if(!mobile){
            return userObj.mobile = null;
        }else{
            return mobile;
        } 
    }
    checkMobile(mobile);

    const checkDateOfBirth = (dob) => {
        if(!dob){
            return userObj.dob = null
        }else if(!numbersCheck.test(dob)){
            const errMsg = "Date of Birth needs to be in a number format (i.e. 01012020)";
            userObj.msg = errMsg;
            return userObj;
        }else{
            return dob;
        }
    }
    checkDateOfBirth(dob);

    return userObj;
}