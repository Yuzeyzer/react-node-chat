import React from 'react';
import { Button, AuthForm } from '../../components';

import './auth.scss';

const Auth = () => (
  <section className='auth'>
    <div className='auth__content'>
      <div className='auth__header'>
        <h1 className="auth__title">Войти в аккаунт</h1>
        <p className="auth__description">Пожалуйста, войдите в свой аккаунт</p>
      </div>
      <AuthForm>
        <Button className='button--large' type='primary'>
          Войти в Аккаунт
        </Button>
      </AuthForm>
    </div>
  </section>
);

export default Auth;
