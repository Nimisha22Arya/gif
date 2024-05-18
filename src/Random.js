import React from 'react'
import { useState } from 'react';
import useGif from './useGif';

const Random = () => {
    const{gif,response} = useGif();

    return(
        <div className='random'>
            <h1>Random Gif</h1>
            <img width="500" height="400" src={gif} alt="gif"/>
            <div className='randomB'>
            <button onClick={response}>Generate new Gif</button>
            </div>
           
                </div>
    )
}

export default Random