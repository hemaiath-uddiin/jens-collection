import React, { useState } from 'react';
import auth from '../../fire.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name,setName] = useState('')
   
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
   const navigate = useNavigate()
   // signIn with email and password 
   const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
    // get error 

    if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      } 
      // get user 
      if (user) {
        return (
            navigate('/')
        );
      }
    const handleRegister=(e)=>{ 
        e.preventDefault() 
        console.log( name,email,password);  
        createUserWithEmailAndPassword(email,password)  
         // 👇️ clear all input values in the form
         setEmail('');
         setPassword(''); 
         setName('')
    }
  
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleRegister}> 
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input onChange={e => setName(e.target.value)}  type="text" value={name} required placeholder="Name" className="input input-bordered" />
              </div>
             
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input  required onChange={e => setEmail(e.target.value)}  type="text" value={email} placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input onChange={e => setPassword(e.target.value)}  type="password" required value={password} placeholder="password" className="input input-bordered" />
             
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register Now</button>
              </div>
              
              
              
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;