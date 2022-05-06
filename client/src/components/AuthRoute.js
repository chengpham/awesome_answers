import React from 'react';
import {Route, Redirect} from 'react-router-dom'

//Route 
// path: so when a path matches to the url it will dsplay the component which is passed
//component : this props tells that which component to render when path is matched with url.
//exact: this props requires that the path patches exactly to the url as oppposed the the default behaviour of a Route. 

// Redirect : Rendering a <Redirect> will navigate to a new location. The new location will override the current location in the history stack, like server-side redirects (HTTP 3xx) do

const AuthRoute = props =>{
    console.log('props:',props)
    const {isAuth, component:Component, ...restProps} =props
    console.log('restProps:',restProps)
    return(
        <Route 
        {...restProps}
        render={
            (routeProps)=>{
                if (isAuth){
                    return <Component {...routeProps}/>

                }else{
                    return <Redirect to='/sign_in' />
                }
            }  
        }
        />
    )
}
export default AuthRoute;