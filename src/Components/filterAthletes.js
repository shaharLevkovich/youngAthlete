import React, {Component} from 'react';
import Athlete from './athlete'

class filterAthletes extends Component
{
    constructor(props){
        super(props)
        this.state={editing:false,
          athletes:[],
          sportName:'running',
          bestRecord:'31'}
    
      this.setBestRecord=this.setBestRecord.bind(this)
      this.setSportName=this.setSportName.bind(this)
      this.edit=this.edit.bind(this)
      this.filter=this.filter.bind(this)
      this.eachAthlete=this.eachAthlete.bind(this)
      this.nextID=this.nextID.bind(this)
      this.add=this.add.bind(this)
      this.renderForm=this.renderForm.bind(this)
      this.renderUI=this.renderUI.bind(this)
    }
    setSportName(event)
    {
        this.setState({sportName:event.target.value})
    }
    setBestRecord(event)
    {
        this.setState({bestRecord:event.target.value})
    }
    edit(){
      this.setState({editing:true})
      this.filter();
    }
//change according to the user values
    filter() {
        const fetchConfig = {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        };
        fetch(`https://young-athletes.herokuapp.com/getAthletesBySportNameBestRecord?sportName=${this.state.sportName}&bestRecord=${this.state.bestRecord}`, fetchConfig)
          .then(res => res.json())
          
            .then(e => e.map(item =>
                this.add({id: item.id, first_name: item.first_name, last_name: item.last_name, birth_date: item.birth_date, sport: item.sport})))
            .catch(err=>console.log(err))
      
      }

// destructor + default values
    add({ event = null, id = null, first_name=null, last_name=null, birth_date=null,sport=null}) {
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
// the user enter sport type and best record, shows all the relevant entries 
    renderForm(){
      return(
      <div>
          <label>
          sport name:
          <input type="text" name="sportName" value={this.state.sportName} onChange={this.setSportName}/>
          </label><br/>
          <label>
          best record:
          <input type="text" name="bestRecordToUpdate" value={this.state.bestRecord} onChange={this.setBestRecord}/>
          </label><br/>
                    
          <button type="submit" onClick={this.edit}>Filter</button><br/>
      </div>
      )
    }

    renderUI(){
      return(
        <div>
        <h3>All Young Athletes</h3>
        { this.state.athletes.map(this.eachAthlete) }
        </div>
      )
    }

    render() {
        return this.state.editing? this.renderUI():this.renderForm();

    }
}

export default filterAthletes