import React from 'react';
import { FolderViewOutlined, GlobalOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import styles from '../profile.module.css';

export const LinkProfile = () => {
  return (
    <div className={styles.link_wrap}>
      <Link to="/gallery" className={styles.link_gallery}>
        <FolderViewOutlined style={{ fontSize: 30, opacity: 0.4 }} />
        Gallery
      </Link>
      <Link to="/news" className={styles.link_gallery}>
        <GlobalOutlined style={{ fontSize: 30, opacity: 0.4 }} />
        News
      </Link>
    </div>
  );
};
