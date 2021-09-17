import {Component} from 'react'
import FilterData from '../FilterData'
import './index.css'

const Data = [
  {
    message: 'hi user',
    createdAt: '2021-07-04T13:23:02.298Z',
    sender: 'agent',
    id: 1,
  },
  {
    message: 'How are you doing today',
    createdAt: '2021-10-14T13:23:02.298Z',
    sender: 'user',
    id: 2,
  },
  {
    message: 'I am good ,how about you',
    createdAt: '2021-09-14T13:23:02.298Z',
    sender: 'agent',
    id: 3,
  },
  {
    message: 'I am good thanks for asking',
    createdAt: '2021-09-14T13:23:02.298Z',
    sender: 'user',
    id: 4,
  },
  {
    message: 'How can I help you today ? ',
    createdAt: '2021-09-14T13:23:02.298Z',
    sender: 'agent',
    id: 5,
  },
]

let newCreateAt = ''
let newSender = ''
let newId = null
let newAllData = ''

class MainComponent extends Component {
  state = {allData: Data, newMessage: ''}



  messageChange = event => {
    this.setState({newMessage: event.target.value})
  }

  sendMessage = () => {
    const {allData, newMessage} = this.state
    if (newMessage.trim().length > 0) {
      newCreateAt = new Date()
      newSender = 'user'
      newId = allData.length + 1
      newAllData = [
        ...allData,
        {
          message: newMessage,
          createdAt: newCreateAt,
          sender: newSender,
          id: newId,
        },
      ]
      this.setState({allData: newAllData, newMessage: ''})
    }
  }

  pressedEnter = e => {
    if (e.key === 'Enter' && e.target.value.trim().length > 0) {
      const {allData, newMessage} = this.state
      newCreateAt = new Date()
      newSender = 'user'
      newId = allData.length + 1
      newAllData = [
        ...allData,
        {
          message: newMessage,
          createdAt: newCreateAt,
          sender: newSender,
          id: newId,
        },
      ]
      this.setState({allData: newAllData, newMessage: ''})
    }
  }

  render() {
    const {allData, newMessage} = this.state
    return (
      <div className="mainDiv">
          <h1>VB Customer Support</h1>
        <div className="unorderedList">
          <ul>
            <FilterData allData={allData} key={allData.id} />
          </ul>
        </div>

        <div className="inputAndButton">
          <input
            type="text"
            onChange={this.messageChange}
            onKeyDown={this.pressedEnter}
            value={newMessage}
            placeholder="enter your message here"
          />
          <button
            className="selectnone"
            onClick={this.sendMessage}
            type="button"
          >
            Send
          </button>
        </div>
      </div>
    )
  }
}
export default MainComponent
