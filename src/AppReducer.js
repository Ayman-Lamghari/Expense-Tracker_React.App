/* const AppReducer = (state, action) => {
  switch(action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
      };
    default:
      return state;
  }
};

export default AppReducer;
*/
const AppReducer = (state, action) => {
  switch(action.type) {
    case'DELETE_TRANSACTION':
    return {
      ...state,
      transactions: state.transactions.filter(transaction => transaction.id !== action.payload)  
    }
    case'ADD_TRANSACTION':
    return{
      ...state,
      transactions: [action.payload,...state.transactions]
    }
    default:
      return state;
  }
}
export default AppReducer;