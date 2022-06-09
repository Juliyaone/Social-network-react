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
  ]
}


const dialogsReducer = (state=initialState, action) => {

  switch(action.type) {

    case SEND_MESSAGE:
      let body = action.message;

      return { 
        ...state,
        messages: [ ...state.messages, {id: 7, message: body, likescount: 0} ]
      };    
    default: 
      return { ...state };
  }
}


export const sendMessageCreater = (message) => ({type: SEND_MESSAGE, message});

export default dialogsReducer;