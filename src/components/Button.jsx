import React from 'react'
import ButtonProp from './ButtonProp'

export default function  Button  () {
    return(
        <div className='button-container'>
                <ButtonProp 
                        value1="7"
                        value2="8"
                        value3="9"
                        value4="DEL"
                />
                <ButtonProp 
                        value1="4"
                        value2="5"
                        value3="6"
                        value4="+"
                />
                <ButtonProp 
                        value1="1"
                        value2="2"
                        value3="3"
                        value4="-"
                />
                <ButtonProp 
                        value1="."
                        value2="0"
                        value3="/"
                        value4="X"
                />
            <div className='button-row row-5'>
                    <button className='button big-button reset'>RESET</button>
                    <button className='button big-button equal'>=</button>
            </div>
        </div>
    )
}

