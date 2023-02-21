import React, { useState } from 'react';
import cx from 'classnames';
import { FormProfile } from '../../ui/FormProfile';
import { useGetQueryData } from '../../hooks/useGetQueryData';
import { LoadIndicator } from '../../ui/LoadIndicator';
import { QueryService } from '../../api/QueryService';
import { NavProfile } from './NavProfile';
import { LinkProfile } from './LinkProfile';
import styles from './profile.module.css';

export const ProfilePage = () => {
  const [isEdition, setEdition] = useState(true);

  const { data, loaded, error } = useGetQueryData(QueryService.getProfile);

  const handleEdition = () => {
    setEdition(!isEdition);
  };

  if (!loaded) {
    return (
      <div className={styles.loading}>
        <LoadIndicator />
      </div>
    );
  }

  if (error) {
    return (
      <div className={cx(styles.loading)}>
        <p>Ошибка загрузки..... {error}</p>
      </div>
    );
  }
  return (
    <div className={styles.wrap}>
      <div className={styles.title}>Профиль пользователя</div>
      <div className={styles.container}>
        <NavProfile username={data.username} edition={handleEdition} />
        <div className={styles.form_wrap}>
          <FormProfile userProfile={data} isEdition={isEdition} />
        </div>
        <LinkProfile />
      </div>
    </div>
  );
};
