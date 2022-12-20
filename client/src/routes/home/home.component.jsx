/* eslint-disable jsx-a11y/iframe-has-title */
import { useSelector, useDispatch } from 'react-redux';
import { HomeContainer, ItemContainer } from "./home.styles";
import { getItems } from '../../redux/items/items.selection';
import { deleteItemStart } from '../../redux/items/items.actions';

const Home = () => {
  const items = useSelector(getItems)
  let sumPrice = 0;
  const dispatch = useDispatch();
  return (
    <>{Object.keys(items).length === 0 ? <h2>No invoices yet</h2> :
    <HomeContainer>
      <h2>Invoices</h2>
      <div>
      <ItemContainer>
          <h3>Name</h3>
          <p>Quantity</p>
          <p>Price per unit</p>
          <p>Price</p>
          <p>Delete</p>
          
        </ItemContainer>
      {
      Object.keys(items).map(itemNumber => {
        const item = items[itemNumber]
        sumPrice = sumPrice + (item.price * item.quantity)
        return (
        <ItemContainer key={itemNumber}>
          <h3>{item.itemName}</h3>
          <p>{item.quantity}</p>
          <p>${item.price}</p>
          <p>${item.price * item.quantity}</p>
          <p>
          <button onClick={() => {dispatch(deleteItemStart(itemNumber))}}>Delete</button>
          </p>
          
        </ItemContainer>
      )})
      }
     
    </div>
    <h2>Total: ${sumPrice}</h2>
    </HomeContainer>
    
  }</>)
}

export default Home;