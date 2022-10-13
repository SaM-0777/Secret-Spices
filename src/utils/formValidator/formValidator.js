import phoneUtil from 'google-libphonenumber';

const regularExpression = {
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    username: /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/,
    password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
}

export const validateEmail = (email) => {
    if (email.match(regularExpression.email)) return true
    else return "This email is invalid"
}

export const validatePhoneNumber = (phone) => {
    const PNF = phoneUtil.PhoneNumberUtil.getInstance()
    const isValid = PNF.isValidNumber(phone)

    if (isValid) return true
    else return "Invalid phone number"
}

export const validateUsername = (username) => {
    if (username.match(regularExpression.username)) return true
    else return "Invalid username"
}

export const validatePassword = (password) => {
    if (password.match(regularExpression.password)) return true
    else return "Invalid Password"
}

