import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormTask = () => {
    const {register, handleSubmit} = useForm()
    const [userData, setUSerData] = useState({})
    const [isSubmited, setisSubmited] = useState(false)

    const submitHandler = (data)=>{
        console.log(data)
        setUSerData(data)
        setisSubmited(true)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>FormTask</h1>
        <br></br>
        <h3>Student Inoformation Form</h3>
        <br></br>
       <form onSubmit={handleSubmit(submitHandler)}>
        <div>
            <label>First Name   </label>
            <input type='text' placeholder='Enter First  Name' {...register("firstname")}></input>
        </div>
        <br></br>
        <div>
            <label>Last Name </label>
            <input type='text' placeholder='Enter Last Name'{...register("lastname")}></input>
        </div>
        <br></br>
        <div>
            <label>Email  </label>
            <input type='email' placeholder='Enter Email' {...register("email")}></input>
        </div>
        <br></br>
        <div>
            <label>Date Of Birth  </label>
            <input type='date' {...register("dob")}></input>
        </div>
        <br></br>
        <div>
            <label>Mobile No  </label>
            <input type='number' placeholder='Enter Your Mobile No' {...register("mobileno")}></input>
        </div>
        <br></br>
        <div>
            <label>Age </label>
            <input type='number' placeholder='Enter Age'{...register("age")}></input>
        </div>
        <br></br>
        <div>
            <label>10th Marks </label>
            <input type='number' placeholder='Enter 10th Marks' {...register("marks10")}></input>
        </div>
        <br></br>
        <div>
            <label>12th Marks </label>
            <input type='number' placeholder='Enter 12th Marks' {...register("marks12")}></input>
        </div>
        <br></br>
        <div>
            <label>Password </label>
            <input type='password' placeholder='Enter Your Password' {...register("password")}></input>
        </div>
        <br></br>
        <div>
            <label>Conform Password </label>
            <input type='password' placeholder='Enter Your Password' {...register("cpassword")}></input>
        </div>
        <br></br>
        <input type='submit' style={{width:"200px",padding:"10px"}}></input>
      </form>  
      {
        isSubmited == true && <div>
            <br></br>
            <h1>Information</h1>
            <h4>First Name : {userData.firstname}</h4>
            <h4>Last Name : {userData.lastname}</h4>
            <h4>Email : {userData.email}</h4>
            <h4>Date Of Birth : {userData.dob}</h4>
            <h4>Mobile No : {userData.mobileno}</h4>
            <h4>Age : {userData.age}</h4>
            <h4>10th Marks : {userData.marks10}</h4>
            <h4>12th Marks : {userData.marks12}</h4>
            <h4>Password : {userData.password}</h4>
            <h4>Conform Password : {userData.cpassword}</h4>
            </div>
      } 
    </div>
  )
}
