import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useForm } from 'react-hook-form';

function App() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (d) => {
    if (d.UserDetails.Firstname === '' || d.UserDetails.email === '' || d.UserDetails.password === '') {
      alert("Please fill all the fields");
    } else {
      const UserDetails = {
        UserName: d.UserDetails.Firstname,
        UserEmail: d.UserDetails.email,
        UserPassword: d.UserDetails.password,
      };

      console.log(UserDetails); 
    }
  };

  return (
    <div className='main_form'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>React Hook Form</h1>
        <input type="text" placeholder='Enter Your Name' {...register("UserDetails.Firstname")} />
        <input type="email" placeholder='Enter Your Email' {...register("UserDetails.email")} />
        <input type="password" placeholder='Enter Your Password' {...register("UserDetails.password")} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
