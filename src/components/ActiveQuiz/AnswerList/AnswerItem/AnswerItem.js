import React from 'react'
import classes from './AnswerItem.module.css'

export default props => {
  const { text } = props
  return (
    <li className={classes.AnswerItem}

    >
      {text}
    </li>
  )
}