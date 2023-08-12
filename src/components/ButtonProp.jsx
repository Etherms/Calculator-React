import React from "react";


export default function ButtonProp(props){
    return(
        <div className='button-row'>
            <button className='button small-button normal-button'>{props.value1}</button>
            <button className='button small-button normal-button'>{props.value2}</button>
            <button className='button small-button normal-button'>{props.value3}</button>
            <button className='button small-button normal-button equation'>{props.value4}</button>
        </div>
    )
}