import React, { useContext } from 'react';
import Cookies from 'js-cookie';
import { message } from 'antd';
import { Base64 } from 'js-base64';
import { AuthContext } from '../../providers/AuthProvider';
import { AuthForm } from '../../components/AuthForm';
import { QueryService } from '../../api/QueryService';
import styles from './authPage.module.css';

export const AuthPage = () => {
  const { setAuthorized } = useContext(AuthContext);
  const [messageApi, contextHolder] = message.useMessage();

  const handleSubmit = async (event, email, password) => {
    event.preventDefault();
    try {
      const response = await QueryService.authUser({
        email,
        password: Base64.encode(password)
      });
      setAuthorized(true);
      Cookies.set('jwt', response.data.token);
    } catch (er) {
      messageApi.error(er.message);
    }
  };
  return (
    <div className={styles.auth_wrap}>
      {contextHolder}
      <div className={styles.auth_title}>Авторизация</div>
      <div className={styles.auth_container}>
        <AuthForm handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};
