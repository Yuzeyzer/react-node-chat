import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from 'antd';
import { Icon } from '@ant-design/compatible';
import { Button, AuthForm } from '../../../components';

class LoginForm extends Component {
  formRef = React.createRef();
  render() {
    return (
      <div>
        <div className='auth__header'>
          <h1 className='auth__title title'>ВХОД</h1>
        </div>
        <AuthForm>
          <Form
            ref={this.formRef}
            onSubmit={this.handleSubmit}
            initialValues={{
              remember: true,
            }}
            className='login-form'>
            <Form.Item name='username'>
              <Input
                className='button--input'
                prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder='Username'
              />
            </Form.Item>
            <Form.Item name='password'>
              <Input
                className='button--input'
                prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
                type='password'
                placeholder='Password'
              />
            </Form.Item>
            <Form.Item>
              <Button type='primary' htmlType='submit' className='button--large'>
                Войти в Аккаунт
              </Button>
              <Link to='/register' className='auth__register-link'>
                Зарегистрироваться
              </Link>
            </Form.Item>
          </Form>
        </AuthForm>
      </div>
    );
  }
}


export default LoginForm;
