import React from 'react';

const FormErrors = props =>{
    const {
        forField,
        errors={}
    }=props;
    // <FormErrors forfield='title' errors={errors}/>
    let filteredErrors=[];
    if(errors[forField]){
        console.log('Error Field:', errors[forField]);
        filteredErrors=errors[forField];
        console.log('Filtered Errors', filteredErrors)
    }
    
    
    
    
    function displayErrors(errorsArray){
        if(errorsArray){
            let newArray=errorsArray.map((error,i)=><li key={i}>{error}</li>)
            return newArray;
        }
    }

    return(
        <ul>{displayErrors(filteredErrors)}</ul>
    )

}
export default FormErrors;