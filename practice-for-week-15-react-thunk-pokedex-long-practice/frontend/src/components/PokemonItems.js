import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem, getPokemonItems } from "../store/items";

const PokemonItems = ({ pokemon, setEditItemId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemonItems(pokemon.id));
  }, [dispatch, pokemon.id]);

  const items = useSelector((state) => {
    if (!pokemon.items) return null;
    return pokemon.items.map(itemId => state.items[itemId]);
  });

  if (!items) {
    return null;
  }

  const clickDelete = (itemId, pokemonId) => {
    dispatch(deleteItem(itemId, pokemonId));
  }

  return items.map((item) => (
    <tr key={item.id}>
      <td>
        <img
          className="item-image"
          alt={item.imageUrl}
          src={`${item.imageUrl}`}
        />
      </td>
      <td>{item.name}</td>
      <td className="centered">{item.happiness}</td>
      <td className="centered">${item.price}</td>
      {pokemon.captured && (
        <td className="centered">
          <button onClick={() => setEditItemId(item.id)}>
            Edit
          </button>
        </td>
      )}
      {pokemon.captured && (
        <td className="centered">
          <button onClick={() => clickDelete(item.id, pokemon.id)}>
            Delete
          </button>
        </td>
        
      )}
    </tr>
  ));
};

export default PokemonItems;
