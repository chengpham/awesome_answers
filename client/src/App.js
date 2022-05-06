import './App.css';
import { Component } from 'react';
import QuestionShowPage from './components/QuestionShowPage';
import QuestionIndexPage from './components/QuestionIndexPage';
import CurrentDateTime from './components/CurrentDateTime';
import QuestionNewPage from './components/QuestionNewPage';
import NewQuestionForm from './components/NewQuestionForm'
import QuestionEditPage from './components/QuestionEditPage';
import SignInPage from './components/SignInPage';
import AuthRoute from './components/AuthRoute';
import SignUpPage from './components/SignUpPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Session } from './requests';
import Navbar from './components/Navbar';
import HookCurrentDateTime from './components/HookCurrentDateTime';
import NotFoundPage from './components/NotFoundPage';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clocksCount: [1],
      user: null
    }
  }

  componentDidMount() {
    // Session.create({
    //   email: 'js@winterfell.gov',
    //   password: 'supersecret'
    // }).then(console.log)
    Session.currentUser()
    .then(user=>{
      console.log('user', user);
      this.setState(state=>{
        return {user: user}
      })
    })
  }
  handleSubmit(params){
    Session.create(params).then(()=>{
      return Session.currentUser()}
      ).then(user=>{
        this.setState(()=>{
          return {user: user}
        })
      })
  }
  destroySession(){
    Session.destroy()
    .then(res=>{
      this.setState(()=>{
        return {user:null}
      })
    })
  }
  handleSignUp(){
    Session.currentUser().then(user=>{
      this.setState(()=>{
        return {user:user}
      })
    })
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <Navbar currentUser={this.state.user} destroySession={this.destroySession.bind(this)} />
          <Switch>
            <Route path='/' exact render={() => <div>Hello World</div> } />
            <Route exact path='/clocks' component={HookCurrentDateTime} />
            {/* <Route path='/questions/new' component={QuestionNewPage} /> */}
            <AuthRoute exact path='/questions/new' isAuth={this.state.user} component={NewQuestionForm}/>
            <AuthRoute exact path='/questions/:id/edit' isAuth={this.state.user} component={QuestionEditPage}/>
            <Route path='/questions/:id' component={QuestionShowPage} />
            <Route path='/questions' component={QuestionIndexPage} />
            {/* <Route path='/sign_in'><SignInPage handleSubmit={this.handleSubmit.bind(this)} /></Route> */}
            <Route path='/sign_in' render={(routeProps)=><SignInPage handleSubmit={this.handleSubmit.bind(this)} {...routeProps}/>} />
            <Route path='/sign_up' render={(routeProps)=><SignUpPage handleSignUp={this.handleSignUp.bind(this)} {...routeProps}/>}/> 
            {/* <Route path='/sign_up'><SignUpPage /></Route> */}
            <Route component={NotFoundPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
