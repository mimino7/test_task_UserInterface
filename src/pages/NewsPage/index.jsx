import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';
import cx from 'classnames';

import { useGetQueryArrayData } from '../../hooks/useGetQueryArrayData';
import { useGetQueryData } from '../../hooks/useGetQueryData';
import { QueryService } from '../../api/QueryService';
import { LoadIndicator } from '../../ui/LoadIndicator';
import { ItemSelect } from '../../ui/Select';
import styles from './newsPage.module.css';

const LIMIT = 12;

export const NewsPage = () => {
  const [selectedUserId, setSelectedUserId] = useState(undefined);

  const {
    data: users,
    loaded: usersLoaded,
    error: usersError
  } = useGetQueryData(QueryService.getUsers);

  const {
    data: news,
    loaded: newsLoaded,
    fetching: newsFetching,
    error: newsError,
    nextLoad,
    reset
  } = useGetQueryArrayData(
    QueryService.getNews,
    {
      userId: selectedUserId
    },
    LIMIT
  );

  const onLoadNext = inView => {
    if (inView) nextLoad();
  };

  const changeHandle = userId => {
    reset();
    setSelectedUserId(userId);
  };

  if (!newsLoaded || !usersLoaded) {
    return (
      <div className={styles.loading}>
        <LoadIndicator />
      </div>
    );
  }

  if (newsError || usersError) {
    return (
      <div className={cx(styles.loading)}>
        <p>Ошибка загрузки..... {newsError}</p>
      </div>
    );
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.title}>Новости</div>
      <div className={styles.container}>
        <ItemSelect users={users} onChange={changeHandle} />
        {news.map(post => (
          <div key={post.id} className={styles.news_wrap}>
            <div className={styles.title_news}>{post.title}</div>
            <div className={styles.body_news}>{post.body}</div>
          </div>
        ))}
        {!newsFetching && (
          <InView
            as="div"
            triggerOnce
            onChange={onLoadNext}
            className={styles.observer}
          />
        )}
      </div>
    </div>
  );
};
