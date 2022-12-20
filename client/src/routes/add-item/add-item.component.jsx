import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AddItemContainer } from './add_item.styles';
import { postItemStart } from '../../redux/items/items.actions';

const AddItem = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const gotToHome = () => {
    navigate('/');
  };

  const defaultFormFields = {
    itemName: '',
    quantity: '',
    price: '',
  };

  const [formFields, setFormFields] = useState(defaultFormFields);

  const {
    itemName,
    quantity,
    price,
  } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const createItem = (itemName, quantity, price) => dispatch(postItemStart({
    itemName,
    quantity,
    price,
  }));

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  }

  const submitItem = async () => {
    createItem(itemName, quantity, price);
    resetFormFields();
    gotToHome();
  };
  
  return (
    <AddItemContainer>
      <h3 className="">ADD NEW ITEM</h3>
      <form>
        <input type="text" name="itemName" placeholder="Name" onChange={handleChange} value={itemName} required />
        <input type="number" name="quantity" placeholder="Quantity" onChange={handleChange} value={quantity} />
        <input type="number" step="0.01" name="price" placeholder="Price" onChange={handleChange} value={price} />
        <button type="submit" onClick={submitItem}>SUBMIT</button>
      </form>
    </AddItemContainer>
  );
};

export default AddItem;