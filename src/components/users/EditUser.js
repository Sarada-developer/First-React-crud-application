import axios from 'axios';
import React,{useState,useEffect} from 'react';
import {useNavigate,useParams} from 'react-router-dom';

const EditUser = () =>{
    let navigate = useNavigate();
    const {id} = useParams();
    // alert(id);
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
     useEffect(()=>{
       loadUser();
     },[]);
     const onSubmit = async e =>{
         e.preventDefault();
        await axios.put(`http://localhost:3001/users/${id}`,user); 
         navigate("/");
     }

     const loadUser = async () =>{
         const result = await axios.get(`http://localhost:3001/users/${id}`);
        //  console.log(result);
         setUser(result.data);
     }
    return (
        <div className="container">
             <div className="py-4">
            <h1 className="text-center">Edit A User</h1>
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
  <button type="submit" className="btn btn-warning mb-3">Update User</button>
 </div>
 </form>
  </div>
</div>

    )
}
 export default EditUser;