import React from 'react';
import { Select } from 'antd';

export const ItemSelect = ({ users, onChange }) => (
  <Select
    // showSearch
    placeholder="Выберите автора"
    // optionFilterProp="children"
    onChange={onChange}
    // onSearch={onSearch}
  >
    {users &&
      users.map((us, i) => (
        <Select.Option key={i} value={us.id}>
          {us.name}
        </Select.Option>
      ))}
  </Select>
);
