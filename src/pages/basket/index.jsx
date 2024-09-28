import styles from './styles.module.scss';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Main from '../../components/main';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBasket, removeFromBasket } from '../../redux/action/index';
import Card from '../../components/cardComponent';
function Basket() {
  const dispatch = useDispatch();

  const { basket, loading, error } = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchBasket());
  }, [dispatch]);

  const handleRemoveFromBasket = itemId => {
    dispatch(removeFromBasket(itemId));
  };

  return (
    <>
      <Header />
      <Main h3prop={'Basket'}>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        <ul>
          {basket.map(item => (
            <Card
              key={item.id}
              item={item}
              handleClick={handleRemoveFromBasket}
              btnName={'-'}
            />
          ))}
        </ul>
      </Main>
      <Footer />
    </>
  );
}
export default Basket;
