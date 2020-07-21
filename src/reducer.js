export const initialState = {
  basket: [{
    id: "155",
          title: "PRS-Silver Sky 2",
          price: 199.65,
          rating: 3,
          image: "https://www.reidys.com/images/prs-silver-sky-maple-fingerboard-tungsten-p6992-8858_zoom.jpg",
  }],
  user: null,
};

function reducer(state, action) {

console.log(action);
  switch(action.type) {
    case 'ADD_TO_BASKET':
    return {
      ...state,
      basket: [...state.basket, action.item]
    };
      case 'REMOVE_FROM_BASKET':
        let newBasket = [...state.basket];
          const index  = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            if (index >= 0) {
              newBasket.splice(index, 1);



              } else {
                console.log(action)
            }
      return { ...state, basket: newBasket };
    default:
        return state;
  }
};

export default reducer;