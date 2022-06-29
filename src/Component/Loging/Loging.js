import React, { useState } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../fire.init';

const Loging = () => {
  
    // control state  
        const [email,setEmail] = useState('')
        const [password,setPassword] = useState('')
       const navigate = useNavigate()
       
        // signIn with google
        const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);
       
       // get user 
       if (user) {
        return (
            navigate('/')
        );
      }


       // handle email state 
    const handleform=(e)=>{ 
          e.preventDefault() 
        console.log(email,password);  
       
         // 👇️ clear all input values in the form
         setEmail('');
         setPassword('');
      }

    return (
        <div class="hero min-h-screen bg-lime-100 container mx-auto px-4 ">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left">
            <h1 class="text-5xl font-bold">Login now!</h1>
            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
               <form onSubmit={handleform} > 
               <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input  onChange={e => setEmail(e.target.value)}  type="text" name='email' placeholder="email"  value={email} class="input input-bordered" />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input  onChange={e => setPassword(e.target.value)}  name='password' type="password" placeholder="password"  value={password} class="input input-bordered" />
                
              </div>
              <div class="form-control mt-6">
                  <input type="submit" className='btn btn-primary' value="Loging" />
              </div> 
              <div class="form-control mt-6">
                   <button onClick={() => signInWithGoogle()} className='btn btn-primary'> SignIn Google</button>
              </div> 
              <Link to="/register"  class="btn btn-active btn-link"> Creat an account</Link>
               
               </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Loging;