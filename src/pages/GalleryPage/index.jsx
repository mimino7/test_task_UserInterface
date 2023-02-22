import React from 'react';
import { InView } from 'react-intersection-observer';
import { LoadIndicator } from '../../ui/LoadIndicator';
import { useGetQueryArrayData } from '../../hooks/useGetQueryArrayData';
import { QueryService } from '../../api/QueryService';
import { ImageSet } from './ImageSet';
import styles from './galleryPage.module.css';

export const GalleryPage = () => {
  const LIMIT_PHOTOS = 10;
  const { data, loaded, error, fetching, nextLoad } = useGetQueryArrayData(
    QueryService.getPhotos,
    {},
    LIMIT_PHOTOS
  );

  const onLoadNext = inView => {
    if (inView) nextLoad();
  };

  if (!loaded)
    return (
      <div className={styles.loading}>
        <LoadIndicator />
      </div>
    );
  if (error)
    return (
      <div className={styles.loading}>
        <LoadIndicator />
        <p>Ошибка загрузки...</p>
      </div>
    );
  return (
    <div className={styles.wrap}>
      <div className={styles.title}>Галерея</div>

      <div className={styles.container}>
        <ImageSet images={data} />
        {!fetching && (
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
