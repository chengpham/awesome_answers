import React from 'react';

const QuestionDetails = (props) => {
  const { title, body, author, view_count, created_at, updated_at } = props;

  const randomDiv = <div>gwegweg</div>

  console.log('Question Details Re-rendered')
  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
      <p>By {author ? author.full_name : '' }</p>
      {randomDiv}
      <p>
        <small>Seen {view_count} times</small>
        <small>Last edited {updated_at.toLocaleString()}</small>
      </p>
    </div>
  )
}

export default QuestionDetails;
// module.exports = {
//   AnswerDetails: AnswerDetails,
//   QuestionDetails: QuestionDetails
// }