const ADD_TO_CART = 'cart/ADD_TO_CART';
const REMOVE_FROM_CART = 'cart/REMOVE_FROM_CART';

export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        id
    };
};

export const removeFromCart = (id) => {
    return {
        type: REMOVE_FROM_CART,
        id
    }
}


export default function cartReducer(state = {}, action) {
    switch (action.type) {

        case ADD_TO_CART:
            const newStateAdd = {
                ...state
            };
            if (newStateAdd[action.id]) {
                newStateAdd[action.id]["count"]++;
            } else {
                newStateAdd[action.id] = { id: action.id, count: 1 }
            }
            return newStateAdd;

        case REMOVE_FROM_CART:
            const newStateRemove = {...state}
            delete newStateRemove[action.id]
            return newStateRemove;

        default:
            return state;
    }
}
