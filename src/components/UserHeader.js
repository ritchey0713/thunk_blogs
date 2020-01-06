import React, {Component} from "react"
import { connect } from 'react-redux'
import { fetchUser } from "../actions/index"

class UserHeader extends Component {

  componentDidMount(){
    this.props.fetchUser(this.props.userId)
  }

  render(){

    const { user } = this.props
    
    if(!user) {
      return (
        <div>loading...</div>
      )
    }

    return(
      <div className="header">
        {user.name}    
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find((user) => {
      return user.id === ownProps.userId
    })
  }
}

export default connect (mapStateToProps, { fetchUser })(UserHeader)