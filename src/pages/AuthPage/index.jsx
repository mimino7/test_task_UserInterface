import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { AuthForm } from '../../components/AuthForm';
import styles from './authPage.module.css';

export const AuthPage = () => {
  const authUsers = [{ email: 'candidate@test.com', password: 'Sj3jtod@!3' }];

  const { setAuthorized } = useContext(AuthContext);

  console.log(localStorage.getItem('authorized'));
  const handleSubmit = (event, email, password) => {
    event.preventDefault();
    const account = authUsers.find(user => user.email === email);
    if (account && account.password === password) {
      setAuthorized(true);
      localStorage.setItem('authorized', true);
    }
  };
  return (
    <div className={styles.auth_wrap}>
      <div className={styles.auth_title}>Авторизация</div>
      <div className={styles.auth_container}>
        <AuthForm handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};
