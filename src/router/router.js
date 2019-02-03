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
            <Route exact path="/2018-2019/dcs/dev_186" component={athleteList}/>
            <Route path="/2018-2019/dcs/dev_186/filterAthletes" component={filterAthelets}/>
            <Route path="/2018-2019/dcs/dev_186/updateAthlete" component={updateAthlete}/>
        </React.Fragment>
    )
}

export default ReactRouter
