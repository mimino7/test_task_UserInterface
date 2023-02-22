import React, { useContext } from 'react';
import Cookies from 'js-cookie';
import { EditOutlined, LogoutOutlined } from '@ant-design/icons';
import { AuthContext } from '../../providers/AuthProvider';

import styles from './iconSet.module.css';

export const IconSet = ({ icons, edition }) => {
  const { setAuthorized } = useContext(AuthContext);

  const handlerLogOut = () => {
    setAuthorized(false);
    Cookies.remove('jwt');
  };
  return (
    <>
      {icons.map((icon, i) => {
        return (
          <div key={i} className={styles.link}>
            {icon}
          </div>
        );
      })}
      <button onClick={handlerLogOut} type="button" className={styles.link}>
        <LogoutOutlined className={styles.icon} />
      </button>
      <button onClick={e => edition(e)} type="button" className={styles.link}>
        <EditOutlined className={styles.icon} />
      </button>
    </>
  );
};
