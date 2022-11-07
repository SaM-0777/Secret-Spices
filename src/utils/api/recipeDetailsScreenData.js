/*const axios = require("axios").default*/

export default async function getRecipeDetailsData(recipeId) {
    const backendUrl = `https://secret-spices-test-api-twktq52o5a-uc.a.run.app/api/user/recipe/details/${recipeId}`

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