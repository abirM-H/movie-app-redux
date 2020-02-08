import React, { Component } from 'react'
import {connect} from "react-redux"
import {editMovie} from "./actions/action"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
class EditMovie extends Component {
    constructor(props){
        super(props)
        this.state={
            rating:"",
            movieImage:"",
            movieName:"",
            movieType:"",
            movieDuration:"",
            modal : false
        }
    }
      showModal = () => {
          this.setState({
              modal : true
          })
      }
  toggle= () => {
           this.setState({
              modal : !this.state.modal
          })
  }
    handleChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value

        })
    }
    getMovie=()=>{

        this.setState({
            rating:this.props.movieEl.rating,
            movieImage:this.props.movieEl.movieImage,
            movieName:this.props.movieEl.movieName,
            movieType:this.props.movieEl.movieType,
            movieDuration:this.props.movieEl.movieDuration,
        }
        )
    }

    setMovie=(id)=>{
        let newMovie={rating:this.state.rating,
            movieImage:this.state.movieImage,
            movieName:this.state.movieName,
            movieType:this.state.movieType,
            movieDuration:this.state.movieDuration}
        this.props.edit(id,newMovie)
        
    }

    render() {
        return (
            <div>

<Button color="danger" onClick={()=>{this.getMovie();this.toggle()}}>Edit Movie</Button>
      <Modal isOpen={this.state.modal} toggle={this.toggle}  >
        <ModalHeader toggle={this.toggle}>Edit Movie</ModalHeader>
        <ModalBody>
              <input type="text" name="rating" 
        value={this.state.rating   }
         onChange={this.handleChange}
          placeholder="insert rating "/>
      
        <input type="text" name="movieImage" value={this.state.movieImage} onChange={this.handleChange} placeholder="insert image"/>
        <input type="text" name="movieName" value={this.state.movieName} onChange={this.handleChange} placeholder="insert title "/>
        <input type="text" name="movieDuration" value={this.state.movieDuration} onChange={this.handleChange} placeholder="insert duration"/>
        <input type="text" name="movieType" value={this.state.movieType} onChange={this.handleChange} placeholder="insert type"/>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={()=>{this.setMovie(this.props.id);this.toggle()}}>Save</Button>
          <Button color="secondary" onClick={this.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>

 {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={()=>this.getMovie(this.props.movieEl)}>
  Edit Movie
 </button>
 
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <input type="text" name="rating" 
        value={this.state.rating   }
        //  onChange={this.handleChange}
          placeholder="insert rating "/>
          <div>{this.state.movieDuration}</div>
        <input type="text" name="movieImage" value={this.state.movieImage} onChange={this.handleChange} placeholder="insert image"/>
        <input type="text" name="movieName" value={this.state.movieName} onChange={this.handleChange} placeholder="insert title "/>
        <input type="text" name="movieDuration" value={this.state.movieDuration} onChange={this.handleChange} placeholder="insert duration"/>
        <input type="text" name="movieType" value={this.state.movieType} onChange={this.handleChange} placeholder="insert type"/>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={()=>this.props.add(this.state)}>Add Movie</button>
      </div>
    </div>
  </div>
</div> */}
            </div>
        )
    }
}
const mapDispatchToProps= dispatch=>{
    return{
        edit: (id,movie)=>dispatch(editMovie(id,movie))
    }
}

export default connect(null,mapDispatchToProps)(EditMovie)
