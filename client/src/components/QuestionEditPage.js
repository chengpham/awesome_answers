import React, {useEffect, useState} from 'react';
import { Question } from '../requests';
import FormErrors from './FormErrors';

const QuestionEditPage = (props)=>{
    const [question,setQuestion]=useState(null);
    const [errors,setErrors]=useState({});

    const loadQuestion =()=>{
        Question.show(props.match.params.id)
        .then(question=>{
            setQuestion(question);
        })
    }

    useEffect(()=>{
        loadQuestion();
    },[]);

    const updateQuestion = event=>{
        event.preventDefault();
        const {currentTarget}=event;
        const fd = new FormData(currentTarget);

        const updatedQuestion={
            title: fd.get('title'),
            body: fd.get('body')
        }
        Question.update(question.id, updatedQuestion)
        .then(data=>{
            if(data.errors){
                setErrors(data.errors);
            }else{
                props.history.push(`/questions/${question.id}`);
            }
        })
    }
    return(
        <main>
            <h1>Update Question</h1>
            <form onSubmit={event=>updateQuestion(event)}>
                <div>
                    <label htmlFor='title'>Title: </label>
                    <br/>
                    <FormErrors errors={errors} forField='title'/>
                    <br/>
                    <input name='title' id='title' defaultValue={question ? question.title:''}/>
                </div>
                <div>
                    <label htmlFor='body'>Body: </label>
                    <br/>
                    <FormErrors errors={errors} forField='body'/>
                    <br/>
                    <textarea name='body' id='body' defaultValue={question ? question.body : '' } cols='60' rows='5'/>
                </div>
                <div>
                    <input type='submit' value='Update Question' />
                </div>
            </form>
        </main>
    )

}
export default QuestionEditPage;