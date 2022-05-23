import React, {Component} from 'react'

class Greet extends Component{
    constructor(){
        super()
        this.state = {
            count : 0
        }

        
    }

    incrementCount(){
        this.setState(prevCount =>({
            count : prevCount.count + 2
        }))
    }

    
    
    

    render(){
        return(
            <div>
                <h3>Count : {this.state.count}</h3>
                <button onClick={this.incrementCount.bind(this)}>Increment Count</button>
            </div>
        )
    }
}
export default Greet