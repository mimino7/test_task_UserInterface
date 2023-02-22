import React from 'react';
import { nanoid } from 'nanoid';

import { Card } from 'antd';

const { Meta } = Card;

export const ImageSet = ({ images }) => {
  return (
    <>
      <div />
      {images &&
        images.map(image => (
          <Card
            key={nanoid()}
            hoverable
            style={{ width: 340, marginBottom: 35 }}
            cover={<img alt="example" src={image.url} />}
          >
            <Meta title={image.title} description="test_task" />
          </Card>
        ))}
    </>
  );
};
