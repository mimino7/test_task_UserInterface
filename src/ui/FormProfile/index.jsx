import React from 'react';
import { Button, Form, Input } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!'
  },
  number: {
    range: '${label} must be between ${min} and ${max}'
  }
};

export const FormProfile = ({ userProfile, isEdition, onFinish, fetching }) => {
  const { name, username, email, address, company, phone, website } =
    userProfile;

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      style={{ maxWidth: 600, opacity: 1, cursor: 'none' }}
      validateMessages={validateMessages}
    >
      <Form.Item
        style={{ opacity: 1 }}
        initialValue={name}
        name={['user', 'name']}
        label="Name"
        rules={[{ required: true }]}
      >
        <Input value="h" style={{ opacity: 1 }} />
      </Form.Item>
      <Form.Item
        initialValue={username}
        name={['user', 'username']}
        label="UserName"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        initialValue={email}
        name={['user', 'email']}
        label="Email"
        rules={[{ type: 'email' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        initialValue={address && address.city}
        name={['user', 'address']}
        label="Address"
      >
        <Input />
      </Form.Item>

      <Form.Item
        initialValue={company && company.name}
        name={['user', 'company']}
        label="Company"
      >
        <Input />
      </Form.Item>
      <Form.Item initialValue={phone} name={['user', 'phone']} label="Phone">
        <Input />
      </Form.Item>
      <Form.Item
        initialValue={website}
        name={['user', 'website']}
        label="Website"
      >
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button
          loading={fetching}
          disabled={isEdition}
          type="primary"
          htmlType="submit"
        >
          Сохранить
        </Button>
      </Form.Item>
    </Form>
  );
};
