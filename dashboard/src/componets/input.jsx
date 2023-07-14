import React from 'react'

function Input (props) {

    return (
        <>
            <label>{props.name}</label>
            <input type={props.type}></input>
        </>
)}

export default Input