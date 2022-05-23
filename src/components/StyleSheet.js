import React from 'react'
import './myStyles.css'

function StyleSheet(props){
    let className = props.test ? 'primary' : 'secondary'
    return(
        <div>
            <h1 className={`${className} fontxl`}>Style Sheets</h1>
        </div>
    )
}
export default StyleSheet