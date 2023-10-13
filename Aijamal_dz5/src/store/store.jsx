import { createStore } from 'redux';

export const ADD_BASKET = 'addBasket';
export const ADD_PRODUCT = 'addProduct';
export const BASKET_INCREMENT = 'increment';
export const BASKET_DICREMENT = 'dicrement';

let initialState = {
  products: [],
  basketCount: [],
};

const store = createStore((state = initialState, action) => {
  switch (action.type) {
    case ADD_BASKET:
      return {
        ...state,
        basketCount: [
          ...state.basketCount,
          { ...action.payload, countPorduct: 1 },
        ],
      };
    case BASKET_INCREMENT:
      const newBasketIncrement = state.basketCount.map((basketpProduct) => {
        return basketpProduct.id === action.payload
          ? {
              ...basketpProduct,
              countPorduct: basketpProduct.countPorduct + 1,
            }
          : basketpProduct;
      });
      return {
        ...state,
        basketCount: newBasketIncrement,
      };
    case BASKET_DICREMENT:
      const newBasketDicrenent = state.basketCount.map((basketpProduct) => {
        if (basketpProduct.id === action.payload) {
          if (basketpProduct.countPorduct <= 0) {
            return {
              ...basketpProduct,
              countPorduct: (basketpProduct.countPorduct = 0),
            };
          } else {
            return {
              ...basketpProduct,
              countPorduct: basketpProduct.countPorduct - 1,
            };
          }
        } else {
          return basketpProduct;
        }
      });
      return {
        ...state,
        basketCount: newBasketDicrenent,
      };

    case ADD_PRODUCT:
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
});

export default store;
