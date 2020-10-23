import React from 'react'
import classes from './AnswerList.module.css'
import AnswerItem from './AnswerItem/AnswerItem'

export default props => {
  const { answerList } = props
  return (
    <ul className={classes.AnswerList}>
      {answerList.map((answer, answerIndex) => {
        return (
          <AnswerItem
            text={answer.text}
            key={answerIndex}
          />
        )
      })}
    </ul>
  )
}