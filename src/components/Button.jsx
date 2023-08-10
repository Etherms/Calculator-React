import React from 'react'

export default function  Button  () {
    return(
        <div className='button-container'>
            <div className='row-1'>
                    <button className='button seven'>7</button>
                    <button className='button eight'>8</button>
                    <button className='button nine'>9</button>
                    <button className='button delete'>DEL</button>
            </div>
            <div className='row-2'>
                    <button className='button four'>4</button>
                    <button className='button five'>5</button>
                    <button className='button six'>6</button>
                    <button className='button plus'>+</button>
            </div>
            <div className='row-3'>
                    <button className='button one'>1</button>
                    <button className='button two'>2</button>
                    <button className='button three'>3</button>
                    <button className='button minus'>-</button>
            </div>
            <div className='row-4'>
                    <button className='button dot'>.</button>
                    <button className='button zero'>zero</button>
                    <button className='button divide'>/</button>
                    <button className='button multiply'>X</button>
            </div>
            <div className='row-5'>
                    <button className='button divide'>RESET</button>
                    <button className='button multiply'>=</button>
            </div>
        </div>
    )
}

