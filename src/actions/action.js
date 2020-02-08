import {ADD_MOVIE, DELETE_MOVIE,EDIT_MOVIE, SEARCH_MOVIE} from '../const/actionTypes'

export const addMovie=(newMovie)=>{
    return{
        type:ADD_MOVIE,
        payload:newMovie
    }
}

export const deleteMovie=(id)=>{
    return{
        type:DELETE_MOVIE,
        payload:id
    }
}

export const editMovie=(id,newMovie)=>{
    return{
        type:EDIT_MOVIE,
        payloadIndex:id,
        payloadNewMovie:newMovie
    }
}
export const searchMovie=(searchItem)=>{
    return{
        type:SEARCH_MOVIE,
        payload:searchItem
    }
}
