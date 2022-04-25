import React from 'react'
import './Results.css'

export default function Results(props) {
    return (
        <div className='results'>
            <div className="history">History Method{props.data.body}</div>
            {/* {console.log('History Method{props.data.body}', props.data.body)} */}
            <div className="body-result">body-result</div>
        </div>
    )
}
