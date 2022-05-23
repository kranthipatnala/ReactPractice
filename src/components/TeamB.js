import React from 'react'
import {UserConsumer} from './UserContext'

function TeamB(){
    return(
        <div>
            <h2>Team A</h2>
            <UserConsumer>
            {
                (val)=>{
                    return <div>{val}</div>
                }
            }
            </UserConsumer>
        </div>
    )
}
export default TeamB