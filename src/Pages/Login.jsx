import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Login() {
  const [button, setButton] = useState(true);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const history = useHistory();

  useEffect(() => {
    const emailRegex = (
      /^[a-z0-9.]+@[a-z0-9]+\.[a-z]/i);
    const validEmail = email.match(emailRegex);
    const passwordLength = 7;
    const validPassword = password.length < passwordLength;
    const validBtn = !validEmail || validPassword;
    setButton(validBtn);
  }, [email, password.length]);

  const handleEmail = ({ target }) => {
    const { value } = target;
    setEmail(value);
  };

  const handlePassword = ({ target }) => {
    const { value } = target;
    setPassword(value);
  };

  const handleClick = () => {
    localStorage.setItem('user', JSON.stringify({ email }));
    history.push('/meals');
  };

  return (
    <div>
      <h1 className="h1">LOGIN</h1>
      <div className="login">
        <input
          data-testid="email-input"
          type="text"
          placeholder="Email"
          value={ email }
          onChange={ handleEmail }
          id="email-input"
        />
        <input
          data-testid="password-input"
          name="password"
          placeholder="Password"
          value={ password }
          onChange={ handlePassword }
          id="password-input"
        />
        <button
          type="button"
          data-testid="login-submit-btn"
          name="login-submit-btn"
          id="login-submit-btn"
          disabled={ button }
          onClick={ handleClick }
        >
          Enter
        </button>
      </div>
    </div>
  );
}
