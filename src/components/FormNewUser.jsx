import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {postNewUser} from '../features/users/usersSlice'
import { Form, Input, Button } from 'antd';

const FormNewUser = () => {
  const dispatch = useDispatch()
  const [form] = Form.useForm();
  const formStyle = {
    maxWidth: '400px',
    padding: 24,
    layout: 'horizontal'
  };

  const handleSubmit = (values) => {
    dispatch(postNewUser(values))
  };

  return (
    <Form form={form} onFinish={handleSubmit} style={formStyle}>
      <Form.Item name="name" label="Name">
        <Input />
      </Form.Item>
      <Form.Item name="email" label="Email">
        <Input type="email" />
      </Form.Item>
      <Form.Item name="city" label="City">
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default FormNewUser;