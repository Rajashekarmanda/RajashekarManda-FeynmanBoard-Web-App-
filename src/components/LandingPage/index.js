// this is LandingPage like Homepage for this application

import {Component} from 'react' // importing class component from react...
import DashBoardPage from '../DashBoardPage'

import './index.css'

class LandingPage extends Component {
  // extending LandingPage by react class component
  state = {isLoading: true, userName: ''} // defining state we can store any data, which data can change by user action's

  onStoreUserName = event => {
    this.setState({
      userName: event.target.value, // When user enter he's name it will store in state by userName,
    })
  }

  getDashBoard = () => {
    // In this function we can write code for redirect to another page.
    console.log('hello')
    this.setState({isLoading: false}) // toggle the state value by user action's using setState method - When state update it will render again
  }

  render() {
    const {isLoading, userName} = this.state // we are accessing state in render function
    return (
      <div className="container">
        {isLoading ? ( // I used Ternary Operator to hide/unHide component's
          <>
            <h1 className="landing-heading">LANDING PAGE:</h1>
            <form
              className="user-details-container"
              onSubmit={this.getDashBoard} // when user enter he's name & press ENTER button it will call this function, sometimes we use submit button
            >
              <input
                type="text"
                id="userName"
                className="input-username"
                onSubmit={this.getDashBoard}
                placeholder="USERNAME"
                onChange={this.onStoreUserName}
              />
            </form>
          </>
        ) : (
          <DashBoardPage userName={userName} /> // i'm sending username like a prop to DashBoardPage Component
        )}
      </div>
    )
  }
}
export default LandingPage // exporting a Component - we can use it any rest components by importing
