import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from 'antd';
import { Icon } from '@ant-design/compatible';
import { Button, AuthForm } from '../../../components';
import { validateField } from 'utils/helpers';

const LoginForm = (props) => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } = props;
  return (
    <div>
      <div className='auth__header'>
        <h1 className='auth__title title'>ВХОД</h1>
      </div>
      <AuthForm>
        {
          <Form onSubmit={handleSubmit} className='login-form'>
            <Form.Item
              validateStatus={validateField('email', touched, errors)}
              hasFeedback
              help={!touched.email ? '' : errors.email}>
              <Input
                id='email'
                className='button--input'
                prefix={<Icon type='mail' style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder='E-mail'
                name='email'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>

            <Form.Item
              validateStatus={validateField('password', touched, errors)}
              hasFeedback
              help={!touched.password ? '' : errors.password}>
              <Input
                id='password'
                className='button--input'
                prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
                type='password'
                placeholder='Password'
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>

            <Form.Item>
              <Button
                onClick={handleSubmit}
                type='primary'
                htmlType='submit'
                className='button--large'>
                Войти в аккаунт
              </Button>
              <Link to='/register' className='auth__register-link'>
                Зарегистрироваться
              </Link>
            </Form.Item>
          </Form>
        }
      </AuthForm>
    </div>
  );
};

export default LoginForm;
