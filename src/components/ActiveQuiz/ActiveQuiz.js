import React from 'react'
import classes from './ActiveQuiz.module.css'
import AnswerList from './AnswerList/AnswerList'

export default props => {

  const { answerList, question } = props

  return (
    <div className={classes.ActiveQuiz}>
      <p className={classes.Question}>
        <span>
          <strong>1.</strong>&nbsp;
          {question}
        </span>

        <small>4 of 12</small>
      </p>

      <AnswerList answerList={answerList}/>

    </div>
  )
}