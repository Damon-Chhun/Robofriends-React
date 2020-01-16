import React from 'react'
import CardArray from './CardArray'
import {robots} from './robots'
import Searchbox from './Searchbox'

const App = () => {
    return (
        <div className = 'tc'>
            <h1>RoboFriends!</h1>
            <Searchbox />
            <CardArray robots = { robots } />
        </div>
    )
}

export default App