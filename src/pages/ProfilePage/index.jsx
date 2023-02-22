import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import { message } from 'antd';
import { FormProfile } from '../../ui/FormProfile';
import { useGetQueryData } from '../../hooks/useGetQueryData';
import { LoadIndicator } from '../../ui/LoadIndicator';
import { QueryService } from '../../api/QueryService';
import { NavProfile } from './NavProfile';
import { LinkProfile } from './LinkProfile';
import { useMutationData } from '../../hooks/useMutationData';
import styles from './profile.module.css';

export const ProfilePage = () => {
  const [isEdition, setEdition] = useState(true);
  const [messageApi, contextHolder] = message.useMessage();

  const { data, loaded, error } = useGetQueryData(QueryService.getProfile);

  const [changeUser, fetching, isSuccess, isError] = useMutationData(
    QueryService.changeProfile
  );
  useEffect(() => {
    if (isSuccess) messageApi.success('Профиль изменен');
    if (isError) messageApi.error('Ошибка запроса');
  }, [isSuccess, isError]);

  const handleEdition = () => {
    setEdition(!isEdition);
  };

  const editProfile = newData => {
    changeUser(newData);
  };

  return (
    <div className={styles.wrap}>
      {contextHolder}
      <div className={styles.title}>Профиль пользователя</div>
      <div className={styles.container}>
        <NavProfile edition={handleEdition} />
        <div className={styles.form_wrap}>
          {!loaded && (
            <div className={styles.loading}>
              <LoadIndicator />
            </div>
          )}
          {error && (
            <div className={cx(styles.loading)}>
              <p>Ошибка..... {error}</p>
            </div>
          )}
          {data && (
            <FormProfile
              userProfile={data}
              isEdition={isEdition}
              onFinish={editProfile}
              fetching={fetching}
            />
          )}
        </div>
        <LinkProfile />
      </div>
    </div>
  );
};
