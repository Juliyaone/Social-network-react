import { sendMessageCreater, updateNewMessageBodyCreater } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';

import './Dialogs.css';

let mapStateToProps = (state) => {
  return {
    newMessageBody: state.dialogPage.newMessageBody,
    stateDialogs: state.dialogPage.dialogs,
    stateMessages: state.dialogPage.messages,
    isAuth: state.auth.isAuth
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    messageChangeHandler: (body) => {
      const action = updateNewMessageBodyCreater(body);
      dispatch(action);
    },
    sendMessageHandler: () => {
      dispatch(sendMessageCreater());
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;