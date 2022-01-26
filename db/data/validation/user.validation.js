export const userValidation = ( userObj ) => {
    const whiteSpaceCheck = /\s/;
    const numberscheck = /\d/;
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
        }else if(numberscheck.test(firstName)){
            const errMsg = "First Name must not have numbers";
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
        }else if(numberscheck.test(lastName)){
            const errMsg = "Last Name must not have numbers";
            userObj.msg = errMsg;
            return userObj;
        }else{
            return lastName;
        }      
    }
    checkLastName(lastName)

    // const checkAddress = (address) => {
    //     return address;
    // }
    // checkAddress(address);

    // const checkPostCode = (postCode) => {
    //     return postCode;
    // } 
    // checkPostCode(postCode);

    // const checkEmail = (email) => {
    //     return email;
    // }
    // checkEmail(email);

    // const checkMobile = (mobile) => {
    //     return mobile;
    // } 
    // checkMobile(mobile);

    // const checkDateOfBirth = (dob) => {
    //     return dob;
    // }
    // checkDateOfBirth(dob);

    return userObj;
}