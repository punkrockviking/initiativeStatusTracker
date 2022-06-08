import React, { Component } from 'react'
import StatusList from './StatusList'
import Button from './styledComponents/Button'

class Character extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initScore: 1,
      charName: 'name',
      teamColor: 'green',
      statusEffects: [],
      concentrate: false,
      showEffects: false,
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
    this.handleAddStatusClick = this.handleAddStatusClick(this)
  }

  
  
  // class StatusObj {
  //   constructor(name='new status', duration='1', unit='turns') {
  //     this.name = name,
  //     this.duration = parseInt(duration),
  //     this.unit = unit
  //   }
  // }

  // addStatus() {
  //   let newStatusItems = statusItems
  //   const newItem = new StatusObj()
  //   newStatusItems.push(newItem)
  //   setStatusItems(newStatusItems)
  // }

  handleAddStatusClick() {
    // event.preventDefault()
    // console.log(this.state.statusEffects)
    const { statusEffects } = this.state.statusEffects
    let newStatusItems = this.state.statusEffects
    const newItem = {
      name: 'new status',
      duration: 1,
      unit: 'turns',
    }
    newStatusItems.push(newItem)
    
    this.setState({
      statusEffects: newStatusItems
    })
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
                defaultValue={this.state.charName}
                type="string"
                name="charName"
              />
            </label>
            <div>
              Initiative
                <input
                defaultValue={this.state.initScore}
                type="number"
                name="initScore"
                min="1"
                max="30"
              />
            </div>
            <label>
              Team
              <input
                defaultValue={this.state.teamColor}
                type="string"
                name="teamColor"
              />
            </label>
            <label>
              <input type="checkbox" />
              Concentration
            </label>
          </form>
          <div>
            <Button onClick={this.handleAddStatusClick} >
              Status Effects add:
            </Button>
            <StatusList statusList={this.state.statusEffects} />
          </div>
        </div>
      </div>
    )
  }
};

export default Character