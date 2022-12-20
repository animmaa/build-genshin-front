import React from 'react'
import './Card.scss'
import keqing from '../../../../assets/keqing.JPG'

const Card = ({nameCard, elementCard}) => {
  return (
    <div className='card'>
        <div>{nameCard}</div>
        <div>{elementCard}</div>
    </div>
  )
}

export default Card