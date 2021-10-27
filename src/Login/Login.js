import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useFirebase from '../Hooks/useFirebase';
import './login.css'


const Login = () => {
    const  {signInGoogle,
            createRegister,
            loginProcess,
            handleReset,
            email,
            password,
            setName,
            setEmail,
            setPassword,
            login,
            setLogin,
            error,
            setError} =useFirebase()

    // Redirect to the initial page after login
    const location = useLocation()
    const redirect_uri = location.state?.from || '/home' ;
    const history = useHistory() 

    const googleLogIn = ()=>{
        signInGoogle()
        .then(result =>{
          history.push(redirect_uri)
        })
    }
        
    
// user input value 
    const handleEmail = e =>{
        setEmail(e.target.value)
    }
    const handlePassword = e =>{
        setPassword(e.target.value)
    }
   
    const handleName = e =>{
        setName(e.target.value)
    }
   
// from submit
    const handleSubmit = (e)=>{
       
        e.preventDefault(email, password)
        if(password.length<6){
            setError('Must Be Use at least 6 characters')
            return ;
        }

        if(login){
            loginProcess(email, password)
        }
        else{
            
            createRegister(email, password)
        }
              
    }

     // toggle
     const handleToggle =(e)=>{
        setLogin(e.target.checked)
    }


  

    return (
        <div>
            <div className="m-5 ">
                <h2 style={{color:'perple'}}>{login ? 'Login Here' : 'Please Register'}</h2>
               
             <form onSubmit={handleSubmit} className="form-body" >
             <div className="pt-5">   
               {!login && <div className="row mb-3 ">
                    <div className="col-sm-12">
                      <input onBlur={handleName} type="text" className="w-50" placeholder="Enter your name" required />
                    </div>
                </div>}
                <div className="row mb-3">
                    <div className="col-sm-12">
                      <input onBlur={handleEmail} type="email" className="w-50" placeholder="your email"  required />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-12">
                      <input onBlur={handlePassword} type="password" className="w-50" placeholder="password"  required />
                    </div>
                </div>
                 <div>
                    <input onChange={handleToggle}  type="checkbox" />
                     {login ? <h4 className="text-success">Registration Done</h4> : 
                   <h4 style={{color:"#e26f60"}}  >Registration Complete...?</h4>}
                </div>
                <div className=" row text-danger">{error}</div>
                <button type="submit" className="btn  fw-bolder fs-5"  style={{color:"white"}} >{login ? 'Login' : 'Register'}</button>
                {login && <div className="mt-3">
                    <button onClick={handleReset} type="submit" className="btn btn-success fw-bolder fs-5  ms-2">Reset password</button>
                </div> }
                <div>OR</div>
                <button className="mt-3" onClick={googleLogIn} type="submit" className="btn  fw-bolder fs-5  ms-2" style={{color:"white"}} >Sign In with Google </button> <br /> <br />

               </div>
             </form>
           
         </div>
        </div>
    );
};

export default Login;
