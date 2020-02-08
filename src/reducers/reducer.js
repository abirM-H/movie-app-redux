import {ADD_MOVIE, DELETE_MOVIE,EDIT_MOVIE, SEARCH_MOVIE} from "../const/actionTypes"
import {tabListMovies} from '../const/data'

const initState={
listTab:tabListMovies,
searchItem:""}

const movieReducer=(state=initState,action)=>{
    switch(action.type){
        case ADD_MOVIE: 
        return {...state,listTab:[...state.listTab,action.payload] };
        case DELETE_MOVIE:
        return {...state,listTab:state.listTab.filter((e,i)=>i!==action.payload)}
        case EDIT_MOVIE:
        return {...state,listTab:state.listTab.map((e,i)=>i===action.payloadIndex?{...action.payloadNewMovie}:e)}
        case SEARCH_MOVIE:
        return {...state,searchItem:action.payload}
        default:
        return state
    }
}
export default movieReducer