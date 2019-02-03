import React from 'react'
import {Route} from 'react-router-dom'
import athleteList from '../Components/athleteList'
import filterAthelets from '../Components/filterAthletes'
import updateAthlete from '../Components/updateAthlete'
import Header from '../Header'

const ReactRouter = () => {
    return(
        <React.Fragment>
            <Header/>
            <Route exact path="/" component={athleteList}/>
            <Route path="/filterAthletes" component={filterAthelets}/>
            <Route path="/updateAthlete" component={updateAthlete}/>
        </React.Fragment>
    )
}

export default ReactRouter
