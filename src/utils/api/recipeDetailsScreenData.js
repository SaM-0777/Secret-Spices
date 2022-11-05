/*const axios = require("axios").default*/

export default async function getRecipeDetailsData(recipeId) {
    const backendUrl = `https://secret-spices.herokuapp.com/api/user/recipe/details/${recipeId}`

    try {
        const response = await fetch(backendUrl, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json'
            }
        })
        const data = await response.json()
        return data
    } catch (error) {
        return error
    }
};