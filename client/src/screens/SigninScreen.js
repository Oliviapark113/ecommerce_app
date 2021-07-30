import React, { useState, useEffect } from 'react';
import {Link }from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { signin } from '../action/userAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';


export default function SigninScreen(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const redirect = props.location.search?
                    props.location.search.split('=')[1]:'/';

    const userSignin = useSelector((state)=> state.userSignin);
    const {userInfo, loading, error} = userSignin;

    const dispatch = useDispatch();
    const submitHandler = (e) =>{
       e.preventDefault();
     dispatch(signin(email, password));
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
               <h1>Sign In</h1>
           </div>
           {loading && <LoadingBox></LoadingBox>}
           {error &&<MessageBox variant="danger">{error}</MessageBox> }
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
