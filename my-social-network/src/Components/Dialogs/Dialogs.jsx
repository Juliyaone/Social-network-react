import { createRef } from 'react';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import './Dialogs.css';

function Dialogs({ messageChangeHandler, sendMessageHandler, newMessageBody, stateMessages, stateDialogs}) {

  let textareaElement = createRef(null);

  const onSendMessage = () => {
    sendMessageHandler();
  }

  const onMessageChange = () => {
    let body = textareaElement.current.value;
    messageChangeHandler(body);
  }

  return (
      <div className='dialogs-wrapper'>

        <ul className='dialog-list'>
          {stateDialogs.map((dialog) => (<DialogItem key={dialog.id} name={dialog.name} id={dialog.id} /> ))}
        </ul>


        <div>
          <ul className='message-list'>
            {stateMessages.map((message) => (<MessageItem key={message.id} message={message.message} />))}
          </ul>

          <div>
            <div>
              <textarea onChange={onMessageChange} ref={textareaElement} value={newMessageBody}></textarea>
            </div>
            <button onClick={onSendMessage}>Отправить</button>
          </div>
        </div>
      </div>
  );
}

export default Dialogs;