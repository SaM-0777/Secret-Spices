const backendUrl = "https://amethyst-bonobo-fez.cyclic.app/"


export async function createSaveRecipeRequest(userIdToken, userId, recipeId) {
    const url = backendUrl + "/api/user/usersavedrecipes/new"

    try {
        const response = await fetch(url, {
            'method': 'POST',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
                idtoken: userIdToken
            },
            body: {
                userId: userId,
                recipeId: recipeId
            }
        })
        const data = await response.json()
        console.log("CreateSaveRecipeRequest Data: ", data)
    } catch (error) {
        console.log("error sending post request for ToggleSaveRecipeRequest: ", error)
        return null
    }
};


export async function deleteSaveRecipeRequest(userIdToken, userId, recipeId) {
    const url = backendUrl + "/api/user/usersavedrecipes/delete"

    try {
        const response = await fetch(url, {
            'method': 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
                idtoken: userIdToken
            },
            body: {
                userId: userId,
                recipeId: recipeId
            }
        })
        const data = await response.json()
        console.log("DeleteToggleSaveRecipeRequest Data: ", data)
    } catch (error) {
        console.log("error sending post request for ToggleSaveRecipeRequest: ", error)
        return null
    }
};

