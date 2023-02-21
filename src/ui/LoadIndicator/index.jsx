import React from 'react';
import { Space, Spin } from 'antd';

export const LoadIndicator = () => (
  <Space direction="vertical" style={{ width: 0 }}>
    <Space>
      {/* <Spin tip="Loading" size="small">
        <div className="content" />
      </Spin>
      <Spin tip="Loading">
        <div className="content" />
      </Spin> */}
      <Spin tip="Loading" size="large">
        <div className="content" />
      </Spin>
    </Space>

    {/* <Spin tip="Loading...">
      <Alert
        message="Alert message title"
        description="Further details about the context of this alert."
        type="info"
      />
    </Spin> */}
  </Space>
);
