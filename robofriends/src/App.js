import React, { Component } from 'react'
import CardArray from './CardArray'
import {robots} from './robots'
import Searchbox from './Searchbox'
import './App.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots, 
            Searchbox: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ Searchbox: event.target.value })
    }
    render(){
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.Searchbox.toLowerCase())
        })
        return (
            <div className = 'tc'>
                <h1>RoboFriends!</h1>
                <Searchbox searchChange ={this.onSearchChange}/>
                <CardArray robots = { filteredRobots } />
            </div>
        )
    }
    
}

export default App