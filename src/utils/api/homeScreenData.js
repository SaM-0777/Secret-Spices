/*const axios = require("axios").default*/

export default async function getData() {
    const backendUrl = "https://secret-spices.herokuapp.com/api/user/recipe/display/all"
    
    try {
        const response = await fetch(backendUrl, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json'
            }
        })
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
    
}
