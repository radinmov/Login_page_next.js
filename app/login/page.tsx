'use client'
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import "./Style.css"

export default function Login() {


  useEffect(() => {
    document.title = 'Login';
  }, []);



  return (
    <div className='container'>
      <div className='container_inner'>
        <div className='container-right'>
          <h1 className='font-extrabold text-3xl'>Login page </h1>
          <div className='ints'>
            <input className='rounded-md' type='text' placeholder='Your name' />
            <input className='rounded-md' type='text' placeholder='Your Email' />
            <input className='rounded-md' type='password' placeholder='password' />
          </div>
          <button className='bg-blue-500'>Login</button>
        </div>
        <div className='container-left'>

        </div>
      </div>
    </div>
  );
}
