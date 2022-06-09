import { sendMessageCreater } from '../../redux/dialogs-reducer';
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
    sendMessageHandler: (message) => {
      dispatch(sendMessageCreater(message));
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)