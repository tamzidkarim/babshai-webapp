
const reducer = (state, action) => {
  switch (action.type) {
   
    case 'LOADING':
      return { ...state, loading: true };

    case 'DISPLAY_ITEMS':
      return { ...state, cart: action.payload, loading: false };

    default:
      return state;
  }
};
export default reducer;
