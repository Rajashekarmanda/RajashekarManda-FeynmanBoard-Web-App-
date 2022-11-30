import {Component} from 'react'

import './index.css'

class AddTopicPage extends Component {
  state = {
    textTitle: '',
    textContent: '',
  }

  onAddUserContent = event => {
    this.setState({textContent: event.target.value})
    console.log(event.target.value)
  }

  onAddUserTitle = event => {
    this.setState({textTitle: event.target.value})
    console.log(event.target.value)
  }

  onChangeComponentIs = () => {
    const {textTitle, textContent} = this.state
    const {onChangeComponentRender} = this.props
    onChangeComponentRender()
    // onUpdateList(textTitle, textContent)
    console.log('back')
  }

  render() {
    const {textTitle, textContent} = this.state

    return (
      <div className="add-topic-container-is">
        <h1 className="topic-heading">ADD TOPIC:</h1>
        <div className="topic-input-container">
          <div className="input-container-is">
            <h1 className="input-heading">Topic:</h1>
            <input
              type="text"
              className="topic-title-input"
              onChange={this.onAddUserTitle}
              value={textTitle}
            />
          </div>
          <div className="text-area-container">
            <input
              type="textArea"
              placeholder="Text Area"
              className="text-area-input-is"
              value={textContent}
              onChange={this.onAddUserContent}
            />
          </div>
        </div>
        <button
          type="button"
          className="button-back"
          onClick={this.onChangeComponentIs}
        >
          Back
        </button>
      </div>
    )
  }
}
export default AddTopicPage
