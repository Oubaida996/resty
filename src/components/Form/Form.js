import React, { useRef } from 'react'

import './Form.sass'


const axios = require('axios');

export default function Form(props) {
  const methodsRef = useRef();
  const urlRef = useRef();
  const bodyRef = useRef({
    "name": "morpheus",
    "job": "leader"
  });

  const handelData = async (event) => {
    event.preventDefault();

    const url = urlRef.current.value;
    const methods = methodsRef.current.value;
    let body = bodyRef.current.value;
    if (body) {
      body = JSON.parse(body)
    }

    let dataForm = {
      'url': url,
      'methods': methods,
      'body': body
    }

    // let test = {
    //   method: dataForm.methods,
    //   url: dataForm.url
    // }










    async function getMethod() {
      await axios.get(dataForm.url).then(res => {
        console.log('resssssfffffffffffffffssss', res);
        dataForm['response'] = res.data;
        dataForm['headers'] = res.headers;
        props.getData(dataForm);
      }).catch(e => {
        console.log(e);
      });
    }

    async function postMethod() {
      await axios.post(dataForm.url, dataForm.body)
        .then(function (res) {
          console.log('resssssssss', res);
          dataForm['response'] = res.data;
          dataForm['headers'] = res.headers;
          // setNewData(dataForm);  
          props.getData(dataForm);
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    async function updateMethod() {
      await axios.put(dataForm.url, dataForm.body)
        .then(function (res) {
          // console.log('resssssssss', res.status);
          dataForm['response'] = res.data;
          dataForm['headers'] = res.headers;
          // setNewData(dataForm);  
          props.getData(dataForm);
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    async function deleteMethod() {
      await axios.delete(dataForm.url, dataForm.body)
        .then(function (res) {
          // console.log('resssssssss', res.status);
          dataForm['response'] = res.data;
          dataForm['headers'] = res.headers;
          // setNewData(dataForm);  
          props.getData(dataForm);
        })
        .catch(function (error) {
          console.log(error);
        });
    }


    switch (dataForm.methods) {
      case 'get':
        await getMethod();
        break;
      case 'post':
        await postMethod();
        break;
      case 'update':
        await updateMethod();
        break;
      case 'delete':
        await deleteMethod();
        break;

      default:
        break;
    }




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
