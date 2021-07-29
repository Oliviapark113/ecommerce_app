import React, { useState } from 'react';
import {Link }from 'react-router-dom';


export default function SigninScreen() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

   const submitHandler = (e) =>{
       e.preventDefault();
       //todo: signin action
   }



  return (
      <div>
          <form className="form" onSubmit={submitHandler}>
           <div>
               <h1>Sign In</h1>
           </div>
           <div>
               <lable htmlFor="email">Email address</lable>
               <input type="email"  
               id="email" 
               placeholder="Enter email"
               onChange = {e =>setEmail(e.target.value)}
               ></input> 
           </div>
           <div>
               <lable htmlFor="password">Password</lable>
               <input type="password"  
               id="password" 
               placeholder="Enter password"
               onChange = {e =>setPassword(e.target.value)}
               ></input> 
           </div>
           <div>
               <label />
               <button className="primary" type="submit">Sign In</button>
           </div>
           <div>
               <lable/>
               <div>
                   New customer ? {' '}
                   <Link to="/register">Create your account</Link>
               </div>
           </div>
          </form>
      </div>
      
  )
}
