import React, {Component} from 'react'
import UpdatedComponent  from './UpdatedComponent'

class HoverCounter extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                
                <button onMouseOver={this.props.incrementCount}>Increment {this.props.count}</button>
            </div>
        )
    }
}
export default UpdatedComponent(HoverCounter)