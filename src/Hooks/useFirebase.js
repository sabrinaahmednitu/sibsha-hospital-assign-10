import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/firebase.init"
import {getAuth, signInWithPopup,
     GoogleAuthProvider ,
     createUserWithEmailAndPassword,
     signInWithEmailAndPassword,
     sendPasswordResetEmail,
     updateProfile ,
     signOut,
     onAuthStateChanged
 } from "firebase/auth";


 initializeAuthentication()

const useFirebase =()=> {
   const googleProvider = new GoogleAuthProvider()
   const auth = getAuth()

   const [user, setUser] = useState({})
   const [isLoading, setIsLoading] =useState(true)
   const [error, setError] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [login, setLogin]=useState(false)
   const [name, setName] = useState('')
  //  const [isLoding, setIsLoading] = useState(true)



     // create registration
     const createRegister =(email, password)=>{
      setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            const user = result.user;
            console.log(user)
            setUserName()
            setError('')
        
        })
        .catch((error) => {
            setError(error.message)
        })
        .finally(()=> setIsLoading(false)) ;
        
 }

    //process of login
    const loginProcess =(email, password)=>{
      setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            const user =result.user;
            console.log(user)
           setError('')
          })
          .catch((error) => {
            setError(error.message)
          })
          .finally(()=> setIsLoading(false)) ;

    }

     //reset password
 const handleReset =()=>{
  setIsLoading(true)
    sendPasswordResetEmail(auth, email)
    .then(() => {
      
        alert('Please Check your Email...');
        setError('')
      })
      .catch((error) => {
        setError(error.message)
      })
      .finally(()=> setIsLoading(false))

  }

   // update name
  const setUserName=()=>{
    setIsLoading(true)
    updateProfile(auth.currentUser, {displayName:name})
    .then(() => {
        
      }).catch((error) => {
        setError(error.message)
      })
      .finally(()=> setIsLoading(false));
   }


// google sign in
 const signInGoogle =()=>{
   setIsLoading(true)
   return signInWithPopup(auth, googleProvider)
   
 }


 // google sign out
 const logOut =()=>{
    setIsLoading(true)
   signOut(auth)
   .then((result) => {
       setUser(result)     

     })
     .finally(()=> setIsLoading(false))
}

 // observe user state change
 useEffect(()=>{
   
    const unsubscribed = onAuthStateChanged(auth, user =>{
         if(user){
             setUser(user)
         }
         else{
             setUser({})
         }
       setIsLoading(false)
       
     })
     return ()=> unsubscribed ;
 
 },[])
  return {
      signInGoogle,
      user,
      createRegister,
      loginProcess,
      handleReset,
      setUserName,
      email,
      password,
      setName,
      setEmail,
      setPassword,
      login,
      setLogin,
      setError,
      isLoading,
      logOut,
      error
      

  }


}
export default useFirebase ;