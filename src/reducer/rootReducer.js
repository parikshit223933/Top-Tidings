const initState = {
    headlines: []
}
  
const rootReducer = (state = initState, action) => {
    if(action.type === 'CATEGORY_NEWS'){
        return {
            ...state,
            headlines: action.payload
        }
    }
    
    else if(action.type === 'SOURCE_NEWS'){
        return {
            ...state,
            headlines: action.payload
        }
        
    }

    else if(action.type === 'SEARCH_NEWS'){
        return {
            ...state,
            headlines: action.payload
        }
    }

    else if(action.type === 'HOME_NEWS'){
        return {
            ...state,
            headlines: action.payload
        }
    }
    
    return state
}
  
export default rootReducer