'use client'
import { useState, ChangeEvent, FormEvent } from 'react';
import "./Style.css"



export const metadata = {
  title: 'Login page for behzad agadam farid'
}
export default function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('Logging in with:', { email, password });

    if (email === 'test@example.com' && password === 'password') {
      alert('Login successful!');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className='bg-gray flex justify-center h-screen'>
      <form onSubmit={handleSubmit} className='flex flex-col ' style={{width: '300px' }}>
        <h2>Login</h2>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
          style={{ padding: '10px', marginBottom: '15px' }}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
          style={{ padding: '10px', marginBottom: '15px' }}
        />
        <button type="submit" style={{ padding: '10px', cursor: 'pointer' }}>
          Login
        </button>
      </form>
    </div>
  );
}