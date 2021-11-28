import axios from 'axios';
import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';

const AddUser = () =>{
    let navigate = useNavigate();
    const [user,setUser]= useState({
     name:"",
     username:"",
     email:"",
     phone:""   
    });
     const {
         name,
         username,
         email,
         phone
        } = user;
     const onInputChange = e =>{
         setUser({...user, [e.target.name]: e.target.value})
     };

     const onSubmit = e =>{
         e.preventDefault();
         axios.post("http://localhost:3001/users",user);
         navigate("/");
     }
    return (
        <div className="container">
             <div className="py-4">
            <h1 className="text-center">Add User</h1>
            <form onSubmit={e=>onSubmit(e)} >
  <div className="input-group mb-3">
    <input type="text" className="form-control" placeholder="Enter your name" name="name" value={name} onChange={e => onInputChange(e)}/>
  </div>
  <div className="input-group mb-3">
    <input type="text" className="form-control" placeholder="Enter your username" name="username" value={username} onChange={e => onInputChange(e)}/>
  </div>
  <div className="input-group mb-3">
    <input type="text" className="form-control" placeholder="Enter your email" name="email" value={email} onChange={e => onInputChange(e)}/>
  </div>
  <div className="input-group mb-3">
    <input type="text" className="form-control" placeholder="Enter your phone number" name="phone" value={phone} onChange={e => onInputChange(e)} />
  </div>
  <div className="mb-3">
  <button type="submit" className="btn btn-primary mb-3">Submit</button>
 </div>
 </form>
  </div>
</div>

    )
}
 export default AddUser;