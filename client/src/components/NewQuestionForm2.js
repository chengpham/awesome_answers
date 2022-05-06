import React from 'react';
import BlueInput from './BlueInput';
import ColoredLabel from './ColoredLabel';
// import './NewQuestionForm.css';
// const styles = {
//   button: {
//     backgroundColor: 'blue'
//   },
//   label: {
//     fontSize: '20px'
//   }
// }

const NewQuestionForm = ({ createQuestion, newQuestionData, updateQuestionData }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    createQuestion();
  }

  function handleQuestionInput(event) {
    const value = event.currentTarget.value;
    const name = event.currentTarget.name;
    console.log(name);
    updateQuestionData({[name]: value})
  }

  return(
    <form onSubmit={handleSubmit}>
      <div>
        <ColoredLabel htmlFor='title' primary>Title</ColoredLabel>
        <br />
        <input 
          name='title'
          id='title'
          value={newQuestionData?newQuestionData.title:''}
          onChange={handleQuestionInput}
        />
      </div>
      <div>
        <ColoredLabel htmlFor='body'>Body</ColoredLabel>
        <br />
        <textarea 
          name='body'
          id='body'
          value={newQuestionData?newQuestionData.body:''}
          onChange={handleQuestionInput}
        />
      </div>
      <div>
        <BlueInput type='submit' value='Submit' />
      </div>
    </form>
  )
}

export default NewQuestionForm