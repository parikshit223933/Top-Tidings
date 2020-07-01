import axios from 'axios';  

export const homeAction = () => {
    return (dispatch) => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=2f18a46c3eea4f1fb7380121f6d42f55`)
            .then(res => { //handle promise
                dispatch({ type: 'HOME_NEWS', payload: res.data.articles })
            })
    }
}

export const queryAction = (query) => {
    return (dispatch) => {
        axios.get(`https://newsapi.org/v2/top-headlines?q=${query}&language=en&apiKey=2f18a46c3eea4f1fb7380121f6d42f55`)
            .then(res => { //handle promise
                dispatch({ type: 'SEARCH_NEWS', payload: res.data.articles })
            })
    }
}

export const sourceAction = (srcID) => {
    return (dispatch) => {
        axios.get(`https://newsapi.org/v2/top-headlines?sources=${srcID}&apiKey=2f18a46c3eea4f1fb7380121f6d42f55`)
            .then(res => { //handle promise
                dispatch({ type: 'SOURCE_NEWS', payload: res.data.articles })
            })
    }
}

export const categoryAction = (ctgName) => {
    return (dispatch) => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${ctgName}&language=en&apiKey=2f18a46c3eea4f1fb7380121f6d42f55`)
            .then(res => { //handle promise
                dispatch({ type: 'CATEGORY_NEWS', payload: res.data.articles })
            })
    }
}