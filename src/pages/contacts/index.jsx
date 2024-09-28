import styles from './styles.module.scss';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Main from '../../components/main';

function Contacts() {

  return (
    <>
      <Header />
      <Main h3prop={'Contacts'}></Main> 
      <Footer />
    </>
  );
}
export default Contacts;
