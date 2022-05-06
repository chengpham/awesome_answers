import React from 'react';
import AnswerDetails from './AnswerDetails';

const AnswerList = ({ answers, deleteAnswer }) => {

  return (
    <>
      {answers ? answers.map((a, i) => {
        return <AnswerDetails
          key={i}
          id={a.id}
          body={a.body}
          author={a.author}
          created_at={a.created_at}
          deleteAnswer={deleteAnswer}
        />
      }) : '' }
    </>
  )
}

export default AnswerList