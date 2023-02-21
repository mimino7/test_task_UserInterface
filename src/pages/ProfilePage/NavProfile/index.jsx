import React from 'react';
import { SettingOutlined, ProjectOutlined } from '@ant-design/icons';
import { FaultImage } from '../../../ui/FaultImage';
import { IconSet } from '../../../ui/IconsSet';
import styles from '../profile.module.css';

const icons = [
  <SettingOutlined className={styles.icon} />,
  <ProjectOutlined className={styles.icon} />,
  <ProjectOutlined className={styles.icon} />,
  <ProjectOutlined className={styles.icon} />
];

export const NavProfile = ({ username, edition }) => {
  return (
    <div className={styles.nav_wrap}>
      <div className={styles.user_avatar}>
        Hello, {username}
        <FaultImage />
      </div>
      <div className={styles.user_setting}>
        <IconSet icons={icons} edition={edition} />
      </div>
    </div>
  );
};
