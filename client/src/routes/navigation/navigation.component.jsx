import { Outlet } from 'react-router-dom';
import { NavigationContainer } from './navigation.styles';

const Navigation = () => {
  return (
    <>
    <NavigationContainer>
      <a href="/">Home</a>
      <a href="/add-item">Add item</a>
    </NavigationContainer>
      <Outlet />
    </>
  );
}

export default Navigation;