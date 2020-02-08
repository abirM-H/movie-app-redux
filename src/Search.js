import React, { Component } from "react";
import RatingStars from "./RatingStars";
import {connect} from "react-redux"
import {searchMovie} from "./actions/action"



 class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
      rateUser:0
    };
  }

  searchMovie = event => {

      this.props.search(event.target.value)
     
    
  };

  rateMovie=x=>{
    this.setState({
      rateUser:x
    }, ()=>{this.props.searchRating(this.state.rateUser)})
  }


  render() {
    return (
      <div>
      
        <input type="text" onChange={this.searchMovie} />
        <RatingStars rate={this.state.rateUser} searchRate={this.rateMovie}/>
      
      </div>
    );
  }
}
const mapDispatchToProps=dispatch=>{
  return{
    search:term=>dispatch(searchMovie(term))
  }
}
export default connect(null, mapDispatchToProps)(Search)
