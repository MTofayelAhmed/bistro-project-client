import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImage from '../../../assets/menu/banner3.jpg'

const Menu = () => {



  return (
    <div>
      <Helmet>
      <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img ={menuImage}></Cover>
     
    </div>
  );
};

export default Menu;