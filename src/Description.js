import React from 'react'
import {connect} from "react-redux"

const Description = (props) => {
        return (
        
       
        props.movieList.map((e,i)=>i===Number(props.match.params.id)&& <div key={i }><img src={e.movieImage} alt="."/> <h2>{e.movieName}</h2> <span>{e.movieType}</span></div> )
     
    )
}

const mapStateToProps=(state)=>{
   return{ movieList:state.listTab}
}

export default connect(mapStateToProps  ) (Description)
