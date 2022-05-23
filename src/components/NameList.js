import React, {Component} from 'react'

class NameList extends Component{
    constructor(){
        super()
    }

    

    render(){
        const persons = ['Kranthi', 'Akshitha', 'Nicy']
        return(
            <div>
                <ul>
                    {
                        persons.map(person => <li>{person}</li>)
                    }
                </ul>
            </div>
        )
    }
}
export default NameList