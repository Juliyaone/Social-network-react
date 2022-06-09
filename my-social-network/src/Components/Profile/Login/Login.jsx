import React from 'react';
import {Field, reduxForm} from 'redux-form';

const LoginForm = (props) => {
  return <>
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder="Login" name={"login"} component="input"/>
      </div>
      <div>
        <Field placeholder="Password" name={"password"} component="input"/>
      </div>
      <div>
        <Field type="checkbox" name={"remeber me"} component="input"/>Remeber me
      </div>

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </>
}


//Типа HOC, но не hoc
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

function Login(props) {

  const onSubmit = (formData) => {
    console.log(formData);
  }
  return (
    <>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit}/>
    </>
  );
}

export default Login;