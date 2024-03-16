import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'
import './index.css'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class MyTasks extends Component {
  state = {taskName: '', tagName: tagsList[0].optionId, taskList: []}

  onSubmitForm = event => {
    event.preventDefault()
    const {taskName, tagName} = this.state
    const taskDetails = {
      id: uuidV4(),
      task: taskName,
      tag: tagName,
    }
    this.setState(prevState => ({
      taskList: [...prevState.taskList, taskDetails],
    }))
    this.setState({taskName: '', tagName: tagsList[0].optionId})
  }

  getTagTasks = value => {
    const {taskList} = this.state
    const filteredList = taskList.filter(each => each.tag === value)
    this.setState({taskList: filteredList})
  }

  getInput1 = event => {
    this.setState({taskName: event.target.value})
  }

  getInput2 = event => {
    this.setState({tagName: event.target.value})
  }

  render() {
    const {taskName, tagName, taskList} = this.state
    const isValue = taskList.length === 0
    return (
      <div className="bg-container">
        <form onSubmit={this.onSubmitForm} className="container1">
          <h1 className="heading1">Create a task!</h1>
          <div className="container2">
            <label className="label1" htmlFor="input1">
              Task
            </label>
            <input
              onChange={this.getInput1}
              value={taskName}
              className="input1"
              id="input1"
              type="text"
              placeholder="Enter the task here"
            />
            <label className="label1" htmlFor="input2">
              Tags
            </label>
            <select
              value={tagName}
              onChange={this.getInput2}
              className="input1"
              id="input2"
            >
              {tagsList.map(each => (
                <option key={each.optionId} value={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </select>
          </div>
          <div className="container3">
            <button className="btn1" type="submit">
              Add Task
            </button>
          </div>
        </form>
        <div className="container4">
          <h1 className="heading2">Tags</h1>
          <ul className="ul-container">
            {tagsList.map(each => (
              <li key={each.optionId} className="list-container">
                <button
                  onClick={() => this.getTagTasks(each.optionId)}
                  className="btn2"
                  type="button"
                >
                  {each.displayText}
                </button>
              </li>
            ))}
          </ul>
          <h2 className="heading2">Tasks</h2>
          {isValue ? (
            <div className="container5">
              <p className="heading2">No tasks Added yet!</p>
            </div>
          ) : (
            <ul className="ul-container2">
              {taskList.map(each => (
                <li key={each.id} className="list-container2">
                  <p className="p1">{each.task}</p>
                  <p className="p3">{each.tag}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default MyTasks
