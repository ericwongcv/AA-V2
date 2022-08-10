import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createItem, editItem } from '../store/items';

const ItemForm = ({ itemId, hideForm }) => {
  const dispatch = useDispatch();
  let item = useSelector(state => state.items[itemId]) || "";

  const { pokemonId } = useParams();

  const [happiness, setHappiness] = useState(item.happiness);
  const [price, setPrice] = useState(item.price);
  const [name, setName] = useState(item.name);
  const [imageUrl, setImageUrl] = useState("");

  const updateName = (e) => setName(e.target.value);
  const updateHappiness = (e) => setHappiness(e.target.value);
  const updatePrice = (e) => setPrice(e.target.value);
  const updateImageUrl = (e) => setImageUrl(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let returnedItem;
    let payload;

    if (item) {
      payload = {
        ...item,
        name,
        happiness,
        price
      };
      returnedItem = dispatch(editItem(payload));

    } else {
      payload = {
        name,
        happiness,
        price,
        imageUrl
      };
      console.log('new item')
      returnedItem = dispatch(createItem(payload, pokemonId));
    };

    if (returnedItem) {
      hideForm();
    }
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    hideForm();
  };

  return (
    <section className="edit-form-holder centered middled">
      <form className="item-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={updateName}
        />
        <input
          type="number"
          placeholder="Happiness"
          min="0"
          max="100"
          required
          value={happiness}
          onChange={updateHappiness}
        />
        <input
          type="number"
          placeholder="Price"
          required
          value={price}
          onChange={updatePrice}
        />
        {!item &&
          <input
            type="text"
            placeholder="Image Url"
            value={imageUrl}
            onChange={updateImageUrl}
          />
        }
        {item ?
          <button type="submit">Update Item</button> :
          <button type="submit">Create Item</button>
        }
        <button type="button" onClick={handleCancelClick}>Cancel</button>
      </form>
    </section>
  );
};

export default ItemForm;
