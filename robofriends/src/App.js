import React from 'react'
import CardArray from './CardArray'
import {robots} from './robots'

const App = () => {
    return (
        <div className = 'tc'>
            <CardArray robots = { robots } />
        </div>
    )
}

export default App