import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './routes/home/home.component';
import AddItem from './routes/add-item/add-item.component';
import Navigation from './routes/navigation/navigation.component';
import { fetchItemsStart } from './redux/items/items.actions';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchItemsStart());

  }, []);
  return (
    <>
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="add-item" element={<AddItem />} />
      </Route>
    </Routes>
    </>
  );
};

export default App;
