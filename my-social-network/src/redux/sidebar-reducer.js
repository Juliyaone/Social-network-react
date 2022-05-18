let initialState = {
  frendsData: {
    frends: [
      {id: 1, name: 'Juliya'},
      {id: 2, name: 'Anjelika'},
      {id: 3, name: 'Darina'},
      {id: 4, name: 'Artem'},
    ]
  }
}

const sidebarReducer = (state=initialState, action) => {
  return state;
}

export default sidebarReducer;