import './index.css'

const TopicItem = props => {
  const {topicDetails} = props
  const {title, percentage} = topicDetails

  return (
    <li className="topic-item-container">
      <p className="topic-item">
        {title} : {percentage}
      </p>
    </li>
  )
}
export default TopicItem
