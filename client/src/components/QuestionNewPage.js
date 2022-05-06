import React, { Component } from 'react'
import NewQuestionForm from './NewQuestionForm';
import { Question } from '../requests';

class QuestionNewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newQuestionData: {
        title: '',
        body: ''
      }
    }
    this.createQuestion = this.createQuestion.bind(this)
  }

  createQuestion() {
    Question.create(this.state.newQuestionData)
      .then(({ id }) => {
        this.props.history.push(`/questions/${id}`)
      })
  }

  updateQuestionData(props){
    this.setState((state)=>{
      console.log(props)
      console.log(state)
      if (state.newQuestionData.title.length > 10) alert('title is too long')
      return {
        newQuestionData: {
          ...state.newQuestionData,
          ...props
        }
      }
    })
  }

  render() {
    return(
      <main>
        <NewQuestionForm createQuestion={this.createQuestion}
        newQuestionData={this.state.newQuestionData}
        updateQuestionData={this.updateQuestionData.bind(this)}
        />
      </main>
    )
  }
}

export default QuestionNewPage