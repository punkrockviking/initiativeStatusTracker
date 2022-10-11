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
      teamColor: 'green', // style character block background to be this color
      statusEffects: [],
      concentrate: false,
      showEffects: false,
      count: 0,
    }

    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
    this.addStatus = this.addStatus.bind(this)
    this.onColorChange = this.onColorChange.bind(this)
    this.updateStatus = this.updateStatus.bind(this)
    this.deleteStatus = this.deleteStatus.bind(this)
    
  }

  
  
  updateStatus(id, key, value) {
    // find the status to update using the 'id' and set its state
    const index = this.state.statusEffects.findIndex(status => status.id === key)
    // dynamic key name with bracket notation
    // ex: [key] : value
    this.setState({[statusEffects[index].key]: value})
    // this
  }

  addStatus() {
    const curCount = this.state.count
    
    class StatusObj {
      constructor(/*index, */name='new status', duration='1', unit='turns') {
        // this.index = index,
        this.name = name,
        this.duration = parseInt(duration),
        this.unit = unit
        this.id = curCount
      }
    }
    let newStatusItems = this.state.statusEffects
    // const newStatusIndex = statusEffects.length > 0 ? statusEffects.length - 1 : 0
    const newItem = new StatusObj()
    newStatusItems.push(newItem)
    try {
      this.setState({
        statusEffects : newStatusItems,
        count: curCount + 1,
    })
    } 
    catch(error) {
      console.error(error)
    }
    
  }

  deleteStatus(key) {
    const newStatusItems = this.state.statusEffects.filter(status=>status.id !== key)
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

  onColorChange(colorOption) {
    this.setState({
      teamColor: colorOption
    })
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
            <Dropdown 
              options={['green', 'red', 'blue']} 
              selected={this.state.teamColor}
              onSelectedChange={this.onColorChange}
            />
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
            {this.state.showEffects && (<div><StatusList statusList={this.state.statusEffects} updateStatusState={this.udateStatus} /> <Button onClick={this.addStatus} >Add Status</Button></div>)}
          </div>
        </div>
      </div>
    )
  }
};

export default Character