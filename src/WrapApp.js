import React, { Component } from 'react'
import App from './App'
import withLoading from "./Loading";

const MovieswithLoading = withLoading(App);

export default class WrapApp extends Component {
    state={
        isLoading: true
    }

    componentDidMount = () => {
        setTimeout(() => {
          this.setState({
            isLoading: false
          });
        }, 3000);
      };
    
    render() {
        return (
            <div>
                <MovieswithLoading isLoading={this.state.isLoading} />
            </div>
        )
    }
}
