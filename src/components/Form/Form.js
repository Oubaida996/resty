import React, { useRef } from 'react'
import './Form.css'
import { useState, useEffect } from "react";
const axios = require('axios');

export default function Form(props) {
  const methodsRef = useRef();
  const urlRef = useRef();
  const bodyRef = useRef();
  const [newData, setNewData] = useState({});

  const handelData = async (event) => {
    event.preventDefault();

    const url = urlRef.current.value;
    const methods = methodsRef.current.value;
    const body = bodyRef.current.value;

    let dataForm = {
      'url': url,
      'methods': methods,
      'body': body
    }

    await axios.get(dataForm.url).then(res => {
      dataForm['response'] = res.data.data;
      setNewData(dataForm);

      // console.log('data boky', newData);
      // setData(newData);
      // console.log('data boky', data);

    }).catch(e => {
      console.log(e);
    });

    props.getData(dataForm);

    // if (data.body) {
    //   data.body = body;
    // }
    // console.log('data.url', url);
    // console.log('data.method', methods);
    // console.log('data.body', body);
    // event.target.url.value = '';
    // event.preventDefault();
    // data['url'] = event.target.url.value; //url the name of input inside form
    // data['method'] = event.target.methods.value;//methods the name of select 
    // data['body'] = event.target.body.value;
    // console.log('data.url', data.url);
    // console.log('data.method', data.method);
    // console.log('data.body', data.body);
    // console.log(data);
    // event.target.url.value = '';
    // setLoading(true);

  }

  return (
    <div className='form'>
      <form onSubmit={handelData}>
        <select ref={methodsRef} name='methods' className='methods'>
          <option value={'get'} className='method'>get</option>
          <option value={'post'} className='method'>post</option>
          <option value={'update'} className='method'>update</option>
          <option value={'delete'} className='method'>delete</option>
        </select>
        <input ref={urlRef} name='url' className='field' type="text" placeholder='http://api.url.here' />
        <input className='submit' type="submit" value={'GO!'} />
        <br />

        <textarea ref={bodyRef} name="body" id="" cols="30" rows="10" className='body'></textarea>
      </form>
    </div>
  )
}
