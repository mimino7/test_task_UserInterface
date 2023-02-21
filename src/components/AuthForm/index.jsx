import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import { validEmailReg } from './utils';
import styles from './authForm.module.css';

export const AuthForm = ({ handleSubmit }) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('Заполните поле');
  const [emailVisited, setEmailVisited] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('Заполните поле');
  const [passwordVisited, setPasswordVisited] = useState(false);
  const [formValid, setFormValid] = useState(false);

  const blurHandler = e => {
    switch (e.target.name) {
      case 'email':
        setEmailVisited(true);
        break;
      case 'password':
        setPasswordVisited(true);
        break;
      default:
    }
  };
  const emailHandler = e => {
    const currValue = e.target.value;
    setEmail(currValue);
    if (!validEmailReg.test(String(currValue).toLocaleLowerCase())) {
      setEmailError('Неверный email');
    } else {
      setEmailError('');
    }
  };
  const passwordHandler = e => {
    const currValue = e.target.value;
    setPassword(currValue);
    if (currValue.length < 3) {
      setPasswordError('Пароль должен быть больше 3 символов');
      if (!currValue) {
        setPasswordError('Заполните поле');
      }
    } else {
      setPasswordError('');
    }
  };

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  return (
    <form
      onSubmit={handleSubmit}
      className={styles.form_auth}
      action="#"
      method="post"
    >
      <label className={styles.form_auth_label}>email</label>
      <input
        onChange={emailHandler}
        value={email}
        onBlur={blurHandler}
        className={cx(styles.form_auth_input, {
          [styles.error]: emailVisited && emailError
        })}
        type="email"
        name="email"
        placeholder="Введите email"
        required
      />
      {emailVisited && emailError && (
        <div className={styles.error_text}>{emailError}</div>
      )}
      <label className={styles.form_auth_label}>password</label>
      <input
        onChange={passwordHandler}
        value={password}
        onBlur={blurHandler}
        className={cx(styles.form_auth_input, {
          [styles.error]: passwordVisited && passwordError
        })}
        type="password"
        name="password"
        placeholder="Введите пароль"
        required
      />
      {passwordVisited && passwordError && (
        <div className={styles.error_text}>{passwordError}</div>
      )}
      <button
        onClick={e => handleSubmit(e, email, password)}
        disabled={!formValid}
        className={cx(styles.form_button, { [styles.disabled]: !formValid })}
        type="submit"
        name="auth_submit"
      >
        Войти
      </button>
    </form>
  );
};
