import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '~/firebaseConfig';

// import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = password === '' || email === '';

  function handleSubmit(event) {}

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <form schema={schema} onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
        />

        <input
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />

        <button type="submit" disabled={isInvalid}>
          Entrar
        </button>

        {error && <p>{error.message}</p>}
      </form>
    </>
  );
}
