export const LOAD_ITEMS = "items/LOAD_ITEMS";
export const UPDATE_ITEM = "items/UPDATE_ITEM";
export const REMOVE_ITEM = "items/REMOVE_ITEM";
export const ADD_ITEM = "items/ADD_ITEM";

const load = (items, pokemonId) => ({
  type: LOAD_ITEMS,
  items,
  pokemonId
});

const update = (item) => ({
  type: UPDATE_ITEM,
  item
});

const add = (item) => ({
  type: ADD_ITEM,
  item
});

const remove = (itemId, pokemonId) => ({
  type: REMOVE_ITEM,
  itemId,
  pokemonId
});

// thunk action creator for fetching single Pokemon items
export const getPokemonItems = (pokemonId) => async dispatch => {
  const response = await fetch(`/api/pokemon/${pokemonId}/items`);
  
  if (response.ok) {
    const items = await response.json();
    dispatch(load(items, pokemonId));
  };
};

// thunk action creator for editing item in ItemForm
export const editItem = (item) => async dispatch => {
  const response = await fetch(`/api/items/${item.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  });
 
  if (response.ok) {
    const item = await response.json();
    dispatch(update(item));
  };
};

// thunk action creator to delete an item
export const deleteItem = (itemId, pokemonId) => async dispatch => {
  const response = await fetch(`/api/items/${itemId}`, {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json'
    }
  });
  
  if (response.ok) {
    dispatch(remove(itemId, pokemonId));
  }
};

// thunk action creator to create an item
export const createItem = (item, pokemonId) => async dispatch => {
  const response = await fetch(`/api/pokemon/${pokemonId}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  });

  if (response.ok) {
    const item = await response.json();
    dispatch(add(item));
  }
};

const initialState = {};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ITEMS: 
      const newItems = {};
      action.items.forEach(item => {
        newItems[item.id] = item;
      })
      return {
        ...state,
        ...newItems
      }
    case REMOVE_ITEM: 
      const newState = { ...state };
      delete newState[action.itemId];
      return newState;
    case ADD_ITEM:
    case UPDATE_ITEM: 
      return {
        ...state,
        [action.item.id]: action.item
      };
    default:
      return state;
  }
};

export default itemsReducer;