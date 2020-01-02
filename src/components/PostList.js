import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from "../actions/index"

class PostList extends Component {

  componentDidMount() {
    this.props.fetchPosts()
  }

  renderList() {
    
  }

  render(){
    console.log(this.props.posts)
    return (
      <div>
        List
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts
  }
}

export default connect(
  mapStateToProps, 
  { 
    fetchPosts
   })(PostList)