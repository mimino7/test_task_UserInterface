import { EditOutlined, LogoutOutlined } from '@ant-design/icons';
import React from 'react';
import styles from './iconSet.module.css';

export const IconSet = ({ icons, edition }) => {
  return (
    <>
      {icons.map((icon, i) => {
        return (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
          <div key={i} className={styles.link}>
            {icon}
          </div>
        );
      })}
      <div className={styles.link}>
        <LogoutOutlined className={styles.icon} />
      </div>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,
      jsx-a11y/no-static-element-interactions */}
      <div onClick={e => edition(e)} className={styles.link}>
        <EditOutlined className={styles.icon} />
      </div>
    </>
  );
};
