import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from 'antd';
import { Icon } from '@ant-design/compatible';
import { Button, AuthForm } from 'components';

class RegisterForm extends Component {
  formRef = React.createRef();
  render() {
    const succes = false;

    return (
      <div>
        <div className='auth__header'>
          <h1 className='auth__title title'>Регистрация</h1>
        </div>
        <AuthForm>
          {!succes ? (
            <Form
              ref={this.formRef}
              onSubmit={this.handleSubmit}
              initialValues={{
                remember: true,
              }}
              className='login-form'>
              <Form.Item
                name='E-mail'
                rules={[{ required: true, message: 'Please input your E-mail!' }]}>
                <Input
                  className='button--input'
                  prefix={<Icon type='mail' style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder='E-mail'
                />
              </Form.Item>
              <Form.Item
                name='username'
                rules={[{ required: true, message: 'Please input your Username!' }]}>
                <Input
                  className='button--input'
                  prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder='Username'
                />
              </Form.Item>
              <Form.Item
                name='password'
                rules={[{ required: true, message: 'Please input your Password!' }]}>
                <Input
                  className='button--input'
                  prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type='password'
                  placeholder='Password'
                />
              </Form.Item>
              <Form.Item
                name='password'
                rules={[{ required: true, message: 'Please input your Password!' }]}>
                <Input
                  className='button--input'
                  prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type='password'
                  placeholder='Confirm Password'
                />
              </Form.Item>
              <Form.Item>
                <Button type='primary' htmlType='submit' className='button--large'>
                  ЗАРЕГИСТРИРОВАТЬСЯ
                </Button>
                <Link to='/login' className='auth__register-link'>
                  Войти в аккаунт
                </Link>
              </Form.Item>
            </Form>
          ) : (
            <div className='auth__confirm'>
              <h3 className='auth__confirm-icon'>Подвердите свой аккаунт</h3>
            </div>
          )}
        </AuthForm>
      </div>
    );
  }
}

export default RegisterForm;
