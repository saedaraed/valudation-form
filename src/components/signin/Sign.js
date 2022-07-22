import React from 'react'
import { Form } from "./Style"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object().shape({
    username: yup.string().required() ,
    email: yup.string().email().required ("First Name should be required please") ,
    age: yup.number().positive().integer().required(),
    password: yup.string().min(4).max(15).required(),
    confirmPassword:yup.string().oneOf([yup.ref("password").null])

})

export default function Sign() {

   const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });


    const submitForm = (data) => {
    console.log(data);
  };
  return (
      <Form className='form' onSubmit={handleSubmit(submitForm)}>
           <div class="mb-3">
    <label for="exampleName" class="form-label">Name </label>
    <input type="text" name='username' class="form-control" id="exampleName" ref={register}/>
 <p> {errors.username?.message} </p>
          </div>
           <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" name='email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={register}/>
              <p>{errors.email?.message }</p>
  </div>
  <div class="mb-3">
    <label for="exampleAge" class="form-label">Age</label>
    <input type="number" name='age' class="form-control" id="exampleAge" ref={register} />
<p>{errors.age?.message }</p>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" name='password' class="form-control" id="exampleInputPassword1"  ref={register}/>
              <p>{errors.password?.message }</p>
          </div>
         <div class="mb-3">
    <label for="exampleInputPassword2" class="form-label">Confirm Password</label>
              <input type="password" name='confirmPassword' class="form-control" id="exampleInputPassword2"  />
               <p>{errors.confirmPassword && "Passwords should match!" }</p>
          </div>   
  
  <button type="submit" id='submit' class="btn btn-primary">Submit</button>
</Form>
  )
}
