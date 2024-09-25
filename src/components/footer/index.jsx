import { memo } from 'react';
import social_media from '../../images/sotialmadia';
import styles from './styles.module.scss';

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <ul className={styles.privacyContainer}>
        <li>
          <h3>Contacts</h3>

          <p>8 800 000 00 00</p>
          <p>emailexample@email.com</p>
        </li>
        <li>
          <p>2024 Sneaker Store. All rights reserved.</p>
        </li>
      </ul>
      <ul className={styles.socialContainer}>
        <li>
          {social_media.map(item => {
            return <img key={item.id} src={item.url} alt={item.name} />;
          })}
        </li>
        <li>
          <input type="email" placeholder='enter your email' />
          
        </li>
      </ul>
    </footer>
  );
}
export default memo(Footer);
