import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';



const LoginForm = props => {
  let history = useHistory();
  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const handleChanges = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const submitForm = e => {
    e.preventDefault();
    const userCredentials = { user_name: user.username, password: user.password };
    axiosWithAuth()
      .post('/auth/login', userCredentials)
      .then(res => {
        window.localStorage.setItem('token', res.data.token);
        history.push('/home');
      });
  };

  return (
    <form onSubmit={submitForm}>
        <div>
            <label htmlFor='username'>Username </label>
            <input
                id='username'
                type='text'
                name='username'
                onChange={handleChanges}
                placeholder='Username'
                value={user.username}
            />
        </div>
        <div>
            <label htmlFor='password'>Password </label>
              <input
                id='password'
                type='password'
                name='password'
                onChange={handleChanges}
                placeholder=' Password'
                value={user.password}
              />
        </div>
        <div>
          <button type='submit'>Login</button>
        </div>
   
    </form>
  );
};



export default (LoginForm);
