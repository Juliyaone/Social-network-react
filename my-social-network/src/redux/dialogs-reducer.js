const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  messages: [
    {id: 5, message: 'LALALA', likescount: 0},
    {id: 6, message: 'PUPUPU', likescount: 30},
  ],
  dialogs: [
    {id: 1, name: 'Juliya'},
    {id: 2, name: 'Anjelika'},
    {id: 3, name: 'Darina'},
    {id: 4, name: 'Artem'},
  ],
  newMessageBody: 'Напиши сообщение'
}


const dialogsReducer = (state=initialState, action) => {

  switch(action.type) {

    case UPDATE_NEW_MESSAGE_BODY:
      return { 
        ...state,
        newMessageBody: action.body
       };     

    case SEND_MESSAGE:
      let body = state.newMessageBody;

      return { 
        ...state,
        newMessageBody: '',
        messages: [ ...state.messages, {id: 7, message: body, likescount: 0} ]
      };    
    default: 
      return { ...state };
  }
}


export const sendMessageCreater = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyCreater = (body) => 
  ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;