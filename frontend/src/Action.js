import React, { useState } from 'react'
import Icon from './Icon';
import Modal from 'react-bootstrap/Modal';
function Action(props) {



  return (
    <div className='action'>
        <div onClick= {props.edit}>
            <Icon icon="pencil" size={20} color="noir" /> 
        </div>
        <div onClick={ props.remove}>
        <Icon icon="cancel-circle"
    className="editor-delete" size={20} color="noir" /></div></div>
  )
}

export default Action;