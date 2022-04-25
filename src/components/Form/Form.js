import React from 'react'
import './Form.css'

export default function Form(props) {

  return (
    <div className='form'>
      <form onSubmit={props.getUrl}>
        <select name='methods' className='methods'>
          <option value={'get'} className='method'>get</option>
          <option value={'post'} className='method'>post</option>
          <option value={'update'} className='method'>update</option>
          <option value={'delete'} className='method'>delete</option>
        </select>
        <input name='url' className='field' type="text" placeholder='http://api.url.here' />
        <input className='submit' type="submit" value={'GO!'} />
        <br />

        <textarea name="body" id="" cols="30" rows="10" className='body'></textarea>
      </form>
    </div>
  )
}
