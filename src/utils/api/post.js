const backendUrl = "https://amethyst-bonobo-fez.cyclic.app/"


export async function toggleSaveRecipeRequest(userIdToken, userId, recipeId) {
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
        console.log("ToggleSaveRecipeRequest Data: ", data)
    } catch (error) {
        console.log("error sending post request for ToggleSaveRecipeRequest: ", error)
        return null
    }
};

