import React from 'react';
import { Button, AuthForm } from '../../components';

import './auth.scss';

const Auth = () => (
  <section className="auth">
    <AuthForm>
      <Button className='button--large' type='primary'>
        Войти в Аккаунт
      </Button>
    </AuthForm>
  </section>
);

export default Auth;
