import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import AddTopicPage from '../AddTopicPage'

import TopicItem from '../TopicItem'

import './index.css'

const initialTopicList = [
  {
    id: uuidv4(),
    title: 'abba',
    percentage: '10%',
  },
  {
    id: uuidv4(),
    title: 'baab',
    percentage: '30%',
  },
  {
    id: uuidv4(),
    title: 'LaLz',
    percentage: '70%',
  },
]

class DashBoardPage extends Component {
  state = {
    topicList: initialTopicList,
    isLoading: true,
  }

  onChangeComponentRender = () => {
    // console.log('ok')
    this.setState(prevState => ({
      isLoading: !prevState.isLoading,
    }))
    console.log('doe')
  }

  //   onUpdateList = (textTitle, textContent) => {
  //     console.log('clicked')
  //     const {topicList} = this.state
  //     const updatedList = {
  //       id: uuidv4(),
  //       title: textTitle,
  //       percentage: textContent,
  //     }
  //     this.setState({topicList: [...topicList, updatedList]})
  //   }

  render() {
    const {topicList, isLoading} = this.state
    const {userName} = this.props

    return (
      <>
        {isLoading ? (
          <div className="dashboard-container">
            <h1 className="dashboard-heading">DASHBOARD</h1>
            <div className="dashboard-add-container">
              <div className="add-topic-container">
                <h1 className="add-topic-heading">Add Topic</h1>
                <button
                  type="button"
                  className="add-topic-button"
                  onClick={this.onChangeComponentRender}
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                    alt="addImage"
                    className="add-image"
                  />
                </button>
              </div>
              <div className="topic-list-container">
                <h1 className="topic-list-heading">TopicList:</h1>
                <ul className="topic-items-container">
                  {topicList.map(eachTopic => (
                    <TopicItem topicDetails={eachTopic} key={eachTopic.id} />
                  ))}
                </ul>
              </div>
            </div>
            <p className="user-name">
              Welcome to Feynman Board Web Application Mr/Ms-:{'  '}
              <span className="user">{userName}</span>
            </p>
          </div>
        ) : (
          <AddTopicPage
            onChangeComponentRender={this.onChangeComponentRender}
            onUpdateList={this.onUpdateList}
          />
        )}
      </>
    )
  }
}
export default DashBoardPage
