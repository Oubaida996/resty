import React from 'react'
import './Results.css'

export default function Results(props) {
    return (
        <div className='results'>
            <div className="history">
                <span>{props.data.methods}</span>
                <span>{props.data.url}</span>
            </div>
            <div className="body-result">
                body-result
                {console.log('results', props.data)}
                <div><pre>{JSON.stringify(props.data, null, 3)}</pre></div>
            </div>
        </div>
    )
}
