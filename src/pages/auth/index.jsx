import React from 'react';
import { Form, Input } from 'antd';
import { Icon } from '@ant-design/compatible';
import { Button, AuthForm } from '../../components';

import './auth.scss';

import bg from '../../images/auth-bg.png';

class Auth extends React.Component {
  formRef = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    return (
      <section className='auth'>
        <div className='auth__content'>
          <div className='auth__column'>
            <img className="auth__img" src={bg} alt='' />
          </div>
          <div className='auth__column'>
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
                <Form.Item>
                  <Button type='primary' htmlType='submit' className='button--large'>
                    Войти в Аккаунт
                  </Button>
                  <a href=''>Зарегистрироваться</a>
                </Form.Item>
              </Form>
            </AuthForm>
          </div>
        </div>
      </section>
    );
  }
}

export default Auth;

// class Auth extends React.Component {

//     return (
//       <section className='auth'>
//         <div className='auth__content'>
//           <div className='auth__header'>
//             <h1 className='auth__title'>Войти в аккаунт</h1>
//             <p className='auth__description'>Пожалуйста, войдите в свой аккаунт</p>
//           </div>
//           <AuthForm>

// <Button className='button--large' type='primary'>
//   Войти в Аккаунт
// </Button>
//           </AuthForm>
//         </div>
//       </section>
//     );
//   }
// }
