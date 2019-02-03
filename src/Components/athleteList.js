import React, {Component} from 'react';
import Athlete from './athlete'

class athleteList extends Component
{
    constructor(props){
        super(props)
        this.state={athletes:[]}

      this.eachAthlete=this.eachAthlete.bind(this)
      this.nextID=this.nextID.bind(this)
      this.add=this.add.bind(this)
    }
    

    componentDidMount() {
        const url = 'https://young-athletes.herokuapp.com/getAllAthletes';
        fetch(url)
        .then(res => res.json())
        .then(data => data.map(item =>
        this.add({id: item.id, first_name: item.first_name, last_name: item.last_name, birth_date: item.birth_date, sport: item.sport})))
        .catch(err => console.error(err));
    }

// destructor + default values
    add({ event = null, id = null, first_name=null, last_name=null, birth_date=null, sport=null }) {
        console.log(event, id, first_name, last_name, birth_date, sport)
        this.setState(prevState => ({
        athletes: [
            ...prevState.athletes, {
            id: id !== null ? id : this.nextID(prevState.athletes),
            first_name: first_name,
            last_name: last_name,
            birth_date:birth_date,
            sport:sport
            }]
        }))
    }
    eachAthlete(item, i) {
        return (
          <div
            key={ `container${item.id}` }
            className="card"
            style={ { width: '18rem', marginBottom: '7px' } }
          >
            <div className="card-body">
              <Athlete
                index={ item.id }
              >
                { console.log(item) }
                
                <h5>name: { item.first_name } { item.last_name}</h5>
                <h5>id: {item.id}</h5>
                <h5>birthday: {item.birth_date}</h5>
                <h4>sport: </h4> <h5>sport name: {item.sport.sport_name}</h5>
                <h5>coach name: {item.sport.coach_name}</h5>
                <h5>best record: {item.sport.best_record}</h5><br/>
              </Athlete>
            </div>
          </div>
        );
      }

  // default values + Array.reduce
    nextID(athletes = []) {
        let max = athletes.reduce((prev, curr) => prev.id > curr.id ? prev.id : curr.id , 0)
        return ++max
    }

    render() {
        return (
          <div className="athleteList">
            <h3>All Young Athletes</h3>
            { this.state.athletes.map(this.eachAthlete) }
          </div>
        );
    }
}
export default athleteList