import React from "react";
import "./style.css";

export default function App() {
  //set form values
  const [fname,setFname]=React.useState('');
  const [lname,setLname]=React.useState('');
  const [email,setEmail]=React.useState('');
  const [password,setPassword]=React.useState('');
  const [confirm,setConfirm]=React.useState('');

  //set form errors
  const [fnameErr,setFnameErr]=React.useState({});
  const [lnameErr,setLnameErr]=React.useState({});
  const [emailErr,setEmailErr]=React.useState({});
  const [passwordErr,setPasswordErr]=React.useState({});
  const [confirmErr,setConfirmErr]=React.useState({});
 
//handle form inputs
  const handlefname = (e)=>{
     setFname(e.target.value)
  }
  const handlelname = (e)=>{
    setLname(e.target.value)
 }
 const handleemail = (e)=>{
  setEmail(e.target.value)
}
const handlepassword = (e)=>{
  setPassword(e.target.value)
}
const handleconfirm = (e)=>{
  setConfirm(e.target.value)
}
const onSubmit = (e)=>{
  e.preventDefault();
  const isValid = formValidation();
}
const formValidation = ()=>{
   const fnameErr={};
   const lnameErr={};
   const emailErr={};
   const passwordErr={};
   const confirmErr={};
   let isValid = true;
   if(fname.trim().length<0){
     fnameErr.fnameShort = 'Enter Firstname',
     isValid = false;
   }
   if(lname.trim().length<0){
    lnameErr.lnameShort = 'Enter Lasttname',
    isValid = false;
  }
  if(!email.includes('@gmail.com')){
    emailErr.emailInvalid = 'Enter valid email address',
    isValid=false;
  }
  if(password.trim().length<8){
    passwordErr.passwordShort = 'Password must have 8 letters',
    isValid=false;
  }
  if(confirm.trim().length<0){
    confirmErr.confirmShort = 'Password not matches',
    isValid=false;
  }
  setFnameErr(fnameErr);
  setLnameErr(lnameErr);
  setEmailErr(emailErr);
  setPasswordErr(passwordErr);
  setConfirmErr(confirmErr);
   return isValid;
  
}
  return (
    <div className='container'>
      <div className='formdiv'>
        <span>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIN7bHMpaAD_RpHSWxMQwBF3jQDDDdF3IfzhRM4TKygk-ASnfRVgBehCKYEiEv9tXG8DA&usqp=CAU' className='logo'/>
        </span>
        <h2>Create your Google Account</h2>
        <form onsubmit={onSubmit}>
        <input type='text' name='firstname' placeholder='First name'  value={fname} onChange={handlefname} required/>
        &nbsp;&nbsp;&nbsp;
        <input type ='text' name='lastname' placeholder = 'Last name'  value={lname} onChange={handlelname}/>
        <br/>
        <br/>
        <br/>
        <input type="email" name='email' placeholder= "Username"  className='email' value={email} onChange={handleemail}
        />
        <p>You can use letters,numbers & periods</p>
        <div className='useremail'>
       <h4>Use my current email address instead </h4>
       </div>
       <br/>
        <br/>
       <input type='password' name='password' placeholder='Password' minlegth='8'  value={password} onChange={handlepassword}/>
        &nbsp;&nbsp;&nbsp;
        <input type ='password' name='confirm' placeholder = 'Confirm' minlength='8'  value={confirm} onChange={handleconfirm}/>
        <p>Use 8 or more characters with a mix of letters, numbers &<br/>symbols</p>
        <div className='checkbox-container'>
          <input type = 'checkbox' name='checkbox' />
          &nbsp;&nbsp;
          <label>Show Password</label>
        </div>
        <br/>
        <br/>
        <div className='user-signin'>
       <h4> Sign in instead </h4>
       </div>
       <div className='btn'>
       <button type="submit">Next</button>
       </div>
        </form>
      </div>
      <div className='imgdiv'>
        <img src ="https://ssl.gstatic.com/accounts/signup/glif/account.svg" className='img'/>
        <p className='figcaption'>One account. All of Google<br/>working for you</p>
      </div>
    </div>
  );
}
