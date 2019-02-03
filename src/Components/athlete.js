import React, {Component} from 'react';
import { MdSave } from "react-icons/md"

class Athletes extends Component
{
    constructor(props){
        super(props)
        this.state={editing:false}
        this.edit=this.edit.bind(this)
        this.save=this.save.bind(this)
    }

    edit() {
        this.setState({ editing: true }) 
    }
    
    save(event) {
        event.preventDefault() // to prevent the default behaviour/ functionality
        console.log(this.newBest.value, this.props.index)
        this.props.onChange(this.newBest.value, this.props.index)
    }

    renderForm(props) {
        return (
        <div>
            <form>
            <textarea ref={input => this.newBest = input} cols="30" rows="10" />
            <span>
                <button onClick={this.save}><MdSave /></button>
            </span>
            </form>
        </div>
        )
    } 


    render()
    {
        return (
            <div className="athlete">
              <div>{this.props.children}</div>
            </div>
          )
    }
}
export default Athletes;