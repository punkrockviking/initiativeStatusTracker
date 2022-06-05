import React, { Component } from 'react'
import StatusList from './StatusList'
// import Button from './styledComponents/Button'

class Character extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initScore: 1,
      charName: 'name',
      teamColor: 'green',
      charStatus: ['Stunned', 'Prone', 'Frightened', 'Nerf Herder'],
      concentrate: false,
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }

  
  
  
  handleOnChange(event) {
    event.preventDefault()
    const { name, value } = event.target

    this.setState({
      [name]: value
    })
  }

  handleOnSubmit(event) {
    event.preventDefault()
  }

  
  render() {
    return (
      <div>
        <div>
          <form
            onChange={this.handleOnChange}
            onSubmit={this.handleOnSubmit}
          >
            <label>
              Name
              <input 
                value={this.state.charName} 
                type="string"
                name="charName"
              />
            </label>
              <div>
                Initiative
                <input 
                  value={this.state.initScore}
                  type="number"
                  name="initScore"
                  min="1"
                  max="30"
                />
              </div>
            <label>
              Team
              <input 
                value={this.state.teamColor} 
                type="string"
                name="teamColor"
              />
            </label>
            <label>
              <StatusList statusList={this.state.charStatus} />
            </label>
          </form>
          
        </div>
      </div>
    )
  }
};

export default Character