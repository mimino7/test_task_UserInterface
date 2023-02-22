import React from 'react';
import { Space, Spin } from 'antd';

export const LoadIndicator = () => (
  <Space direction="vertical" style={{ width: 0, marginBottom: 20 }}>
    <Space>
      <Spin tip="Loading" size="large">
        <div className="content" />
      </Spin>
    </Space>
  </Space>
);
