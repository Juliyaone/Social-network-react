import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import { Navigate } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import {required, maxLengthCreator} from '../../utils/validators/Validators';
import {Textarea} from '../common/FormsControl/FormsControl';

import './Dialogs.css';

const maxLength50 = maxLengthCreator(50);


const DialogsForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
            <div>
              <Field name="message" component={Textarea} validate={[required, maxLength50]} placeholder={"Message"}/>
            </div>
            <button type="submit">Отправить</button>
          </form>
}

const DialogsReduxForm = reduxForm({form: 'message'})(DialogsForm)

function Dialogs(props) {

  const addNewMessage = (values) => {
    props.sendMessageHandler(values.message);
  }
  if(!props.isAuth) {
    return <Navigate to='/login' />
  }

  return (
      <div className='dialogs-wrapper'>

        <ul className='dialog-list'>
          {props.stateDialogs.map((dialog) => (<DialogItem key={dialog.id} name={dialog.name} id={dialog.id} /> ))}
        </ul>


        <div>
          <ul className='message-list'>
            {props.stateMessages.map((message) => (<MessageItem key={message.id} message={message.message} />))}
          </ul>

        <DialogsReduxForm onSubmit={addNewMessage}/>
        </div>
      </div>
  );
}

export default Dialogs;