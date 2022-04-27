import React from 'react'
import './Results.css'

export default function Results(props) {
    return (
        <div className='results'>
            <div className="history">
                <span>{props.data.methods}</span>
                <span>{props.data.url}</span>
            </div>
            <div className="body-result">body-result {props.data.body}</div>
        </div>
    )
}
