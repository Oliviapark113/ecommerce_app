import React, { useState, useEffect } from 'react';
import {Link }from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { register } from '../action/userAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';


export default function RegisterScreen(props) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const redirect = props.location.search?
                    props.location.search.split('=')[1]:'/';

    const userRegister= useSelector((state)=> state.userRegister);
    const {userInfo, loading, error} = userRegister;

    const dispatch = useDispatch();
    const submitHandler = (e) =>{
       e.preventDefault();
       if(password !== confirmPassword) {
           alert('Password and confirm password are not match')
       }else{
        dispatch(register(name, email, password));
       }
    
   }
   
   useEffect(()=>{
     if(userInfo){
         props.history.push(redirect)
     }
   },[props.history,redirect,userInfo])


  return (
      <div>
          <form className="form" onSubmit={submitHandler}>
           <div>
               <h1>Create Account</h1>
           </div>
           {loading && <LoadingBox></LoadingBox>}
           {error &&<MessageBox variant="danger">{error}</MessageBox> }
           <div>
               <lable htmlFor="name">Name</lable>
               <input type="text"  
               id="name" 
               placeholder="Enter name"
               onChange = {e =>setName(e.target.value)}
               ></input> 
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
               <lable htmlFor="confirmPassword">Confirm Password</lable>
               <input type="password"  
               id="confirmPassword" 
               placeholder="Confirm Password"
               onChange = {e =>setConfirmPassword(e.target.value)}
               ></input> 
           </div>
           <div>
               <label />
               <button className="primary" type="submit">Register</button>
           </div>
           <div>
               <lable/>
               <div>
                    Already have an account? {' '}
                   <Link to={`/signin?redirect=${redirect}`}>Sign-In</Link>
               </div>
           </div>
          </form>
      </div>
      
  )
}
