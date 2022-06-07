import { sendMessageCreater, updateNewMessageBodyCreater } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import withAuthRedirect from '../hoc/withAuthRedirect';
import {compose} from 'redux';



import './Dialogs.css';

let mapStateToProps = (state) => {
  return {
    newMessageBody: state.dialogPage.newMessageBody,
    stateDialogs: state.dialogPage.dialogs,
    stateMessages: state.dialogPage.messages,
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

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)