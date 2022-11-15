const backendUrl = "https://secret-spices-test-api-twktq52o5a-uc.a.run.app"


export async function getHomeData() {
    const url = backendUrl + "/api/user/recipe/display/all"

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json'
            }
        })
        const data = await response.json()
        return data
    } catch (error) {
        return null
    }
};

export async function getAuthorDetailsData(authorId) {
    const url = `${backendUrl}/api/user/author/details/${authorId}`

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json'
            }
        })
        const data = await response.json()
        return data
    } catch (error) {
        return [null]
    }
};

export async function getRecipeDetailsData(recipeId) {
    const url = `${backendUrl}/api/user/recipe/details/${recipeId}`

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json'
            }
        })
        const data = await response.json()
        return data
    } catch (error) {
        return [null]
    }
};


export async function getCookbookDetailsData(cookbookId) {
    const url = `${backendUrl}/api/user/cookbook/details/${cookbookId}`

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json'
            }
        })
        const data = await response.json()
        return data
    } catch (error) {
        return [null]
    }
};


export async function getCurrentUser(userId) {
    const url = `${backendUrl}/api/owner/author/${userId}`

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json'
            }
        })
        const data = await response.json()
        return data
    } catch (error) {
        return [null]
    }
};


export async function getOwnerAuthorDetailsData(userId) {
    const url = `${backendUrl}/api/owner/author/details/${userId}`

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json'
            }
        })
        const data = await response.json()
        return data
    } catch (error) {
        return [null]
    }
};


export async function getAuthorSubscribersData(userId, authorId) {
    const url = `${backendUrl}/api/user/subscription/author/${authorId}/${userId}`

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json'
            }
        })
        const data = await response.json()
        return data
    } catch (error) {
        return null
    }
};

