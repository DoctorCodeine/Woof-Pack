import React from 'react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Bungee_Inline } from '@next/font/google';
import styles from '../styles/Login.module.scss';
import logo from 'public/doggie.gif';
import Image from 'next/image';
import { Button } from '@mantine/core';


const LoginUser = ({email, password}) => {
  const router = useRouter();
  const [error, setError] = useState('');
  const [inputEmail, setInputEmail] = useState(email);
  const [inputPassword, setInputPassword] = useState(password);

  
  const handleLogin = async (e: any) => {
    e.preventDefault();
    try{ 
      const response = await fetch('http://localhost:8000/pup/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: inputEmail, password: inputPassword}),
    });
    const data = await response.json();
    
    if (inputEmail === data.email && data.password === inputPassword && response.status === 200) {
      router.push('/dashboard');
    }

    } catch (error) {
      setError('Incorrect username or password. Please try again.');
      console.log(error);
    }

  };

  const handleEmail = (email: string) => {
    setInputEmail(email);
  };

  const handlePassword = (password: string) => {
    setInputPassword(password);
  };
  
  
  return(
    <>
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input type="email" name="email" onChange={e => handleEmail(e.target.value)}/>
        </label>
        <label>
          Password:
          <input type="password" name="password" onChange={e => handlePassword(e.target.value)}/>
        </label>
        <Button type="submit">Submit</Button>
      </form>
      {error && <p>{error}</p>}
    </div>
    </>
  );
};

export default LoginUser;
