import React from 'react'
import '../src/ListMovies.css'
import RatingStars from './RatingStars'
import {connect} from 'react-redux'
import {deleteMovie} from "./actions/action"
import EditMovie from './Edit'
import {Link} from "react-router-dom"




 function ListMovies(props) {
    return (
        <div className="top-container">
         {props.movieList
         .filter(e=>(e.movieName.toLowerCase().includes(props.searchMovie.toLowerCase()) /*&& e.rating>=filterRating*/ ) )
         .map((el,i)=>(
             <div className="container-movie" key= {i}>
                 <span><RatingStars  rate={el.rating}/></span>
                 <img  alt="." src={el.movieImage}/>
                 <span>{el.movieName}</span>
                 <span>{el.movieDuration}</span>
                 <span>{el.movieType}</span>
                 <button onClick={()=>props.delete(i)}>Delete</button>
                 <Link to ={`/description/${i}`}><button>Description</button></Link>
                 <EditMovie id={i} movieEl={el}/>
             </div>
         ))}
        </div>
    )
}
const mapStateToProps=(state)=>{
   return{ movieList:state.listTab,
   searchMovie:state.searchItem}
}
const mapDispatchToProps=(dispatch)=>{
    return{
        delete:(id)=>dispatch(deleteMovie(id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps  )(ListMovies)
