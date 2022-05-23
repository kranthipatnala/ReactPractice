import React, {Component} from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component{
    constructor(){
        super()
        this.state = {
            parentName : 'Kranthi Kumar Patnala'
        }
    }

    greetParent = (child)=>{
        this.setState({
            parentName : `Welcome Kranthi Kumar Patnala From  ${child}`
        })
    }

    render(){
        return(
            <div>
                <ChildComponent name={this.state.parentName} greetParent={this.greetParent}/>
            </div>
        )
    }
}
export default ParentComponent