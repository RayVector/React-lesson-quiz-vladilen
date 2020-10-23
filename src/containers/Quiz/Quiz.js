import React, { Component } from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component {
  state = {
    quizList: [
      {
        question: 'My favourite framework?',
        rightAnswer: 'vue',
        answerList: [
          {
            text: 'Vue',
            id: 'vue',
          },
          {
            text: 'React',
            id: 'react',
          },
          {
            text: 'Angular',
            id: 'angular',
          },
        ],
      },
    ],
  }

  methods = {
    answerHandler: answerId => {

    }
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Quiz</h1>

          <ActiveQuiz
            answerList={this.state.quizList[0].answerList}
            question={this.state.quizList[0].question}
          />
        </div>
      </div>
    )
  }
}

export default Quiz