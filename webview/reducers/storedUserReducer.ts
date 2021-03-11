const initialState = null;

export const storeUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'storeUser/set':
      return action.payload; // id prop is the one I want
    default:
      return state;
  }
};

// want to specify the return object later for typing
