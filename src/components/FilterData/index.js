import './index.css'
import moment from 'moment'
import ReactScrollableFeed from 'react-scrollable-feed'


const FilterData = props => {
  const {allData} = props

  function moments(date) {
    return moment(date).fromNow()
  }

  return (
    <div className="allMessages">
      <ReactScrollableFeed>{allData.map(eachData =>
        eachData.sender === 'agent' ? (
          <li className="agentMessage">
            <div className="imageAndMessage">
              <img
                className="agentPic"
                src="https://p.kindpng.com/picc/s/69-691685_talk-to-a-media-destruction-expert-customer-service.png"
                alt="agent"
              />
              <p className="agent">{eachData.message}</p>
            </div>
            <p className="timeSince">{moments(eachData.createdAt)}</p>
          </li>
        ) : (
          <li className="userMessage">
            <div className="imageAndMessage">
              <p className="user">{eachData.message}</p>
              <img
                src="https://res.cloudinary.com/dnvq6te1w/image/upload/v1631864755/user_vptmlp.png"
                alt="user"
                className="userPic"
              />
            </div>
            <p className="timeSince">{moments(eachData.createdAt)}</p>
          </li>
        ),
      )}</ReactScrollableFeed>
    </div>
  )
}
export default FilterData
