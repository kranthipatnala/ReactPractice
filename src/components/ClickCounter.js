import React, {Component} from 'react'
import UpdatedComponent  from './UpdatedComponent'

class ClickCounter extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <h3>Count {this.props.count}</h3>
                <button onClick={this.props.incrementCount}>Increment Count</button>
            </div>
        )
    }
}
export default UpdatedComponent(ClickCounter)