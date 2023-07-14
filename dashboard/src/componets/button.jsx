import React from 'react'


function Button (props) {

    return (
        <React.Fragment>
            <button className=' m-2 px-2 py-2 button'>{props.text}</button>
        </React.Fragment>
)}


export default Button;