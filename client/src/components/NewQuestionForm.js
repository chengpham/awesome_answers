import React, {useState} from 'react';
import {Question} from '../requests';
import FormErrors from './FormErrors'

const NewQuestionForm = (props)=>{
    const [errors,setErrors]=useState({});
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');

    const handleSubmit = (event)=>{
        event.preventDefault();
        const formData= new FormData(event.currentTarget);
        const params={
            title: formData.get('title'),
            body: formData.get('body')
        }
        createQuestion(params);
        event.currentTarget.reset();
    }
    function createQuestion(params){
        Question.create(params)
        .then((question)=>{
            if(question.errors){
                console.log('Question Erros', question.errors);
                setErrors(question.errors)
            }
            if(question.id){
                const id = question.id;
                props.history.push(`/questions/${id}`)
            }
        })
    }

    return(
        <div>
            <h1>New Question</h1>
            <form onSubmit={event=>handleSubmit(event)}>
                <div>
                    <label htmlFor='title'>Title: </label><br/>
                    <FormErrors errors={errors} forField='title'/>
                    <br/>
                    <input name='title' id='title' value={title} onChange={e=>setTitle(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor='body'>Body: </label>
                    <br/>
                    <FormErrors errors={errors} forField='body' />
                    <br/>
                    <textarea name='body' id='body' cols='60' rows='5' value={body} onChange={e=>setBody(e.target.value)} />
                </div>
                <input type='submit' value='Submit'/>
            </form>
        </div>
    )
}
export default NewQuestionForm;