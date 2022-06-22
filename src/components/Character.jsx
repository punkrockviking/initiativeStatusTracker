import React, { Component } from 'react'
import StatusList from './StatusList'
import StatusEffect from './StatusEffect'
import Button from './styledComponents/Button'
import Dropdown from './Dropdown'

const colorOptions = [
  {
    label: 'Green Team',
    value: 'green'
  },
  {
    label: 'Red Team',
    value: 'red'
  },
  {
    label: 'Blue Team',
    value: 'blue'
  }
]

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
    this.addStatus = this.addStatus.bind(this)


  }





  addStatus() {
    class StatusObj {
      constructor(/*index, */name='new status', duration='1', unit='turns') {
        // this.index = index,
        this.name = name,
        this.duration = parseInt(duration),
        this.unit = unit
        // add a unique identifier to use as key and reference to delete later on using the remove button
      }
    }
    // const { statusEffects } = this.state
    let newStatusItems = this.state.statusEffects
    // const newStatusIndex = statusEffects.length > 0 ? statusEffects.length - 1 : 0
    const newItem = new StatusObj()
    newStatusItems.push(newItem)
    try {
      this.setState({
      statusEffects : newStatusItems
    })
    } 
    catch(error) {
      console.error(error)
    }
    
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

    const effectsButtonText = this.state.showEffects ? 'Hide Status Effects' : 'Show Status Effects';

    return (
      <div>
        <Button onClick={() => console.log(this.state)} >
          Log State
        </Button>
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
            <Dropdown options={colorOptions} />
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
            <Button onClick={() =>
              this.setState({
                showEffects: !this.state.showEffects
              })}
            >
              {effectsButtonText}
            </Button>
            {this.state.showEffects && (<div><StatusList statusList={this.state.statusEffects} /> <Button onClick={this.addStatus} >Add Status</Button></div>)}
          </div>
        </div>
      </div>
    )
  }
};

export default Character