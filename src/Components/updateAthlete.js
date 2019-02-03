import React, {Component} from 'react';

class updateAthlete extends Component
{
    constructor(props){
        super(props)
        this.state={id:'1928675849',
        best_record:'13'
        }

        this.setID=this.setID.bind(this)
        this.setBestRecord=this.setBestRecord.bind(this)
        this.update=this.update.bind(this)
    }

    setID(event)
    {
        this.setState({id:event.target.value})
    }
    setBestRecord(event)
    {
        this.setState({best_record:event.target.value})
    }

    //change according to the user value
    update() {
        const url = 'https://young-athletes.herokuapp.com/updateRecord';
        fetch(`${url}`,
            {method:'POST',
            body:`id=${this.state.id}&bestRecordToUpdate=${this.state.best_record}`,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
         }})
        .then(res => res.json())
        .catch(err => console.error(err));
    }

// the user enter id and best record, update the relevant entry
    render() {
        return (
            <div className="athleteList">
              <h3>Update Athlete Best Record By ID</h3>
              
                    <label>
                        id:
                        <input type="text" name="id" value={this.state.id} onChange={this.setID}/>
                    </label><br/>
                    <label>
                        best record:
                        <input type="text" name="bestRecordToUpdate" value={this.state.best_record} onChange={this.setBestRecord}/>
                    </label><br/>
                    
                    <button type="submit" onClick={this.update}>Update</button><br/>
                    <h5>notice: if the athlete new record is worse then the old record the update won't happen</h5>
            </div>
          );
      }

}

export default updateAthlete

