import React, {Component} from 'react'

class ChildComponent extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                Parent Name : {this.props.name}
                <button onClick={() => this.props.greetParent('DPS')}>Click Me</button>
            </div>
        )
    }
}
export default ChildComponent