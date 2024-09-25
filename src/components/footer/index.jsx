import { memo, useState } from 'react';
import social_media from '../../images/sotialmadia';
import styles from './styles.module.scss';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
function Footer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  // const [email, setEmail] = useState('')
  //  function sendEmail ()  {
  //    emailjs
  //      .send(
  //        'service_q3guaud', //Service ID из Email Services
  //        'template_fq6qqeh', //  Template ID в email templates
  //        { email }, // передаем email в шаблон
  //        '1aoOkCMqEn0JwfkVO' // Public Key
  //      )
  //      .then(response => {
  //        console.log('SUCCESS!', response.status, response.text);
  //        setEmail('');
  //      })
  //      .catch(err => {
  //        console.log('FAILED...', err);
  //      });
  //  };
  // function onChange(e) {
  //   if (e.key === 'Enter' && email) {
  //     e.preventDefault();
  //     sendEmail(); // oтправляем email
  //   }
  // }
 
  function onSubmit (data){
    emailjs
      .send(
        'service_q3guaud', //Service ID из Email Services
        'template_fq6qqeh', //  Template ID в email templates
        { email: data.email }, // передаем email в шаблон
        '1aoOkCMqEn0JwfkVO' // Public Key
      )
      .then(response => {
        console.log('SUCCESS!', response.status, response.text);
        reset(); // Очищаем поле после успешной отправки
      })
      .catch(err => {
        console.log('FAILED...', err);
      });
  };
 function handleKeyPress ( e) {
   if (e.key === 'Enter') {
     e.preventDefault(); 
     handleSubmit(onSubmit)(); 
   }
 };
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
          <form onSubmit={handleSubmit(onSubmit)}>
            {errors.email && (
              <p style={{ color: 'rgb(228 8 8 )' , opacity:"0.5"}}>
                {errors.email.message}
              </p>
            )}
            <input
              type="email"
              placeholder="Enter your email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              onKeyDown={handleKeyPress}
              required
            />
          </form>
        </li>
      </ul>
    </footer>
  );
}
export default memo(Footer);
