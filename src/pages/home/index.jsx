import styles from './styles.module.scss';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Main from '../../components/main';
import Buner from '../../components/baner';
// import GoodsList from '../../components/goodsList';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGoods, addToBasket } from '../../redux/action';
import { selectGoods, selectLoading, selectError } from '../../redux/selector';
import CardList from '../../components/cardList';
import { useState } from 'react';
function Home() {
  const [goods, setGoods] = useState([])
 async function fetchGoods  () {
    
      try {
        const response = await axios.get(
          'https://66ced668901aab24841fc54d.mockapi.io/productData'
        );
        setGoods(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
 

  // const dispatch = useDispatch();
  //  const goods = useSelector(selectGoods);
  //  const loading = useSelector(selectLoading);
  //  const error = useSelector(selectError);

  useEffect(() => {
    // dispatch(fetchGoods());
   
    // }, [dispatch]);
fetchGoods()
  },[])
  // console.log('Goods:', goods);
  // console.log('Loading:', loading);
  // console.log('Error:', error);
  const handleAddToBasket = ()=> {
    // dispatch(addToBasket(item));
    console.log("")
  };

  return (
    <>
      <Header />
      <Buner />
      <Main h3prop={'Goods'}>
       
        <CardList
          className={styles.goodListContainer}
          handleClick={handleAddToBasket} // Передаем handleAddToBasket
          btnName={'+'}
          items={goods}
        >
          {/* {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>} */}
        </CardList>
      </Main>
      <Footer />
    </>
  );
}

export default Home;