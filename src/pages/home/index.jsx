import styles from './styles.module.scss';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Main from '../../components/main';
import Buner from '../../components/baner';
// import GoodsList from '../../components/goodsList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGoods, addToBasket } from '../../redux/action';
import { selectGoods, selectLoading, selectError } from '../../redux/selector';
import CardList from '../../components/cardList';
function Home() {
  const dispatch = useDispatch();
   const goods = useSelector(selectGoods);
   const loading = useSelector(selectLoading);
   const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchGoods());
   
  }, [dispatch]);
  console.log('Goods:', goods);
  console.log('Loading:', loading);
  console.log('Error:', error);
const handleAddToBasket = itemId => {
  const item = goods.find(good => good.id === itemId);
  if (item) {
    dispatch(addToBasket(item));
  } else {
    console.error('Item not found');
  }
};

  return (
    <>
      <Header />
      <Buner />
      <Main h3prop={'Goods'}>
        
        <CardList
          className={styles.goodListContainer}
          handleClick={handleAddToBasket} 
          btnName={'+'}
          items={goods}
        >
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
        </CardList>
      </Main>
      <Footer />
    </>
  );
}

export default Home;