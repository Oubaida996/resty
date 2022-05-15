import React from 'react'
import './Results.sass'
import JSONPretty from 'react-json-pretty'
import JSONPrettyMon from 'react-json-pretty/themes/monikai.css';

export default function Results(props) {
    return (
        <div className='results'>
            {/* {console.log('props.state from result', props.state.historyApi[0].url)} */}
            <div className='listHistory'>
                {props.state.historyApi.map((data, index) => {
                    return <div className="history" key={index} onClick={() => props.historyData(data)}>
                        <span>{data.methods}</span>
                        <span>{data.url}</span>
                    </div>
                }).reverse()}
            </div>
            <div className="body-result">
                {console.log('results', props.data)}
                <div>header : <JSONPretty theme={JSONPrettyMon} id='json-pretty' data={props.data.headers} /></div>
                <div>response : <JSONPretty theme={JSONPrettyMon} id='json-pretty' data={props.data.response} /></div>
                {/* <div><pre>header : {JSON.stringify(props.data.headers, null, 3)}</pre></div>
            <div><pre>response : {JSON.stringify(props.data.response, null, 3)}</pre></div> */}
            </div>
        </div >
    )
}
