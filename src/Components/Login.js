import React ,{useState}from 'react';

import {Form,Button} from 'react-bootstrap'

export default function Login() {

   const [data,setData] =useState({
    email : "",
    password: ""
   })
   const {email,password} = data;
  const onChange = e => {
    setData({...data,[e.target.name] : e.target.value}) 
   };

   const formHandler = e =>{
    
       console.log(data);
       
    setData({
      email : "",
      password : ""
    })
   };

    return (
    <div>
        <h1>Login Page</h1>
        <Form onSubmit={formHandler}>
  <Form.Group className="mb-3" controlId="formBasicEmail" >
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" name ="email" value={email} onChange={onChange}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" name ="password" value={password} onChange={onChange}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit" onClick={formHandler} >
    Submit
  </Button>
</Form>
    </div>
    );
}
