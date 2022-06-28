import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Input} from '../../common/FormsControl/FormsControl';
import {required} from '../../../utils/validators/Validators';
import {connect} from 'react-redux';
import {login} from "../../../redux/auth-reducer";
import { Navigate } from 'react-router-dom';
import './../../common/FormsControl/FormsControl.css';



const LoginForm = ({handleSubmit, error}) => {
  return <>
    <form onSubmit={handleSubmit}>
      <div>
        <Field placeholder="Email" name={"email"} validate={[required]} component={Input}/>
      </div>
      <div>
        <Field placeholder="Password" name={"password"} type={"password"} validate={[required]} component={Input}/>
      </div>
      <div>
        <Field type="checkbox" name={"remeberMe"} component={Input}/>Remeber me
      </div>
      { error && <div className='form-summary-error'>
        {error}
      </div>}

      <div>
        <button type={"submit"}>Login</button>
      </div>
    </form>
  </>
}


//Типа HOC, но не hoc
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {

  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe, props.isAuth );
  }

  if(props.isAuth) {
    return <Navigate replace to="/profile" />
  }

  return (
    <>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit}/>
    </>
  );
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);