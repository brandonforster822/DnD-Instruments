const SEARCH_QUERY = "search/query"
const CLEAR_SEARCH = "search/clear"
const SEARCH_ONE = "search/one"


export const searchQuery = (listArr, count) => {
    return {
        payload: listArr,
        type: SEARCH_QUERY,
    }
}

export const clearSearch = () => {
    return {
        type: CLEAR_SEARCH,
    }
}

export const searchOne = (searchData) => {
    return {
        payload: searchData,
        type: SEARCH_ONE
    }
}

export const apiSearch = (searchString) => async (dispatch) => {
    const returnArray = []
    let count = 0
    const res = await fetch(`https://www.dnd5eapi.co/api`, {
        headers: {
            "Content-Type": "application/json",
        },
    })
    const data = await res.json()
    const urlArray = Object.values(data)
    urlArray.forEach(async url => {
        if (url !== "/api/backgrounds"){
            const arrayRes = await fetch(`https://www.dnd5eapi.co${url}`, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            const data = await arrayRes.json()
            data.results.map((result) => {
                if (result.index.includes(searchString)){
                    returnArray.push(result)
                }
                count += 1
                if (count === 1898){
                    dispatch(searchQuery((returnArray)))
                }
            })
        }
    })
}

export const returnOneSearch = (searchUrl) => async (dispatch) => {
    const res = await fetch(`https://www.dnd5eapi.co${searchUrl}`, {
        headers: {
            "Content-Type": "application/json",
        },
    })
    const data = await res.json()
    dispatch(searchOne(data))
}


const initialState = { countState: 0 }

const searchReducer = (state = initialState, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case SEARCH_QUERY:
            const allSearch = {}
            action.payload.forEach(item => {
                allSearch[item.index] = item
            })
            return {results: {...allSearch, ...state.results}}
        case CLEAR_SEARCH:
            newState = {}
            return newState
        case SEARCH_ONE:
            newState = {...state, result: action.payload}
            return newState
        default:
            return state
    }
}

export default searchReducer