import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";



export const AuthContext = createContext();

export const AuthProvider = ({ children }) => 
{
  const navigate = useNavigate();
  const [user, setUser] = useState(null)
  
  // LOGIN USER
  const loginUser = (username, password) => {
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    })
    .then(res => res.json())
    .then(response => {   
        console.log("Login ", response)
        if (response.logged_in == true) 
        {
         setUser(response);
         navigate("/dashboard")
           Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Logged in successfully!',
            showConfirmButton: false,
            timer: 3000
          })
        } 
        
        else if(response.errors)
        {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: response.errors,
              })
        }
        else
        {
        console.log(response)
        }
    })
    
  };

  // USER REGISTRATION
  const registerUser = (email,username,password) => {
    fetch("/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        username,
        password
       })
    })
    .then(res => res.json())
    .then(response => {
        if (response.status === 200) {
        console.log("Success")
        }
        else if(response.status === 201){
        console.log("Success 1 ")
        } 
        else {
        console.log(username)
        console.log("Something went wrong!");
        }
    })
  };

// LOGOUT USER
  const logoutUser = () => 
  {
    fetch("/logout", {
        method: "DELETE"
      })
      .then(response => {   
        console.log("res ",response)
        if (response.ok) 
          {
            setUser(null);
            navigate("/")
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Logout success',
                showConfirmButton: false,
                timer: 2000
              })
          } 
          else
          {
              Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: "You are already logged out",
                })
          }
        })     
  };

   //   GET USER
   useEffect(()=>{
    fetch("/loggedin")
    .then(res=>res.json())
    .then((res)=>{
		if(res.logged_in==true){
          setUser(res.user)
        }
     
	})
    },[])

// CONTEXT DATA
  const contextData = 
  {
    user,
    registerUser,
    loginUser,
    logoutUser
  };

 
  return (
    <>
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>   
    </>
  );

};





